import { motion } from "framer-motion";
import { useState } from "react";

const cardVariants = {
  front: {
    rotateY: 0,
  },
  back: {
    rotateY: 180,
  },
};

const FlippingCard = () => {
  const [isFront, setIsFront] = useState(true);

  return (
    <div
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        variants={cardVariants}
        initial={false}
        animate={isFront ? "front" : "back"}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="relative h-40 w-64 shadow-lg [transformStyle:preserve-3d]"
        onClick={() => setIsFront(!isFront)}
      >
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white text-xl font-bold text-black [backfaceVisibility:hidden]">
          Front Side
        </div>

        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-blue-500 text-xl font-bold text-white [backfaceVisibility:hidden] [transform:rotateY(180deg)]">
          Back Side
        </div>
      </motion.div>
    </div>
  );
};

export { FlippingCard };
