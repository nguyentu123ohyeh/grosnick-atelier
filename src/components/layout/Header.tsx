import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-2xl md:text-3xl tracking-wide text-charcoal">
              GROSNICK
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Interior Atelier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`link-underline text-sm tracking-wide uppercase transition-colors ${
                  location.pathname === link.path
                    ? "text-charcoal"
                    : "text-charcoal-light hover:text-charcoal"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-cream-dark rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-charcoal" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-[10px] font-medium rounded-full flex items-center justify-center text-charcoal">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 hover:bg-cream-dark rounded-full transition-colors"
            >
              <Menu className="w-6 h-6 text-charcoal" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/30 backdrop-blur-sm z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-cream z-50 shadow-2xl"
            >
              <div className="p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-cream-dark rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-charcoal" />
                </button>

                <div className="mt-16 flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block text-2xl font-heading ${
                          location.pathname === link.path
                            ? "text-charcoal"
                            : "text-charcoal-light"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Visit Our Atelier
                  </p>
                  <p className="text-sm text-charcoal">
                    Chestnut Street 118
                    <br />
                    Syracuse, NY 13212
                  </p>
                  <a
                    href="tel:+15042257457"
                    className="block mt-4 text-sm text-gold hover:text-gold-dark transition-colors"
                  >
                    +1 (504) 225-7457
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
