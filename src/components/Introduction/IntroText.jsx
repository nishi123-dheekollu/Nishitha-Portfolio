import { motion } from "framer-motion";

function IntroText() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">

      <div className="text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.6em] text-slate-400 text-lg"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-6xl md:text-8xl font-black text-white"
        >
          NISHITHA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-5xl md:text-7xl font-black text-cyan-400 mt-2"
        >
          HEADQUARTERS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1] }}
          transition={{
            delay: 1.8,
            duration: 1,
            repeat: Infinity,
          }}
          className="mt-8 text-3xl text-cyan-400"
        >
          |
        </motion.div>

      </div>

    </div>
  );
}

export default IntroText;