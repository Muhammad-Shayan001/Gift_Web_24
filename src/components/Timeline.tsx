import { motion } from "motion/react";

const timelineEvents = [
  {
    date: "The Beginning",
    title: "Our First Meeting",
    message: "The day the world became brighter. I still remember the first time I saw your smile.",
    icon: "✨"
  },
  {
    date: "The Spark",
    title: "Special Moments",
    message: "From late-night talks to spontaneous adventures, every second with you is a treasure.",
    icon: "💖"
  },
  {
    date: "The Bond",
    title: "Sweet Memories",
    message: "Building our life together, one beautiful memory at a time. You are my home.",
    icon: "🏠"
  },
  {
    date: "The Promise",
    title: "Messages from the Heart",
    message: "I promise to love you more with every passing day. Happy Birthday, my queen.",
    icon: "👑"
  }
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl text-center text-pink-200 mb-16">Timeline of Us</h2>
        
        <div className="relative border-l-2 border-pink-500/30 ml-4 md:ml-0 md:left-1/2">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:left-[-50%]" : "md:pl-12 md:left-0"
              }`}
            >
              <div className={`absolute top-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm shadow-[0_0_15px_rgba(236,72,153,0.5)] ${
                index % 2 === 0 ? "right-[-18px] md:right-[-16px]" : "left-[-42px] md:left-[-16px]"
              }`}>
                {event.icon}
              </div>
              
              <div className="glass p-6 rounded-2xl hover:border-pink-500/50 transition-colors">
                <span className="text-xs uppercase tracking-widest text-pink-400 font-bold">{event.date}</span>
                <h3 className="font-serif text-xl text-pink-100 mt-1 mb-2">{event.title}</h3>
                <p className="text-pink-100/60 text-sm italic font-romantic text-lg">{event.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
