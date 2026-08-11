import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Clock, Search } from "lucide-react";
import { blogArticles, getArticleBySlug, getRelatedArticles } from "../data/Blogarticles"
import NewPageLayout from "../components/NewPageLayout";

// Categories across the whole library, used in the sidebar. Derived from
// the data so a category never appears with zero articles behind it.
const ALL_CATEGORIES: string[] = Array.from(new Set(blogArticles.map((a) => a.category)));

// Matches the fonts + palette used across the ShashWatt Energy site
// (Blog.tsx uses the same pair). Loaded once per detail-page visit,
// same pattern as the list page.
export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [sidebarSearch, setSidebarSearch] = useState("");

  const article = slug ? getArticleBySlug(slug) : undefined;

  const handleSidebarSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = sidebarSearch.trim();
    navigate(q ? `/blog?search=${encodeURIComponent(q)}` : "/blog");
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Scroll to top whenever the article changes (navigating between
  // articles via "Related Articles" should not preserve scroll position).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  const heading: CSSProperties = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
  const body: CSSProperties = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

  // Unknown slug — send the reader back to the blog index rather than
  // rendering a broken page.
  if (!article) {
    return (
      <div style={body} className="bg-white text-stone-900 antialiased min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 style={heading} className="text-2xl font-bold mb-4">
            Article not found
          </h1>
          <p className="text-stone-500 mb-8">
            The article you're looking for doesn't exist or may have moved.
          </p>
          <button
            type="button"
            onClick={() => navigate("/blog")}
            style={heading}
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            Back to All Blogs
          </button>
        </div>
      </div>
    );
  }

  const related = getRelatedArticles(article, 3);
  const tocHeadings = article.content.sections.map((s) => s.heading);

  // Recent Posts sidebar — latest 3 articles by date, excluding the one
  // currently being read.
  const recentPosts = blogArticles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <NewPageLayout>
    <div style={body} className="bg-white text-stone-900 antialiased">
      <div className="mx-auto max-w-7xl px-6 pt-30 pb-18 lg:px-10 md:pt-32">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* ============ MAIN COLUMN ============ */}
          <div>
            {/* ---- Header ---- */}
            <header className="pb-8">
              <Link
                to="/blog"
                style={heading}
                className="w-fit flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-red-700 transition-colors duration-200 mb-10"
              >
                <ArrowLeft size={16} strokeWidth={2.5} />
                Back to All Blogs
              </Link>

              <span
                style={{ ...heading, backgroundColor: "#FFDAD8" }}
                className="inline-block text-stone-900 font-semibold text-sm px-4 py-1.5 rounded-full mb-6"
              >
                {article.category}
              </span>

              <h1
                style={heading}
                className="text-3xl md:text-[44px] font-extrabold leading-tight mb-5 mt-1"
              >
                {article.title}
              </h1>

              <p className="text-stone-500 text-lg mb-6 leading-relaxed">{article.excerpt}</p>

              <div className="flex items-center gap-1.5 text-stone-400 text-sm font-medium">
                {article.date}
                <span className="mx-1">•</span>
                <Clock size={14} strokeWidth={2.5} />
                {article.readTime}
              </div>
            </header>

            {/* ---- Featured Image ---- */}
            <div className="mb-12">
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-[16/9]">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* ---- Article Body ---- */}
            <article className="pb-4">
              <p className="text-stone-700 text-lg leading-relaxed mb-10">
                {article.content.introduction}
              </p>

              {/* Table of Contents */}
              <div className="rounded-xl ring-1 ring-stone-200 bg-stone-50 p-6 mb-12">
                <h2 style={heading} className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-4">
                  Table of Contents
                </h2>
                <ol className="space-y-2">
                  {tocHeadings.map((h, i) => (
                    <li key={h}>
                      <a
                        href={`#section-${i}`}
                        style={heading}
                        className="text-sm font-semibold text-stone-700 hover:text-red-700 transition-colors duration-200"
                      >
                        {i + 1}. {h}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Sections */}
              {article.content.sections.map((section, i) => (
                <section key={section.heading} id={`section-${i}`} className="mb-10 scroll-mt-24">
                  <h2 style={heading} className="text-2xl font-bold mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-stone-700 text-base leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </section>
              ))}

              <hr className="border-stone-200 my-10" />

              <section>
                <h2 style={heading} className="text-2xl font-bold mb-4 leading-snug">
                  Conclusion
                </h2>
                <p className="text-stone-700 text-base leading-relaxed">{article.content.conclusion}</p>
              </section>
            </article>
          </div>

          {/* ============ SIDEBAR ============ */}
          <aside className="lg:sticky lg:top-24 flex flex-col gap-8 pb-4">
            {/* Search */}
            <form onSubmit={handleSidebarSearch} className="relative">
              <Search
                size={16}
                strokeWidth={2.5}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                type="text"
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                placeholder="Search Blogs"
                style={body}
                className="w-full pl-10 pr-4 py-3 text-sm rounded-full border border-stone-200 focus:outline-none focus:border-stone-400"
              />
            </form>

            {/* Recent Posts */}
            <div>
              <h3
                style={heading}
                className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4"
              >
                Recent Posts
              </h3>
              <div className="flex flex-col gap-3">
                {recentPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    style={heading}
                    className="block rounded-xl ring-1 ring-stone-200 shadow-sm bg-white p-4 text-sm font-semibold text-stone-800 leading-snug hover:text-red-700 hover:ring-red-200 transition-colors duration-200"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3
                style={heading}
                className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4"
              >
                Categories
              </h3>
              <div className="flex flex-col gap-3">
                {ALL_CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    to={`/blog?category=${encodeURIComponent(cat)}`}
                    style={heading}
                    className="block rounded-xl ring-1 ring-stone-200 shadow-sm bg-white px-4 py-3 text-sm font-semibold text-stone-700 hover:text-red-700 hover:ring-red-200 transition-colors duration-200"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ============ RELATED ARTICLES ============ */}
      {related.length > 0 && (
        <section className="px-6 lg:px-10 pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 style={heading} className="text-2xl font-bold mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group block rounded-xl overflow-hidden shadow-sm ring-1 ring-stone-200 bg-white h-full flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <span
                      style={heading}
                      className="absolute top-3 left-3 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/95 text-stone-800"
                    >
                      {r.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 style={heading} className="font-bold text-base text-stone-900 mb-2 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-stone-500 text-sm mb-4 flex-1">{r.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-stone-400 text-xs font-medium">
                      <Clock size={13} strokeWidth={2.5} />
                      {r.readTime}
                      <span className="mx-1">•</span>
                      {r.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  </NewPageLayout>
  );
}

// Re-export for convenience if a caller only imports from this file.
export { blogArticles };