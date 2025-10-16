export async function GET() {
  const baseUrl = 'https://versiprofi.de';
  
  // Static pages
  const staticPages = [
    {
      url: '',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: '/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: '/ueber-uns',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/kontakt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/impressum',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: '/datenschutz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Blog posts (in a real app, this would come from a CMS or database)
  const blogPosts = [
    {
      url: '/blog/private-krankenversicherung-vergleich',
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/haftpflichtversicherung-tipps',
      lastModified: new Date('2024-01-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/berufsunfaehigkeit-versicherung',
      lastModified: new Date('2024-01-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/lebensversicherung-kuendigen',
      lastModified: new Date('2024-01-08'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/kfz-versicherung-wechseln',
      lastModified: new Date('2024-01-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/hausratversicherung-uebersicht',
      lastModified: new Date('2024-01-03'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const allPages = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
