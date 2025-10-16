'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock search data - in a real app, this would come from an API
const searchData = [
  {
    id: 1,
    title: "Private Krankenversicherung: Der ultimative Vergleich 2024",
    slug: "private-krankenversicherung-vergleich",
    excerpt: "Erfahren Sie, welche private Krankenversicherung am besten zu Ihren Bedürfnissen passt.",
    category: "Private Krankenversicherung",
    type: "article"
  },
  {
    id: 2,
    title: "Haftpflichtversicherung: 5 wichtige Tipps für die optimale Deckung",
    slug: "haftpflichtversicherung-tipps",
    excerpt: "Die Haftpflichtversicherung ist unverzichtbar. Wir zeigen Ihnen, worauf Sie achten sollten.",
    category: "Haftpflicht",
    type: "article"
  },
  {
    id: 3,
    title: "Berufsunfähigkeitsversicherung: Schutz für Ihre Arbeitskraft",
    slug: "berufsunfaehigkeit-versicherung",
    excerpt: "Die BU-Versicherung schützt vor dem finanziellen Risiko bei Berufsunfähigkeit.",
    category: "Berufsunfähigkeit",
    type: "article"
  },
  {
    id: 4,
    title: "Lebensversicherung kündigen oder behalten? Das sollten Sie wissen",
    slug: "lebensversicherung-kuendigen",
    excerpt: "Sollten Sie Ihre Lebensversicherung kündigen oder behalten? Wir erklären die Vor- und Nachteile.",
    category: "Lebensversicherung",
    type: "article"
  },
  {
    id: 5,
    title: "Kfz-Versicherung wechseln: So sparen Sie Geld",
    slug: "kfz-versicherung-wechseln",
    excerpt: "Mit dem richtigen Wechsel Ihrer Kfz-Versicherung können Sie viel Geld sparen.",
    category: "Kfz-Versicherung",
    type: "article"
  },
  {
    id: 6,
    title: "Hausratversicherung: Was ist versichert und was nicht?",
    slug: "hausratversicherung-uebersicht",
    excerpt: "Die Hausratversicherung schützt Ihr Hab und Gut. Erfahren Sie, was versichert ist.",
    category: "Hausratversicherung",
    type: "article"
  }
];

export default function SearchBar({ placeholder = "Artikel durchsuchen...", className = "" }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setIsOpen(true);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleResultClick = (slug) => {
    router.push(`/blog/${slug}`);
    setQuery('');
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {isLoading ? (
            <svg className="h-5 w-5 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleResultClick(result.slug)}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-text-dark mb-1 line-clamp-2">
                        {result.title}
                      </h3>
                      <p className="text-xs text-text-light mb-2 line-clamp-2">
                        {result.excerpt}
                      </p>
                      <span className="inline-block px-2 py-1 text-xs bg-accent text-white rounded">
                        {result.category}
                      </span>
                    </div>
                    <div className="ml-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="px-4 py-8 text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12a8 8 0 10-8 8 7.962 7.962 0 015.291-2" />
              </svg>
              <p className="text-sm text-text-light">Keine Ergebnisse gefunden</p>
              <p className="text-xs text-text-light mt-1">Versuchen Sie andere Suchbegriffe</p>
            </div>
          ) : null}
        </div>
      )}

      {/* Overlay to close search results when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
