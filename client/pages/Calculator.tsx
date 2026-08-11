import NewPageLayout from "../components/NewPageLayout";




import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Home as HomeIcon,
  Building2,
  ChevronDown,
  ArrowRight,
  Users,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

// Photos — served from the /public/calculatorimg folder
const heroImg = "/calculatorimg/hero.png";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const indianStates: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

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

export default function Calculator() {
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

  const features: Feature[] = [
    {
      icon: Users,
      title: "Precision Engineering",
      desc: "Our calculator uses real-time irradiation data and structural analysis to provide the most accurate estimations in the industry.",
    },
    {
      icon: ShieldCheck,
      title: "Premium Hardware",
      desc: "We only deploy Tier-1 mono-crystalline panels and industrial-grade inverters with 25-year performance warranties.",
    },
    {
      icon: TrendingUp,
      title: "Smart Monitoring",
      desc: "Every ShashWatt installation includes real-time IoT monitoring so you can track your savings and production from anywhere.",
    },
  ];

  // Calculator form state
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial">("Residential");
  const [state, setState] = useState("");
  const [bill, setBill] = useState("");
  const [result, setResult] = useState<{ sizeKw: number; monthlySavings: number } | null>(null);

  const handleCalculate = () => {
    const billValue = parseFloat(bill);
    if (!billValue || billValue <= 0) {
      setResult(null);
      return;
    }
    // Rough estimate: ~1kW offsets about ₹1000 of monthly bill for residential,
    // commercial tariffs are a bit higher so it takes slightly less capacity.
    const perKwOffset = propertyType === "Residential" ? 1000 : 1300;
    const sizeKw = Math.round((billValue / perKwOffset) * 10) / 10;
    const monthlySavings = Math.round(billValue * 0.85);
    setResult({ sizeKw, monthlySavings });
  };

  return (
    <NewPageLayout>
    <div style={body} className="bg-white text-stone-900 antialiased">
      {/* ============ HERO ============ */}
      <header className="relative z-10 mx-auto flex min-h-80 max-w-7xl items-center px-0 pt-17 pb-0 lg:px-0">
        <img
          src={heroImg}
          alt="Modern home with rooftop solar panels"
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
              Solar Calculator
            </span>
            <h1
              style={{
                ...heading,
                transitionDelay: heroIn ? "120ms" : "0ms",
              }}
              className={`text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-tight mb-6 transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Discover Your Solar Potential
            </h1>
            <p
              style={{ transitionDelay: heroIn ? "240ms" : "0ms" }}
              className={`text-white/90 text-lg max-w-xl transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Estimate the solar system size you may need, your potential savings, and the environmental
              impact of switching to clean energy — all in just a few simple steps.
            </p>
          </div>
        </div>
      </header>

      {/* ============ CALCULATOR ============ */}
      <section className="py-24 px-6 lg:px-10 bg-stone-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <span style={heading} className="block text-red-700 font-bold text-sm tracking-widest uppercase mb-6">
              Calculate Your Solar Potential
            </span>

            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-stone-200 p-8">
              {/* Property Type */}
              <div className="mb-7">
                <div style={heading} className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-3">
                  1. Property Type
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPropertyType("Residential")}
                    className={`flex flex-col items-center justify-center gap-2 rounded-xl border py-6 transition-colors ${
                      propertyType === "Residential"
                        ? "border-red-600 bg-red-50 text-red-700"
                        : "border-stone-200 bg-stone-50 text-stone-500 hover:border-stone-300"
                    }`}
                  >
                    <HomeIcon size={22} />
                    <span style={heading} className="font-bold text-sm">Residential</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyType("Commercial")}
                    className={`flex flex-col items-center justify-center gap-2 rounded-xl border py-6 transition-colors ${
                      propertyType === "Commercial"
                        ? "border-red-600 bg-red-50 text-red-700"
                        : "border-stone-200 bg-stone-50 text-stone-500 hover:border-stone-300"
                    }`}
                  >
                    <Building2 size={22} />
                    <span style={heading} className="font-bold text-sm">Commercial</span>
                  </button>
                </div>
              </div>

              {/* State */}
              <div className="mb-7">
                <div style={heading} className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-3">
                  2. Select State
                </div>
                <div className="relative">
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full appearance-none bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
                  >
                    <option value="">Choose your state</option>
                    {indianStates.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                </div>
              </div>

              {/* Bill */}
              <div className="mb-8">
                <div style={heading} className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-3">
                  3. Average Monthly Electricity Bill
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">₹</span>
                  <input
                    type="number"
                    min={0}
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="Enter your average monthly electricity bill"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-4 py-3.5 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                style={heading}
                className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 transition-colors text-white font-semibold py-4 rounded-xl"
              >
                Calculate My Solar Potential <ArrowRight size={18} />
              </button>

              {result && (
                <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-stone-200">
                  <div>
                    <div style={heading} className="text-2xl font-extrabold text-red-700 mb-1">
                      {result.sizeKw} kW
                    </div>
                    <div className="text-xs tracking-wider uppercase text-stone-400 font-semibold">
                      Recommended System Size
                    </div>
                  </div>
                  <div>
                    <div style={heading} className="text-2xl font-extrabold text-red-700 mb-1">
                      ₹{result.monthlySavings.toLocaleString("en-IN")}
                    </div>
                    <div className="text-xs tracking-wider uppercase text-stone-400 font-semibold">
                      Est. Monthly Savings
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h2 style={heading} className="text-3xl md:text-4xl font-bold mb-10">
              Built to Make an Impact
            </h2>

            <div className="space-y-8">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-red-50 text-red-700 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 style={heading} className="font-bold text-base mb-1.5">{title}</h3>
                    <p className="text-stone-500 text-sm max-w-md">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
    </NewPageLayout>
  );
}