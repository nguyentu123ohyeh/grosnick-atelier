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
  // --- SEATING ---
  {
    id: "giant-bean-bag-loveseat",
    name: "Giant Bean Bag Loveseat",
    price: 199.99,
    category: "Seating",
    material: "Plush Fabric",
    vibe: "Bohemian",
    images: [
      "https://m.media-amazon.com/images/I/71RK3PBzBAL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/710q3lTVUzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81PTYVy9enL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81F3rFN0bGL._AC_SL1500_.jpg"
    ],
    description: "Experience ultimate relaxation with this oversized upholstered loveseat. Designed with integrated armrests and plush pillows, it offers a cloud-like seating experience for any modern living space.",
    dimensions: { width: "150 cm", height: "75 cm", depth: "95 cm" },
    origin: "Portland, USA",
    curatorNote: "The perfect anchor for a cozy reading nook. I recommend pairing this with a textured wool throw to enhance its bohemian charm."
  },
  {
    id: "folding-l-shaped-sofa-bed",
    name: "Folding L-Shaped Sofa Bed",
    price: 136.99,
    category: "Seating",
    material: "High-density Foam",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/81qYSMi0rQL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71tj57YL3kL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81zptQYPJaL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71ExezybaBL._AC_SL1500_.jpg"
    ],
    description: "A versatile L-shaped convertible sofa that functions as both a comfortable floor lounge and a sleeper bed. Perfect for guest rooms or small apartments requiring multi-functional furniture.",
    dimensions: { width: "180 cm", height: "40 cm", depth: "120 cm" },
    origin: "Berlin, Germany",
    curatorNote: "Minimalism at its finest. This dark grey tone works beautifully against light hardwood floors. It's my go-to recommendation for studio apartment living."
  },
  {
    id: "beanless-inflatable-lounge-chair",
    name: "Inflatable Lounge Chair",
    price: 27.99,
    category: "Seating",
    material: "Durable Vinyl",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/71sQrSghvFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61IdSQaMSNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61AZjCsxQSL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61yqg2h3qLL._AC_SL1500_.jpg"
    ],
    description: "Featuring a corduroy-textured flocking, this inflatable lounge chair provides an elevated aesthetic with industrial durability. Folds compactly for those who value space and mobility.",
    dimensions: { width: "114 cm", height: "71 cm", depth: "114 cm" },
    origin: "Lisbon, Portugal",
    curatorNote: "Surprisingly sophisticated for an inflatable. It adds an unexpected industrial edge to a modern gaming room or sunroom."
  },
  {
    id: "4-in-1-futon-sofa-bed",
    name: "4-in-1 Futon Sofa Bed",
    price: 239.99,
    category: "Seating",
    material: "Linen",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/71hZmeKEHML._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71HPYGv4SKL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81OdtliseDL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81hZ5OPOwWL._AC_SX679_.jpg"
    ],
    description: "A premium 4-in-1 foldable convertible sofa couch. This beige linen piece transitions seamlessly from a floor sofa to a full-sized guest bed, featuring a removable cover for easy maintenance.",
    dimensions: { width: "160 cm", height: "80 cm", depth: "190 cm" },
    origin: "Copenhagen, Denmark",
    curatorNote: "The linen texture is exceptionally soft. I suggest using this as a central lounge piece in a neutral-toned living room to maintain an airy feel."
  },
  {
    id: "giant-bean-bag-xl",
    name: "Giant Bean Bag XL",
    price: 158.98,
    category: "Seating",
    material: "Non-slip Fiber",
    vibe: "Bohemian",
    images: [
      "https://m.media-amazon.com/images/I/81-aCDXR1bL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81GMxmkRtXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/816609lW2cL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81S+jdXdaVL._AC_SL1500_.jpg"
    ],
    description: "This XL bean bag chair is engineered for maximum comfort. Its ergonomic handle and high-quality filling make it an essential for reading or high-intensity gaming sessions.",
    dimensions: { width: "120 cm", height: "110 cm", depth: "120 cm" },
    origin: "Osaka, Japan",
    curatorNote: "Comfort doesn't have to be messy. The light grey fiber is surprisingly resistant to wear, making it perfect for active households."
  },
  {
    id: "corduroy-foam-filled-sofa",
    name: "Corduroy Foam-Filled Sofa",
    price: 149.99,
    category: "Seating",
    material: "High-Resilience Foam",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/81N-yqKY+CL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71qinYD5pJL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81orzdHIJZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81cX+tSROgL._AC_SL1500_.jpg"
    ],
    description: "Upholstered in premium corduroy fabric, this oversized lounge chair uses high-resilience foam instead of standard beans for a structured yet cozy support system.",
    dimensions: { width: "105 cm", height: "90 cm", depth: "105 cm" },
    origin: "Seoul, South Korea",
    curatorNote: "The corduroy ridges add a wonderful tactile dimension to your room. It feels much more expensive than it is—true understated luxury."
  },
  {
    id: "floral-shaped-loveseat",
    name: "Floral Shaped Loveseat",
    price: 203.98,
    category: "Seating",
    material: "Faux Fur",
    vibe: "Bohemian",
    images: [
      "https://m.media-amazon.com/images/I/81zKKsbKFLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71eOQvudiML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81brwuJb6rL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71GRogDTwGL._AC_SL1500_.jpg"
    ],
    description: "A sculptural bean bag loveseat shaped like a blooming flower. This pink faux fur statement piece brings a touch of whimsical elegance to any bedroom or creative space.",
    dimensions: { width: "115 cm", height: "85 cm", depth: "115 cm" },
    origin: "Paris, France",
    curatorNote: "Bold and beautiful. This is for the client who isn't afraid to let furniture be art. It looks stunning under warm, dim lighting."
  },
  {
    id: "shell-shaped-accent-sofa",
    name: "Shell-Shaped Accent Sofa",
    price: 161.49,
    category: "Seating",
    material: "Faux Fur",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/71sWZi16CjL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71mptmkXr0L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71k3qxy1BjL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71-P1kwVPzL._AC_SL1500_.jpg"
    ],
    description: "An oversized shell-shaped floor sofa that combines dark aesthetics with plush comfort. The black faux fur finish makes it a striking addition to modern-industrial interiors.",
    dimensions: { width: "135 cm", height: "95 cm", depth: "110 cm" },
    origin: "Milan, Italy",
    curatorNote: "The deep black texture absorbs light beautifully. Place it in a room with metallic accents to really make the shell silhouette pop."
  },

  // --- TABLES ---
  {
    id: "nesting-coffee-table-set",
    name: "Nesting Coffee Table Set",
    price: 69.99,
    category: "Tables",
    material: "Solid Wood",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/91EfC6N5JWL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71JuchOryRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91eKdu58QsL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/817VkAG95YL._AC_SL1500_.jpg"
    ],
    description: "A versatile set of two round coffee tables featuring industrial wood grain tops and black steel frames. Equipped with adjustable non-slip feet for stability on any surface.",
    dimensions: { width: "60 cm", height: "45 cm", depth: "60 cm" },
    origin: "Brooklyn, New York",
    curatorNote: "Flexibility is key in modern homes. Use them together for a layered look, or separate them to serve as flanking side tables."
  },
  {
    id: "modern-square-glass-table",
    name: "Modern Square Glass Table",
    price: 69.98,
    category: "Tables",
    material: "Glass",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/91cTZVQORnL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61h88ChoCGL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71bhZMRcx2L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81XBj69pz5L._AC_SL1500_.jpg"
    ],
    description: "A clean-lined square center table featuring tempered grey glass and a black frame. Its simple geometry is perfect for contemporary living rooms.",
    dimensions: { width: "68 cm", height: "45 cm", depth: "68 cm" },
    origin: "Lyon, France",
    curatorNote: "The grey-tinted glass adds a layer of mystery. It’s perfect for smaller spaces as the transparency prevents the room from feeling cluttered."
  },
  {
    id: "honey-brown-round-table",
    name: "Honey Brown Round Table",
    price: 89.99,
    category: "Tables",
    material: "Solid Wood",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/81o0FkzWTNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/810q8vW+xDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61W-5xe22vL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81MJleiZCDL._AC_SL1500_.jpg"
    ],
    description: "This 2-tier center table features a warm honey brown finish, tapered legs, and elegant curved transitions. Provides ample storage for books and accessories.",
    dimensions: { width: "80 cm", height: "45 cm", depth: "80 cm" },
    origin: "Nashville, USA",
    curatorNote: "The honey brown finish radiates warmth. It works best when paired with ceramic vases and natural linen coasters."
  },
  {
    id: "walnut-fluted-center-table",
    name: "Walnut Fluted Center Table",
    price: 139.99,
    category: "Tables",
    material: "Solid Wood",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/71OG00IXCbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61keNT1fdhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71GGjmqcPZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71uda-r66wL._AC_SL1500_.jpg"
    ],
    description: "Inspired by mid-century fluted designs, this walnut coffee table features sliding doors and hidden storage cabinets, combining aesthetics with high functionality.",
    dimensions: { width: "76 cm", height: "40 cm", depth: "76 cm" },
    origin: "Tokyo, Japan",
    curatorNote: "The sliding doors are a masterclass in functional design. Hide your remotes and clutter while keeping a clean, fluted silhouette."
  },
  {
    id: "black-glass-tea-table",
    name: "Black Glass Tea Table",
    price: 60.99,
    category: "Tables",
    material: "Glass",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/91oK0KunZbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61qzFFDoLtL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91uBDcqjeBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61tvYm43SvL._AC_SL1500_.jpg"
    ],
    description: "A modern square cocktail table with a black and clear glass design. Its sleek profile and easy assembly make it a staple for high-traffic living areas.",
    dimensions: { width: "66 cm", height: "45 cm", depth: "66 cm" },
    origin: "Milan, Italy",
    curatorNote: "This table brings a 'city-chic' vibe to any apartment. I recommend using it in a room with neutral walls to let the black glass shine."
  },
  {
    id: "bamboo-tatami-floor-table",
    name: "Bamboo Tatami Floor Table",
    price: 99.00,
    category: "Tables",
    material: "Solid Wood",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/71yzNsFuPLL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/714sb0gNt0L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61Uslt342ML._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81AkjFRIFeL._AC_SX679_.jpg"
    ],
    description: "Crafted from natural bamboo, this foldable Japanese-style table is designed for meditation and tatami living. A masterwork of space-saving elegance.",
    dimensions: { width: "100 cm", height: "30 cm", depth: "50 cm" },
    origin: "Kyoto, Japan",
    curatorNote: "There is a spiritual quality to bamboo. Use this in a quiet corner of your home to create a sanctuary for morning tea or meditation."
  },
  {
    id: "rustic-brown-oval-table",
    name: "Rustic Brown Oval Table",
    price: 59.99,
    category: "Tables",
    material: "Solid Wood",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/81uVqi4PYiL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71R2KhstVIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71On4W0RmWL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81tiEVIGa6L._AC_SL1500_.jpg"
    ],
    description: "A small oval coffee table with an industrial farmhouse aesthetic. Features a 2-tier open storage shelf and a durable wooden desktop.",
    dimensions: { width: "90 cm", height: "45 cm", depth: "50 cm" },
    origin: "Helsinki, Finland",
    curatorNote: "The oval shape softens the industrial iron. It’s a great piece for balancing harder textures like exposed brick or concrete."
  },
  {
    id: "black-metal-bedside-table",
    name: "Black Metal Bedside Table",
    price: 119.00,
    category: "Tables",
    material: "Metal",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/61DsknbH8LL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/718J+sTVfqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/614aOm7l+jL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/614aOm7l+jL._AC_SL1500_.jpg"
    ],
    description: "A rugged 3-tier end table made of industrial black metal. Designed for compact spaces with zero assembly required.",
    dimensions: { width: "40 cm", height: "65 cm", depth: "40 cm" },
    origin: "Stockholm, Sweden",
    curatorNote: "No assembly? That's luxury. The vertical storage is a lifesaver for small bedrooms or narrow living rooms."
  },

  // --- LIGHTING ---
  {
    id: "gold-tree-floor-lamp",
    name: "Gold Tree Floor Lamp",
    price: 99.00,
    category: "Lighting",
    material: "Metal",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/81XB6We5NuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71i7hSSn9TL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71FUdEs7PxL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71gU-xiMsML._AC_SL1500_.jpg"
    ],
    description: "An industrial gold tree lamp featuring 3 elegant teardrop cage heads. Includes 800 lumens LED bulbs to create a sophisticated ambiance.",
    dimensions: { width: "30 cm", height: "175 cm", depth: "30 cm" },
    origin: "Paris, France",
    curatorNote: "The teardrop cages create beautiful shadows on the walls. It acts like a piece of jewelry for your living room."
  },
  {
    id: "36w-led-tree-lamp",
    name: "36W LED Tree Floor Lamp",
    price: 74.99,
    category: "Lighting",
    material: "Metal",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/61wZzbvDaIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71pBRwW-+EL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/713w1xuanaL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/513XxlmcZnL._AC_.jpg"
    ],
    description: "A modern dimmable standing lamp with 3 rotatable LED lights. Features remote and touch control with 4 adjustable color temperatures.",
    dimensions: { width: "25 cm", height: "180 cm", depth: "25 cm" },
    origin: "Shenzhen, China",
    curatorNote: "Technology meets design. I recommend using the warm setting for evenings and the cool white for focused work."
  },
  {
    id: "arc-floor-lamp-linen",
    name: "Arc Floor Lamp with Linen",
    price: 49.99,
    category: "Lighting",
    material: "Linen",
    vibe: "Bohemian",
    images: [
      "https://m.media-amazon.com/images/I/619pHvEWo2L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71omKn-4LVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61yr4Y83MrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71DPkKW1YXL._AC_SL1500_.jpg"
    ],
    description: "A tall modern arc lamp with a natural linen shade. Includes a 1000 lumens LED Edison bulb for a soft, warm glow.",
    dimensions: { width: "45 cm", height: "170 cm", depth: "100 cm" },
    origin: "Nashville, USA",
    curatorNote: "The arch is perfect for hovering over a reading chair. The linen shade diffuses light in a way that feels incredibly natural."
  },
  {
    id: "modern-sputnik-chandelier",
    name: "Modern Sputnik Chandelier",
    price: 105.99,
    category: "Lighting",
    material: "Metal",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/61l3t4y0BSL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61D1gigXyvL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/814qehyqNUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/41T7JFA-gFL._AC_SL1230_.jpg"
    ],
    description: "A 12-light Sputnik chandelier in black and gold. Height adjustable and designed to be the focal point above dining tables or kitchen islands.",
    dimensions: { width: "85 cm", height: "60 cm", depth: "85 cm" },
    origin: "Berlin, Germany",
    curatorNote: "A total conversation starter. Its adjustable height makes it incredibly versatile for both standard and high ceilings."
  },
  {
    id: "battery-operated-wall-sconce",
    name: "Wireless Gold Wall Sconce",
    price: 69.99,
    category: "Lighting",
    material: "Metal",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/61Dtaa5M08L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Y87BktclL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71UxR5BkVWL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71f2GB5o2KL._AC_SL1500_.jpg"
    ],
    description: "A set of two rechargeable gold wall sconces. Featuring 10-color dimalbe bulbs and remote control, these wireless lamps require no electrical wiring.",
    dimensions: { width: "15 cm", height: "30 cm", depth: "20 cm" },
    origin: "Lisbon, Portugal",
    curatorNote: "The ultimate solution for renters. You get the luxury of hardwired lighting without the commitment or the mess."
  },
  {
    id: "torchiere-reading-floor-lamp",
    name: "Torchiere Reading Floor Lamp",
    price: 35.94,
    category: "Lighting",
    material: "Metal",
    vibe: "Minimalist",
    images: [
      "https://m.media-amazon.com/images/I/41ZhW3MHEvL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51u+chokpfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81-zeA-lKGL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61U68MvtcmL._AC_SL1500_.jpg"
    ],
    description: "A matte black torchiere lamp featuring a frosted shade and an adjustable reading light. Dual rotary switches allow for 3-step dimming.",
    dimensions: { width: "30 cm", height: "185 cm", depth: "30 cm" },
    origin: "New York, USA",
    curatorNote: "Practicality at its best. It provides general room lighting while the side arm is perfect for getting lost in a book."
  },
  {
    id: "smart-rgb-corner-lamp",
    name: "Smart RGB Corner Lamp",
    price: 49.95,
    category: "Lighting",
    material: "Metal",
    vibe: "Industrial",
    images: [
      "https://m.media-amazon.com/images/I/71SdbKWO7wL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71z6UjkBUzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71zggeX7xwL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71o4YEp30cL._AC_SL1500_.jpg"
    ],
    description: "An app-controlled RGB corner lamp with music sync and 16 million colors. Designed to disappear into the corner while casting vibrant, ambient light.",
    dimensions: { width: "15 cm", height: "155 cm", depth: "15 cm" },
    origin: "Shenzhen, China",
    curatorNote: "Transform your mood with a tap. The music sync feature is fantastic for hosting intimate gatherings or parties."
  },
  {
    id: "farmhouse-nightstand-lamps",
    name: "Farmhouse Nightstand Lamps",
    price: 109.99,
    category: "Lighting",
    material: "Glass",
    vibe: "Bohemian",
    images: [
      "https://m.media-amazon.com/images/I/71PvXyBQGeL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Vy0cDFWWL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71nytog-RnL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81F49kN2ioL._AC_SL1500_.jpg"
    ],
    description: "A set of two rustic vintage table lamps with dual USB charging ports and built-in frosted glass night lights. Perfect for entryways or bedside tables.",
    dimensions: { width: "35 cm", height: "65 cm", depth: "35 cm" },
    origin: "Nashville, USA",
    curatorNote: "Charming and functional. The USB ports are a modern necessity hidden within a beautifully classic farmhouse frame."
  }
];

export const categories = ["All", "Seating", "Tables", "Lighting"];
export const materials = ["All", "Solid Wood", "Glass", "Metal", "Linen", "Faux Fur", "Plush Fabric", "High-density Foam", "Durable Vinyl"];
export const vibes = ["All", "Minimalist", "Bohemian", "Industrial"];