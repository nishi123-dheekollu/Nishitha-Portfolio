import { motion } from "framer-motion";

function FadeTransition({ show }) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black z-50 pointer-events-none"
    />
  );
}

export default FadeTransition;