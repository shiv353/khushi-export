export type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    name: "Spices",
    category: "Spices",
    description:
      "Premium whole and ground spices, carefully sourced for rich flavour, vibrant colour, and consistent quality.",
    image: "/images/spices.avif",
    alt: "An assortment of Indian spices",
  },
  {
    name: "Grains",
    category: "Grains",
    description:
      "Quality grains selected for purity, freshness, and nutritional value, ideal for food manufacturers and bulk buyers.",
    image: "/images/grains.avif",
    alt: "Assorted grains",
  },
  {
    name: "Pulses",
    category: "Pulses",
    description:
      "Carefully selected pulses rich in protein and natural goodness, offering consistent quality for everyday cooking and food processing.",
    image: "/images/pulses.avif",
    alt: "Assorted pulses",
  },
];

export const productCategories = [
  "All products",
  "Whole spices",
  "Ground & whole",
  "Seeds & aromatics",
  "Specialty spices",
];

export const catalogProducts: Product[] = [
  { name: "Turmeric", category: "Spices", description: "Golden turmeric selected for its vibrant colour, warm aroma and dependable quality.", image: "/images/turmeric.jpg", alt: "Golden turmeric roots and powder" },
  { name: "Red Chilli", category: "Spices", description: "Dried red chillies with bold colour and a distinctive, balanced heat.", image: "/images/chilli.jpg", alt: "Dried red Indian chillies" },
  { name: "Black Pepper", category: "Spices", description: "Aromatic peppercorns with a sharp, warming flavour for global food markets.", image: "/images/pepper.jpg", alt: "Black peppercorns" },
  { name: "Green Cardamom", category: "Spices", description: "Fragrant green pods prized for their sweet, complex aroma.", image: "/images/cardamom.jpg", alt: "Green cardamom pods" },
  { name: "Cumin", category: "Spices", description: "Earthy, aromatic cumin seeds, carefully sourced for consistent character.", image: "/images/cumin.jpg", alt: "Cumin seeds in a rustic bowl" },
  { name: "Coriander", category: "Spices", description: "Warm, citrusy coriander seeds suitable for whole spice and grinding use.", image: "/images/coriander.jpg", alt: "Coriander seeds" },
  { name: "Fennel", category: "Spices", description: "Sweetly aromatic fennel seeds selected for freshness and clean flavour.", image: "/images/fennel.jpg", alt: "Fennel seeds" },
  { name: "Cloves", category: "Spices", description: "Rich, intensely aromatic cloves for spice blends and food preparations.", image: "/images/cloves.jpg", alt: "Whole cloves" },
  { name: "Cinnamon", category: "Spices", description: "Warm, sweet cinnamon with a familiar fragrance for diverse applications.", image: "/images/cinnamon.avif", alt: "Cinnamon sticks" },
  { name: "Fenugreek", category: "Spices", description: "Aromatic fenugreek seeds valued for their warm, earthy flavour in culinary applications.", image: "/images/Fenugreek.webp", alt: "Fenugreek seeds" },
  { name: "Black Mustard", category: "Spices", description: "Sharp, pungent black mustard seeds for seasoning, pickling and spice blends.", image: "/images/Black%20Mustard.avif", alt: "Black mustard seeds" },
  { name: "Yellow Mustard", category: "Spices", description: "Mild yellow mustard seeds suitable for condiments, pickles and food processing.", image: "/images/Yellow%20Mustard.jpg", alt: "Yellow mustard seeds" },
  { name: "Chickpeas", category: "Pulses", description: "Nutritious chickpeas selected for consistent size, quality and dependable bulk supply.", image: "/images/Chickpeas.avif", alt: "Chickpeas" },
  { name: "Pigeon Peas (Toor Dal / Arhar Dal)", category: "Pulses", description: "Pigeon peas for traditional cooking and food processing, sourced with consistent quality.", image: "/images/Toor%20Dal.webp", alt: "Pigeon peas or toor dal" },
  { name: "Red Lentils (Masoor Dal)", category: "Pulses", description: "Red lentils selected for clean appearance, cooking quality and reliable supply.", image: "/images/Masoor%20Dal.jpg", alt: "Red lentils or masoor dal" },
  { name: "Green Gram (Moong Dal)", category: "Pulses", description: "Green gram pulses valued for freshness, nutrition and versatile culinary use.", image: "/images/Moong%20Dal.jpg", alt: "Green gram or moong dal" },
  { name: "Black Gram (Urad Dal)", category: "Pulses", description: "Black gram pulses with consistent quality for traditional foods and food processing.", image: "/images/Urad%20Dal.webp", alt: "Black gram or urad dal" },
  { name: "Basmati Rice", category: "Grains", description: "Long-grain aromatic basmati rice with consistent cooking quality for domestic and global markets.", image: "/images/Basmati%20Rice.avif", alt: "Basmati rice" },
  { name: "Non-Basmati Rice", category: "Grains", description: "Quality non-basmati rice varieties selected for dependable supply and versatile use.", image: "/images/Non-Basmati%20Rice.jpeg", alt: "Non-basmati rice" },
  { name: "Wheat", category: "Grains", description: "Quality wheat grains sourced for milling, food production and bulk trade requirements.", image: "/images/Wheat.webp", alt: "Wheat grain" },
  { name: "Maize (Corn)", category: "Grains", description: "Clean maize kernels selected for feed, food processing and international trade.", image: "/images/Corn.jpeg", alt: "Maize corn grain" },
  { name: "Pearl Millet (Bajra)", category: "Grains", description: "Nutritious pearl millet supplied with consistent quality for food and processing needs.", image: "/images/Bajra.webp", alt: "Pearl millet or bajra" },
  { name: "Sorghum (Jowar)", category: "Grains", description: "Sorghum grains suitable for food products, milling and dependable bulk supply.", image: "/images/Jowar.webp", alt: "Sorghum or jowar" },
  { name: "Finger Millet (Ragi)", category: "Grains", description: "Nutritious finger millet grains for traditional foods and value-added processing.", image: "/images/Ragi.jpeg", alt: "Finger millet or ragi" },
];
