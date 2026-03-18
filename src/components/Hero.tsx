import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-8 inline-block"
        >
          <Heart className="w-24 h-24 text-pink-500 fill-pink-500/50 filter drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
        </motion.div>

        <h1 className="font-serif text-5xl md:text-8xl mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 bg-clip-text text-transparent font-bold tracking-tight text-glow">
          Happy Birthday <br /> My Love ❤️
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-romantic text-2xl md:text-4xl text-pink-200/80"
        >
          The most precious person in my life
        </motion.p>
      </motion.div>

      {/* Floating Hearts in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "vw", 
              y: "100vh", 
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: "-10vh",
              x: (Math.random() * 100 - 50) + "vw"
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute"
          >
            <Heart className="text-pink-400 fill-pink-400/30" />
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-pink-200/50 flex flex-col items-center gap-2"
      >
        <span className="text-sm uppercase tracking-widest font-sans">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-pink-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
