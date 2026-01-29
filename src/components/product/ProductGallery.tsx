import { useState } from "react";
import { motion } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? "border-gold"
                : "border-transparent hover:border-border"
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex-1 aspect-square overflow-hidden bg-cream-dark cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300"
          style={
            isZoomed
              ? {
                  transform: "scale(2)",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : {}
          }
        />
        
        {/* Zoom hint */}
        {!isZoomed && (
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-charcoal/70 backdrop-blur-sm text-cream text-xs">
            Hover to zoom
          </div>
        )}
      </motion.div>
    </div>
  );
}
