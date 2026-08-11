import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ArrowRight, Clock } from "lucide-react";
import { blogArticles, type BlogArticle } from "../data/Blogarticles";
import NewPageLayout from "../components/NewPageLayout";

// Photos — served from the /public/blogsimg folder
const heroImg = "/blogsimg/hero.png";
const campusImg = "/blogsimg/campus.png";

// Categories actually used across the current 11-article library. Keeping
// this derived from the data (rather than a separate hardcoded list) means
// the filter bar can never show a category with zero matching articles.
const CATEGORY_OPTIONS: string[] = Array.from(
  new Set(blogArticles.map((a) => a.category))
);

const YEAR_OPTIONS: string[] = Array.from(
  new Set(blogArticles.map((a) => a.date.split(", ").pop() as string))
).sort();

// Fades + slides content up into view the first time it enters the viewport.
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export default function Blog() {
  // Load the brand font (Plus Jakarta Sans, used for everything).
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

  // Triggers the hero text entrance animation once on mount.
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 50);
    return () => clearTimeout(t);
  }, []);

  const heading: CSSProperties = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
  const body: CSSProperties = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

  // Reading "category" / "search" from the URL lets links from the
  // BlogDetail sidebar (Categories, Search) land here pre-filtered.
  const [searchParams] = useSearchParams();

  const [categoryFilter, setCategoryFilter] = useState(
    () => searchParams.get("category") ?? "All"
  );
  const [yearFilter, setYearFilter] = useState("All");
  const [search, setSearch] = useState(() => searchParams.get("search") ?? "");
  const [visibleCount, setVisibleCount] = useState(9);

  // Re-sync filters if the URL query changes (e.g. navigating here again
  // from a different sidebar link without a full page reload), and jump
  // straight to the articles section so a filtered link doesn't just land
  // on the hero.
  useEffect(() => {
    setCategoryFilter(searchParams.get("category") ?? "All");
    setSearch(searchParams.get("search") ?? "");

    if (searchParams.get("category") || searchParams.get("search")) {
      const el = document.getElementById("articles");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  // Reset how many cards are showing whenever a filter changes.
  useEffect(() => {
    setVisibleCount(9);
  }, [categoryFilter, yearFilter, search]);

  const filteredArticles = blogArticles
    .filter((a) => {
      if (categoryFilter !== "All" && a.category !== categoryFilter) return false;
      if (yearFilter !== "All" && !a.date.endsWith(yearFilter)) return false;
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        if (
          !a.title.toLowerCase().includes(q) &&
          !a.excerpt.toLowerCase().includes(q) &&
          !a.category.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    })
    .sort((a: BlogArticle, b: BlogArticle) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
     <NewPageLayout>
    <div style={body} className="bg-white text-stone-900 antialiased">
      {/* ============ HERO ============ */}
      <header className="relative z-10 mx-auto min-h-80 max-w-7xl items-center px-0 pt-17 pb-0 lg:px-0">
        <img
          src={heroImg}
          alt="Modern home with rooftop solar panels"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10">
          <div className="px-6 pt-30 pb-18 lg:px-10 md:pt-32">
            <span
              style={{ ...heading, backgroundColor: "#FFDAD8" }}
              className={`inline-block text-stone-900 font-semibold text-sm px-5 py-2 rounded-full mb-7 transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Insights
            </span>
            <h1
              style={{ ...heading, transitionDelay: heroIn ? "120ms" : "0ms" }}
              className={`text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-tight mb-6 transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Powering Your Knowledge
            </h1>
            <p
              style={{ transitionDelay: heroIn ? "240ms" : "0ms" }}
              className={`text-white/90 text-lg max-w-xl transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Explore practical insights, helpful guides, and the latest ideas in solar energy to
              make smarter decisions for your home, business, and a more sustainable future.
            </p>
          </div>
        </div>
      </header>

      {/* ============ A BRIGHTER WAY TO THINK ABOUT ENERGY ============ */}
      <section className="py-10 px-6 lg:px-10 bg-stone-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span style={heading} className="block text-red-700 font-bold text-sm tracking-widest uppercase mb-3">
              Insights &amp; Ideas
            </span>
            <h2 style={heading} className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              A Brighter Way to Think About Energy
            </h2>
            <p className="text-stone-500 mb-8">
              Explore practical insights, solar innovations, industry updates, and helpful guides
              to make smarter decisions about clean energy for your home, business, or community.
            </p>
            <a
              href="#articles"
              style={heading}
              className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm"
            >
              <span className="w-6 h-px bg-red-700" />
              Scroll to Explore
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={campusImg}
                alt="Commercial solar campus with EV charging hub"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ARTICLES ============ */}
      <section id="articles" className="py-10 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col gap-4 mb-10 pb-6 border-b border-stone-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCategoryFilter("All")}
                  style={heading}
                  className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 ${
                    categoryFilter === "All"
                      ? "text-red-700"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  All
                </button>
                {CATEGORY_OPTIONS.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategoryFilter(cat)}
                    style={heading}
                    className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 ${
                      categoryFilter === cat
                        ? "text-red-700"
                        : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search
                  size={16}
                  strokeWidth={2.5}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Blogs"
                  style={body}
                  className="pl-10 pr-4 py-2 text-sm rounded-full border border-stone-200 focus:outline-none focus:border-stone-400 w-48 md:w-56"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span style={heading} className="text-xs font-semibold text-stone-400 uppercase tracking-widest mr-1">
                Year
              </span>
              <button
                type="button"
                onClick={() => setYearFilter("All")}
                style={heading}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors duration-200 ${
                  yearFilter === "All" ? "text-red-700" : "text-stone-500 hover:text-stone-800"
                }`}
              >
                All Years
              </button>
              {YEAR_OPTIONS.map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setYearFilter(yr)}
                  style={heading}
                  className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors duration-200 ${
                    yearFilter === yr ? "text-red-700" : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </Reveal>

          {filteredArticles.length === 0 ? (
            <Reveal>
              <div className="text-center py-20 rounded-xl ring-1 ring-stone-200">
                <p style={heading} className="text-lg font-semibold text-stone-700 mb-2">
                  No articles match your search
                </p>
                <p className="text-stone-500">Try a different category, year or search term.</p>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {visibleArticles.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 3) * 100}>
                  <div className="group block rounded-xl overflow-hidden shadow-sm ring-1 ring-stone-200 bg-white h-full flex flex-col">
                    <Link to={`/blog/${a.slug}`} className="relative aspect-[16/9] overflow-hidden block">
                      <img
                        src={a.image}
                        alt={a.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <span
                        style={heading}
                        className="absolute top-3 left-3 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/95 text-stone-800"
                      >
                        {a.category}
                      </span>
                    </Link>
                    <div className="p-5 flex-1 flex flex-col">
                      <Link to={`/blog/${a.slug}`}>
                        <h3 style={heading} className="font-bold text-base text-stone-900 mb-2 leading-snug hover:text-red-700 transition-colors duration-200">
                          {a.title}
                        </h3>
                      </Link>
                      <p className="text-stone-500 text-sm mb-4 flex-1">{a.excerpt}</p>
                      <div className="flex items-center gap-1.5 text-stone-400 text-xs font-medium mb-4">
                        <Clock size={13} strokeWidth={2.5} />
                        {a.readTime}
                        <span className="mx-1">•</span>
                        {a.date}
                      </div>
                      <Link
                        to={`/blog/${a.slug}`}
                        style={heading}
                        className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm"
                      >
                        View Article
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {hasMore && (
            <Reveal className="flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + 6)}
                style={heading}
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-colors duration-200"
              >
                Load More Articles
              </button>
            </Reveal>
          )}
        </div>
      </section>

    </div>
    </NewPageLayout>
  );
}