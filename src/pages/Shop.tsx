import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductFilters } from "@/components/shop/ProductFilters";
import { products, categories, materials, vibes } from "@/data/products";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedVibe, setSelectedVibe] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  // Update category when URL changes
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const maxPrice = useMemo(() => {
    return Math.max(...products.map((p) => p.price));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesMaterial =
        selectedMaterial === "All" || product.material === selectedMaterial;
      const matchesVibe =
        selectedVibe === "All" || product.vibe === selectedVibe;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesCategory && matchesMaterial && matchesVibe && matchesPrice;
    });
  }, [selectedCategory, selectedMaterial, selectedVibe, priceRange]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              The Gallery
            </span>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mt-4 mb-6">
              Shop Collection
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each piece in our collection is hand-selected for its exceptional
              craftsmanship, timeless design, and ability to transform a space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-luxury">
        <ProductFilters
          categories={categories}
          materials={materials}
          vibes={vibes}
          selectedCategory={selectedCategory}
          selectedMaterial={selectedMaterial}
          selectedVibe={selectedVibe}
          priceRange={priceRange}
          maxPrice={maxPrice}
          onCategoryChange={setSelectedCategory}
          onMaterialChange={setSelectedMaterial}
          onVibeChange={setSelectedVibe}
          onPriceChange={setPriceRange}
        />
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground text-sm">
              Showing {filteredProducts.length} of {products.length} pieces
            </p>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No pieces match your current filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedMaterial("All");
                  setSelectedVibe("All");
                  setPriceRange([0, maxPrice]);
                }}
                className="mt-4 text-gold hover:text-gold-dark transition-colors underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
