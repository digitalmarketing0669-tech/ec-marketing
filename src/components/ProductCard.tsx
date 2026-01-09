import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary mb-4">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-gold text-primary text-xs font-medium tracking-wide uppercase">
              New
            </span>
          )}
          {isSale && (
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium tracking-wide uppercase">
              Sale
            </span>
          )}
        </div>

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-background transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? "fill-gold text-gold" : "text-foreground"
            }`}
          />
        </motion.button>

        {/* Quick Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 flex gap-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 text-sm font-medium tracking-wide uppercase hover:bg-gold transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 flex items-center justify-center bg-background text-foreground hover:bg-gold hover:text-primary transition-colors"
              >
                <Eye className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase mb-1">
          {category}
        </p>
        <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-gold transition-colors">
          {name}
        </h3>
        <div className="flex items-center justify-center gap-3">
          <span className="text-lg font-medium text-foreground">
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
