import Link from "next/link";

// Essay metadata - add new essays here
const essays = [
  {
    id: "corporate-happiness",
    title: "Corporate Happiness",
    date: "March 11, 2025",
    excerpt: "This essay explores the facade of 'innovative' culture in corporate law and the concept of happiness in professional service work."
  },
  {
    id: "black-swan-events",
    title: "Adapting to Black-Swan Events as a Startup Founder",
    date: "March 15, 2025",
    excerpt: "Exploring the paradoxical relationship between startup founders and rare, unexpected events that shape business trajectories."
  },
  {
    id: "rules-in-europe",
    title: "History of Rules in Europe",
    date: "March 23, 2025",
    excerpt: "My view on why Europe fails to innovate"
  },
  {
    id: "reasoning-for-programming",
    title: "Reasoning for Programming",
    date: "April 22, 2025",
    excerpt: "How learning to deduce is really helpful in solving programming bugs"
  },
  {
    id: "my-predictions-for-legaltech",
    title: "LegalTech and AI",
    date: "June 22, 2025",
    excerpt: "Why building AI for law is harder than it sounds"
  }
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <p className="text-zinc-600 max-w-2xl">
          This is where I share my thoughts on topics that matter to me. Explore my essays below.
        </p>
      </div>
      
      <div className="space-y-6">
        {essays.map((essay) => (
          <div key={essay.id} className="essay-item">
            <Link 
              href={`/essays/${essay.id}`}
              className="block group"
            >
              <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors mb-1">
                {essay.title}
              </h2>
              <p className="text-sm text-zinc-500 mb-2">{essay.date}</p>
              <p className="text-zinc-600">{essay.excerpt}</p>
              <div className="mt-3 flex">
                <span className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">
                  Read essay →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}