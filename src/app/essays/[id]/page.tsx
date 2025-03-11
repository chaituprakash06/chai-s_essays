'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Essay metadata - keep in sync with home page
const essayMeta = {
  "corporate-happiness": {
    title: "Corporate Happiness",
    date: "March 11, 2025"
  },
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
        // Map essay ID to file name (you can adjust this mapping as needed)
        const fileName = essayId === 'corporate-happiness' ? 'essay_1.html' : `${essayId}.html`;
        const response = await fetch(`/${fileName}`);
        
        if (!response.ok) {
          throw new Error(`Essay not found (${response.status})`);
        }
        
        const content = await response.text();
        setEssayContent(content);
      } catch (error) {
        console.error('Error loading essay:', error);
        setError('Failed to load essay. It may not exist or there was a network error.');
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
              <p className="text-zinc-600">Sorry, the essay you're looking for doesn't exist.</p>
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
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: essayContent }} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}