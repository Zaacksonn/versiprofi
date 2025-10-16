import Link from 'next/link';
import { getLatestPosts, getCategories } from '@/lib/api';

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Latest Posts Widget */}
      <LatestPostsWidget />
      
      {/* Categories Widget */}
      <CategoriesWidget />
      
      {/* Newsletter Widget */}
      <NewsletterWidget />
      
      {/* About Widget */}
      <AboutWidget />
    </aside>
  );
}

// Latest Posts Widget Component
async function LatestPostsWidget() {
  const latestPosts = await getLatestPosts(5);

  return (
    <div className="card p-6">
      <h3 className="heading-3 text-lg mb-4">Neueste Artikel</h3>
      <div className="space-y-4">
        {latestPosts.map((post) => (
          <article key={post.id} className="flex gap-3">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold mb-1 line-clamp-2">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-accent transition-colors"
                >
                  {post.title}
                </Link>
              </h4>
              <p className="text-xs text-text-light mb-1 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center text-xs text-text-light">
                <span>{post.readTime} Min</span>
                <span className="mx-1">•</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                    day: 'numeric',
                    month: 'short'
                  })}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Link 
          href="/blog" 
          className="text-sm text-accent hover:underline font-semibold"
        >
          Alle Artikel anzeigen →
        </Link>
      </div>
    </div>
  );
}

// Categories Widget Component
async function CategoriesWidget() {
  const categories = await getCategories();

  return (
    <div className="card p-6">
      <h3 className="heading-3 text-lg mb-4">Kategorien</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog?category=${category.slug}`}
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <span className="text-sm font-medium group-hover:text-accent transition-colors">
              {category.name}
            </span>
            <span className="text-xs text-text-light bg-gray-100 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Newsletter Widget Component
function NewsletterWidget() {
  return (
    <div className="card p-6 bg-primary text-white">
      <h3 className="heading-3 text-lg text-white mb-3">Newsletter</h3>
      <p className="text-sm text-blue-100 mb-4">
        Erhalten Sie wöchentlich die wichtigsten Versicherungsnews direkt in Ihr Postfach.
      </p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Ihre E-Mail-Adresse"
          className="w-full px-3 py-2 rounded-lg text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <button
          type="submit"
          className="w-full btn-primary bg-accent hover:bg-green-600 text-sm py-2"
        >
          Anmelden
        </button>
      </form>
      <p className="text-xs text-blue-200 mt-2">
        Keine Sorge, wir senden Ihnen keine Spam-E-Mails.
      </p>
    </div>
  );
}

// About Widget Component
function AboutWidget() {
  return (
    <div className="card p-6">
      <h3 className="heading-3 text-lg mb-3">Über VersiProfi</h3>
      <p className="text-sm text-text-light mb-4">
        Ihr vertrauenswürdiger Ratgeber in der Welt der Versicherungen. 
        Seit über 10 Jahren helfen wir Menschen dabei, die richtigen 
        Versicherungsentscheidungen zu treffen.
      </p>
      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
          <span>Unabhängige Beratung</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
          <span>Expertenwissen</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
          <span>Kostenlose Tipps</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Link 
          href="/ueber-uns" 
          className="text-sm text-accent hover:underline font-semibold"
        >
          Mehr erfahren →
        </Link>
      </div>
    </div>
  );
}
