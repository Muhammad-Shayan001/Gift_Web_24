import { motion, useScroll, useSpring } from "motion/react";
import Background from "./components/Background";
import Hero from "./components/Hero";
import MemorySection from "./components/MemorySection";
import Timeline from "./components/Timeline";
import LoveLetter from "./components/LoveLetter";
import Surprise from "./components/Surprise";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-pink-500/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 origin-left z-50"
        style={{ scaleX }}
      />

      <Background />
      
      <main className="relative z-10">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MemorySection />
        </motion.div>

        <Timeline />
        
        <LoveLetter />
        
        <Surprise />

        <footer className="py-12 text-center text-pink-200/30 text-xs uppercase tracking-[0.3em]">
          Made with ❤️ for my beautiful wife
        </footer>
      </main>
    </div>
  );
}
