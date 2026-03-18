import { motion } from "motion/react";

interface MemoryCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
  key?: any;
}

export default function MemoryCard({ image, title, description, index }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="glass rounded-3xl overflow-hidden group relative"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0514] via-transparent to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3 className="font-serif text-2xl text-pink-200 mb-2">{title}</h3>
        <p className="text-sm text-pink-100/70 leading-relaxed font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>

      <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-pink-300">
        Memory {index + 1}
      </div>
    </motion.div>
  );
}
