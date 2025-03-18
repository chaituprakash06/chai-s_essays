import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Essay metadata - add new essays here
const essays = [
  {
    id: "corporate-happiness",
    title: "Corporate Happiness",
    date: "March 11, 2025",
    excerpt: "This essay explores the facade of 'innovative' culture in corporate law and the concept of happiness in professional service work."
  },
  {
    id: "black-swan-events", // Make sure this matches exactly with what's in the essay page component
    title: "Adapting to Black-Swan Events as a Startup Founder",
    date: "March 15, 2025",
    excerpt: "Exploring the paradoxical relationship between startup founders and rare, unexpected events that shape business trajectories."
  }
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Welcome to my collection of essays</h2>
        <p className="text-zinc-600 mb-8">
          This is where I share my thoughts on topics that matter to me. Explore my essays below.
        </p>
        
        <div className="grid gap-6 mt-8">
          {essays.map((essay) => (
            <Card key={essay.id} className="border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{essay.title}</CardTitle>
                <p className="text-sm text-zinc-500">{essay.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">{essay.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-end items-center border-t border-zinc-100 pt-4">
                <Link 
                  href={`/essays/${essay.id}`}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
                >
                  Read Essay
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}