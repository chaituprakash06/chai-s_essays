'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  }
  // Add more essays here when you have them
};

// Map essay IDs to file names - try multiple options for better compatibility
const essayFileMap: Record<string, string[]> = {
  "corporate-happiness": ["essay_1.html", "corporate-happiness.html"],
  "black-swan-events": ["essay_2.html", "black-swan.html"]
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
        let content = '';
        let loaded = false;
        
        // Try all possible file names for this essay
        const possibleFiles = essayFileMap[essayId] || [`${essayId}.html`];
        
        for (const fileName of possibleFiles) {
          try {
            const response = await fetch(`/${fileName}`);
            if (response.ok) {
              content = await response.text();
              loaded = true;
              break;
            }
          } catch (e) {
            console.log(`Tried ${fileName}, but failed: ${e}`);
            // Continue to next file name
          }
        }
        
        if (!loaded) {
          throw new Error(`Essay not found. Tried multiple file names.`);
        }
        
        setEssayContent(content);
      } catch (error) {
        console.error('Error loading essay:', error);
        setError('Failed to load essay. It may not exist or there was a network error. Please check your deployment settings.');
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
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-zinc-900 mb-4">Essay Not Found</h1>
              <p className="text-zinc-600">Sorry, the essay you&apos;re looking for doesn&apos;t exist.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
      
      <Card className="border-zinc-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle>{meta.title}</CardTitle>
          <p className="text-sm text-zinc-500">{meta.date}</p>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">{error}</p>
              <p className="mt-4 text-zinc-600">
                Make sure the essay files (essay_1.html, essay_2.html) are in the public directory
                of your Vercel deployment.
              </p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: essayContent }} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}