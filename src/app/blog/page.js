import Link from 'next/link';
import { Metadata } from 'next';
import SearchBar from '@/components/SearchBar';
import Layout from '@/components/Layout';
import { getPosts, getCategories } from '@/lib/api';

export const metadata = {
  title: "Versicherungs-Ratgeber - Alle Artikel im Überblick",
  description: "Entdecken Sie alle unsere Versicherungs-Ratgeber-Artikel. Von Krankenversicherung über Haftpflicht bis hin zur Berufsunfähigkeitsversicherung - finden Sie die Informationen, die Sie brauchen.",
  openGraph: {
    title: "Versicherungs-Ratgeber - Alle Artikel im Überblick",
    description: "Entdecken Sie alle unsere Versicherungs-Ratgeber-Artikel. Von Krankenversicherung über Haftpflicht bis hin zur Berufsunfähigkeitsversicherung.",
    url: 'https://versiprofi.de/blog',
  },
};

export default async function BlogPage({ searchParams }) {
  const { category, page = 1, search } = searchParams;
  const limit = 6;
  const offset = (parseInt(page) - 1) * limit;

  const [postsResult, categories] = await Promise.all([
    getPosts({ 
      category: category || null, 
      search: search || null,
      limit, 
      offset 
    }),
    getCategories()
  ]);

  const { data: posts, meta } = postsResult;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16 -mx-4 lg:-mx-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">Versicherungs-Ratgeber</h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Entdecken Sie fundierte Informationen und praktische Tipps zu allen wichtigen 
              Versicherungsthemen. Von der Krankenversicherung bis zur Berufsunfähigkeitsversicherung.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-secondary -mx-4 lg:-mx-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search Bar */}
              <div className="flex-1">
                <SearchBar placeholder="Artikel durchsuchen..." />
              </div>
              
              {/* Category Filter */}
              <div className="md:w-64">
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  defaultValue={category || ''}
                >
                  <option value="">Alle Kategorien</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="flex items-center justify-between text-sm text-text-light mb-2">
                  <span className="bg-accent text-white px-2 py-1 rounded text-xs">
                    {post.category.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span>{post.readTime} Min</span>
                    <span>•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('de-DE')}</span>
                  </div>
                </div>
                <h2 className="heading-3 text-lg mb-3">
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="body-text text-text-light mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-accent font-semibold hover:underline"
                >
                  Weiterlesen →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {meta.total > limit && (
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2">
              {parseInt(page) > 1 && (
                <Link 
                  href={`/blog?page=${parseInt(page) - 1}${category ? `&category=${category}` : ''}`}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Zurück
                </Link>
              )}
              
              {Array.from({ length: Math.ceil(meta.total / limit) }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}${category ? `&category=${category}` : ''}`}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    pageNum === parseInt(page)
                      ? 'text-white bg-primary border border-transparent'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </Link>
              ))}
              
              {parseInt(page) < Math.ceil(meta.total / limit) && (
                <Link 
                  href={`/blog?page=${parseInt(page) + 1}${category ? `&category=${category}` : ''}`}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Weiter
                </Link>
              )}
            </nav>
          </div>
        )}
      </section>

    </Layout>
  );
}
