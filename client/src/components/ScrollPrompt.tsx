import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollPrompt = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.6 });

  return (
    <><motion.div
          className="scroll-prompt"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
        >
          ↓ Scroll
        </motion.div>

    </>
  );
};
export default ScrollPrompt;