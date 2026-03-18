import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { Gift, Sparkles } from "lucide-react";

export default function Surprise() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleSurprise = () => {
    setShowSurprise(true);
    
    // Confetti explosion
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        {!showSurprise ? (
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236,72,153,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSurprise}
            className="group relative px-12 py-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-bold text-xl flex items-center gap-3 mx-auto shadow-xl transition-all"
          >
            <Gift className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Click for a Surprise 🎁
            <Sparkles className="w-6 h-6 absolute -top-4 -right-4 text-yellow-400 animate-pulse" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-[40px] border-2 border-pink-500/30"
          >
            <motion.h2 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-serif text-4xl md:text-6xl text-pink-200 mb-6 text-glow"
            >
              You are the most important person in my life.
            </motion.h2>
            <p className="font-romantic text-2xl text-pink-300">
              Today, tomorrow, and forever. Happy Birthday!
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex justify-center gap-4"
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="text-4xl"
                >
                  ❤️
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Background Glow for Surprise */}
      <AnimatePresence>
        {showSurprise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-pink-500/10 blur-[100px] -z-10"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
