import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Truck, Shield, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductGallery } from "@/components/product/ProductGallery";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl text-charcoal mb-4">
              Product Not Found
            </h1>
            <Link to="/shop" className="text-gold hover:text-gold-dark">
              Return to Shop
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-cream">
        <div className="container-luxury">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-charcoal transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collection
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <span className="text-gold text-sm tracking-[0.2em] uppercase">
                  {product.category}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl text-charcoal mt-2">
                  {product.name}
                </h1>
                <p className="text-3xl text-charcoal mt-4">
                  ${product.price.toLocaleString()}
                </p>
              </div>

              {/* Description */}
              <p className="text-charcoal-light leading-relaxed">
                {product.description}
              </p>

              {/* Add to Cart */}
              <div className="space-y-4">
                <button className="w-full btn-gold text-center">
                  Add to Collection
                </button>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Free shipping to NY
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    2-year warranty
                  </span>
                </div>
              </div>

              {/* Specifications */}
              <div className="border-t border-border pt-8">
                <h3 className="font-heading text-xl text-charcoal mb-4">
                  Technical Specifications
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 text-muted-foreground">Dimensions</td>
                      <td className="py-3 text-charcoal text-right">
                        W {product.dimensions.width} × H {product.dimensions.height} × D {product.dimensions.depth}
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 text-muted-foreground">Material</td>
                      <td className="py-3 text-charcoal text-right">
                        {product.material}
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 text-muted-foreground">Origin</td>
                      <td className="py-3 text-charcoal text-right">
                        {product.origin}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Style</td>
                      <td className="py-3 text-charcoal text-right">
                        {product.vibe}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Curator's Note */}
              <div className="bg-cream-dark p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-charcoal mb-2">
                      Curator's Note
                    </h4>
                    <p className="text-charcoal-light text-sm leading-relaxed italic">
                      "{product.curatorNote}"
                    </p>
                    <p className="text-gold text-sm mt-4">
                      — Karin Grosnick
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="text-sm text-muted-foreground">
                <p>
                  <strong className="text-charcoal">Shipping to New York:</strong>{" "}
                  Complimentary white-glove delivery within the Syracuse area. 
                  Contact us for delivery estimates to other locations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
