import NewPageLayout from "../components/NewPageLayout";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Plus } from "lucide-react";

// Photo — served from the /public/faqimg folder
const heroImg = "/faqimg/faq-hero.png";

interface FaqItem {
  question: string;
  answer: string;
}

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

// Single accordion row — click to expand/collapse the answer.
function FaqRow({
  item,
  open,
  onToggle,
  heading,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  heading: CSSProperties;
}) {
  return (
    <div className="border-b border-stone-200">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span
          style={heading}
          className={`font-semibold text-base md:text-lg transition-colors duration-200 ${
            open ? "text-red-700" : "text-stone-900"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            open ? "bg-red-700 text-white rotate-45" : "bg-stone-100 text-stone-600"
          }`}
        >
          <Plus size={16} strokeWidth={2.5} />
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-stone-500 leading-relaxed pb-6 pr-10">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
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

  const faqs: FaqItem[] = [
    {
      question: "Who is Shashwatt Energy, and how can you help me make smarter energy choices?",
      answer:
        "Hi, I'm Suryaputra Karna, your trusted solar companion from Shashwatt Energy. I'm here to guide you toward a smarter, cleaner, and more affordable energy future. Inspired by the limitless power of the sun, we help you make informed and sustainable solar energy choices.",
    },
    {
      question: "Why keep paying electricity bills every month when you can generate your own solar power?",
      answer:
        "Instead of paying electricity bills month after month, you can invest in a solar system that can help power your home for decades. Solar allows you to generate clean energy, reduce your dependence on grid electricity, and work toward long-term energy savings.",
    },
    {
      question: "Should I choose a regular inverter or a microinverter for my solar system?",
      answer:
        "Both are useful options, but microinverters can offer better flexibility and performance in certain situations. They are particularly beneficial for homes with trees or areas that cause shading. Since each panel operates independently, shading on one panel has less impact on the performance of the others.",
    },
    {
      question: "How can solar and battery storage help reduce rising electricity costs?",
      answer:
        "With solar and battery storage, you can generate electricity during the day, store excess energy, and use that stored energy when electricity is more expensive. This can help you reduce energy costs and gain greater control over your power usage.",
    },
    {
      question: "Can solar panels be recycled after their useful life?",
      answer:
        "Yes. Solar panels can be recycled through key stages such as delamination, separation, extraction, and purification. Glass makes up a major portion of a solar panel's weight, while materials such as aluminium and copper can also be recovered and recycled.",
    },
    {
      question: "Can I turn my unused land or space into an EV charging hub?",
      answer:
        "Absolutely! You can transform unused space into a smart EV charging hub and create a future-ready business opportunity. With Shashwatt Energy EV Chargers, you can provide convenient charging while supporting the transition toward clean mobility. Power your land. Power your future. Choose Shashwatt Energy.",
    },
    {
      question: "Can Shashwatt Energy's solar solutions increase the value of my home?",
      answer:
        "Solar can make a home more attractive to potential buyers while helping reduce electricity expenses. An energy-efficient solar system can add to your property's long-term appeal and functionality. With Shashwatt Energy, you're investing in your home, your savings, and your future.",
    },
    {
      question: "How does Shashwatt Energy make solar power a part of your everyday life?",
      answer:
        "Solar panels use photovoltaic (PV) cells to capture sunlight and generate DC electricity. An inverter then converts this DC electricity into AC electricity that can be used to power your home. With Shashwatt Energy, you can integrate clean solar energy into your everyday life.",
    },
    {
      question: "Is a Shashwatt Energy solar rooftop system affordable for my home?",
      answer:
        "Absolutely! Shashwatt Energy offers solar rooftop solutions along with EMI options designed to make switching to solar more accessible and budget-friendly. You can start generating your own clean energy while working toward lower electricity costs.",
    },
    {
      question: "Will solar panels work during cloudy or rainy weather?",
      answer:
        "Yes. Solar panels can continue generating electricity during cloudy weather because daylight is still available, although their output may be lower than on a sunny day. Rain can also help wash away dust and dirt from the panels. This monsoon, switch to solar with Shashwatt Energy and power your home smarter.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <NewPageLayout>
    <div style={body} className="bg-white text-stone-900 antialiased">
      {/* ============ HERO ============ */}
      <header className="relative z-10 mx-auto flex min-h-80 max-w-7xl items-center px-0 pt-17 pb-0 lg:px-0">
        <img
          src={heroImg}
          alt="Modern home with a solar panel roof at dusk"
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
              FAQs
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
              Your Questions, Answered
            </h1>
            <p
              style={{ transitionDelay: heroIn ? "240ms" : "0ms" }}
              className={`text-white/90 text-lg max-w-xl transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              From choosing the right solar system to understanding installation, savings, subsidies,
              and maintenance, find simple answers to everything you need to know before making the
              switch to solar energy.
            </p>
          </div>
        </div>
      </header>

      {/* ============ FAQ LIST ============ */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl">
          <Reveal className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span
                  style={heading}
                  className="block text-red-700 font-bold text-sm tracking-widest uppercase mb-3"
                >
                  Need to Know
                </span>
                <h2 style={heading} className="text-3xl md:text-4xl font-bold max-w-xl">
                  Curious About Solar?
                </h2>
              </div>
              <p className="text-stone-500 max-w-sm md:text-right">
                Whether you're exploring solar for your home, business, or community, find clear
                answers to the questions that matter most — from installation and savings to
                maintenance and long-term support.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="border-t border-stone-200">
              {faqs.map((item, i) => (
                <FaqRow
                  key={item.question}
                  item={item}
                  heading={heading}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
    </NewPageLayout>
  );
}