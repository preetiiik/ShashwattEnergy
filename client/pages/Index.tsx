import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ContactRound,
  Crosshair,
  Building,
  Building2,
  Hotel,
  House,
  Hd,
  Earth,
  Mail,
  Menu,
  PenTool,
  Phone,
  RotateCcw,
  MapPin,
  Share2,
  Settings,
  Wrench,
  X,
} from "lucide-react";

const features = [
  "Customized Solar Design",
  "Professional Installation",
  "Quality Components",
  "End-to-End Support",
];

const solutions = [
  {
    title: "Home",
    desc: "Power your home sustainably with solar energy and gain long-term savings on electricity costs",
    image: "/solution1.jpg",
  },
  {
    title: "Institutions",
    desc: "Empowering schools, hospitals, and universities with reliable and sustainable solar energy networks.",
    image: null,
  },
  {
    title: "Industry",
    desc: "Harness solar energy for uninterrupted power and long-term savings in industrial operations.",
    image: "/solution2.jpg",
  },
  {
    title: "Housing Society",
    desc: "Transform your housing society with solar power for cost savings and a greener community.",
    image: null,
  },
  {
    title: "Commercial Complex",
    desc: "Make your commercial space energy-efficient with cost-saving solar solutions.",
    image: "/solution3.jpg",
  },
  {
    title: "Warehouse",
    desc: "Power your warehouse sustainably with solar energy, ensuring long-term savings.",
    image: null,
  },
];

const partnerLogos = [
  {
    src: "/logo1.png",
    alt: "Partner logo 1",
  },
  {
    src: "/logo2.png",
    alt: "Partner logo 2",
  },
  {
    src: "/logo3.png",
    alt: "Partner logo 3",
  },
  {
    src: "/logo4.png",
    alt: "Partner logo 4",
  },
  {
    src: "/logo5.png",
    alt: "Partner logo 5",
  },
];

const livingSpaces = [
  {
    title: "Independent\nHomes",
    desc: "Maximum autonomy with custom rooftop designs tailored for family needs.",
    Icon: House,
  },
  {
    title: "Villas",
    desc: "High-capacity systems for luxury energy needs and pool heating integration.",
    Icon: Building,
  },
  {
    title: "Apartments",
    desc: "Smart solutions for vertical living efficiency and individual meter offsets.",
    Icon: Building2,
  },
  {
    title: "Housing\nSocieties",
    desc: "Community-scale power for common utility savings and green branding.",
    Icon: Hotel,
  },
];

const faqItems = [
  {
    question: "How does a solar power system work for my home?",
    answer:
      "A solar power system uses solar panels to capture sunlight and convert it into electricity using an inverter. This electricity powers your home's appliances. If your system generates more power than you use, the excess can be sent back to the grid or stored in a battery (if installed).",
  },
  {
    question: "What is net metering and how does it benefit me?",
    answer:
      "Net metering lets you send excess solar electricity back to the grid and receive credits on your bill, helping reduce your overall electricity cost.",
  },
];

const blogPosts = [
  {
    category: "TECHNOLOGY",
    title: "The Shift from Infrastructure to Intelligent Ecosystems",
    desc: "Discover how AI-driven load balancing and V2G technology are transforming corporate fleets into revenue-generating assets.",
    date: "July 06, 2026",
    image: "/solar1.jpg",
  },
  {
    category: "EFFICIENCY",
    title: "Preparing for the Next Material Frontier: Solid-State Batteries",
    desc: "How ShashWatt is bypassing AC/DC conversion losses with Direct-DC solar integration and Megawatt Charging Systems.",
    date: "June 28, 2026",
    image: "/solar2.jpg",
  },
  {
    category: "SUSTAINABILITY",
    title: "The Sustainability Paradox: Second-Life Battery Programs",
    desc: "Decoupling the battery's lifecycle from the vehicle's chassis to ensure lithium-ion assets provide value as stationary storage.",
    date: "June 15, 2026",
    image: "/solar3.jpg",
  },
];

const customerStories = [
  {
    name: "Commercial Customer",
    system: "250kW System",
    quote:
      "From our first consultation to final commissioning, the Shashwatt Energy team showed excellent technical expertise and attention to detail. We appreciated their use of high-quality components and their ability to manage a project of this scale seamlessly. We're already seeing the impact on our power costs.",
  },
  {
    name: "Residential Customer",
    system: "8kW Rooftop System",
    quote:
      "The installation was clean, quick, and handled with real care. The team explained every step clearly, helped us understand net metering, and delivered a system that has made our monthly electricity bills much lighter.",
  },
  {
    name: "Housing Society Customer",
    system: "120kW Common Area System",
    quote:
      "Shashwatt Energy gave our society a practical solar plan that worked for shared utilities without disrupting residents. Their coordination, documentation support, and commissioning process made the whole project feel effortless.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const storyTimer = window.setInterval(() => {
      setActiveStory((current) => (current + 1) % customerStories.length);
    }, 4000);

    return () => window.clearInterval(storyTimer);
  }, []);

  return (
  <main className="min-h-screen overflow-hidden bg-[#f8f7f2] text-[#431013]">
    <nav className="absolute left-0 right-0 top-0 z-20 text-white">
      <div className="mx-auto flex h-29.5 max-w-7xl items-center justify-between px-0">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Shashwatt Energy"
            className="h-14 w-auto md:-ml-4"
          />

          <div className="flex flex-col leading-none">
            <img
              src="/logo-text.png"
              alt="Shashwatt Energy"
              className="h-14 w-auto md:-ml-4 md:mt-2"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-[14px] font-semibold md:flex">
          <Link to="/" className="hover:text-white/80">Home</Link>
          <Link to="/residential" className="hover:text-white/80">Residential</Link>
          <Link to="/commercial" className="hover:text-white/80">Commercial</Link>
          <Link to="/pm-surya-ghar" className="hover:text-white/80">PM Surya Ghar Yojana</Link>
          <Link to="/about" className="hover:text-white/80">About Us</Link>
          <Link to="/projects" className="hover:text-white/80">Projects</Link>
          <Link to="/faq" className="hover:text-white/80">FAQ</Link>
          <Link to="/blog" className="hover:text-white/80">Blog</Link>
          <Link to="/calculator" className="hover:text-white/80">Calculator</Link>
        </div>

        <Link to="#contact" className="hidden rounded-[8px] bg-[#BA0013] px-7 py-3 text-[16px] font-semibold text-white transition hover:bg-[#BA0013] md:block">
          Contact Us
        </Link>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen &&
        <div className="mx-6 rounded-lg bg-black/55 px-6 py-5 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/residential" onClick={() => setMenuOpen(false)}>Residential</Link>
            <Link to="/commercial" onClick={() => setMenuOpen(false)}>Commercial</Link>
            <Link to="/pm-surya-ghar" onClick={() => setMenuOpen(false)}>PM Surya Ghar Yojana</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/calculator" onClick={() => setMenuOpen(false)}>Calculator</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>
      }
    </nav>

    {/* Hero Section */}
    <section className="relative min-h-190 overflow-hidden bg-[#9ca3a3] bg-[linear-gradient(180deg,rgba(20,31,35,0.28)_0%,rgba(18,25,20,0.12)_34%,rgba(7,14,10,0.55)_100%),url('/hero-bg.png')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 mx-auto flex min-h-190 max-w-7xl items-center px-0 pt-20 lg:px-0">
        <div className="mt-40">
          <h1 className="max-w-210 text-[60px] font-bold leading-[1.12] tracking-normal text-white sm:text-[72px] lg:text-[60px]">
            Turn Sunlight Into
            <br />
            Long-Term Savings
          </h1>

          <p className="mt-8 max-w-186.75 text-[18px] font-medium leading-[1.45] text-white sm:text-[18px]">
            Empowering Indian homes and businesses with high-performance solar infrastructure.
            We deliver end-to-end engineering excellence for a sustainable future.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link to="#contact" className="rounded-full bg-[#FFDAD8] px-6 py-3 text-[16px] font-regular text-[#341010] transition">
              Consult our Expertise
            </Link>
            <Link to="#about" className="rounded-full border border-[#FFDAD8] px-6 py-3 text-[16px] font-regular text-white transition">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center text-center h-32 px-0
                ${index !== features.length - 1
                  ? "border-r border-gray-300"
                  : ""
                }
                ${index < 2
                  ? "md:border-b-0 border-b border-gray-300"
                  : ""
                }
              `}
            >
              <h3 className="text-[#222] text-sm md:text-[16px] font-regular">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Shadow */}
      <div className="h-8 bg-linear-to-b from-white to-transparent"></div>
    </section>

    {/* Solutions for Every Need */}
    <section className="bg-[#faf9f7] py-20">
      <div className="max-w-7xl mx-auto px-0">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-[5px] text-[#93000D] text-[16px] font-bold mb-5">
            Versatility
          </p>

          <h2 className="text-[34px] md:text-[40px] font-bold leading-tight text-[#1A1C1A] mb-4">
            Solutions for Every Need
          </h2>

          <p className="max-w-142.5 mx-auto text-[16px] leading-6 text-[#5D3F3C]">
            Providing specialized solar infrastructure tailored for residential, commercial, and
            industrial segments across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((column) => (
            <div key={column} className="flex flex-col gap-6">
              {solutions
                .filter((_, index) => index % 3 === column)
                .map((item) => (
                  <div
                    key={item.title}
                    className={`flex flex-col rounded-lg border border-[#dedbd7] bg-white p-7 shadow-[0_18px_36px_rgba(39,31,25,0.08)] transition duration-300 hover:shadow-[0_22px_44px_rgba(39,31,25,0.12)] ${item.image ? "min-h-101" : "min-h-56.5 justify-center"
                      }`}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mb-8 h-48 w-full rounded-md object-cover"
                      />
                    )}

                    <h3 className="mb-3 text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                      {item.title}
                    </h3>

                    <p className="max-w-67.5 text-[16px] leading-[1.55] text-[#5D3F3C]">
                      {item.desc}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#faf9f7] py-16">
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid gap-10 border-b border-[#ead5cf] pb-12 text-center md:grid-cols-3 md:gap-0">
          <div className="md:border-r md:border-[#ead5cf]">
            <h3 className="mb-5 font-serif text-[40px] leading-none text-[#BA0013] md:text-[56px]">
              2,000+ kW
            </h3>
            <p className="text-[16px] font-semibold uppercase tracking-[2px] text-[#5D3F3C]">
              Solar Installation
            </p>
          </div>

          <div className="md:border-r md:border-[#ead5cf]">
            <h3 className="mb-5 font-serif text-[40px] leading-none text-[#1A1C1A] md:text-[56px]">
              175,000+
            </h3>
            <p className="text-[16px] font-semibold uppercase tracking-[2px] text-[#5D3F3C]">
              kWh Clean Energy Generated
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-[40px] leading-none text-[#BA0013] md:text-[56px]">
              125,000+
            </h3>
            <p className="text-[16px] font-semibold uppercase tracking-[2px] text-[#5D3F3C]">
              Tress Planted
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Trust ShashWatt?*/}
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 lg:px-0">
        <div className="relative mx-auto w-full max-w-145 md:mx-0">
          <div className="absolute -left-23.75 -top-21.25 z-10 hidden rounded-lg border border-[#E7BDB8BD]/74 bg-[#F4F3F1] px-10 py-7 text-center shadow-[0_18px_45px_rgba(39,31,25,0.18)] md:block">
            <p className="text-[40px] font-bold leading-none text-[#BA0013]">
              25Y
            </p>
            <p className="mt-5 whitespace-nowrap text-[16px] text-[#5D3F3C]">
              Performance Warranty
            </p>
          </div>

          <img
            src="/trust.png"
            alt="Residential rooftop solar installation"
            className="h-103.75 w-full rounded-lg object-cover shadow-[0_24px_45px_rgba(39,31,25,0.22)]"
          />
        </div>

        <div className="max-w-125">
          <p className="mb-6 text-[16px] font-bold uppercase tracking-[5px] text-[#93000D]">
            Reliability
          </p>

          <h2 className="mb-10 text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            Why Trust <span className="text-[#BA0013]">ShashWatt?</span>
          </h2>

          <div className="space-y-9">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#BA0013] text-white">
                <RotateCcw size={20} />
              </div>
              <div>
                <h3 className="mb-2 text-[24px] font-semibold text-[#1A1C1A]">
                  Proven Track Record
                </h3>
                <p className="text-[16px] leading-[1.55] text-[#5D3F3C]">
                  Over 1,000+ KW installed across diverse terrains and property types in India.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#BA0013] text-white">
                <Hd size={20} />
              </div>
              <div>
                <h3 className="mb-2 text-[24px] font-semibold text-[#1A1C1A]">
                  Tier-1 Components
                </h3>
                <p className="text-[16px] leading-[1.55] text-[#5D3F3C]">
                  We partner with industry leaders like Adani, RenewSys, and Solis for maximum efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#BA0013] text-white">
                <Settings size={20} />
              </div>
              <div>
                <h3 className="mb-2 text-[24px] font-semibold text-[#1A1C1A]">
                  Precision Engineering
                </h3>
                <p className="text-[16px] leading-[1.55] text-[#5D3F3C]">
                  Custom structural designs tailored for maximum solar harvesting based on your roof orientation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Seamless Installation Journey */}
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <h2 className="mb-20 text-center text-[40px] font-bold leading-tight text-[#1A1C1A]">
          Seamless <span className="text-[#BA0013]">Installation Journey</span>
        </h2>

        <div className="relative">
          <div className="absolute left-28 right-28 top-10 hidden h-0.5 bg-[#E7BDB84D] md:block" />

          <div className="relative grid gap-12 text-center md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-9 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#BA0013] bg-[#EFEEEB] text-[#BA0013]">
                <Crosshair size={32} />
              </div>
              <h3 className="mb-3 text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                Rooftop Survey
              </h3>
              <p className="max-w-57 text-[16px] leading-[1.45] text-[#5D3F3C]">
                Physical & satellite analysis for optimal plant design.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-9 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEEB] text-[#BA0013]">
                <PenTool size={30} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                Solar Plant Design
              </h3>
              <p className="max-w-60 text-[16px] leading-[1.45] text-[#5D3F3C]">
                Customized engineering blueprints for your site.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-9 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEEB] text-[#BA0013]">
                <Wrench size={30} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                Installation
              </h3>
              <p className="max-w-66 text-[16px] leading-[1.45] text-[#5D3F3C]">
                Expert end-to-end site execution and commissioning.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-9 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEEB] text-[#BA0013]">
                <Settings size={30} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                Maintenance
              </h3>
              <p className="max-w-66 text-[16px] leading-[1.45] text-[#5D3F3C]">
                Upto 100% Maintenance and cleaning support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PM Surya Ghar */}
    <section id="pm-surya-ghar" className="bg-[#faf9f7] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-[1fr_1.12fr] lg:px-0">
        <div className="mb-28">
          <p className="mb-6 text-[16px] font-bold uppercase tracking-[5px] text-[#93000D]">
            Subsidy
          </p>

          <h2 className="mb-8 text-[52px] font-bold leading-[1.18] text-[#3b0508] md:text-[40px]">
            <span className="text-[#93000D]">PM Surya Ghar:</span>
            <br />
            <span className="text-[#410002]">Muft Bijli Yojana</span>
          </h2>

          <p className="mb-8 max-w-180 text-[18px] leading-[1.45] text-[#1A1C1A]">
            Avail significant government subsidies and generate up to 300
            units of free electricity every month. ShashWatt Energy is an
            authorized vendor for complete subsidy processing.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-6 text-[#410002]">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-3 border-[#4a090b]">
                <Check size={14} strokeWidth={3} />
              </span>
              <p className="text-[16px] leading-tight">
                Direct Benefit Transfer to your account
              </p>
            </div>

            <div className="flex items-center gap-6 text-[#410002]">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-3 border-[#4a090b]">
                <Check size={14} strokeWidth={3} />
              </span>
              <p className="text-[16px] leading-tight">
                Authorized solar modules only
              </p>
            </div>

            <div className="flex items-center gap-6 text-[#410002]">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-3 border-[#4a090b]">
                <Check size={14} strokeWidth={3} />
              </span>
              <p className="text-[16px] leading-tight">
                End-to-end documentation assistance
              </p>
            </div>
          </div>
        </div>

        <div className="relative pb-10 pr-0 md:pr-18">
          <img
            src="/yojana.png"
            alt="Rooftop solar installation under PM Surya Ghar scheme"
            className="h-94 w-full rounded-xl object-cover shadow-[0_24px_50px_rgba(39,31,25,0.22)]"
          />

          <div className="absolute bottom-0 right-0 rounded-2xl bg-[#BA0013] px-8 py-6 text-white shadow-[0_24px_45px_rgba(39,31,25,0.28)]">
            <p className="mb-2 text-[16px] leading-none">
              ₹78,000
            </p>
            <p className="text-[24px] font-semibold leading-none">
              Max Subsidy
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Creating Real Environmental Impact */}
    <section className="bg-[#faf9f7] py-0">
      <div className="mx-auto max-w-[1748px] px-0">
        <div className="mx-auto pt-5 text-center">
          <h2 className="mb-10 px-6 text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            Creating Real <span className="text-[#93000D]">Environmental Impact</span>
          </h2>
          <p className="mx-auto max-w-170 px-6 text-[20px] font-normal leading-[1.45] text-[#1A1C1A] md:text-[18px]">
            ShashWatt has achieved <span className="font-bold text-[#007100]">2,000+ KW</span> of solar installations, generated
            over <span className="font-bold text-[#007100]">175,000+ kWh</span> of clean energy, and helped save around
            <span className="font-bold text-[#007100]">125,000+</span> tress
            planted through its solar energy solutions.
          </p>

          <img
            src="/impact.png"
            alt="Solar panels with wind turbines and greenery"
            className="block h-full w-full object-fill md:h-full md:-mt-60"
          />
        </div>
      </div>
    </section>

    {/* Built with Precision */}
    <section className="bg-[#faf9f7] py-16 md:py-0 lg:pb-24 lg:-mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="mb-6 text-[40px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
              Built with Precision
            </h2>
            <p className="max-w-140 text-[22px] leading-[1.45] text-[#5D3F3C] md:text-[18px]">
              Our engineering team focuses on the details that ensure 25+ years
              of trouble-free performance. From rust-resistant mounting to UV-
              protected cabling, every component is selected for the Indian
              climate.
            </p>
          </div>

          <div className="flex items-start justify-start gap-9 pt-3 text-center md:justify-end md:pt-18">
            <div>
              <p className="mb-2 text-[16px] leading-none text-[#BA0013]">
                25Y
              </p>
              <p className="text-[16px] leading-tight text-[#5D3F3C]">
                Warranty
              </p>
            </div>
            <div className="h-16 w-px bg-[#E7BDB866]" />
            <div>
              <p className="mb-2 text-[16px] leading-none text-[#BA0013]">
                10+
              </p>
              <p className="text-[16px] leading-tight text-[#5D3F3C]">
                Checkpoints
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <img
            src="/precision1.jpg"
            alt="Solar cabling detail"
            className="h-67 w-full rounded-lg object-cover"
          />
          <img
            src="/precision2.jpg"
            alt="Solar inverter display"
            className="h-67 w-full rounded-lg object-cover"
          />
          <img
            src="/precision3.jpg"
            alt="Rooftop solar panel installation"
            className="h-67 w-full rounded-lg object-cover"
          />
          <img
            src="/precision4.jpg"
            alt="Solar mounting hardware"
            className="h-67 w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>

    {/* Our Partners */}
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
        <h2 className="mb-20 text-center text-[40px] font-bold leading-tight text-[#1A1C1A]">
          Our Partners
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex w-max items-center gap-28"
            style={{ animation: "partners-marquee 18s linear infinite" }}
          >
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Tailored Solutions */}
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="text-center">
          <h2 className="text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            Tailored Solutions for{" "}
            <span className="text-[#93000D]">Every Living Space</span>
          </h2>
          <p className="mx-auto mt-4 max-w-150 text-[18px] leading-[1.45] text-[#5D3F3C]">
            From individual bungalows to sprawling housing societies, we have the
            expertise to power any home configuration.
          </p>
        </div>

        <div className="relative mt-18">
          <div className="absolute left-4 right-4 top-0 hidden h-px bg-[#FAF9F6] md:block" />

          <div className="grid gap-10 md:grid-cols-4 md:gap-9">
            {livingSpaces.map(({ title, desc, Icon }) => (
              <div key={title} className="relative pt-0">
                <div className="absolute -top-10 -left-8 z-10 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-[#BA00131A] text-[#BA0013]">
                  <Icon size={27} strokeWidth={2.5} />
                </div>

                <div className="flex min-h-65 flex-col items-center justify-center rounded-lg border border-[#E8E0DC] bg-[#FAF9F6] px-8 py-12 text-center">
                  <h3 className="mb-6 whitespace-pre-line text-[24px] font-semibold leading-[1.18] text-[#1A1C1A]">
                    {title}
                  </h3>
                  <p className="max-w-52 text-[16px] leading-[1.45] text-[#5D3F3C]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Frequently Asked Questions */}
    <section className="bg-[#FAF9F6] py-20">
      <div className="mx-auto max-w-245 px-6">
        <h2 className="mb-16 text-center text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
          Frequently Asked{" "}
          <span className="text-[#BA0013]">Questions</span>
        </h2>

        <div className="space-y-5">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-lg border border-[#E8E0DC] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className={`flex w-full items-center justify-between px-7 py-6 text-left text-[16px] leading-tight transition ${isOpen
                    ? "bg-[#BA0013] font-medium text-white"
                    : "bg-white font-normal text-[#1A1C1A]"
                    }`}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2.5}
                    className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-7 py-7">
                    <p className="max-w-212 text-[16px] leading-[1.45] text-[#5D3F3C]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-15 text-center">
          <Link
            to="#faq"
            className="inline-flex items-center gap-2 rounded-md border border-[#BA0013] px-6 py-3 text-[16px] font-normal text-[#BA0013] transition hover:bg-[#BA0013] hover:text-white"
          >
            View All FAQs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Solar Insights */}
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#BA00131A] px-4 py-2 text-[16px] uppercase tracking-[2px] text-[#BA0013]">
            Insights
          </span>

          <h2 className="mt-6 text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            Solar Insights &{" "}
            <span className="text-[#BA0013]">Updates</span>
          </h2>

          <p className="mx-auto mt-4 max-w-150 text-[16px] leading-[1.45] text-[#5D3F3C]">
            Expert guidance on energy arbitrage, infrastructure readiness, and the future of solar
            technology.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-[0_22px_55px_rgba(39,31,25,0.10)]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-49 w-full object-cover"
              />

              <div className="px-12 py-12">
                <p className="mb-6 text-[16px] uppercase leading-none text-[#BA0013]">
                  {post.category}
                </p>

                <h3 className="mb-6 text-[24px] font-semibold leading-[1.18] text-[#1A1C1A]">
                  {post.title}
                </h3>

                <p className="mb-10 text-[16px] leading-[1.45] text-[#5D3F3C]">
                  {post.desc}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-[14px] font-semibold text-[#5D3F3C]">
                    {post.date}
                  </p>

                  <Link
                    to="#blog"
                    className="inline-flex items-center gap-2 text-[16px] text-[#BA0013]"
                  >
                    Read Article
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="#blog"
            className="inline-flex items-center justify-center rounded-md border border-[#BA0013] px-9 py-4 text-[16px] font-normal text-[#BA0013] transition hover:bg-[#BA0013] hover:text-white"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>

    {/* Customer Stories */}
    <section className="bg-[#FAF9F6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#BA00131A] px-4 py-2 text-[16px] uppercase tracking-[2px] text-[#BA0013]">
            Customer Stories
          </span>

          <h2 className="mt-6 text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            What Our{" "}
            <span className="text-[#BA0013]">Satisfied Customers</span> Say
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-225 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeStory * 100}%)` }}
          >
            {customerStories.map((story) => (
              <div key={story.name} className="w-full shrink-0">
                <div className="rounded-2xl bg-white px-10 py-18 text-center shadow-[0_24px_45px_rgba(39,31,25,0.18)]">
                  <h3 className="text-[24px] font-bold leading-tight text-[#1A1C1A]">
                    {story.name}
                  </h3>

                  <p className="mt-3 text-[16px] leading-tight text-[#5D3F3C]">
                    {story.system}
                  </p>

                  <p className="mx-auto mt-8 max-w-160 text-[18px] italic leading-[1.55] text-[#1A1C1A]">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {customerStories.map((story, index) => (
            <button
              key={story.name}
              type="button"
              onClick={() => setActiveStory(index)}
              aria-label={`Show ${story.name}`}
              className={`h-2.5 w-2.5 rounded-full transition ${activeStory === index ? "bg-[#BA0013]" : "bg-[#E7BDB8]"
                }`}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Solar Switch CTA */}
    <section className="min-h-105 bg-[url('/cta-bg.png')] bg-cover bg-center">
      <div className="mx-auto flex min-h-105 max-w-7xl items-center px-6 lg:px-0">
        <div className="w-full max-w-113.75 text-center md:ml-12">
          <h2 className="mx-auto text-[30px] font-bold leading-[1.16] text-[#1A1C1A] md:text-[40px]">
            Ready to Make the
            <br />
            Switch to Solar?
          </h2>

          <p className="mx-auto mt-6 text-[18px] leading-normal text-[#1A1C1A] md:text-[18px]">
            Start your journey towards energy independence today
            with India's most trusted solar engineering team.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-5">
            <Link
              to="#contact"
              className="inline-flex h-12.5 min-w-33.5 items-center justify-center rounded-xl bg-[#BA0013] px-7 text-[16px] text-white shadow-[0_16px_28px_rgba(186,0,19,0.22)] transition hover:bg-[#BA0013]"
            >
              Contact Us
            </Link>

            <Link
              to="#calculator"
              className="inline-flex h-12.5 min-w-41 items-center justify-center rounded-xl bg-white px-7 text-[16px] text-[#1A1C1A] shadow-[0_16px_28px_rgba(39,31,25,0.12)] transition hover:text-[#BA0013]"
            >
              Calculate Savings
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-[#341010] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.25fr_1fr_1fr_1.35fr] lg:px-0">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img
              src="/logo.png"
              alt="Shashwatt Energy"
              className="h-14 w-auto md:-ml-6"
            />
            <span className="flex flex-col leading-none">
              <img
                src="/logo-text.png"
                alt="Shashwatt Energy"
                className="h-14 w-auto md:-ml-4 md:mt-2"
              />
            </span>
          </Link>

          <p className="mt-8 max-w-72 text-[16px] leading-[1.55] text-white/90">
            Empowering a sustainable future by <br />
            delivering innovative solar energy <br />
            systems. Based in Hubballi, serving <br />
            the nation.
          </p>

          <div className="mt-8 flex items-center gap-8">
            <Link to="#" aria-label="Website" className="text-white">
              <Earth size={20} />
            </Link>
            <Link to="#" aria-label="Share" className="text-white">
              <Share2 size={20} />
            </Link>
            <Link to="#" aria-label="Profile" className="text-white">
              <ContactRound size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-[24px] font-semibold text-[#BA0013]">
            Service
          </h3>
          <div className="flex flex-col gap-5 text-[16px] leading-tight text-[#FAF9F6]">
            <Link to="/residential">Residential Solar</Link>
            <Link to="/commercial">Commercial Solar</Link>
            <Link to="/industrial">Industrial Solutions</Link>
            <Link to="/pm-surya-ghar">
              PM Surya Ghar
              <br />
              Yojana
            </Link>
            <Link to="/calculator">Calculator</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-[24px] font-semibold text-[#BA0013]">
            About Us
          </h3>
          <div className="flex flex-col gap-5 text-[16px] leading-tight text-[#FAF9F6]">
            <Link to="/about">About Us</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-[24px] font-semibold text-[#BA0013]">
            Support
          </h3>
          <div className="flex flex-col gap-5 text-[16px] leading-[1.45] text-[#FAF9F6]">
            <div className="flex gap-4">
              <Phone className="mt-0.5 shrink-0 text-[#BA0013]" size={18} />
              <p>+917829575683 / 9972975683</p>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-0.5 shrink-0 text-[#BA0013]" size={18} />
              <p>support@shashwatt.com</p>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-0.5 shrink-0 text-[#BA0013]" size={18} />
              <p>
                C-512, Industrial Estate, Gokul
                <br />
                Road, Hubballi - 580030
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 bg-[#341010] py-4 text-center text-[16px] text-[#FAF9F6]">
        All rights reserved. Designed by Spitel @2026
      </div>
    </footer>
  </main>
  );
}
