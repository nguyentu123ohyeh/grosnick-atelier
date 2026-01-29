import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
// Sửa import ảnh chân dung thành kiana.jpg
import karinPortrait from "@/assets/kiana.jpg";
import designProcess from "@/assets/design-process.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              The Visionary
            </span>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mt-4 mb-6">
              Meet Kiani marie Rodriguez
            </h1>
            <p className="text-muted-foreground text-lg">
              A journey from classical art history to contemporary interior curation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="section-padding bg-cream-dark">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={karinPortrait} // Sử dụng kiana.jpg
                  alt="Kiani marie Rodriguez"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 hidden lg:block shadow-xl">
                <p className="font-heading text-4xl text-charcoal">15+</p>
                <p className="text-charcoal text-sm">Years of Experience</p>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
                From Art History to Artful Living
              </h2>
              
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  **Kiani marie Rodriguez's** path to becoming Syracuse's most sought-after 
                  interior curator began in the hallowed halls of the Metropolitan 
                  Museum of Art, where she spent a decade studying the intersection 
                  of art, design, and human emotion.
                </p>
                <p>
                  "I realized that the same principles that make a painting timeless—
                  balance, tension, harmony—could transform the spaces where we live," 
                  Karin reflects.
                </p>
                <p>
                  In 2018, she founded **Grosnick Interior Atelier** on Chestnut Street, 
                  bringing her curatorial eye to the world of high-end furniture. Today, her studio serves clients across New York State and beyond.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm font-medium">
                  Education: MA Art History, Columbia University
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Former Curator: Metropolitan Museum of Art, 2003-2013
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the component (The Craft, Values, etc.) remains same but with Kiani marie Rodriguez context */}
      {/* ... */}
    </Layout>
  );
};

export default About;