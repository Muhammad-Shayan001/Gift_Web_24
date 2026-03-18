import MemoryCard from "./MemoryCard";

const memories = [
  {
    image: "https://picsum.photos/seed/anime-love-1/800/1000",
    title: "Walking Together",
    description: "Under the cherry blossoms, every step with you feels like a dream come true."
  },
  {
    image: "https://picsum.photos/seed/anime-love-2/800/1000",
    title: "Sunset Whispers",
    description: "The sky turned gold, but your eyes were the most beautiful thing I saw that day."
  },
  {
    image: "https://picsum.photos/seed/anime-love-3/800/1000",
    title: "Holding Hands",
    description: "A simple touch that speaks volumes. I never want to let go of your hand."
  },
  {
    image: "https://picsum.photos/seed/anime-love-4/800/1000",
    title: "Starry Night",
    description: "Counting stars and making wishes, but I already have everything I wished for."
  }
];

export default function MemorySection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-6xl text-pink-200 mb-4">Our Beautiful Journey</h2>
        <p className="font-romantic text-xl text-pink-300/60">Capturing moments that define us</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {memories.map((memory, index) => (
          <MemoryCard 
            key={index} 
            image={memory.image}
            title={memory.title}
            description={memory.description}
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}
