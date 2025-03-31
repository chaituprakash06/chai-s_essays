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
  }
];

export default function Home() {
  return (
    <div className="pg-home">
      <h1 className="pg-home-title">Chai&apos;s Essays</h1>
      <p className="pg-home-intro">
        This is where I share my thoughts on topics that matter to me. Explore my essays below.
      </p>
      
      <div className="pg-essay-list">
        {essays.map((essay) => (
          <div key={essay.id} className="pg-essay-item">
            <Link 
              href={`/essays/${essay.id}`}
              className="pg-essay-item-title"
            >
              {essay.title}
            </Link>
            <span className="pg-essay-item-date">{essay.date}</span>
            <p className="pg-essay-item-excerpt">{essay.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}