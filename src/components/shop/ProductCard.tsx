import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block"
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-cream-dark mb-4">
          <div className="img-zoom-container w-full h-full">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-charcoal text-sm font-medium tracking-wide uppercase">
                <Eye className="w-4 h-4" />
                Quick View
              </span>
            </motion.div>
          </div>

          {/* Material Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-cream/90 backdrop-blur-sm text-xs tracking-wide uppercase text-charcoal">
              {product.material}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-heading text-lg text-charcoal group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {product.category}
          </p>
          <p className="text-charcoal font-medium">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
