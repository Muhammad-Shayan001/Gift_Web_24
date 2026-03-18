import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Mail, Heart } from "lucide-react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-6 flex flex-col items-center">
      <h2 className="font-serif text-4xl text-pink-200 mb-12">A Letter for You</h2>
      
      <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="relative w-full h-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Envelope Back */}
          <div className="absolute inset-0 bg-pink-900/40 rounded-lg border-2 border-pink-500/20 shadow-2xl" />
          
          {/* The Letter */}
          <motion.div
            variants={{
              closed: { y: 0, scale: 0.9, opacity: 0 },
              open: { y: -150, scale: 1, opacity: 1 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute inset-x-4 top-4 bottom-4 bg-[#fffaf0] rounded-md p-8 shadow-xl overflow-y-auto"
          >
            <div className="font-romantic text-2xl text-pink-900 leading-relaxed">
              <p className="mb-4">My Dearest Wife,</p>
              <p className="mb-4">
                On this special day, I wanted to take a moment to tell you how much you mean to me. 
                You are the light that guides me through the darkest nights and the joy that fills my brightest days.
              </p>
              <p className="mb-4">
                Every moment spent with you is a gift, and I am so incredibly lucky to call you mine. 
                Your strength, your kindness, and your beautiful soul inspire me every single day.
              </p>
              <p className="mb-4">
                May your birthday be as wonderful and magical as you are. I love you more than words can ever express.
              </p>
              <p className="text-right">Forever Yours, <br /> ❤️</p>
            </div>
          </motion.div>

          {/* Envelope Front Flap */}
          <motion.div
            variants={{
              closed: { rotateX: 0, zIndex: 10 },
              open: { rotateX: 180, zIndex: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-x-0 top-0 h-1/2 bg-pink-800 rounded-t-lg origin-bottom flex items-center justify-center border-b border-pink-700/50"
          >
            <Heart className="text-pink-300 fill-pink-300 w-12 h-12" />
          </motion.div>

          {/* Envelope Front Bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-pink-700 rounded-b-lg z-20 flex items-center justify-center">
             {!isOpen && (
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="flex items-center gap-2 text-pink-100 uppercase tracking-widest text-xs font-bold"
               >
                 <Mail className="w-4 h-4" />
                 Open Me
               </motion.div>
             )}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 text-pink-300/60 italic font-romantic text-xl"
          >
            Click the letter to close it
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
