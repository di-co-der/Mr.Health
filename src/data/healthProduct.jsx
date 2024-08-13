// Healthproduct.jsx

const healthProducts = [
    // Covid Essentials
    {
      id: 1,
      category: 'Covid Essentials',
      name: 'N95 Face Mask',
      image: 'https://www.netmeds.com/images/product-v1/600x600/836427/n95_face_mask_0.jpg',
      MRP: '₹200',
      discount: '10%',
      rating: 4,
      totalRating: 300,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'N95 Face Mask offers superior protection against airborne particles and viruses.',
      ingredients: ['N95 Filter Material'],
      Benefits: 'Provides high filtration efficiency, protects against dust and pathogens, and ensures a snug fit.'
    },
    {
      id: 2,
      category: 'Covid Essentials',
      name: 'Hand Sanitizer Gel',
      image: 'https://www.netmeds.com/images/product-v1/600x600/827323/hand_sanitizer_500_ml_0.jpg',
      MRP: '₹150',
      discount: '15%',
      rating: 4,
      totalRating: 500,
      tags: ["15% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Hand Sanitizer Gel contains alcohol to effectively kill germs and viruses on hands.',
      ingredients: ['Alcohol', 'Glycerin', 'Aloe Vera'],
      Benefits: 'Kills 99.9% of germs, moisturizes skin, and is convenient for on-the-go use.'
    },
    {
      id: 3,
      category: 'Covid Essentials',
      name: 'Digital Thermometer',
      image: 'https://www.netmeds.com/images/product-v1/600x600/846792/digital_thermometer_0.jpg',
      MRP: '₹300',
      discount: '5%',
      rating: 4,
      totalRating: 400,
      tags: ["5% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Digital Thermometer provides quick and accurate temperature readings.',
      ingredients: ['Electronic Components'],
      Benefits: 'Provides precise temperature readings, easy to use, and suitable for all ages.'
    },
    {
      id: 4,
      category: 'Covid Essentials',
      name: 'Pulse Oximeter',
      image: 'https://www.netmeds.com/images/product-v1/600x600/827280/pulse_oximeter_0.jpg',
      MRP: '₹800',
      discount: '10%',
      rating: 4,
      totalRating: 250,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Pulse Oximeter measures blood oxygen levels and heart rate quickly and accurately.',
      ingredients: ['Electronic Components'],
      Benefits: 'Monitors oxygen saturation, measures pulse rate, and is portable for home use.'
    },
    {
      id: 5,
      category: 'Covid Essentials',
      name: 'Face Shield',
      image: 'https://www.netmeds.com/images/product-v1/600x600/844832/face_shield_0.jpg',
      MRP: '₹180',
      discount: '12%',
      rating: 4,
      totalRating: 320,
      tags: ["12% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Face Shield provides additional protection for the face and eyes against droplets and splashes.',
      ingredients: ['Plastic Shield'],
      Benefits: 'Protects face and eyes, prevents direct exposure to droplets, and is comfortable to wear.'
    },
  
    // Skin & Hair Care
    {
      id: 6,
      category: 'Skin & Hair Care',
      name: 'Cetaphil Gentle Skin Cleanser',
      image: 'https://www.netmeds.com/images/product-v1/600x600/827178/cetaphil_gentle_skin_cleanser_500_ml_0.jpg',
      MRP: '₹750',
      discount: '10%',
      rating: 4,
      totalRating: 800,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Cetaphil Gentle Skin Cleanser is designed for sensitive skin and provides a mild, non-irritating cleansing.',
      ingredients: ['Water', 'Cetyl Alcohol', 'Propylene Glycol'],
      Benefits: 'Gentle on skin, removes impurities, and maintains skin’s natural moisture.'
    },
    {
      id: 7,
      category: 'Skin & Hair Care',
      name: 'L’Oreal Paris Revitalift',
      image: 'https://www.netmeds.com/images/product-v1/600x600/821126/loreal_paris_revitalift_repair_10_cream_50_gm_0.jpg',
      MRP: '₹600',
      discount: '15%',
      rating: 4,
      totalRating: 650,
      tags: ["15% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'L’Oreal Paris Revitalift Repair 10 Cream is a powerful anti-aging cream that addresses multiple signs of aging.',
      ingredients: ['Pro-Retinol A', 'Centella Asiatica'],
      Benefits: 'Reduces wrinkles, improves skin texture, and boosts skin’s radiance.'
    },
    {
      id: 8,
      category: 'Skin & Hair Care',
      name: 'Neutrogena Hydro Boost Water Gel',
      image: 'https://www.netmeds.com/images/product-v1/600x600/821126/neutrogena_hydro_boost_water_gel_50_gm_0.jpg',
      MRP: '₹500',
      discount: '10%',
      rating: 4,
      totalRating: 700,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Neutrogena Hydro Boost Water Gel provides intense hydration and keeps the skin looking fresh.',
      ingredients: ['Hyaluronic Acid', 'Glycerin'],
      Benefits: 'Provides long-lasting hydration, improves skin texture, and feels lightweight on the skin.'
    },
    {
      id: 9,
      category: 'Skin & Hair Care',
      name: 'Himalaya Herbals Protein Shampoo',
      image: 'https://www.netmeds.com/images/product-v1/600x600/820742/himalaya_herbals_protein_shampoo_200_ml_0.jpg',
      MRP: '₹200',
      discount: '5%',
      rating: 4,
      totalRating: 600,
      tags: ["5% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Himalaya Herbals Protein Shampoo strengthens hair and promotes healthy growth.',
      ingredients: ['Proteins', 'Herbal Extracts'],
      Benefits: 'Strengthens hair, reduces breakage, and promotes healthy hair growth.'
    },
    {
      id: 10,
      category: 'Skin & Hair Care',
      name: 'Biotique Bio Cucumber Pore Tightening Toner',
      image: 'https://www.netmeds.com/images/product-v1/600x600/821078/biotique_bio_cucumber_pore_tightening_toner_120_ml_0.jpg',
      MRP: '₹190',
      discount: '10%',
      rating: 4,
      totalRating: 500,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Biotique Bio Cucumber Toner tightens pores and refreshes the skin with cucumber extracts.',
      ingredients: ['Cucumber Extract', 'Pineapple Extract'],
      Benefits: 'Tightens pores, refreshes skin, and controls excess oil.'
    },
  
    // Vitamins & Minerals
    {
      id: 11,
      category: 'Vitamins & Minerals',
      name: 'Caltrate Bone Health Tablets',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832355/caltrate_bone_health_tablets_60_s_0.jpg',
      MRP: '₹600',
      discount: '10%',
      rating: 4,
      totalRating: 400,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Caltrate Bone Health Tablets provide essential calcium and vitamin D to support bone health.',
      ingredients: ['Calcium Carbonate', 'Vitamin D3'],
      Benefits: 'Strengthens bones, supports bone health, and improves calcium absorption.'
    },
    {
      id: 12,
      category: 'Vitamins & Minerals',
      name: 'Seven Seas Multivitamins',
      image: 'https://www.netmeds.com/images/product-v1/600x600/821091/seven_seas_multivitamins_60_s_0.jpg',
      MRP: '₹500',
      discount: '15%',
      rating: 4,
      totalRating: 450,
      tags: ["15% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Seven Seas Multivitamins provide a complete range of vitamins and minerals for daily health needs.',
      ingredients: ['Vitamins A, C, D, E', 'Minerals'],
      Benefits: 'Supports overall health, boosts immunity, and enhances energy levels.'
    },
    {
      id: 13,
      category: 'Vitamins & Minerals',
      name: 'A-Z Multivitamin Tablets',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832559/a_z_multivitamin_tablets_30_s_0.jpg',
      MRP: '₹250',
      discount: '5%',
      rating: 4,
      totalRating: 350,
      tags: ["5% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'A-Z Multivitamin Tablets provide essential vitamins and minerals to support daily health.',
      ingredients: ['Vitamins A-Z', 'Minerals'],
      Benefits: 'Enhances general health, supports immunity, and provides daily nutritional support.'
    },
    {
      id: 14,
      category: 'Vitamins & Minerals',
      name: 'D-Vite Vitamin D3 Tablets',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832496/d_vite_vitamin_d3_tablets_60_s_0.jpg',
      MRP: '₹300',
      discount: '10%',
      rating: 4,
      totalRating: 400,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'D-Vite Vitamin D3 Tablets help maintain healthy bones and support immune function.',
      ingredients: ['Vitamin D3'],
      Benefits: 'Supports bone health, enhances immune function, and improves mood.'
    },
    {
      id: 15,
      category: 'Vitamins & Minerals',
      name: 'Nature’s Bounty Vitamin C',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832487/nature_s_bounty_vitamin_c_1000_mg_60_s_0.jpg',
      MRP: '₹400',
      discount: '5%',
      rating: 4,
      totalRating: 300,
      tags: ["5% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Nature’s Bounty Vitamin C supports immune health and provides antioxidant protection.',
      ingredients: ['Vitamin C'],
      Benefits: 'Boosts immune system, provides antioxidant support, and enhances overall health.'
    },
  
    // Sexual Wellness
    {
      id: 16,
      category: 'Sexual Wellness',
      name: 'Durex Condoms',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832374/durex_condoms_10_s_0.jpg',
      MRP: '₹350',
      discount: '10%',
      rating: 4,
      totalRating: 500,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Durex Condoms offer protection and enhance pleasure with various textures and flavors.',
      ingredients: ['Latex'],
      Benefits: 'Provides reliable protection, enhances pleasure, and is easy to use.'
    },
    {
      id: 17,
      category: 'Sexual Wellness',
      name: 'KamaSutra Premium Condoms',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832423/kamasutra_premium_condoms_10_s_0.jpg',
      MRP: '₹320',
      discount: '5%',
      rating: 4,
      totalRating: 400,
      tags: ["5% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'KamaSutra Premium Condoms are designed to offer comfort and pleasure with high-quality latex.',
      ingredients: ['Latex'],
      Benefits: 'Enhances pleasure, ensures safety, and provides comfort during use.'
    },
    {
      id: 18,
      category: 'Sexual Wellness',
      name: 'Himalaya Speman Tablets',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832371/himalaya_speman_tablets_60_s_0.jpg',
      MRP: '₹400',
      discount: '10%',
      rating: 4,
      totalRating: 300,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Himalaya Speman Tablets support male reproductive health and enhance vitality.',
      ingredients: ['Herbal Extracts'],
      Benefits: 'Supports reproductive health, improves vitality, and enhances performance.'
    },
    {
      id: 19,
      category: 'Sexual Wellness',
      name: 'Vigora 50mg Tablets',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832392/vigora_50mg_tablets_10_s_0.jpg',
      MRP: '₹600',
      discount: '5%',
      rating: 4,
      totalRating: 350,
      tags: ["5% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Vigora 50mg Tablets are used to treat erectile dysfunction and improve sexual performance.',
      ingredients: ['Sildenafil Citrate'],
      Benefits: 'Improves sexual performance, treats erectile dysfunction, and enhances satisfaction.'
    },
    {
      id: 20,
      category: 'Sexual Wellness',
      name: 'Feminine Hygiene Wash',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832405/feminine_hygiene_wash_100_ml_0.jpg',
      MRP: '₹200',
      discount: '10%',
      rating: 4,
      totalRating: 250,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Feminine Hygiene Wash helps maintain intimate hygiene and freshness with gentle ingredients.',
      ingredients: ['Natural Extracts', 'Aloe Vera'],
      Benefits: 'Maintains intimate hygiene, reduces odor, and provides freshness.'
    },
  
    // Health Food & Drinks
    {
      id: 21,
      category: 'Health Food & Drinks',
      name: 'Ensure Nutritional Drink',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832382/ensure_nutritional_drink_400_g_0.jpg',
      MRP: '₹600',
      discount: '10%',
      rating: 4,
      totalRating: 350,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Ensure Nutritional Drink provides essential vitamins and minerals to support overall health.',
      ingredients: ['Proteins', 'Vitamins', 'Minerals'],
      Benefits: 'Supports immune health, provides energy, and enhances overall nutrition.'
    },
    {
      id: 22,
      category: 'Health Food & Drinks',
      name: 'GNC Herbal Plus Green Tea',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832487/gnc_herbal_plus_green_tea_100_g_0.jpg',
      MRP: '₹300',
      discount: '15%',
      rating: 4,
      totalRating: 400,
      tags: ["15% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'GNC Herbal Plus Green Tea helps boost metabolism and provides antioxidant support.',
      ingredients: ['Green Tea Extract'],
      Benefits: 'Boosts metabolism, provides antioxidants, and supports overall wellness.'
    },
    {
      id: 23,
      category: 'Health Food & Drinks',
      name: 'Oats & Nuts Breakfast Mix',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832491/oats_nuts_breakfast_mix_500_g_0.jpg',
      MRP: '₹350',
      discount: '10%',
      rating: 4,
      totalRating: 300,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Oats & Nuts Breakfast Mix provides a nutritious and wholesome start to the day with a blend of oats and nuts.',
      ingredients: ['Oats', 'Almonds', 'Cashews'],
      Benefits: 'Provides sustained energy, supports heart health, and is rich in nutrients.'
    },
    {
      id: 24,
      category: 'Health Food & Drinks',
      name: 'Organic Honey',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832494/organic_honey_250_g_0.jpg',
      MRP: '₹400',
      discount: '5%',
      rating: 4,
      totalRating: 250,
      tags: ["5% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Organic Honey is a natural sweetener with various health benefits and a rich flavor.',
      ingredients: ['Honey'],
      Benefits: 'Provides natural sweetness, supports digestion, and offers antioxidant benefits.'
    },
    {
      id: 25,
      category: 'Health Food & Drinks',
      name: 'Whey Protein Isolate',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832506/whey_protein_isolate_1_kg_0.jpg',
      MRP: '₹1500',
      discount: '10%',
      rating: 4,
      totalRating: 300,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Whey Protein Isolate provides a high-quality source of protein to support muscle recovery and growth.',
      ingredients: ['Whey Protein Isolate'],
      Benefits: 'Supports muscle recovery, enhances protein intake, and aids in muscle growth.'
    },
  
    // Baby Care
    {
      id: 26,
      category: 'Baby Care',
      name: 'Johnson’s Baby Lotion',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832373/johnson_s_baby_lotion_200_ml_0.jpg',
      MRP: '₹200',
      discount: '10%',
      rating: 4,
      totalRating: 450,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Johnson’s Baby Lotion is specially designed to keep baby’s skin soft and smooth.',
      ingredients: ['Water', 'Mineral Oil', 'Glycerin'],
      Benefits: 'Moisturizes baby’s skin, prevents dryness, and is hypoallergenic.'
    },
    {
      id: 27,
      category: 'Baby Care',
      name: 'Himalaya Baby Powder',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832386/himalaya_baby_powder_100_g_0.jpg',
      MRP: '₹150',
      discount: '5%',
      rating: 4,
      totalRating: 400,
      tags: ["5% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Himalaya Baby Powder keeps baby’s skin soft and dry with natural ingredients.',
      ingredients: ['Talc', 'Herbal Extracts'],
      Benefits: 'Absorbs moisture, prevents rashes, and keeps skin fresh.'
    },
    {
      id: 28,
      category: 'Baby Care',
      name: 'Mamaearth Baby Shampoo',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832404/mamaearth_baby_shampoo_200_ml_0.jpg',
      MRP: '₹250',
      discount: '10%',
      rating: 4,
      totalRating: 350,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Mamaearth Baby Shampoo is gentle on baby’s hair and eyes, providing a mild and soothing cleanse.',
      ingredients: ['Natural Extracts'],
      Benefits: 'Cleanses hair gently, prevents eye irritation, and is free from harsh chemicals.'
    },
    {
      id: 29,
      category: 'Baby Care',
      name: 'Pampers Baby Diapers',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832391/pampers_baby_diapers_24_s_0.jpg',
      MRP: '₹450',
      discount: '10%',
      rating: 4,
      totalRating: 500,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Pampers Baby Diapers offer superior absorbency and comfort for babies.',
      ingredients: ['Absorbent Core', 'Soft Material'],
      Benefits: 'Provides excellent absorbency, ensures comfort, and prevents leaks.'
    },
    {
      id: 30,
      category: 'Baby Care',
      name: 'Chicco Baby Wipes',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832376/chicco_baby_wipes_72_s_0.jpg',
      MRP: '₹200',
      discount: '10%',
      rating: 4,
      totalRating: 400,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Chicco Baby Wipes are gentle on baby’s skin and effectively clean without irritation.',
      ingredients: ['Water', 'Natural Extracts'],
      Benefits: 'Cleans skin gently, prevents irritation, and is suitable for sensitive skin.'
    },
  
    // Health care Devices
    {
      id: 31,
      category: 'Health care Devices',
      name: 'Omron Digital Blood Pressure Monitor',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832397/omron_digital_blood_pressure_monitor_1.jpg',
      MRP: '₹1500',
      discount: '10%',
      rating: 4,
      totalRating: 300,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Omron Digital Blood Pressure Monitor provides accurate readings and easy operation.',
      ingredients: ['Electronic Components'],
      Benefits: 'Measures blood pressure accurately, easy to use, and provides quick results.'
    },
    {
      id: 32,
      category: 'Health care Devices',
      name: 'Philips Sonicare Electric Toothbrush',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832504/philips_sonicare_electric_toothbrush_0.jpg',
      MRP: '₹3000',
      discount: '15%',
      rating: 4,
      totalRating: 250,
      tags: ["15% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Philips Sonicare Electric Toothbrush provides superior cleaning and oral care with advanced technology.',
      ingredients: ['Electronic Components'],
      Benefits: 'Cleans teeth more effectively, improves gum health, and provides a comfortable brushing experience.'
    },
    {
      id: 33,
      category: 'Health care Devices',
      name: 'Fitbit Charge 4',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832391/fitbit_charge_4_0.jpg',
      MRP: '₹8000',
      discount: '10%',
      rating: 4,
      totalRating: 300,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Fitbit Charge 4 tracks your fitness activities, heart rate, and sleep patterns with precision.',
      ingredients: ['Electronic Components'],
      Benefits: 'Tracks fitness metrics, monitors heart rate, and provides insights into sleep patterns.'
    },
    {
      id: 34,
      category: 'Health care Devices',
      name: 'Breast Pump',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832382/breast_pump_0.jpg',
      MRP: '₹2500',
      discount: '10%',
      rating: 4,
      totalRating: 200,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Breast Pump provides a convenient way to express milk and support breastfeeding.',
      ingredients: ['Plastic Components'],
      Benefits: 'Facilitates milk expression, supports breastfeeding, and is easy to use.'
    },
    {
      id: 35,
      category: 'Health care Devices',
      name: 'Nebulizer',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832406/nebulizer_0.jpg',
      MRP: '₹3500',
      discount: '5%',
      rating: 4,
      totalRating: 300,
      tags: ["5% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Nebulizer helps in delivering medication directly to the lungs for effective respiratory treatment.',
      ingredients: ['Electronic Components'],
      Benefits: 'Delivers medication effectively, easy to use, and aids in respiratory conditions.'
    },
  
    // Diabetic Care
    {
      id: 36,
      category: 'Diabetic Care',
      name: 'Glucometer',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832397/glucometer_0.jpg',
      MRP: '₹1000',
      discount: '10%',
      rating: 4,
      totalRating: 300,
      tags: ["10% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Glucometer measures blood glucose levels for effective diabetes management.',
      ingredients: ['Electronic Components'],
      Benefits: 'Provides accurate blood glucose readings, easy to use, and supports diabetes management.'
    },
    {
      id: 37,
      category: 'Diabetic Care',
      name: 'Diabetic Foot Cream',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832388/diabetic_foot_cream_100_g_0.jpg',
      MRP: '₹350',
      discount: '5%',
      rating: 4,
      totalRating: 400,
      tags: ["5% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Diabetic Foot Cream helps in maintaining healthy feet and preventing dryness and cracks.',
      ingredients: ['Urea', 'Aloe Vera'],
      Benefits: 'Prevents foot dryness, soothes skin, and supports foot health.'
    },
    {
      id: 38,
      category: 'Diabetic Care',
      name: 'Diabetes Care Tablets',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832396/diabetes_care_tablets_60_s_0.jpg',
      MRP: '₹500',
      discount: '10%',
      rating: 4,
      totalRating: 350,
      tags: ["10% off", "Delivery within 2 Days", "PLUS"],
      ProductDescription: 'Diabetes Care Tablets support blood sugar control and improve overall health.',
      ingredients: ['Herbal Extracts'],
      Benefits: 'Supports blood sugar control, enhances overall health, and aids in diabetes management.'
    },
    {
      id: 39,
      category: 'Diabetic Care',
      name: 'Low GI Diabetic Snacks',
      image: 'https://www.netmeds.com/images/product-v1/600x600/832381/low_gi_diabetic_snacks_200_g_0.jpg',
      MRP: '₹250',
      discount: '5%',
      rating: 4,
      totalRating: 300,
      tags: ["5% off", "Delivery within 2 Days", "Clinic"],
      ProductDescription: 'Low GI Diabetic Snacks are designed to support blood sugar management with a low glycemic index.',
      ingredients: ['Whole Grains', 'Nuts'],
      Benefits: 'Supports blood sugar control, provides sustained energy, and is low in glycemic index.'
    },
      // Protein & Supplements
  {
    id: 40,
    category: 'Protein & Supplements',
    name: 'Optimum Nutrition Whey Protein',
    image: 'https://www.netmeds.com/images/product-v1/600x600/832509/optimum_nutrition_whey_protein_2_lbs_0.jpg',
    MRP: '₹3000',
    discount: '10%',
    rating: 4,
    totalRating: 500,
    tags: ["10% off", "Delivery within 2 Days", "Clinic"],
    ProductDescription: 'Optimum Nutrition Whey Protein provides high-quality protein to support muscle growth and recovery.',
    ingredients: ['Whey Protein Isolate', 'Whey Protein Concentrate'],
    Benefits: 'Supports muscle growth, aids in recovery, and enhances protein intake.'
  },
  {
    id: 41,
    category: 'Protein & Supplements',
    name: 'MuscleBlaze Whey Protein',
    image: 'https://www.netmeds.com/images/product-v1/600x600/832485/muscleblaze_whey_protein_1_kg_0.jpg',
    MRP: '₹2500',
    discount: '15%',
    rating: 4,
    totalRating: 400,
    tags: ["15% off", "Delivery within 2 Days", "PLUS"],
    ProductDescription: 'MuscleBlaze Whey Protein provides essential amino acids and supports muscle recovery and growth.',
    ingredients: ['Whey Protein Isolate', 'Whey Protein Concentrate'],
    Benefits: 'Enhances muscle growth, supports recovery, and provides essential nutrients.'
  },
  {
    id: 42,
    category: 'Protein & Supplements',
    name: 'MyProtein Impact Whey',
    image: 'https://www.netmeds.com/images/product-v1/600x600/832487/myprotein_impact_whey_protein_1_kg_0.jpg',
    MRP: '₹2700',
    discount: '10%',
    rating: 4,
    totalRating: 350,
    tags: ["10% off", "Delivery within 2 Days", "Clinic"],
    ProductDescription: 'MyProtein Impact Whey offers a high-quality source of protein for muscle building and recovery.',
    ingredients: ['Whey Protein Concentrate'],
    Benefits: 'Supports muscle growth, aids in recovery, and provides high-quality protein.'
  },
  {
    id: 43,
    category: 'Protein & Supplements',
    name: 'GNC Pro Performance Whey Protein',
    image: 'https://www.netmeds.com/images/product-v1/600x600/832492/gnc_pro_performance_whey_protein_2_lbs_0.jpg',
    MRP: '₹3200',
    discount: '10%',
    rating: 4,
    totalRating: 300,
    tags: ["10% off", "Delivery within 2 Days", "PLUS"],
    ProductDescription: 'GNC Pro Performance Whey Protein provides a blend of whey protein concentrate and isolate to support muscle growth.',
    ingredients: ['Whey Protein Concentrate', 'Whey Protein Isolate'],
    Benefits: 'Enhances muscle growth, supports recovery, and provides high-quality protein.'
  },
  {
    id: 44,
    category: 'Protein & Supplements',
    name: 'HealthKart HK Vitals Whey Protein',
    image: 'https://www.netmeds.com/images/product-v1/600x600/832484/healthkart_hk_vitals_whey_protein_1_kg_0.jpg',
    MRP: '₹2800',
    discount: '5%',
    rating: 4,
    totalRating: 350,
    tags: ["5% off", "Delivery within 2 Days", "Clinic"],
    ProductDescription: 'HealthKart HK Vitals Whey Protein offers a rich source of protein to support muscle growth and overall health.',
    ingredients: ['Whey Protein Concentrate', 'Whey Protein Isolate'],
    Benefits: 'Supports muscle growth, aids in recovery, and enhances protein intake.'
  }
  ]
  