import NewPageLayout from "../components/NewPageLayout";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronDown, RotateCcw, MapPin } from "lucide-react";

// Photos — served from the /public/projectsimg folder
const heroImg = "/projectsimg/hero.png";
const work1 = "/projectsimg/work-1.png";
const work2 = "/projectsimg/work-2.png";
const work3 = "/projectsimg/work-3.png";
const work4 = "/projectsimg/work-4.png";
const work5 = "/projectsimg/work-5.png";
const work6 = "/projectsimg/work-6.png";
const work7 = "/projectsimg/work-7.png";
const work8 = "/projectsimg/work-8.png";
const work9 = "/projectsimg/work-9.png";

type RoofType = "Solar on Sheet" | "Solar on Structure" | "Solar Roof";
type ProjectType = "Residential" | "Commercial";
type SystemType = "On-Grid" | "Off-Grid" | "Hybrid";
type Quality = "Standard" | "Premium";

interface WorkItem {
  img: string;
  title: string;
  subtitle: string;
  location: string;
  roofType: RoofType;
  projectType: ProjectType;
  systemType: SystemType;
  quality: Quality;
}

const ROOF_OPTIONS: RoofType[] = ["Solar on Sheet", "Solar on Structure", "Solar Roof"];
const PROJECT_OPTIONS: ProjectType[] = ["Residential", "Commercial"];
const SYSTEM_OPTIONS: SystemType[] = ["On-Grid", "Off-Grid", "Hybrid"];
const QUALITY_OPTIONS: Quality[] = ["Standard", "Premium"];

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

// A single filter dropdown: pill trigger + floating option panel.
function FilterDropdown({
  label,
  value,
  options,
  onChange,
  heading,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  heading: CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = value !== "All";

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={heading}
        className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full border transition-colors duration-200 ${
          isActive
            ? "bg-red-700 border-red-700 text-white"
            : "bg-white border-stone-200 text-stone-700 hover:border-stone-300"
        }`}
      >
        {isActive ? value : label}
        <ChevronDown
          size={15}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-40 mt-2 min-w-[180px] rounded-xl bg-white shadow-lg ring-1 ring-stone-200 overflow-hidden py-1.5">
          {["All", ...options].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                value === opt
                  ? "text-red-700 font-semibold bg-red-50"
                  : "text-stone-600 hover:bg-stone-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
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

  const work: WorkItem[] = [
    {
      img: work1,
      title: "Residential Rooftop",
      subtitle: "5kW Solar Installation",
      location: "Hubballi, Karnataka",
      roofType: "Solar on Structure",
      projectType: "Residential",
      systemType: "On-Grid",
      quality: "Premium",
    },
    {
      img: work2,
      title: "Residential Rooftop",
      subtitle: "4kW Solar Installation",
      location: "Hubballi, Karnataka",
      roofType: "Solar on Sheet",
      projectType: "Residential",
      systemType: "On-Grid",
      quality: "Standard",
    },
    {
      img: work3,
      title: "Commercial Building",
      subtitle: "10kW Rooftop System",
      location: "Hubballi, Karnataka",
      roofType: "Solar Roof",
      projectType: "Commercial",
      systemType: "Hybrid",
      quality: "Premium",
    },
    {
      img: work4,
      title: "Residential Rooftop",
      subtitle: "6kW Solar Installation",
      location: "Hubballi, Karnataka",
      roofType: "Solar on Structure",
      projectType: "Residential",
      systemType: "Hybrid",
      quality: "Premium",
    },
    {
      img: work5,
      title: "Residential Rooftop",
      subtitle: "5kW Solar Installation",
      location: "Hubballi, Karnataka",
      roofType: "Solar on Sheet",
      projectType: "Residential",
      systemType: "Off-Grid",
      quality: "Standard",
    },
    {
      img: work6,
      title: "Industrial Complex",
      subtitle: "80kW Solar Farm",
      location: "Hubballi, Karnataka",
      roofType: "Solar Roof",
      projectType: "Commercial",
      systemType: "On-Grid",
      quality: "Premium",
    },
    {
      img: work7,
      title: "Commercial Building",
      subtitle: "15kW Rooftop System",
      location: "Hubballi, Karnataka",
      roofType: "Solar on Structure",
      projectType: "Commercial",
      systemType: "On-Grid",
      quality: "Standard",
    },
    {
      img: work8,
      title: "Residential Rooftop",
      subtitle: "3kW Carport System",
      location: "Hubballi, Karnataka",
      roofType: "Solar on Structure",
      projectType: "Residential",
      systemType: "Off-Grid",
      quality: "Standard",
    },
    {
      img: work9,
      title: "Residential Rooftop",
      subtitle: "7kW Solar Installation",
      location: "Hubballi, Karnataka",
      roofType: "Solar Roof",
      projectType: "Residential",
      systemType: "Hybrid",
      quality: "Premium",
    },
  ];

  const [roofFilter, setRoofFilter] = useState("All");
  const [projectFilter, setProjectFilter] = useState("All");
  const [systemFilter, setSystemFilter] = useState("All");
  const [qualityFilter, setQualityFilter] = useState("All");

  const hasActiveFilters =
    roofFilter !== "All" || projectFilter !== "All" || systemFilter !== "All" || qualityFilter !== "All";

  const filteredWork = work.filter((p) => {
    if (roofFilter !== "All" && p.roofType !== roofFilter) return false;
    if (projectFilter !== "All" && p.projectType !== projectFilter) return false;
    if (systemFilter !== "All" && p.systemType !== systemFilter) return false;
    if (qualityFilter !== "All" && p.quality !== qualityFilter) return false;
    return true;
  });

  const resetFilters = () => {
    setRoofFilter("All");
    setProjectFilter("All");
    setSystemFilter("All");
    setQualityFilter("All");
  };

  return (
    <NewPageLayout>
    <div style={body} className="bg-white text-stone-900 antialiased">
      {/* ============ HERO ============ */}
      <header className="relative z-10 mx-auto flex min-h-80 max-w-7xl items-center px-0 pt-17 pb-0 lg:px-0">
        <img
          src={heroImg}
          alt="Aerial view of homes with solar panel roofs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10">
          <div className="px-6 pt-30 pb-18 lg:px-10 md:pt-32">
            <span
              style={{
                ...heading,
                backgroundColor: "#FFDAD8",
                transitionDelay: heroIn ? "0ms" : "0ms",
              }}
              className={`inline-block text-stone-900 font-semibold text-sm px-5 py-2 rounded-full mb-7 transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Projects
            </span>
            <h1
              style={{
                ...heading,
                transitionDelay: heroIn ? "120ms" : "0ms",
              }}
              className={`text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight mb-6 transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Solar in Action
            </h1>
            <p
              style={{ transitionDelay: heroIn ? "240ms" : "0ms" }}
              className={`text-white/90 text-lg max-w-xl transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              From homes and villas to apartments, housing societies, and commercial spaces, explore the
              solar installations helping people and businesses move towards a cleaner energy future.
            </p>
          </div>
        </div>
      </header>

      {/* ============ OUR PROJECTS ============ */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-2xl mb-10">
            <span style={heading} className="block text-red-700 font-bold text-sm tracking-widest uppercase mb-3">
              Our Projects
            </span>
            <h2 style={heading} className="text-3xl md:text-4xl font-bold mb-4">
              Solar Solutions Built for Every Need
            </h2>
            <p className="text-stone-500">
              Explore our completed solar projects by roof type, project type, system configuration, and
              quality level.
            </p>
          </Reveal>

          {/* Filter bar */}
          <Reveal delay={80} className="relative z-30 mb-10">
            <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-stone-200">
              <FilterDropdown
                label="Roof Type"
                value={roofFilter}
                options={ROOF_OPTIONS}
                onChange={setRoofFilter}
                heading={heading}
              />
              <FilterDropdown
                label="Project Type"
                value={projectFilter}
                options={PROJECT_OPTIONS}
                onChange={setProjectFilter}
                heading={heading}
              />
              <FilterDropdown
                label="System Type"
                value={systemFilter}
                options={SYSTEM_OPTIONS}
                onChange={setSystemFilter}
                heading={heading}
              />
              <FilterDropdown
                label="Quality"
                value={qualityFilter}
                options={QUALITY_OPTIONS}
                onChange={setQualityFilter}
                heading={heading}
              />

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  style={heading}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-full text-stone-500 hover:text-red-700 transition-colors duration-200"
                >
                  <RotateCcw size={14} strokeWidth={2.5} />
                  Reset Filters
                </button>
              )}

              <span style={heading} className="ml-auto text-sm font-medium text-stone-400">
                {filteredWork.length} {filteredWork.length === 1 ? "project" : "projects"}
              </span>
            </div>
          </Reveal>

          {filteredWork.length === 0 ? (
            <Reveal>
              <div className="text-center py-20 rounded-xl ring-1 ring-stone-200">
                <p style={heading} className="text-lg font-semibold text-stone-700 mb-2">
                  No projects match these filters
                </p>
                <p className="text-stone-500 mb-6">Try adjusting or resetting your filters.</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  style={heading}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full bg-red-700 text-white"
                >
                  <RotateCcw size={14} strokeWidth={2.5} />
                  Reset Filters
                </button>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredWork.map((p, i) => (
                <Reveal key={`${p.img}-${p.title}-${p.subtitle}`} delay={(i % 3) * 100}>
                  <div className="group rounded-xl overflow-hidden shadow-sm ring-1 ring-stone-200 bg-white h-full flex flex-col">
                    <div className="relative aspect-[4/3.3] overflow-hidden">
                      <img
                        src={p.img}
                        alt={`${p.title} - ${p.subtitle}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 style={heading} className="font-bold text-base text-stone-900 mb-1">
                        {p.title} {p.subtitle}
                      </h3>
                      <div className="flex items-center gap-1.5 text-stone-500 text-sm mb-3">
                        <MapPin size={14} strokeWidth={2.5} className="shrink-0" />
                        {p.location}
                      </div>
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {[p.roofType, p.projectType, p.systemType, p.quality].map((tag) => (
                          <span
                            key={tag}
                            style={heading}
                            className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
    </NewPageLayout>
  );
}