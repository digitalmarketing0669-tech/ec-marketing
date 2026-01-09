import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import categoryJewelry from "@/assets/category-jewelry.jpg";
import categoryBags from "@/assets/category-bags.jpg";
import categoryClothing from "@/assets/category-clothing.jpg";
import categoryWatches from "@/assets/category-watches.jpg";

const categories = [
  {
    name: "Fine Jewelry",
    description: "Handcrafted treasures",
    image: categoryJewelry,
    count: 48,
  },
  {
    name: "Leather Goods",
    description: "Artisanal craftsmanship",
    image: categoryBags,
    count: 32,
  },
  {
    name: "Silk & Textiles",
    description: "Luxurious fabrics",
    image: categoryClothing,
    count: 56,
  },
  {
    name: "Timepieces",
    description: "Precision & elegance",
    image: categoryWatches,
    count: 24,
  },
];

const CategorySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="collections">
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
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Shop by Category
          </h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-card rounded-sm cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gold-light font-medium mb-1">
                      {category.count} Items
                    </p>
                    <h3 className="font-display text-2xl text-primary-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      {category.description}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="w-10 h-10 rounded-full bg-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
