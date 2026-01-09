import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Isabella Chen",
    role: "Fashion Editor",
    content: "Maison represents everything I look for in luxury — impeccable quality, timeless design, and attention to the finest details. Their pieces have become staples in my wardrobe.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alexander Wright",
    role: "Creative Director",
    content: "The craftsmanship is unparalleled. Each piece tells a story of dedication and artistry. Maison has redefined what modern luxury means to me.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Laurent",
    role: "Lifestyle Blogger",
    content: "I've been a loyal customer for years. The quality never disappoints, and the designs are always ahead of trends while remaining eternally elegant.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-gold uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Client Stories
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-gold/30 mx-auto mb-8" />
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-10 italic">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center justify-center gap-3">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <div className="mt-6">
                <p className="font-display text-xl text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-gold w-8" : "bg-border hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
