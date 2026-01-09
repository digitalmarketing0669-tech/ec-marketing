import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  {
    id: "1",
    name: "Signature Chain Necklace",
    price: 1250,
    image: product1,
    category: "Jewelry",
    isNew: true,
  },
  {
    id: "2",
    name: "Aria Crossbody Bag",
    price: 890,
    originalPrice: 1120,
    image: product2,
    category: "Leather Goods",
    isSale: true,
  },
  {
    id: "3",
    name: "Cashmere Wrap Scarf",
    price: 420,
    image: product3,
    category: "Accessories",
  },
  {
    id: "4",
    name: "Pearl Drop Earrings",
    price: 680,
    image: product4,
    category: "Jewelry",
    isNew: true,
  },
  {
    id: "5",
    name: "Monaco Sunglasses",
    price: 560,
    image: product5,
    category: "Eyewear",
  },
  {
    id: "6",
    name: "Heritage Wallet",
    price: 340,
    image: product6,
    category: "Leather Goods",
  },
  {
    id: "7",
    name: "Silk Charmeuse Blouse",
    price: 720,
    originalPrice: 920,
    image: product7,
    category: "Clothing",
    isSale: true,
  },
  {
    id: "8",
    name: "Classic Gold Buckle Belt",
    price: 280,
    image: product8,
    category: "Accessories",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30" id="new">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-gold uppercase mb-4 block">
              Curated Selection
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
              New Arrivals
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="text-sm font-medium text-foreground hover:text-gold transition-colors underline underline-offset-4"
          >
            View All Products →
          </motion.a>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
