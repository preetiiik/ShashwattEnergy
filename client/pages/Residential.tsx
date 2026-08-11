import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Calculator,
  Landmark,
  ArrowRight,
  ContactRound,
  Earth,
  Mail,
  Phone,
  MapPin,
  Share2,
} from "lucide-react";

export default function Residential() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f7] text-[#1A1C1A]">
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
            <Link to="/residential" className="border-b-2 border-[#BA0013] text-[#BA0013]">Residential</Link>
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
      <section
        className="relative min-h-138.5 overflow-hidden bg-white bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.47)_38%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.1)_100%),url('/residential-bg.png')] bg-cover bg-center text-white md:min-h-138.5 lg:min-h-138.5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.06)_42%,rgba(0,0,0,0.32)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-115 max-w-7xl items-center px-6 pt-30 md:min-h-140 md:px-0 md:pt-32 lg:min-h-138.5">
          <div className="max-w-165">
            <span className="inline-flex rounded-full bg-[#FFDAD8] px-5 py-2 text-[16px] font-medium uppercase leading-none tracking-normal text-[#341010]">
              Raising Homes
            </span>

            <h1 className="mt-8 text-[42px] font-bold leading-[1.05] tracking-normal text-white sm:text-[56px] lg:text-[56px]">
              Solar, Built Into Everyday
              Homes.
            </h1>

            <p className="mt-7 max-w-150 text-[18px] font-medium leading-[1.55] text-white md:text-[18px]">
              Experience the future of residential living where technology meets
              architecture for sustainable autonomy. Empowering Indian homes <br />
              with high-performance solar infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1fr_1.08fr] lg:px-0">
          <div className="max-w-145">
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-[2px] text-[#BA0013]">
              Portfolio
            </p>

            <h2 className="text-[34px] font-bold leading-[1.08] text-[#1A1C1A] md:text-[40px]">
              Projects -- Solar
              <br />
              installations shaped around
              <br />
              real homes.
            </h2>

            <p className="mt-7 max-w-2xl text-[18px] leading-[1.55] text-[#5D3F3C]">
              Every rooftop is a unique engineering challenge. From the orientation
              of the sun to the architectural integrity of the structure, we
              customize each system to maximize yield without compromising <br />your
              home's aesthetic value. We deliver end-to-end engineering excellence
              for a sustainable future.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-150 pt-10 md:pt-0">
            <img
              src="/portfolio.png"
              alt="Residential solar installation project"
              className="h-72 w-full rounded-lg object-cover object-center shadow-[0_18px_35px_rgba(39,31,25,0.22)] md:h-87"
            />

            <div className="absolute right-0 top-0 rounded-lg border border-[#1A1C1A26] bg-[#EFEEEB] px-9 py-7 text-center shadow-[0_12px_28px_rgba(39,31,25,0.10)] md:-right-13 md:-top-15">
              <p className="text-[16px] leading-none text-[#BA0013]">
                ₹8.5 Cr+
              </p>
              <p className="mt-5 whitespace-nowrap text-[16px] leading-none text-[#5D3F3C]">
                Cumulative Savings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="bg-[#FAF9F6] pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <div className="mb-12 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="h-12 rounded-full border border-[#926F6B] bg-[#BA0013] px-9 text-[14px] font-semibold text-white"
            >
              All Homes
            </button>
            <button
              type="button"
              className="h-12 rounded-full border border-[#926F6B] bg-transparent px-9 text-[14px] font-semibold text-[#1A1C1A]"
            >
              Independent Homes
            </button>
            <button
              type="button"
              className="h-12 rounded-full border border-[#926F6B] bg-transparent px-9 text-[14px] font-semibold text-[#1A1C1A]"
            >
              Villas
            </button>
            <button
              type="button"
              className="h-12 rounded-full border border-[#926F6B] bg-transparent px-9 text-[14px] font-semibold text-[#1A1C1A]"
            >
              Apartments
            </button>
          </div>

          <article className="grid overflow-hidden rounded-lg bg-white shadow-[0_16px_35px_rgba(39,31,25,0.12)] md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-80 md:min-h-132">
              <img
                src="/project1.png"
                alt="The Emerald Heights Villa solar installation"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-7 top-7 rounded-full bg-[#BA0013] px-5 py-2 text-[14px] font-semibold leading-none text-white">
                Featured Project
              </span>
            </div>

            <div className="flex flex-col justify-center px-8 py-12 md:px-17">
              <h3 className="text-[30px] font-bold leading-tight text-[#1A1C1A] md:text-[32px]">
                The Emerald Heights Villa
              </h3>

              <p className="mt-7 text-[14px] font-semibold text-[#BA0013]">
                Bengaluru, KA
              </p>

              <div className="mt-9 grid max-w-105 grid-cols-2 gap-12">
                <div>
                  <p className="mb-2 text-[14px] font-semibold uppercase leading-none text-[#5D3F3C]">
                    Capacity
                  </p>
                  <p className="text-[24px] font-semibold leading-none text-[#1A1C1A]">
                    5.2 kW
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-[14px] font-semibold uppercase leading-none text-[#5D3F3C]">
                    Annual Savings
                  </p>
                  <p className="text-[24px] font-semibold leading-none text-[#1A1C1A]">
                    &#8377;82,000+
                  </p>
                </div>
              </div>

              <p className="mt-11 max-w-94 text-[16px] leading-[1.55] text-[#5D3F3C]">
                A grid-connected solar PV system designed for a high-consumption
                luxury villa, utilizing Mono PERC Half-cut modules for maximum
                efficiency in varying light conditions.
              </p>

              <Link
                to="#projects"
                className="mt-11 inline-flex h-12 w-39 items-center justify-center rounded-[8px] border-2 border-[#BA0013] text-[14px] font-semibold text-[#BA0013]"
              >
                View Project
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Completed Home Projects Section */}
      <section className="bg-[#FAF9F6] pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <h2 className="mb-12 text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            Completed Home Projects
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <article className="overflow-hidden rounded-lg bg-white shadow-[0_12px_24px_rgba(39,31,25,0.12)]">
              <img
                src="/home1.png"
                alt="Sunrise Residency solar installation"
                className="h-58 w-full object-cover"
              />

              <div className="px-7 py-7">
                <h3 className="text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                  Sunrise Residency
                </h3>
                <p className="mt-2 text-[14px] font-semibold leading-none text-[#5D3F3C]">
                  Pune, MH
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#EFE7E4] pt-6">
                  <p className="text-[16px] leading-none text-[#1A1C1A]">
                    System Size: 3.0 kW
                  </p>
                  <Link
                    to="#projects"
                    aria-label="View Sunrise Residency"
                    className="text-[28px] leading-none text-[#BA0013]"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg bg-white shadow-[0_12px_24px_rgba(39,31,25,0.12)]">
              <img
                src="/home2.png"
                alt="Maple Greens Apartments solar installation"
                className="h-58 w-full object-cover"
              />

              <div className="px-7 py-7">
                <h3 className="text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                  Maple Greens Apartments
                </h3>
                <p className="mt-2 text-[14px] font-semibold leading-none text-[#5D3F3C]">
                  Hyderabad, TS
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#EFE7E4] pt-6">
                  <p className="text-[16px] leading-none text-[#1A1C1A]">
                    System Size: 12.0 kW
                  </p>
                  <Link
                    to="#projects"
                    aria-label="View Maple Greens Apartments"
                    className="text-[28px] leading-none text-[#BA0013]"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg bg-white shadow-[0_12px_24px_rgba(39,31,25,0.12)]">
              <img
                src="/home3.png"
                alt="The Horizon Villa solar installation"
                className="h-58 w-full object-cover"
              />

              <div className="px-7 py-7">
                <h3 className="text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                  The Horizon Villa
                </h3>
                <p className="mt-2 text-[14px] font-semibold leading-none text-[#5D3F3C]">
                  Lonavala, MH
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#EFE7E4] pt-6">
                  <p className="text-[16px] leading-none text-[#1A1C1A]">
                    System Size: 7.5 kW
                  </p>
                  <Link
                    to="#projects"
                    aria-label="View The Horizon Villa"
                    className="text-[28px] leading-none text-[#BA0013]"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section className="bg-[#FAF9F6] pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <div className="text-center">
            <h2 className="text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
              Solar Solutions <span className="text-[#BA0013]">for Every Home</span>
            </h2>

            <p className="mx-auto mt-5 max-w-165 text-[18px] leading-[1.45] text-[#5D3F3C]">
              Explore cutting-edge solar products designed to transform your energy
              <br className="hidden md:block" />
              usage and bring sustainable living to your home.
            </p>
          </div>

          <div className="mx-auto mt-18 grid max-w-325 overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_rgba(39,31,25,0.16)] md:grid-cols-[1fr_1.03fr]">
            <img
              src="/solar.png"
              alt="Standard residential rooftop solar solution"
              className="h-80 w-full object-cover md:h-122"
            />

            <div className="flex flex-col justify-center px-8 py-12 md:px-16">
              <h3 className="text-[32px] font-bold leading-tight text-[#1A1C1A]">
                Standard
              </h3>

              <p className="mt-5 max-w-125 text-[18px] leading-[1.55] text-[#5D3F3C]">
                Affordable solar panels with string inverter optimized for
                your home electricity needs
              </p>

              <div className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    String inverter based solar system with Mono-PERC Half cut
                    panels with efficiency up to 21%
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    GI based structure and standard fire resistant wiring
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    Warranty - 25 years on panels and 5 years on inverter
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    Wifi based monitoring system to monitor solar generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Solar Solution Section */}
      <section className="bg-[#FAF9F6] pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <div className="mx-auto grid max-w-325 overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_rgba(39,31,25,0.16)] md:grid-cols-[1.03fr_1fr]">
            <div className="flex flex-col justify-center px-8 py-12 md:px-16">
              <h3 className="text-[32px] font-bold leading-tight text-[#1A1C1A]">
                Premium
              </h3>

              <p className="mt-5 max-w-125 text-[18px] leading-[1.55] text-[#5D3F3C]">
                Solar panels with latest technology combined with micro
                inverters for higher generation and long lasting systems
              </p>

              <div className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    Microinverter based solar system with TopCON N-Type panels
                    with efficiency up to 24%
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    Premium materials used - in structure, wires and everything else
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    Long life - 30 years warranty on panels and 25 years warranty on
                    Micro inverters
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    Modular system - any number of panels can be added or
                    replaced as required
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#BA0013]" />
                  <p className="max-w-125 text-[16px] leading-[1.45] text-[#1A1C1A]">
                    Advanced energy monitoring system with monitoring your home
                    consumption
                  </p>
                </div>
              </div>
            </div>

            <img
              src="/premium.png"
              alt="Premium residential rooftop solar solution"
              className="h-80 w-full object-cover md:h-128"
            />
          </div>
        </div>
      </section>

      {/* Solar Package Comparison Section */}
      <section className="bg-[#FAF9F6] pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <div className="overflow-hidden rounded-b-lg bg-white shadow-[0_16px_36px_rgba(39,31,25,0.12)]">
            <div className="grid min-w-200 grid-cols-[0.62fr_0.95fr_1.5fr] bg-[#E7BDB81A] text-[16px] font-bold text-[#1A1C1A]">
              <div className="border-r border-[#00000080] px-20 py-5">
                Feature
              </div>
              <div className="border-r border-[#00000080] px-20 py-5 text-[#BA0013]">
                Premium (Microinverter)
              </div>
              <div className="px-44 py-5 text-[#5D3F3C]">
                Standard (String)
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-200">
                <div className="grid grid-cols-[0.62fr_0.95fr_1.5fr] border-b border-[#E7BDB81A] text-[14px] text-[#1A1C1A]">
                  <div className="px-20 py-6 font-semibold">
                    Inverter Type
                  </div>
                  <div className="px-20 py-6">
                    Microinverter (Modular)
                  </div>
                  <div className="px-44 py-6">
                    String Inverter
                  </div>
                </div>

                <div className="grid grid-cols-[0.62fr_0.95fr_1.5fr] border-b border-[#E7BDB81A] text-[14px] text-[#1A1C1A]">
                  <div className="px-20 py-6 font-semibold">
                    Panel Tech
                  </div>
                  <div className="px-20 py-6">
                    TopCON N-Type
                  </div>
                  <div className="px-44 py-6">
                    Mono-PERC Half Cut
                  </div>
                </div>

                <div className="grid grid-cols-[0.62fr_0.95fr_1.5fr] border-b border-[#E7BDB81A] text-[14px] text-[#1A1C1A]">
                  <div className="px-20 py-6 font-semibold">
                    Efficiency
                  </div>
                  <div className="px-20 py-6">
                    ~24%
                  </div>
                  <div className="px-44 py-6">
                    ~21%
                  </div>
                </div>

                <div className="grid grid-cols-[0.62fr_0.95fr_1.5fr] border-b border-[#E7BDB81A] text-[14px] text-[#1A1C1A]">
                  <div className="px-20 py-6 font-semibold">
                    Warranty
                  </div>
                  <div className="px-20 py-6">
                    30y Panel / 25y Inverter
                  </div>
                  <div className="px-44 py-6">
                    25y Panel / 5y Inverter
                  </div>
                </div>

                <div className="grid grid-cols-[0.62fr_0.95fr_1.5fr] text-[14px] text-[#1A1C1A]">
                  <div className="px-20 py-6 font-semibold">
                    Monitoring
                  </div>
                  <div className="px-20 py-6">
                    Module-level Advanced
                  </div>
                  <div className="px-44 py-6">
                    Standard WiFi Tracking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-[#FAF9F6] pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <div className="text-center">
            <p className="mb-4 text-[14px] font-semibold uppercase tracking-[2px] text-[#BA0013]">
              Applications
            </p>

            <h2 className="text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
              Transform Your Home with Solar Power
            </h2>

            <p className="mx-auto mt-4 max-w-125 text-[18px] leading-[1.55] text-[#5D3F3C]">
              Solar panels with latest technology combined with micro inverters for
              higher generation and long lasting systems
            </p>
          </div>

          <div className="mt-16 grid w-full gap-14 md:grid-cols-2">
            <article className="overflow-hidden rounded-lg bg-white shadow-[0_10px_22px_rgba(39,31,25,0.12)]">
              <img
                src="/application1.png"
                alt="Rooftop solar installation"
                className="h-64 w-full object-cover"
              />

              <div className="px-7 py-6">
                <h3 className="text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                  Rooftop Installation
                </h3>
                <p className="mt-3 max-w-105 text-[16px] leading-[1.45] text-[#5D3F3C]">
                  Installed on the roof of your apartment / common areas such as
                  club house etc. for maximum yield.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg bg-white shadow-[0_10px_22px_rgba(39,31,25,0.12)]">
              <img
                src="/application2.png"
                alt="Solar carport installation"
                className="h-64 w-full object-cover"
              />

              <div className="px-7 py-6">
                <h3 className="text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                  Solar Carport
                </h3>
                <p className="mt-3 max-w-105 text-[16px] leading-[1.45] text-[#5D3F3C]">
                  Provides shade for car parking areas and generates clean energy
                  while protecting your vehicles.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Solar Options Section */}
      <section className="bg-[#FAF9F6] pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <h2 className="mb-16 text-center text-[34px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            Explore Your Solar Options
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="#calculator"
              className="flex min-h-34 items-center gap-9 rounded-lg border border-[#D9D5D0] bg-white px-11 py-8 transition hover:border-[#BA0013]/40"
            >
              <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-[#FCE3E7] text-[#BA0013]">
                <Calculator size={24} strokeWidth={2.2} />
              </span>

              <span>
                <span className="block text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                  Solar Calculator
                </span>
                <span className="mt-3 block max-w-73 text-[16px] leading-[1.45] text-[#5D3F3C]">
                  Estimate your savings and required system
                  size in minutes.
                </span>
              </span>
            </Link>

            <Link
              to="#pm-surya-ghar"
              className="flex min-h-34 items-center gap-9 rounded-lg border border-[#D9D5D0] bg-white px-11 py-8 transition hover:border-[#BA0013]/40"
            >
              <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-[#FCE3E7] text-[#BA0013]">
                <Landmark size={24} strokeWidth={2.2} />
              </span>

              <span>
                <span className="block text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                  PM Surya Ghar
                </span>
                <span className="mt-3 block max-w-73 text-[16px] leading-[1.45] text-[#5D3F3C]">
                  Learn about government subsidies and
                  <br />
                  Muft Bijli Yojna guides.
                </span>
              </span>
            </Link>
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
              <Link to="#calculator">Calculator</Link>
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
  )
}
