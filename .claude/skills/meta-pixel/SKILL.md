---
name: meta-pixel-events
description: >
  Manually add Meta Pixel (Facebook Pixel) standard and custom events to a webpage using JavaScript code. Use this skill whenever a user wants to track conversions, user actions, or ad performance on their website using Meta/Facebook Pixel — even if they only mention "Facebook tracking", "pixel events", "conversion tracking", "add to cart tracking", or "Meta ads data". Covers base code installation, all 17 standard events with parameters, custom events, button/click event tracking, page-load event tracking, and verification steps. Always use this skill when Meta Pixel, Facebook Pixel, fbq(), or conversion tracking code is involved.
---

# Meta Pixel Events — Manual Implementation

This skill covers everything needed to manually add Meta Pixel event tracking to a webpage via code, including base code setup, all standard events, custom events, and verification.

---

## Step 0 — Prerequisites

Before adding events, confirm:
1. The user has a **Pixel ID** (15–16 digit number found in Meta Events Manager → Data Sources → select pixel → Settings tab)
2. The **base pixel code** is installed on every page (see Step 1 below)

---

## Step 1 — Install the Base Pixel Code

If not already installed, paste this into the `<head>` section of **every page**, replacing `YOUR_PIXEL_ID`:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->
```

> The `<noscript>` tag fires a fallback PageView for users with JavaScript disabled.  
> `PageView` fires automatically with this base code on every page load — no extra code needed.

---

## Step 2 — Add Standard Events

Standard events use `fbq('track', 'EventName')` and enable Meta's optimization and reporting features.

### Placement rules
- **Page-load events** (ViewContent, Purchase, CompleteRegistration, Lead, etc.): Place the `fbq('track', ...)` call in a `<script>` tag just before `</body>` on the relevant page — or anywhere after the base code.
- **Click/interaction events** (AddToCart, InitiateCheckout, etc.): Use JavaScript event listeners (see Step 3).

### All 17 Standard Events

| Event | When to fire | Code snippet |
|-------|-------------|--------------|
| **PageView** | Every page load | Fires automatically with base code |
| **ViewContent** | Product/content detail page viewed | `fbq('track', 'ViewContent', {content_ids: ['SKU123'], content_type: 'product', value: 29.99, currency: 'USD'})` |
| **Search** | Site search performed | `fbq('track', 'Search', {search_string: 'blue shoes'})` |
| **AddToCart** | Item added to cart | `fbq('track', 'AddToCart', {content_ids: ['SKU123'], content_type: 'product', value: 29.99, currency: 'USD'})` |
| **AddToWishlist** | Item saved/favourited | `fbq('track', 'AddToWishlist', {content_ids: ['SKU123'], value: 29.99, currency: 'USD'})` |
| **InitiateCheckout** | Checkout process started | `fbq('track', 'InitiateCheckout', {num_items: 2, value: 59.98, currency: 'USD'})` |
| **AddPaymentInfo** | Payment details entered | `fbq('track', 'AddPaymentInfo', {value: 59.98, currency: 'USD'})` |
| **Purchase** | Order confirmed | `fbq('track', 'Purchase', {value: 59.98, currency: 'USD', content_ids: ['SKU123'], content_type: 'product'})` |
| **Lead** | Lead form submitted | `fbq('track', 'Lead', {value: 0, currency: 'USD', content_name: 'Free Quote Form'})` |
| **CompleteRegistration** | Account or newsletter signup | `fbq('track', 'CompleteRegistration', {status: 'registered'})` |
| **Contact** | Contact form submitted | `fbq('track', 'Contact')` |
| **CustomizeProduct** | Product customiser used | `fbq('track', 'CustomizeProduct', {content_ids: ['SKU123']})` |
| **Donate** | Donation completed | `fbq('track', 'Donate', {value: 25.00, currency: 'USD'})` |
| **FindLocation** | Store locator used | `fbq('track', 'FindLocation')` |
| **Schedule** | Appointment booked | `fbq('track', 'Schedule')` |
| **StartTrial** | Free trial started | `fbq('track', 'StartTrial', {value: 0, currency: 'USD', predicted_ltv: 120.00})` |
| **Subscribe** | Paid subscription started | `fbq('track', 'Subscribe', {value: 9.99, currency: 'USD', predicted_ltv: 120.00})` |

> **`value` and `currency` are required for Purchase.** They are strongly recommended for all commerce events.  
> `content_ids` must be an array (e.g. `['SKU123']`), even for a single item.

---

## Step 3 — Tracking Button Clicks and Interactions

For events triggered by user interactions (clicks, form submissions), attach JavaScript event listeners **after** the base pixel code has loaded.

### Add to Cart button example

```html
<button id="add-to-cart-btn">Add to Cart</button>

<script>
document.getElementById('add-to-cart-btn').addEventListener('click', function() {
  fbq('track', 'AddToCart', {
    content_ids: ['SKU123'],
    content_type: 'product',
    value: 29.99,
    currency: 'USD'
  });
});
</script>
```

### Tracking multiple buttons by class

```html
<script>
document.querySelectorAll('.add-to-cart').forEach(function(btn) {
  btn.addEventListener('click', function() {
    fbq('track', 'AddToCart', {
      content_ids: [this.dataset.productId],  // Use data-product-id attribute
      content_type: 'product',
      value: parseFloat(this.dataset.price),
      currency: 'USD'
    });
  });
});
</script>
```

### Form submission example (Lead)

```html
<script>
document.getElementById('contact-form').addEventListener('submit', function() {
  fbq('track', 'Lead');
});
</script>
```

---

## Step 4 — Custom Events

Use `fbq('trackCustom', ...)` for actions that don't fit any standard event category.

```javascript
// Track a video play
document.getElementById('demo-video').addEventListener('play', function() {
  fbq('trackCustom', 'VideoPlay', {
    video_name: 'Product Demo',
    page: window.location.pathname
  });
});

// Track scroll depth (75%)
var scrollFired = false;
window.addEventListener('scroll', function() {
  if (!scrollFired && window.scrollY > document.body.scrollHeight * 0.75) {
    scrollFired = true;
    fbq('trackCustom', 'ScrollDepth75', { page: window.location.pathname });
  }
});
```

> To use custom events for campaign optimization, convert them to Custom Conversions in:  
> **Events Manager → Custom Conversions → Create Custom Conversion → select your event**

---

## Step 5 — Parameters Reference

Parameters enrich event data for audience building and dynamic ads. Pass them as the third argument to `fbq('track', ...)`.

| Parameter | Type | Description |
|-----------|------|-------------|
| `content_ids` | array | Product IDs — must match your Meta catalog (e.g. `['SKU123']`) |
| `content_type` | string | `'product'` or `'product_group'` |
| `value` | number | Monetary value of the event (e.g. `29.99`) |
| `currency` | string | ISO 4217 currency code (e.g. `'USD'`, `'GBP'`) |
| `num_items` | number | Number of items (for InitiateCheckout) |
| `search_string` | string | Search query entered by the user |
| `status` | string | Registration status: `'registered'` or `'not_registered'` |
| `content_name` | string | Name of the page or product |
| `predicted_ltv` | number | Predicted lifetime value of subscriber (for Subscribe/StartTrial) |
| `order_id` | string | Unique order ID — used for deduplication with Conversions API |
| `event_id` | string | Unique event ID — required for CAPI deduplication |

---

## Step 6 — Verification

### Option A: Meta Pixel Helper (Chrome extension)
1. Install "Meta Pixel Helper" from the Chrome Web Store
2. Visit the page where you added events
3. Perform the tracked action (click button, load page, submit form)
4. The extension icon will show which events fired and any errors

### Option B: Events Manager Test Events
1. Go to **Meta Events Manager → your pixel → Test Events tab**
2. Enter your website URL
3. Perform the tracked action
4. Events appear in real-time with full parameter values

### Common issues to check
- `fbq is not defined` — Base pixel code not loaded before the event code
- Event fires on wrong page — Check placement; page-load events fire immediately on script execution
- Duplicate Purchase events — Add `order_id` parameter and implement event deduplication with CAPI
- Parameters missing in Events Manager — Wait up to 20 minutes after setup; parameters can lag

---

## Quick Reference: Placement Cheatsheet

| Scenario | Where to put the code |
|---------|----------------------|
| Base pixel code | `<head>` on every page |
| Page-load event (e.g. Purchase on confirmation page) | `<script>` tag anywhere after the base code, before `</body>` |
| Button click event | `addEventListener('click', ...)` in a `<script>` after the element exists |
| Form submit event | `addEventListener('submit', ...)` in a `<script>` after the form element |

---

## iOS 14+ / AEM Note

Under Apple's App Tracking Transparency (ATT) and Meta's Aggregated Event Measurement (AEM), only **8 events per domain** can be prioritized for optimization. Prioritize your most important conversion events in:

**Events Manager → your pixel → Aggregated Event Measurement → Configure Web Events**

Rank your events in order of importance (e.g. Purchase #1, Lead #2, InitiateCheckout #3...).
