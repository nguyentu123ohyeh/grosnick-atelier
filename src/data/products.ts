import productChair1 from "@/assets/product-chair-1.jpg";
import productSidetable1 from "@/assets/product-sidetable-1.jpg";
import productSofa1 from "@/assets/product-sofa-1.jpg";
import productLamp1 from "@/assets/product-lamp-1.jpg";
import productTable1 from "@/assets/product-table-1.jpg";
import productPendant1 from "@/assets/product-pendant-1.jpg";
import productAccentChair from "@/assets/product-accent-chair.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  material: string;
  vibe: string;
  images: string[];
  description: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  origin: string;
  curatorNote: string;
}

export const products: Product[] = [
  {
    id: "milano-lounge-chair",
    name: "Milano Lounge Chair",
    price: 2890,
    category: "Seating",
    material: "Italian Leather",
    vibe: "Minimalist",
    images: [productChair1, productChair1, productChair1],
    description: "A masterpiece of Italian craftsmanship, the Milano Lounge Chair embodies the essence of understated luxury. Wrapped in supple full-grain leather, its clean lines and generous proportions invite hours of contemplation.",
    dimensions: {
      width: "82 cm",
      height: "78 cm",
      depth: "85 cm"
    },
    origin: "Milan, Italy",
    curatorNote: "Position near a window with natural light to appreciate the leather's subtle patina over time. Pair with our Carrara Side Table for a timeless reading corner."
  },
  {
    id: "carrara-side-table",
    name: "Carrara Side Table",
    price: 1450,
    category: "Tables",
    material: "Solid Oak",
    vibe: "Minimalist",
    images: [productSidetable1, productSidetable1, productSidetable1],
    description: "Inspired by the sculptural forms of mid-century masters, the Carrara Side Table features a flowing white marble top balanced on brushed gold supports. Each piece is unique in its natural veining.",
    dimensions: {
      width: "55 cm",
      height: "52 cm",
      depth: "45 cm"
    },
    origin: "Carrara, Italy",
    curatorNote: "This piece speaks volumes on its own. Let it anchor a seating arrangement or stand alone as a sculptural accent in an entryway."
  },
  {
    id: "haven-sectional",
    name: "Haven Sectional",
    price: 6750,
    category: "Seating",
    material: "Linen",
    vibe: "Bohemian",
    images: [productSofa1, productSofa1, productSofa1],
    description: "The Haven Sectional redefines comfort with its cloud-like cushioning and organic silhouette. Upholstered in premium Belgian linen, it becomes the heart of any gathering space.",
    dimensions: {
      width: "320 cm",
      height: "82 cm",
      depth: "160 cm"
    },
    origin: "Copenhagen, Denmark",
    curatorNote: "Layer with textured throws and artisanal cushions to create an inviting retreat. This piece loves natural materials—think raw wood, ceramics, and dried botanicals."
  },
  {
    id: "aurelia-floor-lamp",
    name: "Aurelia Floor Lamp",
    price: 890,
    category: "Lighting",
    material: "Linen",
    vibe: "Minimalist",
    images: [productLamp1, productLamp1, productLamp1],
    description: "The Aurelia Floor Lamp casts a warm, ambient glow through its hand-crafted linen shade. The brushed brass stem adds a touch of refined elegance to any corner.",
    dimensions: {
      width: "40 cm",
      height: "165 cm",
      depth: "40 cm"
    },
    origin: "Stockholm, Sweden",
    curatorNote: "Position beside a reading chair or behind a sofa to create pools of warm light. The linen shade diffuses light beautifully, perfect for evening ambiance."
  },
  {
    id: "nordica-dining-table",
    name: "Nordica Dining Table",
    price: 4200,
    category: "Tables",
    material: "Solid Oak",
    vibe: "Minimalist",
    images: [productTable1, productTable1, productTable1],
    description: "Crafted from century-old oak, the Nordica Dining Table celebrates the beauty of natural wood grain. Its clean Scandinavian lines create a warm gathering place for family and friends.",
    dimensions: {
      width: "240 cm",
      height: "75 cm",
      depth: "100 cm"
    },
    origin: "Helsinki, Finland",
    curatorNote: "Let the natural beauty of the oak speak—minimal centerpieces work best. Consider our ceramic vessels or a single branch of seasonal foliage."
  },
  {
    id: "luna-pendant-cluster",
    name: "Luna Pendant Cluster",
    price: 1650,
    category: "Lighting",
    material: "Linen",
    vibe: "Bohemian",
    images: [productPendant1, productPendant1, productPendant1],
    description: "The Luna Pendant Cluster creates a constellation of light with its three sculptural ceramic shades. Hand-thrown by artisans, each piece has subtle variations that celebrate the maker's hand.",
    dimensions: {
      width: "85 cm",
      height: "45 cm",
      depth: "85 cm"
    },
    origin: "Lisbon, Portugal",
    curatorNote: "Suspend at varying heights above a dining table for drama, or group at the same level for a more composed look. Works beautifully with dimmer controls."
  },
  {
    id: "boheme-accent-chair",
    name: "Bohème Accent Chair",
    price: 1890,
    category: "Seating",
    material: "Linen",
    vibe: "Bohemian",
    images: [productAccentChair, productAccentChair, productAccentChair],
    description: "The Bohème Accent Chair brings warmth and character to any space. Its curved form and natural linen upholstery create an inviting presence that encourages relaxation.",
    dimensions: {
      width: "72 cm",
      height: "85 cm",
      depth: "78 cm"
    },
    origin: "Marrakech, Morocco",
    curatorNote: "This chair loves to be the unexpected element in a room. Place it at an angle to create flow, and add a sheepskin throw for extra texture."
  },
  {
    id: "industrial-coffee-table",
    name: "Foundry Coffee Table",
    price: 2100,
    category: "Tables",
    material: "Solid Oak",
    vibe: "Industrial",
    images: [productTable1, productTable1, productTable1],
    description: "Raw and refined, the Foundry Coffee Table bridges industrial heritage with contemporary living. Solid oak meets blackened steel in a celebration of honest materials.",
    dimensions: {
      width: "140 cm",
      height: "42 cm",
      depth: "75 cm"
    },
    origin: "Brooklyn, New York",
    curatorNote: "Balance its substantial presence with lighter elements—think airy curtains, pale walls, and botanical accents. Coffee table books are a must."
  }
];

export const categories = ["All", "Seating", "Tables", "Lighting"];
export const materials = ["All", "Solid Oak", "Italian Leather", "Linen"];
export const vibes = ["All", "Minimalist", "Bohemian", "Industrial"];
