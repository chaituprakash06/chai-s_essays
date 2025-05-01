'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

// Define a type for the essay metadata
type EssayMetadata = {
  title: string;
  date: string;
};

// Define a type for the essayMeta object with index signature
type EssayMetaCollection = {
  [key: string]: EssayMetadata;
};

// Essay metadata - keep in sync with home page
const essayMeta: EssayMetaCollection = {
  "corporate-happiness": {
    title: "Corporate Happiness",
    date: "March 11, 2025"
  },
  "black-swan-events": {
    title: "Adapting to Black-Swan Events as a Startup Founder",
    date: "March 15, 2025"
  },
  "rules-in-europe": {
    title: "History of Rules in Europe",
    date: "March 23, 2025"
  },
  "reasoning-for-programming": {
    title: "Reasoning for Programming",
    date: "April 22, 2025"
  }
  // Add more essays here when you have them
};

export default function EssayPage() {
  const params = useParams();
  const essayId = params.id as string;
  const [essayContent, setEssayContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get metadata for this essay
  const meta = essayMeta[essayId];

  // Load the essay content
  useEffect(() => {
    const loadEssay = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simplified switch to determine which essay content to show
        let content = '';
        
        if (essayId === 'corporate-happiness') {
          content = `<article class="essay-content">
            <p>This essay sprung out of a conversation with my business partner. For context, I studied law at the London School of Economics for three years before deciding to start a AI business. Whilst this decision emerged from my summers contemplating what I'd do with my life, it was my internship at the law firm Goodwin Procter that sealed the deal (in deciding to do a startup).</p>

            <p>If you're not a law student, you may not be aware that Goodwin is the world's premier law firm specialising in technology. Their clients include names like Y Combinator, OpenAI and Microsoft and so naturally a culture of entrepreneurship and innovation is imbued in the firm's ethos.</p>

            <p>From the first day of the internship I sought answers. Why is the firm structured in the way it is? What makes Goodwin important? More importantly, why do we so strongly enforce these AI regulations if our goal is to encourage entrepreneurship and innovation?</p>

            <p>The latter question was the subject of a heated discussion between myself and a senior associate. I argued that lawyers are narrow-minded and their expertise on complying with regulations is misconstrued as innovation. She argued that safety and due process always took priority over technical progress (hence her siding with the need to strongly enforce regulations). This was my first taste into why corporate happiness could be a facade.</p>

            <p>At this point in the internship I mentally checked out. I felt as if the 'innovative' culture of the firm had been mispresented to me, because the unfortunate focus of business in the UK and Europe is complying with regulatory challenges. None of these lawyers write code, and certainly none of them had faced the pain of customers not caring about their technology. It's easy to side with due process and rule-based innovation when you aren't the one creating the technology.</p>

            <p>The last day had arrived, and my final partner interview was due. I figured I would leave the internship knowing whether these senior lawyers are happy with their way of business. Most of my peers asked their interviewers about the firm's culture, the kinds of work they'd be expected to perform and what the hardest part of the job was. I only had one important question that needed answering. I asked my interviewing partner (the head member of the recruitment team): "Would you say you're happy"?</p>

            <p>She was surprised as expected, replying that's the first she'd been asked that question. Then she described how she often puts up with a borderline inhumane number of hours, and extremely stressful transactions when her clients require urgent attention. She described how her happiness stemmed not from the brutal stress of her work but the reward of suffering through it with her peers. For me (a nearly fresh graduate), the answer did not seem to indicate a convincing enough 'yes' to my question and it was at that point I realised a new strain of happiness most professional service workers trick themselves into chasing: "corporate happiness".</p>
          </article>`;
        } else if (essayId === 'black-swan-events') {
          content = `<article class="essay-content">
            <p>Starting TalentLex made me realise the only useful skill that matters in any kind of startup is adapting to black-swan events.</p>

            <p>A quick definition of what black swan events are: 'rare and unexpected events with severe consequences with the potential to cause a change in a formerly held belief or system of beliefs'.</p>

            <p>In Nassim Nicholas Taleb's book, black swans are described as rare events that only occur due to the fact that we consider them unlikely. 9/11 was a black swan event, because no one expected a terrorist attack on the twin towers and the Indian Ocean Pacific Tsunami in 2004 was a black swan, because no one could have predicted a natural disaster of such scale.</p>

            <p>When you write code in anticipation of users using the output of that code, all sorts of unexpected things happen: the code breaks, no one cares or you get less users than expected. The default state of existence is silence, which makes revenue that much more exciting, because it is such a rare event. Yet if one were to take the advice of successful startup incubators like Y Combinator and optimise for revenue from day 1, is there such a thing as a black swan in a startup at all?</p>

            <p>In a recent video (as of this date) by Dalton Caldwell and Michael Seibel, the idea of the 'hedonic treadmill' was explored. This is the idea that we adapt to life's circumstances regardless of the situation: bad or good. Therefore one might argue startup founders are the only group of people resistant to the extreme effects of black swan events, because the unexpected occurs on a daily basis.</p>

            <p>Nonethelss I want to propose an alternative truth: it is your job as a founder to chase black swans, because they are the best indicator that you are moving in some direction. In a society where starting a business is glorified, black swans are not the same as they were 20 years ago. This means chasing smaller markets or building seemingly unfeasible tech should seem like a rarity, because they are all signs of doing something different.</p>
          </article>`;
          } else if (essayId === 'rules-in-europe') {
          content = `<article class="essay-content">
          <p>Europe is a depressing place to build technology products. Having lived in London and soaked up the European approach to innovation for three years, I realised that the region's history sheds useful light on why this is so.</p>

          <p>If you tell a friend your business idea in most European countries, their first instinct will be to question the long-run viability of your business, how feasible your technology is etc… In the United States, that same person is more likely to look for ways in which your idea can come to fruition. The American Dream relies on every working-class individual believing they can be a millionaire, whilst Europe's history is rooted in robust regulatory enforcement.</p>
          
          <p>Take the Cold War for example; Germany served as a battleground between the Soviets and Americans given the strict need to prevent recurring warfare post-WW2. There was a strict sense of embedding conformity to regulations and securing lasting peace, whilst America focused on becoming a global superpower. People in Europe are very focused on preserving their rights and 'getting the most' out of the law.</p>
          
          <p>This inherently punishes innovators, because most large-scale innovation in America came from legal grey areas (take for example Facebook gambling with users' privacy, or Airbnb introducing the foreign concept of staying in strangers' homes, or Uber introducing the grey area of hopping into strangers' cars). These ideas presented ethical questions but turned out to satisfy large-scale consumer demand in the long run. I would bet that none of these ideas could possibly take off in Europe, where people are less open to finding newer (yet questionable) ways of conducting economic trade.</p>
          
          <p>Finally, a note on the UK. I suspect the UK has immense potential to be more innovative, however much of the infrastructure should change. The UK is home to Sir Tim Berners-Lee (founder of the World Wide Web), Google's DeepMind and two of the greatest technical universities in the world (Oxbridge). The reason for the UK's stagnation in technology compared to the US is because there is instilled in it a deep service-based economy, so most technical ideas do not extend beyond these sectors (i.e. finance, retail, hospitality). Examples of great technical successes include: Revolut (pioneering digital finance), the mass adoption of self-service ordering and AI kiosks (at least in London).</p>
                  </article>`;
        } else if (essayId === 'reasoning-for-programming') {
          content = `<article class="essay-content">
            <p>One thing I've found really helpful in becoming a better programmer is learning how to deduce. This was a core component of law school.</p>

            <p>In a case, a successful lawyer would lay out their skeleton arguments at the very beginning following the framework "my primary limb rests on X, if not Y". Their argument would follow a series of cascading limbs upon which each subsequent argument attacks a nuanced point of law. This ensures the highest chances of overall success.</p>

            <p>In a software problem, a developer aspires to save time by inferring as many clues as possible before devoting hours attacking the substantive problem itself. For example, if POST request is coming from fileA.ts, then some json object from fileB.ts isn't getting sent properly which can be deduced from network responses etc...</p>

            <p>This 'deduction' phase involves making assumptions that any rational developer would make, thereby giving them the best chance of solving the crux of the problem. Most problems are not real algorithmic problems anyway; they just involve reattaching pieces of a puzzle that consists of abstractions. These abstractions are built on hard software problems solved by even smarter developers who came before.</p>

            <p>This tells me traditional systems thinking and legal thinking are not too different - one focuses on the deduction of fact-patterns from human scenarios, and the other focuses on deducing logical facts of the matter in computer scenarios.</p>
          </article>`;
          } else {
          console.error("Unknown essay ID:", essayId);
          throw new Error("Essay not found");
        }
        
        setEssayContent(content);
      } catch (error) {
        console.error('Error loading essay:', error);
        setError('Failed to load essay. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    if (essayId) {
      loadEssay();
    }
  }, [essayId]);

  // If the essay doesn't exist in our metadata
  if (!meta) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="essay-card">
          <div className="py-12 text-center">
            <h1 className="text-2xl font-bold text-zinc-900 mb-4">Essay Not Found</h1>
            <p className="text-zinc-600">Sorry, the essay you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-6">
        <Link 
          href="/"
          className="text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
      
      <div className="essay-card">
        <div className="essay-header">
          <h1 className="essay-title">{meta.title}</h1>
          <p className="essay-date">{meta.date}</p>
        </div>
        <div className="essay-body">
          {loading ? (
            <div className="py-12 flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: essayContent }} />
          )}
        </div>
      </div>
    </div>
  );
}