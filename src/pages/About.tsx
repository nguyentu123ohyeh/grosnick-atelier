import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import karinPortrait from "@/assets/karin-portrait.jpg";
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
              Meet Karin Grosnick
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
                  src={karinPortrait}
                  alt="Karin Grosnick"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 hidden lg:block">
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
                  Karin Grosnick's path to becoming Syracuse's most sought-after 
                  interior curator began in the hallowed halls of the Metropolitan 
                  Museum of Art, where she spent a decade studying the intersection 
                  of art, design, and human emotion.
                </p>
                <p>
                  "I realized that the same principles that make a painting timeless—
                  balance, tension, harmony—could transform the spaces where we live," 
                  Karin reflects on her pivotal transition. "A home should tell a story, 
                  and every object within it should earn its place."
                </p>
                <p>
                  In 2018, she founded Grosnick Interior Atelier on Chestnut Street, 
                  bringing her curatorial eye to the world of high-end furniture and 
                  bespoke interior design. Today, her studio serves clients across 
                  New York State and beyond, each project a unique narrative crafted 
                  in close collaboration with those who will inhabit the space.
                </p>
                <p>
                  Her philosophy is simple yet profound: <em>"Surround yourself 
                  only with things that speak to your soul. Everything else is just 
                  furniture."</em>
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm">
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

      {/* The Craft */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-6"
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase">
                The Process
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
                Crafting Your Vision
              </h2>
              
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Every project begins with a conversation—an exploration of how 
                  you live, what inspires you, and what you hope to feel in your space. 
                  This discovery phase is sacred to our process.
                </p>
                <p>
                  From there, Karin and her team develop a comprehensive design 
                  narrative, selecting pieces that not only complement each other 
                  but contribute to the emotional architecture of your home.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l-2 border-gold pl-4">
                  <p className="font-heading text-2xl text-charcoal">200+</p>
                  <p className="text-muted-foreground text-sm">Projects Completed</p>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <p className="font-heading text-2xl text-charcoal">40+</p>
                  <p className="text-muted-foreground text-sm">Artisan Partners</p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={designProcess}
                  alt="Design process - material swatches and sketches"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Our Principles
            </span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Authenticity",
                description:
                  "We source directly from artisans and manufacturers who share our commitment to genuine craftsmanship and honest materials.",
              },
              {
                title: "Sustainability",
                description:
                  "Quality endures. We believe in investing in pieces that will last generations, reducing consumption while elevating living.",
              },
              {
                title: "Personalization",
                description:
                  "No two homes should look alike. We create spaces that reflect the unique story and aspirations of each client.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center p-8 border border-charcoal-light/30"
              >
                <div className="w-12 h-px bg-gold mx-auto mb-6" />
                <h3 className="font-heading text-2xl mb-4">{value.title}</h3>
                <p className="text-cream/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
