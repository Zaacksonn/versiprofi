// Data fetching functions for headless CMS integration
// This simulates API calls to Strapi, Contentful, or other headless CMS

// Mock data - in production, this would come from your CMS API
const mockPosts = [
  {
    id: 1,
    title: "Private Krankenversicherung: Der ultimative Vergleich 2024",
    slug: "private-krankenversicherung-vergleich",
    excerpt: "Erfahren Sie, welche private Krankenversicherung am besten zu Ihren Bedürfnissen passt. Unser detaillierter Vergleich hilft bei der Entscheidung.",
    content: `
      <p>Die Wahl der richtigen privaten Krankenversicherung (PKV) ist eine der wichtigsten finanziellen Entscheidungen, die Sie treffen können. In unserem umfassenden Vergleich 2024 zeigen wir Ihnen, worauf Sie achten müssen und welche Anbieter die besten Konditionen bieten.</p>
      
      <h2>Was ist eine private Krankenversicherung?</h2>
      <p>Die private Krankenversicherung ist eine Alternative zur gesetzlichen Krankenversicherung (GKV) und richtet sich hauptsächlich an Selbstständige, Beamte und Angestellte mit einem Bruttoeinkommen über der Versicherungspflichtgrenze.</p>
      
      <h2>Vorteile der privaten Krankenversicherung</h2>
      <ul>
        <li><strong>Bessere Leistungen:</strong> Umfangreichere Behandlungsmöglichkeiten und kürzere Wartezeiten</li>
        <li><strong>Individuelle Tarife:</strong> Anpassung an Ihre persönlichen Bedürfnisse und Risiken</li>
        <li><strong>Kostentransparenz:</strong> Klare Übersicht über Beiträge und Leistungen</li>
        <li><strong>Altersrückstellungen:</strong> Aufbau von Rücklagen für das Alter</li>
      </ul>
    `,
    category: {
      id: 1,
      name: "Private Krankenversicherung",
      slug: "private-krankenversicherung"
    },
    author: {
      id: 1,
      name: "Dr. Michael Weber",
      title: "Versicherungsexperte",
      bio: "Über 15 Jahre Erfahrung in der Versicherungsbranche, spezialisiert auf Krankenversicherungen.",
      avatar: "/images/authors/michael-weber.jpg"
    },
    featuredImage: {
      url: "/images/blog/pkv-vergleich.jpg",
      alt: "Private Krankenversicherung Vergleich",
      width: 800,
      height: 400
    },
    publishedAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
    readTime: 8,
    tags: ["PKV", "Krankenversicherung", "Vergleich", "Gesundheit", "Versicherung"],
    seo: {
      title: "Private Krankenversicherung Vergleich 2024: Die besten PKV-Tarife",
      description: "Entdecken Sie die besten privaten Krankenversicherungen 2024. Umfassender Vergleich von Allianz, Debeka, DKV & mehr. Jetzt PKV-Tarife vergleichen!",
      keywords: "private krankenversicherung, PKV vergleich, krankenversicherung privat, PKV anbieter, private krankenversicherung test"
    },
    featured: true
  },
  {
    id: 2,
    title: "Haftpflichtversicherung: 5 wichtige Tipps für die optimale Deckung",
    slug: "haftpflichtversicherung-tipps",
    excerpt: "Die Haftpflichtversicherung ist unverzichtbar. Wir zeigen Ihnen, worauf Sie bei der Auswahl achten sollten und welche Deckungssummen sinnvoll sind.",
    content: "Haftpflichtversicherung Content...",
    category: {
      id: 2,
      name: "Haftpflicht",
      slug: "haftpflicht"
    },
    author: {
      id: 2,
      name: "Sarah Müller",
      title: "Finanzberaterin",
      bio: "Expertin für Haftpflicht- und Berufsunfähigkeitsversicherungen.",
      avatar: "/images/authors/sarah-mueller.jpg"
    },
    featuredImage: {
      url: "/images/blog/haftpflicht-tipps.jpg",
      alt: "Haftpflichtversicherung Tipps",
      width: 800,
      height: 400
    },
    publishedAt: "2024-01-12T10:00:00.000Z",
    updatedAt: "2024-01-12T10:00:00.000Z",
    readTime: 6,
    tags: ["Haftpflicht", "Versicherung", "Tipps", "Deckung"],
    seo: {
      title: "Haftpflichtversicherung: 5 wichtige Tipps für optimale Deckung",
      description: "Entdecken Sie die wichtigsten Tipps für Ihre Haftpflichtversicherung. Optimale Deckungssummen und worauf Sie achten sollten.",
      keywords: "haftpflichtversicherung, haftpflicht tipps, versicherung deckung, haftpflicht vergleich"
    },
    featured: false
  },
  {
    id: 3,
    title: "Berufsunfähigkeitsversicherung: Schutz für Ihre Arbeitskraft",
    slug: "berufsunfaehigkeit-versicherung",
    excerpt: "Die BU-Versicherung schützt vor dem finanziellen Risiko bei Berufsunfähigkeit. Erfahren Sie, wie Sie die richtige Police finden.",
    content: "Berufsunfähigkeitsversicherung Content...",
    category: {
      id: 3,
      name: "Berufsunfähigkeit",
      slug: "berufsunfaehigkeit"
    },
    author: {
      id: 1,
      name: "Dr. Michael Weber",
      title: "Versicherungsexperte",
      bio: "Über 15 Jahre Erfahrung in der Versicherungsbranche.",
      avatar: "/images/authors/michael-weber.jpg"
    },
    featuredImage: {
      url: "/images/blog/bu-versicherung.jpg",
      alt: "Berufsunfähigkeitsversicherung",
      width: 800,
      height: 400
    },
    publishedAt: "2024-01-10T10:00:00.000Z",
    updatedAt: "2024-01-10T10:00:00.000Z",
    readTime: 10,
    tags: ["Berufsunfähigkeit", "BU", "Versicherung", "Arbeitskraft"],
    seo: {
      title: "Berufsunfähigkeitsversicherung: Schutz für Ihre Arbeitskraft",
      description: "Alles über die Berufsunfähigkeitsversicherung. Schützen Sie Ihre Arbeitskraft mit der richtigen BU-Police.",
      keywords: "berufsunfähigkeitsversicherung, BU versicherung, arbeitskraft absichern, berufsunfähigkeit"
    },
    featured: false
  },
  {
    id: 4,
    title: "Lebensversicherung kündigen oder behalten? Das sollten Sie wissen",
    slug: "lebensversicherung-kuendigen",
    excerpt: "Sollten Sie Ihre Lebensversicherung kündigen oder behalten? Wir erklären die Vor- und Nachteile und helfen bei der Entscheidung.",
    content: "Lebensversicherung Content...",
    category: {
      id: 4,
      name: "Lebensversicherung",
      slug: "lebensversicherung"
    },
    author: {
      id: 3,
      name: "Thomas Schmidt",
      title: "Rechtsexperte",
      bio: "Jurist mit Schwerpunkt Versicherungsrecht.",
      avatar: "/images/authors/thomas-schmidt.jpg"
    },
    featuredImage: {
      url: "/images/blog/lebensversicherung.jpg",
      alt: "Lebensversicherung kündigen",
      width: 800,
      height: 400
    },
    publishedAt: "2024-01-08T10:00:00.000Z",
    updatedAt: "2024-01-08T10:00:00.000Z",
    readTime: 7,
    tags: ["Lebensversicherung", "Kündigung", "Versicherung", "Rente"],
    seo: {
      title: "Lebensversicherung kündigen oder behalten? Entscheidungshilfe",
      description: "Sollten Sie Ihre Lebensversicherung kündigen? Wir helfen bei der Entscheidung und zeigen Alternativen auf.",
      keywords: "lebensversicherung kündigen, lebensversicherung behalten, versicherung kündigung"
    },
    featured: false
  },
  {
    id: 5,
    title: "Kfz-Versicherung wechseln: So sparen Sie Geld",
    slug: "kfz-versicherung-wechseln",
    excerpt: "Mit dem richtigen Wechsel Ihrer Kfz-Versicherung können Sie viel Geld sparen. Hier sind die wichtigsten Tipps und Tricks.",
    content: "Kfz-Versicherung Content...",
    category: {
      id: 5,
      name: "Kfz-Versicherung",
      slug: "kfz-versicherung"
    },
    author: {
      id: 2,
      name: "Sarah Müller",
      title: "Finanzberaterin",
      bio: "Expertin für Kfz- und Sachversicherungen.",
      avatar: "/images/authors/sarah-mueller.jpg"
    },
    featuredImage: {
      url: "/images/blog/kfz-versicherung.jpg",
      alt: "Kfz-Versicherung wechseln",
      width: 800,
      height: 400
    },
    publishedAt: "2024-01-05T10:00:00.000Z",
    updatedAt: "2024-01-05T10:00:00.000Z",
    readTime: 5,
    tags: ["Kfz-Versicherung", "Wechsel", "Sparen", "Auto"],
    seo: {
      title: "Kfz-Versicherung wechseln: So sparen Sie Geld",
      description: "Sparen Sie bei Ihrer Kfz-Versicherung! Tipps zum Wechsel und worauf Sie achten sollten.",
      keywords: "kfz versicherung wechseln, auto versicherung sparen, kfz versicherung vergleich"
    },
    featured: false
  },
  {
    id: 6,
    title: "Hausratversicherung: Was ist versichert und was nicht?",
    slug: "hausratversicherung-uebersicht",
    excerpt: "Die Hausratversicherung schützt Ihr Hab und Gut. Erfahren Sie, was versichert ist und worauf Sie bei der Police achten sollten.",
    content: "Hausratversicherung Content...",
    category: {
      id: 6,
      name: "Hausratversicherung",
      slug: "hausratversicherung"
    },
    author: {
      id: 2,
      name: "Sarah Müller",
      title: "Finanzberaterin",
      bio: "Expertin für Sachversicherungen.",
      avatar: "/images/authors/sarah-mueller.jpg"
    },
    featuredImage: {
      url: "/images/blog/hausratversicherung.jpg",
      alt: "Hausratversicherung Übersicht",
      width: 800,
      height: 400
    },
    publishedAt: "2024-01-03T10:00:00.000Z",
    updatedAt: "2024-01-03T10:00:00.000Z",
    readTime: 6,
    tags: ["Hausratversicherung", "Sachversicherung", "Hausrat", "Schutz"],
    seo: {
      title: "Hausratversicherung: Was ist versichert und was nicht?",
      description: "Alles über die Hausratversicherung. Was ist versichert und worauf Sie achten sollten.",
      keywords: "hausratversicherung, sachversicherung, hausrat versichert, hausratversicherung vergleich"
    },
    featured: false
  }
];

const mockCategories = [
  { id: 1, name: "Private Krankenversicherung", slug: "private-krankenversicherung", count: 12 },
  { id: 2, name: "Haftpflicht", slug: "haftpflicht", count: 8 },
  { id: 3, name: "Berufsunfähigkeit", slug: "berufsunfaehigkeit", count: 15 },
  { id: 4, name: "Lebensversicherung", slug: "lebensversicherung", count: 10 },
  { id: 5, name: "Kfz-Versicherung", slug: "kfz-versicherung", count: 6 },
  { id: 6, name: "Hausratversicherung", slug: "hausratversicherung", count: 4 }
];

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.versiprofi.de';
const API_TOKEN = process.env.CMS_API_TOKEN;

// Helper function to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Generic API fetch function
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(API_TOKEN && { 'Authorization': `Bearer ${API_TOKEN}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    // In development, use mock data
    if (process.env.NODE_ENV === 'development') {
      await delay(100); // Simulate network delay
      return mockPosts;
    }

    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    // Fallback to mock data in case of error
    return mockPosts;
  }
}

// Blog Posts API Functions
export async function getPosts(options = {}) {
  const {
    limit = 10,
    offset = 0,
    category = null,
    featured = null,
    search = null,
    sort = 'publishedAt:desc'
  } = options;

  try {
    // In production, this would be a real API call
    if (process.env.NODE_ENV === 'production') {
      const params = new URLSearchParams({
        _limit: limit,
        _start: offset,
        _sort: sort,
        ...(category && { 'category.slug': category }),
        ...(featured !== null && { featured }),
        ...(search && { _q: search })
      });

      return await fetchAPI(`/posts?${params}`);
    }

    // Development: use mock data with filtering
    let filteredPosts = [...mockPosts];

    if (category) {
      filteredPosts = filteredPosts.filter(post => 
        post.category.slug === category
      );
    }

    if (featured !== null) {
      filteredPosts = filteredPosts.filter(post => 
        post.featured === featured
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower)
      );
    }

    // Sort posts
    filteredPosts.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return sort.includes('desc') ? dateB - dateA : dateA - dateB;
    });

    // Apply pagination
    const paginatedPosts = filteredPosts.slice(offset, offset + limit);

    return {
      data: paginatedPosts,
      meta: {
        total: filteredPosts.length,
        limit,
        offset,
        hasMore: offset + limit < filteredPosts.length
      }
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { data: [], meta: { total: 0, limit, offset, hasMore: false } };
  }
}

export async function getPostBySlug(slug) {
  try {
    // In production, this would be a real API call
    if (process.env.NODE_ENV === 'production') {
      return await fetchAPI(`/posts?slug=${slug}&_populate=*`);
    }

    // Development: use mock data
    const post = mockPosts.find(p => p.slug === slug);
    
    if (!post) {
      throw new Error(`Post with slug "${slug}" not found`);
    }

    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getFeaturedPosts(limit = 3) {
  const result = await getPosts({ featured: true, limit });
  return result.data;
}

export async function getLatestPosts(limit = 5) {
  const result = await getPosts({ limit });
  return result.data;
}

export async function getRelatedPosts(postId, category, limit = 3) {
  const result = await getPosts({ 
    category: category.slug, 
    limit: limit + 1 
  });
  
  // Filter out the current post
  return result.data.filter(post => post.id !== postId).slice(0, limit);
}

// Categories API Functions
export async function getCategories() {
  try {
    // In production, this would be a real API call
    if (process.env.NODE_ENV === 'production') {
      return await fetchAPI('/categories');
    }

    // Development: use mock data
    return mockCategories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getCategoryBySlug(slug) {
  try {
    const categories = await getCategories();
    return categories.find(cat => cat.slug === slug);
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

// Search API Functions
export async function searchPosts(query, options = {}) {
  const { limit = 10, offset = 0 } = options;
  
  try {
    const result = await getPosts({ 
      search: query, 
      limit, 
      offset 
    });
    
    return result;
  } catch (error) {
    console.error('Error searching posts:', error);
    return { data: [], meta: { total: 0, limit, offset, hasMore: false } };
  }
}

// Authors API Functions
export async function getAuthors() {
  try {
    // In production, this would be a real API call
    if (process.env.NODE_ENV === 'production') {
      return await fetchAPI('/authors');
    }

    // Development: extract unique authors from posts
    const authors = mockPosts.reduce((acc, post) => {
      const existingAuthor = acc.find(author => author.id === post.author.id);
      if (!existingAuthor) {
        acc.push(post.author);
      }
      return acc;
    }, []);

    return authors;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

export async function getAuthorById(id) {
  try {
    const authors = await getAuthors();
    return authors.find(author => author.id === id);
  } catch (error) {
    console.error('Error fetching author:', error);
    return null;
  }
}

// Utility Functions
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function generateExcerpt(content, maxLength = 160) {
  const plainText = content.replace(/<[^>]*>/g, '');
  return plainText.length > maxLength 
    ? plainText.substring(0, maxLength) + '...'
    : plainText;
}
