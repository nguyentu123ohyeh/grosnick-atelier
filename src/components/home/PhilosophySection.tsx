import { motion } from "framer-motion";
// Sửa import ảnh thành kiana.jpg
import kianaImage from "@/assets/kiana.jpg";

export function PhilosophySection() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src={kianaImage} // Sử dụng kiana.jpg
                alt="Karin Grosnick"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              The Grosnick Philosophy
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4 mb-8">
              Creating Soulful Spaces
            </h2>
            
            <div className="space-y-6 text-charcoal-light leading-relaxed">
              <p className="text-lg italic">
                "A home should be a reflection of the life lived within it—a 
                sanctuary that nurtures the spirit while inspiring the everyday."
              </p>
              <p>
                At **Grosnick Interior Atelier**, we believe that exceptional spaces 
                emerge from the thoughtful curation of objects that carry meaning. 
                Each piece in our collection is selected not merely for its form, 
                but for its capacity to contribute to the narrative of your home.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <p className="font-heading text-2xl text-charcoal italic">
                Karin Grosnick
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Founder & Lead Curator
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}