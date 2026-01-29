import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-charcoal text-cream">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal-light/30">
        <div className="container-luxury py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-3xl md:text-4xl mb-4">
              Join the Atelier
            </h3>
            <p className="text-cream/70 mb-8">
              Receive curated design inspiration, exclusive previews, and insights
              from Karin Grosnick directly to your inbox.
            </p>
            {isSubscribed ? (
              <p className="text-gold text-lg">
                Welcome to the Atelier. Expect beautiful things.
              </p>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-5 py-4 bg-charcoal-light/30 border border-charcoal-light/50 rounded-sm text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gold text-charcoal text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading text-2xl tracking-wide">GROSNICK</span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-cream/60 mt-1">
                Interior Atelier
              </span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              Curating soulful spaces through considered design and artisanal
              craftsmanship since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6 text-cream/90">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Shop", "About", "Contact", "Journal"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6 text-cream/90">
              Collections
            </h4>
            <ul className="space-y-3">
              {["Seating", "Tables", "Lighting", "Accessories"].map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6 text-cream/90">
              The Atelier
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  Chestnut Street 118
                  <br />
                  Syracuse, NY 13212
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+15042257457"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  +1 (504) 225-7457
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:wlzdcskr15730@hotmail.com"
                  className="text-cream/70 hover:text-gold transition-colors text-sm break-all"
                >
                  wlzdcskr15730@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light/30">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-xs">
            © {new Date().getFullYear()} Grosnick Interior Atelier. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-cream/50 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-cream/50 hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-cream/50 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
