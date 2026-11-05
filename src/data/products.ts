export type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  { name: "Turmeric", category: "Ground & whole", description: "Golden roots and fine powder for food makers and spice blenders.", image: "/images/turmeric.jpg", alt: "Golden turmeric roots and powder" },
  { name: "Red Chilli", category: "Whole spices", description: "Sun-dried whole chillies selected for vibrant colour and character.", image: "/images/chilli.jpg", alt: "Dried red Indian chillies" },
  { name: "Cumin", category: "Seeds & aromatics", description: "Warm, earthy cumin seeds for kitchens and ingredient makers.", image: "/images/cumin.jpg", alt: "Cumin seeds in a rustic bowl" },
  { name: "Coriander", category: "Seeds & aromatics", description: "Versatile whole seeds and ground spice with a gentle citrus note.", image: "/images/coriander.jpg", alt: "Coriander seeds and ground coriander" },
  { name: "Cardamom", category: "Specialty spices", description: "Fragrant green pods that bring a distinctive, sweet warmth.", image: "/images/cardamom.jpg", alt: "Green cardamom pods" },
  { name: "Black Pepper", category: "Whole spices", description: "Bold peppercorns for seasoning, blending and further processing.", image: "/images/pepper.jpg", alt: "Black peppercorns" },
  { name: "Cinnamon", category: "Specialty spices", description: "Aromatic bark for bakery, beverage and spice applications.", image: "/images/cinnamon.jpg", alt: "Rolled cinnamon quills" },
  { name: "Cloves", category: "Specialty spices", description: "Whole dried flower buds with a deep, warming aroma.", image: "/images/cloves.jpg", alt: "Whole dried cloves" },
  { name: "Fennel", category: "Seeds & aromatics", description: "Sweet, fragrant seeds for seasoning and food manufacturing.", image: "/images/fennel.jpg", alt: "Fennel seeds on ivory paper" },
];

export const productCategories = ["All products", "Whole spices", "Ground & whole", "Seeds & aromatics", "Specialty spices"];
