import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const FeaturedBanner = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Edition</span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-6 leading-tight">
              The Heritage
              <br />
              <span className="italic text-gold">Collection</span>
            </h2>

            <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed">
              Inspired by timeless craftsmanship and modern sensibilities, our Heritage Collection celebrates the art of luxury living. Each piece tells a story of elegance and refinement.
            </p>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 bg-gold text-primary px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all shadow-gold hover:shadow-lg"
            >
              Discover Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "150+", label: "Artisan Partners" },
              { number: "48", label: "Countries Worldwide" },
              { number: "99%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <span className="font-display text-4xl lg:text-5xl font-medium text-gold block mb-2">
                  {stat.number}
                </span>
                <span className="text-sm text-primary-foreground/60 tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
