import Link from 'next/link';
import Layout from '@/components/Layout';
import { getFeaturedPosts, getLatestPosts, getCategories } from '@/lib/api';

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts(4);
  const latestPosts = await getLatestPosts(8);
  const categories = await getCategories();

  return (
    <Layout showSidebar={false}>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>

      {/* Hero Section - News Style */}
      <section className="bg-white w-full">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                Nachrichten für Versicherungsinteressierte
              </h1>
              <p className="text-lg text-text-light max-w-3xl mx-auto">
                Aktuelle Informationen, Vergleiche und Ratgeber zu allen Versicherungsthemen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white w-full">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              
              {/* Main Content - 3 columns */}
              <div className="lg:col-span-3">
                
                {/* Featured Article */}
                <div className="mb-12">
                  <article className="card p-0 overflow-hidden">
                    <div className="relative h-96">
                      <img
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt={featuredPosts[0]?.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                          {featuredPosts[0]?.category.name}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                          <Link href={`/blog/${featuredPosts[0]?.slug}`} className="hover:text-accent transition-colors">
                            {featuredPosts[0]?.title}
                          </Link>
                        </h2>
                        <p className="text-lg text-blue-100 mb-4">
                          {featuredPosts[0]?.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-blue-200">
                          <span>{new Date(featuredPosts[0]?.publishedAt).toLocaleDateString('de-DE')}</span>
                          <span className="mx-2">•</span>
                          <span>{featuredPosts[0]?.readTime} Min Lesezeit</span>
                          <span className="mx-2">•</span>
                          <span>Von {featuredPosts[0]?.author.name}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {/* News Categories */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-text-dark mb-6">Aktuelle Nachrichten</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {latestPosts.slice(0, 4).map((post, index) => (
                      <article key={post.id} className="card p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                            <img
                              src={`https://images.unsplash.com/photo-${1550000000000 + (index + 5) * 1000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center text-xs text-text-light mb-2">
                              <span className="bg-primary/10 text-primary-darker px-2 py-1 rounded mr-2">
                                {post.category.name}
                              </span>
                              <span>{new Date(post.publishedAt).toLocaleDateString('de-DE')}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 line-clamp-2">
                              <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                                {post.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-text-light line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Category Sections */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-text-dark mb-6">Nach Kategorien</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.slice(0, 6).map((category, index) => (
                      <div key={category.id} className="card p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-text-dark">{category.name}</h3>
                          <span className="text-sm text-text-light">{category.count} Artikel</span>
                        </div>
                        <p className="text-sm text-text-light mb-4">
                          Aktuelle Artikel und Ratgeber zu {category.name.toLowerCase()}
                        </p>
                        <Link 
                          href={`/blog?category=${category.slug}`}
                          className="inline-flex items-center text-accent font-semibold hover:text-accent-orange transition-colors"
                        >
                          Artikel anzeigen
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* More Articles */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-text-dark">Weitere Artikel</h2>
                    <Link href="/blog" className="text-accent hover:text-accent-orange font-semibold">
                      Alle Artikel anzeigen
                    </Link>
                  </div>
                  <div className="space-y-6">
                    {latestPosts.slice(4, 8).map((post) => (
                      <article key={post.id} className="card p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                            <img
                              src={`https://images.unsplash.com/photo-${1550000000000 + post.id * 1000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center text-sm text-text-light mb-2">
                              <span className="bg-primary/10 text-primary-darker px-2 py-1 rounded mr-2">
                                {post.category.name}
                              </span>
                              <span>{new Date(post.publishedAt).toLocaleDateString('de-DE')}</span>
                              <span className="mx-2">•</span>
                              <span>{post.readTime} Min</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                              <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                                {post.title}
                              </Link>
                            </h3>
                            <p className="text-text-light mb-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-text-light">Von {post.author.name}</span>
                              <Link 
                                href={`/blog/${post.slug}`} 
                                className="text-accent hover:text-accent-orange font-semibold"
                              >
                                Weiterlesen →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - 1 column */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  
                  {/* Comparison Tools */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-text-dark mb-4">Versicherungsvergleiche</h3>
                    <div className="space-y-3">
                      {[
                        'Krankenversicherung',
                        'Haftpflichtversicherung',
                        'Berufsunfähigkeitsversicherung',
                        'Kfz-Versicherung',
                        'Hausratversicherung',
                        'Lebensversicherung'
                      ].map((tool, index) => (
                        <Link 
                          key={index}
                          href={`/vergleich/${tool.toLowerCase().replace('versicherung', '')}`}
                          className="block p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-text-dark">{tool}</span>
                            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Calculators */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-text-dark mb-4">Rechner & Tools</h3>
                    <div className="space-y-3">
                      {[
                        'Kfz-Steuerrechner',
                        'Nettolohnrechner',
                        'Riester-Renten-Rechner',
                        'Kreditrechner',
                        'BMI-Rechner',
                        'Steuerklassenrechner'
                      ].map((calculator, index) => (
                        <Link 
                          key={index}
                          href={`/rechner/${calculator.toLowerCase().replace('rechner', '').replace('-', '')}`}
                          className="block p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-text-dark">{calculator}</span>
                            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="card p-6 bg-gradient-to-br from-accent to-green-600 text-white">
                    <h3 className="text-lg font-bold mb-4">Newsletter abonnieren</h3>
                    <p className="text-sm text-green-100 mb-4">
                      Erhalten Sie wöchentlich die neuesten Artikel und Tipps zu Versicherungsthemen.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Ihre E-Mail-Adresse"
                        className="w-full px-3 py-2 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button className="w-full bg-white text-accent hover:bg-gray-100 px-4 py-2 rounded font-semibold text-sm transition-colors">
                        Abonnieren
                      </button>
                    </div>
                    <p className="text-xs text-green-200 mt-2">
                      Jederzeit abmeldbar. Kein Spam.
                    </p>
                  </div>

                  {/* Popular Categories */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-text-dark mb-4">Beliebte Themen</h3>
                    <div className="space-y-2">
                      {categories.slice(0, 5).map((category) => (
                        <Link 
                          key={category.id}
                          href={`/blog?category=${category.slug}`}
                          className="flex items-center justify-between p-2 hover:bg-primary/5 rounded transition-colors"
                        >
                          <span className="text-sm text-text-dark">{category.name}</span>
                          <span className="text-xs text-text-light">{category.count}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}