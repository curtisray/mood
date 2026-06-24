(function () {
  var DOMAIN = 'c2pyvu-yc.myshopify.com';
  var TOKEN  = 'd1a00db7b57e867045350c660ce9d910';
  var PRODUCT_GID = 'gid://shopify/Product/10473552052405';
  var API = 'https://' + DOMAIN + '/api/2024-01/graphql.json';

  // Each plan maps to its own variant + selling plan combo.
  // variantMatch: a substring to find the right variant by title (case-insensitive).
  // sellingPlanId: numeric selling plan ID, or null for a one-time purchase.
  var PLAN_CONFIG = {
    0: { variantMatch: 'Monthly',   sellingPlanId: null,          value: 48.89 }, // one-time
    1: { variantMatch: 'Monthly',   sellingPlanId: '2725085365', value: 38.89 }, // Monthly, $10 off
    2: { variantMatch: 'Quarterly', sellingPlanId: '2725118133', value: 86.87 }, // Quarterly, $20 off
  };

  var variantsByTitle = {}; // lowercased title substring → variant GID
  var selectedPlan = 1; // default to monthly, matches the pre-selected card

  function storefront(query, variables) {
    return fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': TOKEN,
      },
      body: JSON.stringify({ query: query, variables: variables || {} }),
    }).then(function (r) { return r.json(); });
  }

  function fetchVariants() {
    return storefront(
      'query GetProduct($id: ID!) {' +
      '  product(id: $id) {' +
      '    variants(first: 20) { edges { node { id title } } }' +
      '  }' +
      '}',
      { id: PRODUCT_GID }
    ).then(function (data) {
      var edges = data.data && data.data.product && data.data.product.variants.edges;
      return edges ? edges.map(function (e) { return e.node; }) : [];
    });
  }

  function findVariantId(matchStr) {
    var needle = matchStr.toLowerCase();
    for (var title in variantsByTitle) {
      if (title.indexOf(needle) !== -1) return variantsByTitle[title];
    }
    return null;
  }

  function createCheckout(variantId, sellingPlanNumericId) {
    var lineFields = 'merchandiseId: $variantId, quantity: 1';
    var queryHead = 'mutation CartCreate($variantId: ID!';
    var variables = { variantId: variantId };

    if (sellingPlanNumericId) {
      queryHead += ', $sellingPlanId: ID';
      lineFields += ', sellingPlanId: $sellingPlanId';
      variables.sellingPlanId = 'gid://shopify/SellingPlan/' + sellingPlanNumericId;
    }

    var query =
      queryHead + ') {' +
      '  cartCreate(input: { lines: [{ ' + lineFields + ' }] }) {' +
      '    cart { checkoutUrl }' +
      '    userErrors { field message }' +
      '  }' +
      '}';

    return storefront(query, variables).then(function (data) {
      var result = data.data && data.data.cartCreate;
      if (result && result.userErrors && result.userErrors.length) {
        console.error('Shopify cart error:', result.userErrors);
        return null;
      }
      return result && result.cart ? result.cart.checkoutUrl : null;
    });
  }

  function setSelectedPlan(plan) {
    selectedPlan = plan;
    document.querySelectorAll('.plan-card').forEach(function (c) {
      c.dataset.selected = (parseInt(c.dataset.plan, 10) === plan) ? 'true' : 'false';
    });
  }

  function init() {
    var btn = document.getElementById('checkout-btn');
    if (!btn) return;

    fetchVariants().then(function (variants) {
      variants.forEach(function (v) {
        variantsByTitle[v.title.toLowerCase()] = v.id;
      });
    });

    document.querySelectorAll('.plan-card').forEach(function (card) {
      card.addEventListener('click', function () {
        setSelectedPlan(parseInt(card.dataset.plan, 10));
      });
    });

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (btn.dataset.loading === 'true') return;

      var config = PLAN_CONFIG[selectedPlan];
      var variantId = findVariantId(config.variantMatch);

      if (!variantId) {
        console.error('Could not resolve variant for plan', selectedPlan, '— variants loaded:', variantsByTitle);
        return;
      }

      var originalText = btn.textContent;
      btn.dataset.loading = 'true';
      btn.textContent = 'Redirecting…';

      if (typeof fbq === 'function') {
        fbq('track', 'InitiateCheckout', {
          value: config.value,
          currency: 'USD',
          content_ids: [variantId],
          content_type: 'product',
          num_items: 1,
        });
      }

      createCheckout(variantId, config.sellingPlanId).then(function (url) {
        if (url) {
          var fbclid = new URLSearchParams(window.location.search).get('fbclid');
          if (fbclid) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + 'fbclid=' + encodeURIComponent(fbclid);
          }
          window.location.href = url;
        } else {
          btn.textContent = originalText;
          btn.dataset.loading = 'false';
        }
      }).catch(function (err) {
        console.error('Checkout error:', err);
        btn.textContent = originalText;
        btn.dataset.loading = 'false';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
