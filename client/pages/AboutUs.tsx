import NewPageLayout from "../components/NewPageLayout";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Infinity as InfinityIcon,
  Sun,
  CloudRain,
  ClipboardList,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

// About Us images are served from the public/abtusimg folder.
const heroImg = "/abtusimg/hero.png";
const legacyImg = "/abtusimg/legacy.png";
const advantageImg = "/abtusimg/advantage.jpg";
const project1 = "/abtusimg/project-1.png";
const project2 = "/abtusimg/project-2.png";
const project3 = "/abtusimg/project-3.png";
const project4 = "/abtusimg/project-4.png";
const project5 = "/abtusimg/project-5.png";
const project6 = "/abtusimg/project-6.png";
const teamAbhijit = "/abtusimg/team-abhijit.png";
const teamShashank = "/abtusimg/team-shashank.png";

// Partner logos
const adaniLogo = "/abtusimg/partners/adani.png";
const deyeLogo = "/abtusimg/partners/deye.png";
const enphaseLogo = "/abtusimg/partners/enphase.png";
const truepowerLogo = "/abtusimg/partners/truepower.png";
const pahalLogo = "/abtusimg/partners/pahal.jpg";
const panasonicLogo = "/abtusimg/partners/panasonic.svg";
 
interface AdvantageCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  bg: string;
  borderTop?: boolean;
}
 
interface Partner {
  name: string;
  logo: string;
}
 
interface ProjectItem {
  img: string;
  title: string;
  subtitle: string;
  location: string;
}
 
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
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
 
export default function AboutUs() {
  // Load the brand fonts (Plus Jakarta Sans for headings, Manrope for body).
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap";
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
  const body: CSSProperties = { fontFamily: "'Manrope', sans-serif" };
 
  const advantageCards: AdvantageCard[] = [
    {
      icon: Sun,
      title: "Outstanding Efficiency",
      desc: "Our modules ensure reliable power generation, performing efficiently even on cloudy days and in low-light conditions.",
      bg: "bg-stone-100",
    },
    {
      icon: CloudRain,
      title: "Excellent Low Light Performance",
      desc: "Our modules deliver reliable power, performing efficiently even in low-light or cloudy conditions.",
      bg: "bg-white",
    },
    {
      icon: ClipboardList,
      title: "Easy Purchase",
      desc: "Enjoy a hassle-free solar panel purchase with easy steps, transparent pricing, and expert support.",
      bg: "bg-white",
      borderTop: true,
    },
    {
      icon: ShieldCheck,
      title: "Lifetime Support",
      desc: "Enjoy lifetime support with expert guidance to keep your solar system efficient and hassle-free.",
      bg: "bg-stone-100",
      borderTop: true,
    },
  ];
 
  const partners: Partner[] = [
    { name: "Enphase", logo: enphaseLogo },
    { name: "Adani Solar", logo: adaniLogo },
    { name: "Deye", logo: deyeLogo },
    { name: "TruePower by JioThings", logo: truepowerLogo },
    { name: "Pahal Solar", logo: pahalLogo },
    { name: "Panasonic", logo: panasonicLogo },
  ];
 
  const team: TeamMember[] = [
    {
      name: "Abhijit Limaye",
      role: "Founder & Managing Partner",
      bio: "With over two decades of engineering expertise, Abhijit spearheads the technical innovation and strategic expansion of our solar portfolio.",
      img: teamAbhijit,
    },
    {
      name: "Shashank Revankar",
      role: "Managing Partner",
      bio: "Shashank leads our operations and customer success initiatives, ensuring every project meets our rigorous standards of precision and service.",
      img: teamShashank,
    },
  ];
 
  const projects: ProjectItem[] = [
    { img: project1, title: "Residential Rooftop", subtitle: "5kW Solar Installation", location: "Hubballi, Karnataka" },
    { img: project2, title: "Residential Rooftop", subtitle: "3kW Solar Installation", location: "Hubballi, Karnataka" },
    { img: project3, title: "Residential Rooftop", subtitle: "6kW Solar Installation", location: "Hubballi, Karnataka" },
    { img: project4, title: "Industrial Complex", subtitle: "100kW Solar Farm", location: "Hubballi, Karnataka" },
    { img: project5, title: "Commercial Building", subtitle: "25kW Rooftop System", location: "Hubballi, Karnataka" },
    { img: project6, title: "Commercial Building", subtitle: "50kW Solar Array", location: "Hubballi, Karnataka" },
  ];

    const partnerLogos = [
    { src: enphaseLogo, alt: "Enphase" },
    { src: adaniLogo, alt: "Adani Solar" },
    { src: deyeLogo, alt: "Deye" },
    { src: truepowerLogo, alt: "TruePower by JioThings" },
    { src: pahalLogo, alt: "Pahal Solar" },
    { src: panasonicLogo, alt: "Panasonic" },
  ];
 
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
          <div className="px-6 pt-35 pb-18 md:px-10 md:pt-32">
            <span
              style={{
                ...heading,
                transitionDelay: heroIn ? "0ms" : "0ms",
              }}
              className={`inline-block bg-red-50 text-stone-900 font-semibold text-sm px-5 py-2 rounded-full mb-7 transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              About Us
            </span>
            <h1
              style={{ ...heading, transitionDelay: heroIn ? "120ms" : "0ms"  }}
              className={`text-white font-bold text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight mb-6 transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6" 
              }`}
            >
              Powering Progress Through Clean Energy.
            </h1>
            <p
              style={{ transitionDelay: heroIn ? "240ms" : "0ms" }}
              className={`text-white/90 text-lg max-w-lg transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              We are dedicated to revolutionizing the Indian solar landscape with high-performance
              industrial-grade technology for every home and business.
            </p>
          </div>
        </div>
      </header>
 
      {/* ============ OUR LEGACY ============ */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span style={heading} className="block text-red-700 font-bold text-sm tracking-widest uppercase mb-3">
              Our Legacy
            </span>
            <h2 style={heading} className="text-3xl md:text-4xl font-bold mb-5 max-w-md">
              Building a Greener Tomorrow, One Roof at a Time.
            </h2>
            <p className="text-stone-500 mb-4 max-w-md">
              At Shashwatt Energy, we are dedicated to harnessing the infinite power of the sun to create
              sustainable, affordable, and innovative solar energy solutions. As a trusted partner in clean
              energy, we aim to revolutionize the way communities and businesses access renewable power,
              fostering a greener planet for future generations.
            </p>
            <p className="text-stone-500 mb-4 max-w-md">
              To deliver cutting-edge solar energy solutions that empower individuals and organizations to
              transition to a sustainable energy future while reducing their carbon footprint.
            </p>
            <p className="text-stone-500 mb-8 max-w-md">
              To become a global leader in renewable energy, driving positive change by making solar power
              accessible to all and creating a world powered by clean, limitless energy.
            </p>
            <div className="flex gap-14 pt-8 border-t border-stone-200">
              <div>
                <div style={heading} className="text-2xl font-extrabold mb-1">15+ MW</div>
                <div className="text-xs tracking-wider uppercase text-stone-400 font-semibold">
                  Total Capacity Installed
                </div>
              </div>
              <div>
                <div style={heading} className="text-2xl font-extrabold mb-1">98%</div>
                <div className="text-xs tracking-wider uppercase text-stone-400 font-semibold">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </Reveal>
 
          <Reveal delay={150} className="relative">
            <img
              src={legacyImg}
              alt="Solar panels on a modern building roof"
              className="rounded-3xl aspect-[4/4.6] w-full object-cover"
            />
            <div className="absolute -right-4 -bottom-6 sm:-right-8 w-56 bg-red-700 text-white rounded-2xl p-6 shadow-xl shadow-red-700/25">
              <span style={heading} className="block font-extrabold text-2xl mb-3">99</span>
              <p style={heading} className="font-semibold text-lg leading-snug">
                Clean energy is an investment in tomorrow.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
 
      {/* ============ ADVANTAGE ============ */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16">
          <Reveal>
            <h2 style={heading} className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-red-700">Shashwatt Energy</span> Advantage
            </h2>
            <p className="text-stone-500 mb-8 max-w-sm">
              Discover what sets ShashWatt Energy apart through high-performance technology, dependable
              service, and a customer-first approach.
            </p>
            <img
              src={advantageImg}
              alt="Solar consultation with clients"
              className="rounded-2xl aspect-[4/3.3] w-full object-cover"
            />
          </Reveal>
 
          <div className="grid sm:grid-cols-2 border border-stone-200 rounded-2xl overflow-hidden">
            {advantageCards.map(({ icon: Icon, title, desc, bg, borderTop }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div
                  className={
                    `p-8 h-full ${bg} ` +
                    (i % 2 === 0 ? "sm:border-r border-stone-200 " : "") +
                    (borderTop ? "border-t border-stone-200 " : "")
                  }
                >
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-red-700 flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 style={heading} className="font-bold text-lg mb-2.5">
                    {title}
                  </h3>
                  <p className="text-stone-500 text-sm">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
 
            {/* ============ OUR PARTNERS ============ */}
      <section className="bg-white py-16">

        <style>{`
          @keyframes partners-marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div className="mx-auto max-w-8xl overflow-hidden px-6 lg:px-0">

          <h2
            style={heading}
            className="mb-20 text-center text-[40px] font-bold leading-tight text-[#1A1C1A]"
          >
            Our Partners
          </h2>

          <div className="relative overflow-hidden">

            <div
              className="flex w-max items-center gap-28"
              style={{
                animation: "partners-marquee 18s linear infinite",
              }}
            >

              {[...partnerLogos, ...partnerLogos].map(
                (logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="flex h-20 w-36 shrink-0 items-center justify-center"
                  >

                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-30 w-full object-contain"
                    />

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>
 
      {/* ============ PROJECTS ============ */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex flex-wrap justify-between items-end gap-6 mb-11">
            <div>
              <span style={heading} className="block text-red-700 font-bold text-sm tracking-widest uppercase mb-3">
                Portfolio
              </span>
              <h2 style={heading} className="text-3xl md:text-4xl font-bold mb-3">Our Projects</h2>
              <p className="text-stone-500 max-w-lg">
                Every project reflects our commitment to quality, innovation, and sustainable energy. From
                homes to commercial spaces, we deliver solar solutions built to perform for years.
              </p>
            </div>
            <a href="#" style={heading} className="flex items-center gap-2 font-semibold whitespace-nowrap">
              View All Case Studies <ArrowRight size={16} />
            </a>
          </Reveal>
 
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-55 sm:auto-rows-65 lg:auto-rows-70 gap-2 md:gap-3">
            {projects.map((p, i) => {
              const spanClasses = [
                "col-span-2 lg:col-span-2", // wide tile (start of row 1)
                "col-span-1",
                "col-span-1",
                "col-span-1",
                "col-span-1",
                "col-span-2 lg:col-span-2", // wide tile (end of row 2)
              ][i % 6];
 
              return (
                <Reveal key={i} delay={(i % 6) * 80} className={spanClasses}>
                  <div className="group relative rounded-md overflow-hidden h-full w-full">
                    <img
                      src={p.img}
                      alt={`${p.title} - ${p.subtitle}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
                    <div className="absolute inset-0 p-5 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div style={heading} className="font-bold text-lg leading-tight">{p.title}</div>
                      <div className="text-sm text-white/85">{p.subtitle}</div>
                      <div className="flex items-center gap-1.5 pt-2 text-xs text-white/90">
                        <MapPin size={13} className="shrink-0" />
                        {p.location}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* ============ LEADERSHIP ============ */}
      <section className="py-24 px-6 md:px-10 bg-stone-50 text-center">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 style={heading} className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-700">Leadership Team</span>
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto mb-14">
              Meet the passionate professionals driving Shashwatt&apos;s vision for a cleaner, more sustainable
              future. Together, we combine expertise, innovation, and dedication to deliver exceptional solar
              solutions.
            </p>
          </Reveal>
 
          <div className="grid sm:grid-cols-2 gap-12 text-left">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 150}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-2xl aspect-[4/3.6] mb-6 w-full object-cover"
                />
                <div style={heading} className="font-bold text-lg mb-1">{member.name}</div>
                <div style={heading} className="text-red-700 font-bold text-xs tracking-widest uppercase mb-3">
                  {member.role}
                </div>
                <p className="text-stone-500 text-sm max-w-md">{member.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
    </NewPageLayout>
  );
}