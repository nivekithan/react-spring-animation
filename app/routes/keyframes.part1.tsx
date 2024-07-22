import { motion } from "framer-motion";
export default function KeyframesAnimation() {
  return (
    <div className="h-screen bg-violet-700 grid place-items-center">
      <motion.div
        className="bg-white w-80 h-80"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["10%", "10%", "100%", "100%", "10%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
        }}
      ></motion.div>
    </div>
  );
}
