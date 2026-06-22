# Vaginal Probiotic Brand Knowledge Base

AI training document for product, claims, ingredients, compliance, audience, and messaging. Not medical or legal advice.

## Executive summary

- Product category: women’s vaginal-health dietary supplement sold as oral capsules. Core formula shown: probiotic blend + Xylooligosaccharides (XOS) prebiotic + cranberry powder.
- Main consumer promise: support normal vaginal flora, private-area pH balance, odor comfort, yeast/microbiome balance, moisture/comfort, and urinary-tract wellness support.
- Regulatory posture: this should be marketed as a dietary supplement with structure/function support language, not as a drug that treats bacterial vaginosis, yeast infection, UTI, odor disorders, or any disease.
- Evidence snapshot: Lactobacillus-dominant vaginal microbiota is associated with vaginal health. Some probiotic research is promising, but clinical evidence is strain-specific and inconsistent. Cranberry has better evidence for reducing risk of recurrent UTIs in select populations, but FDA-qualified language emphasizes limited evidence. XOS supports gut bifidobacteria/prebiotic activity; direct vaginal-health evidence is indirect.
- Critical launch task: verify actual strain IDs, CFU at end of shelf life, cranberry PAC content, XOS dose, allergen status, cGMP documentation, Certificate of Analysis, and whether the product is a private-label/generic existing product that can be legally rebranded.

## Product information extracted from images

- **Visible brand on sample:** Quit Mood
- **Product name:** Vaginal Probiotic / Vaginal Probiotic Capsules
- **Dosage form:** Capsules / vegetarian capsules
- **Count:** 60 capsules; label says serving size 2 capsules and 30 servings per container
- **Front label ingredients:** Women’s Probiotic Complex; Xylooligosaccharides (XOS); Cranberry Powder
- **Supplement facts shown:** Women’s Probiotic Complex: 100 mg (5 billion CFU). XOS: 300 mg. Cranberry Powder: 100 mg. Daily Value not established.
- **Probiotic strains visible:** Lactobacillus acidophilus, L. rhamnosus, L. reuteri, L. fermentum, Bacillus coagulans
- **Other ingredients shown:** Cellulose (vegetarian capsule); natural color
- **Claim language visible:** Hydrate, balance and eliminate odor; private pH levels; private odor; yeast balance; private flora; moisture & comfort; urinary comfort; probiotic power; “5 in 1 Plus”.
- **Visual positioning:** Pink feminine wellness aesthetic: flowers, soft bokeh, bright red type, clinical supplement-facts panel, capsule-in-hand imagery.

## Ingredient facts

- **Probiotic blend:** 100 mg / 5B CFU per 2 capsules - supports normal microbiome balance; exact strain IDs needed
- **XOS:** 300 mg per 2 capsules - prebiotic support; direct vaginal-health evidence is indirect
- **Cranberry powder:** 100 mg per 2 capsules - urinary wellness support; do not use FDA 500 mg qualified claim unless formulation matches

## Safe claim language

- Supports healthy vaginal flora.*
- Helps maintain normal feminine pH balance.*
- Supports daily feminine freshness and confidence.*
- Probiotic + prebiotic + cranberry formula for women’s intimate wellness.*

## Avoid claims

- Treats BV, yeast infections, UTIs, Candida, vaginitis, or odor disorders.
- Eliminates odor guaranteed.
- Replaces antibiotics or medical care.

## AI response rules

- **Never diagnose.** Do not tell a customer they have BV, yeast infection, UTI, STI, or any medical condition.
- **Redirect symptoms to care.** For burning, pain, fever, pelvic pain, blood in urine, pregnancy, unusual discharge, strong fishy odor, recurrent symptoms, or possible STI exposure: advise contacting a healthcare professional.
- **Use support language.** Say “supports,” “helps maintain,” “designed to support,” and “part of a daily wellness routine.”
- **Do not promise outcomes.** Avoid “will eliminate odor,” “stops UTIs,” “prevents yeast infections,” or “fixes pH.”
- **Be transparent about evidence.** Explain that probiotic benefits are strain-specific and that cranberry evidence is limited and prevention-focused, not treatment-focused.
- **Stay brand-safe.** Use an approachable, non-shaming tone. Avoid making customers feel dirty, infected, or abnormal.

## Structured JSON schema
```json
{
  "category": "women's vaginal-health dietary supplement",
  "format": "oral capsules",
  "serving_size": "2 capsules",
  "servings_per_container": 30,
  "capsule_count": 60,
  "active_ingredients_from_images": [
    {"name":"Women's Probiotic Complex", "amount":"100 mg", "potency":"5 billion CFU", "strains_visible":["Lactobacillus acidophilus", "Lactobacillus rhamnosus", "Lactobacillus reuteri", "Lactobacillus fermentum", "Bacillus coagulans"]},
    {"name":"Xylooligosaccharides (XOS)", "amount":"300 mg"},
    {"name":"Cranberry Powder", "amount":"100 mg"}
  ],
  "primary_benefit_language": ["supports healthy vaginal flora", "helps maintain normal pH balance", "supports feminine freshness", "supports urinary wellness"],
  "do_not_claim": ["treats BV", "cures yeast infection", "prevents UTI", "eliminates odor guaranteed", "replaces antibiotics"],
  "medical_escalation": ["pain", "burning", "fever", "pelvic pain", "blood in urine", "pregnancy", "recurrent infections", "possible STI", "unusual discharge"],
  "regulatory_status": "dietary supplement; structure/function claims only unless reviewed by counsel"
}
```


## Sources

- NIH Office of Dietary Supplements - Probiotics Fact Sheet for Health Professionals: https://ods.od.nih.gov/factsheets/Probiotics-HealthProfessional/
- CDC STI Treatment Guidelines - Bacterial Vaginosis: https://www.cdc.gov/std/treatment-guidelines/bv.htm
- Cochrane Review on PMC - Cranberries for preventing urinary tract infections: https://pmc.ncbi.nlm.nih.gov/articles/PMC10108827/
- FDA - Qualified Health Claim for Cranberry Products and UTIs: https://www.fda.gov/food/hfp-constituent-updates/fda-announces-qualified-health-claim-certain-cranberry-products-and-urinary-tract-infections
- PubMed - Xylooligosaccharide increases bifidobacteria but not lactobacilli in human gut microbiota: https://pubmed.ncbi.nlm.nih.gov/24513849/
- FDA - Structure/Function Claims: https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/structurefunction-claims
- FDA - Structure/Function Claim Notifications for Dietary Supplement Labeling: https://www.fda.gov/food/information-industry-dietary-supplements/notifications-structurefunction-and-related-claims-dietary-supplement-labeling
- FTC - Health Products Compliance Guidance: https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
- FDA - Dietary Supplement cGMP Small Entity Compliance Guide: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/small-entity-compliance-guide-current-good-manufacturing-practice-manufacturing-packaging-labeling
- FDA - Dietary Supplement Labeling Guide, Nutrition Labeling: https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-iv-nutrition-labeling
- Amazon listing observed for Quit Mood Probiotics for Women: https://www.amazon.com/Quit-mood-Probiotics-Prebiotics-Cranberry/dp/B0DRFL3SL1
- SHEIN listing observed for Quit Mood Vaginal Probiotic Capsules: https://us.shein.com/Quit-Mood-Vaginal-Probiotic-Capsules-For-Women-60-Count-Supports-Feminine-Health-PH-Balance-Odor-Control-With-Cranberry-Powder-XOS-Prebiotics-To-Maintain-Vaginal-Flora-Balance-p-381873655.html