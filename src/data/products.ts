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
    image: "/images/turmeric.jpg",
    alt: "Golden turmeric roots and powder",
  },
  {
    name: "Grains",
    category: "Grains",
    description:
      "Quality grains selected for purity, freshness, and nutritional value, ideal for food manufacturers and bulk buyers.",
    image: "/images/chilli.jpg",
    alt: "Dried red Indian chillies",
  },
  {
    name: "Pulses",
    category: "Pulses",
    description:
      "Carefully selected pulses rich in protein and natural goodness, offering consistent quality for everyday cooking and food processing.",
    image: "/images/cumin.jpg",
    alt: "Cumin seeds in a rustic bowl",
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
  { name: "Turmeric", category: "Whole spices", description: "Golden turmeric selected for its vibrant colour, warm aroma and dependable quality.", image: "/images/turmeric.jpg", alt: "Golden turmeric roots and powder" },
  { name: "Red Chilli", category: "Whole spices", description: "Dried red chillies with bold colour and a distinctive, balanced heat.", image: "/images/chilli.jpg", alt: "Dried red Indian chillies" },
  { name: "Black Pepper", category: "Whole spices", description: "Aromatic peppercorns with a sharp, warming flavour for global food markets.", image: "/images/pepper.jpg", alt: "Black peppercorns" },
  { name: "Green Cardamom", category: "Whole spices", description: "Fragrant green pods prized for their sweet, complex aroma.", image: "/images/cardamom.jpg", alt: "Green cardamom pods" },
  { name: "Cumin", category: "Seeds & aromatics", description: "Earthy, aromatic cumin seeds, carefully sourced for consistent character.", image: "/images/cumin.jpg", alt: "Cumin seeds in a rustic bowl" },
  { name: "Coriander", category: "Seeds & aromatics", description: "Warm, citrusy coriander seeds suitable for whole spice and grinding use.", image: "/images/coriander.jpg", alt: "Coriander seeds" },
  { name: "Fennel", category: "Seeds & aromatics", description: "Sweetly aromatic fennel seeds selected for freshness and clean flavour.", image: "/images/fennel.jpg", alt: "Fennel seeds" },
  { name: "Cloves", category: "Whole spices", description: "Rich, intensely aromatic cloves for spice blends and food preparations.", image: "/images/cloves.jpg", alt: "Whole cloves" },
  { name: "Cinnamon", category: "Whole spices", description: "Warm, sweet cinnamon with a familiar fragrance for diverse applications.", image: "/images/cinnamon.jpg", alt: "Cinnamon sticks" },
];
