import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  User // Icon đại diện cho Personal Leader
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mô phỏng gửi form thành công
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Personal Concierge
            </span>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mt-4 mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Whether you're seeking a specific piece or envisioning a complete 
              transformation, we're here to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT CONTENT SECTION --- */}
      <section className="section-padding bg-cream-dark">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* 1. CONTACT INFORMATION */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-heading text-4xl text-charcoal mb-6">
                  Visit The Atelier
                </h2>
                <p className="text-charcoal-light leading-relaxed">
                  Our Syracuse showroom is open by appointment, offering a 
                  carefully curated selection of our collection in an intimate 
                  setting designed to inspire.
                </p>
              </div>

              {/* LIST INFO */}
              <div className="space-y-8">
                
                {/* Personal Leader - Mục được làm to và nổi bật theo yêu cầu */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gold/15 rounded-full flex items-center justify-center flex-shrink-0 border border-gold/20">
                    <User className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-1">
                      Personal Leader
                    </h3>
                    <p className="text-charcoal font-heading text-3xl tracking-tight">
                      Kiani Marie Rodriguez
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gold/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Address</h3>
                    <p className="text-charcoal-light">
                      San Paulo Way 911, Kissimmee Florida 34758
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gold/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Phone</h3>
                    <a 
                      href="tel:+19036500778" 
                      className="text-charcoal-light hover:text-gold transition-colors text-lg"
                    >
                      +1 (903) 650-0778
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gold/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Email</h3>
                    <a 
                      href="mailto:leidyconkeluzt@hotmail.com" 
                      className="text-charcoal-light hover:text-gold transition-colors break-all"
                    >
                      leidyconkeluzt@hotmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gold/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Hours</h3>
                    <p className="text-charcoal-light">
                      Monday – Friday: 10am – 6pm <br />
                      Saturday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video bg-cream border border-border overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.344405387431!2d-81.4727184!3d28.2872338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7836894ad691d%3A0x6a1651e707e7e59!2sSan%20Paulo%20Way%2C%20Kissimmee%2C%20FL%2034758!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Kiani Atelier Location"
                />
              </div>
            </motion.div>

            {/* 2. CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-cream p-8 lg:p-10 shadow-sm border border-border/50">
                <h2 className="font-heading text-3xl text-charcoal mb-2">
                  Send an Inquiry
                </h2>
                <p className="text-muted-foreground mb-8">
                  For bespoke interior consulting or product questions
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-heading text-2xl text-charcoal mb-2">
                      Message Received
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. <strong>Kiani Marie Rodriguez</strong> sẽ trực tiếp xem xét yêu cầu và phản hồi bạn trong vòng 24 giờ.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-gold hover:text-gold-dark transition-colors font-medium underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-cream-dark border border-border text-charcoal focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-cream-dark border border-border text-charcoal focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-muted-foreground">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-cream-dark border border-border text-charcoal focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-muted-foreground">
                          Inquiry Type *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-cream-dark border border-border text-charcoal focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="consulting">Bespoke Interior Consulting</option>
                          <option value="product">Product Question</option>
                          <option value="trade">Trade & Wholesale</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-cream-dark border border-border text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-charcoal text-white py-4 px-8 hover:bg-gold transition-all duration-300 flex items-center justify-center group uppercase tracking-[0.3em] text-xs font-bold"
                    >
                      Send Message
                      <Send className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[10px] text-muted-foreground text-center uppercase tracking-wider">
                      We respect your privacy. data is encrypted.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;