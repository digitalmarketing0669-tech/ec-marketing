import { motion } from "framer-motion";
import { Truck, Shield, RefreshCcw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on orders over $500",
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "100% genuine luxury products",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
  },
  {
    icon: Headphones,
    title: "VIP Support",
    description: "24/7 personal shopping assistance",
  },
];

const FeaturesBar = () => {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
