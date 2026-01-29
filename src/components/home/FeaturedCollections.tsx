import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import sofasImage from "@/assets/collection-sofas.jpg";
import tablesImage from "@/assets/collection-tables.jpg";
import lightingImage from "@/assets/collection-lighting.jpg";

const collections = [
  {
    title: "Sofas & Seating",
    description: "Cloud-like comfort meets sculptural form",
    image: sofasImage,
    link: "/shop?category=Seating",
  },
  {
    title: "Artisan Tables",
    description: "Where craftsmanship meets gathering",
    image: tablesImage,
    link: "/shop?category=Tables",
  },
  {
    title: "Designer Lighting",
    description: "Illuminating spaces with intention",
    image: lightingImage,
    link: "/shop?category=Lighting",
  },
];

export function FeaturedCollections() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            The Collection
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4">
            Curated Categories
          </h2>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Link
                to={collection.link}
                className="group block relative overflow-hidden aspect-[4/5]"
              >
                {/* Image */}
                <div className="absolute inset-0 img-zoom-container">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl text-cream mb-2">
                        {collection.title}
                      </h3>
                      <p className="text-cream/70 text-sm">
                        {collection.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-cream group-hover:text-charcoal transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
