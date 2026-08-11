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
  Factory,
  DraftingCompass,
  Warehouse,
  CircleCheck,
  BadgeCheck,
  Wrench,
  Shield,
  TrendingUp,
  Grid2X2,
  RefreshCcw,
  Leaf,
} from "lucide-react";

export default function PMSuryaGharYojana() {

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
            <Link to="/residential" className="hover:text-white/80">Residential</Link>
            <Link to="/commercial" className="hover:text-white/80 ">Commercial</Link>
            <Link to="/pm-surya-ghar" className="border-b-2 border-[#BA0013] text-[#BA0013]">PM Surya Ghar Yojana</Link>
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
        className="relative min-h-138.5 overflow-hidden bg-white bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.47)_38%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.1)_100%),url('commercial-bg.png')] bg-cover bg-center text-white md:min-h-138.5 lg:min-h-138.5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.06)_42%,rgba(0,0,0,0.32)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-115 max-w-7xl items-center px-6 pt-30 md:min-h-140 md:px-0 md:pt-32 lg:min-h-138.5">
          <div className="max-w-165">
            <span className="inline-flex rounded-full bg-[#FFDAD8] px-5 py-2 text-[16px] font-medium leading-none tracking-normal text-[#341010]">
              Subsidy
            </span>

            <h1 className="mt-8 text-[42px] font-bold leading-[1.05] tracking-normal text-white sm:text-[56px] lg:text-[56px]">
              Make Rooftop Solar More Affordable
            </h1>

            <p className="mt-7 max-w-140 text-[18px] font-medium leading-[1.55] text-white md:text-[18px]">
              Discover how government-backed solar subsidy support can help households reduce installation costs and move toward cleaner, more independent energy use.
            </p>
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Intro */}
      <section className="bg-[#faf9f7] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.05fr_1fr] md:gap-20 md:px-0">
          <div>
            <div className="mt-10 overflow-hidden"> {/* border-b-2 border-r-2 border-[#00000040] */}
              <img
                src="/surya.png" 
                alt="PM Surya Ghar Muft Bijli Yojana rooftop solar"
                className="h-72 w-full object-cover object-center md:h-135.25"
              />
            </div>
          </div>

          <div className="md:pl-20">
            <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#BA0013]">
              Government Solar Scheme
            </p>

            <h3 className="mt-5 text-[32px] font-bold leading-[1.15] text-[#1A1C1A] md:text-[40px]">
              PM Surya Ghar:
              <br />
              Muft Bijli Yojana
            </h3>

            <p className="mt-7 max-w-135 text-[18px] leading-[1.55] text-[#5D3F3C]">
              PM Surya Ghar: Muft Bijli Yojana is a government scheme that aims to
              provide free electricity to households in India. The scheme was
              launched by Prime Minister Narendra Modi on February 15, 2024.
              Under the scheme, households will be provided with a subsidy to
              install solar panels on their roofs. The subsidy will cover up to 40%
              of the cost of the solar panels. The scheme is expected to benefit 1
              crore households across India. It is estimated that the scheme will
              save the government Rs. 75,000 crore per year in electricity costs.
            </p>
          </div>
        </div>
      </section>

      {/* Scheme Helps */}
      <section className="bg-[#faf9f7] py-16 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-0">
          <div className="mx-auto max-w-178 text-center">
            <h2 className="text-[30px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
              What This Scheme Helps You Do
            </h2>
            <p className="mx-auto mt-4 max-w-150 text-[16px] leading-[1.45] text-[#5D3F3C]">
              Modernizing your energy consumption while significantly reducing
              financial overhead through government-backed initiatives.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Grid2X2,
                title: "Install Rooftop Solar",
                description:
                  "Seamless installation of high-efficiency panels on residential structures.",
              },
              {
                icon: Landmark,
                title: "Get Subsidy Support",
                description:
                  "Direct financial assistance covering significant percentages of installation costs.",
              },
              {
                icon: TrendingUp,
                title: "Reduce Expenses",
                description:
                  "Dramatic reduction in monthly utility bills through self-generated power.",
              },
              {
                icon: Leaf,
                title: "Move to Clean Energy",
                description:
                  "Contribute to India's sustainable future with zero-emission technology.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-[8px] bg-[#f1f0ee] px-8 py-8 md:min-h-66"
              >
                <Icon className="h-7 w-7 text-[#BA0013]" strokeWidth={2.2} />
                <h3 className="mt-5 text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                  {title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.45] text-[#5D3F3C]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Rooftop Solar Plant Capacity */}
      <section className="bg-[#faf9f7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-0">
          <h2 className="text-[30px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            Suitable Rooftop Solar Plant Capacity
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#5D3F3C]">
            Identify the ideal configuration based on your monthly energy footprint.
          </p>

          <div className="mt-12 overflow-hidden rounded-[10px] bg-white shadow-[0_2px_10px_rgba(26,28,26,0.08)]">
            <div className="grid grid-cols-3 bg-[#BA0013] text-[13px] font-bold uppercase tracking-normal text-white md:text-[16px]">
              <div className="border-r border-white/10 px-6 py-6 md:px-18">
                Avg Monthly Consumption (Units)
              </div>
              <div className="border-r border-white/10 px-6 py-6">
                Suitable Capacity
              </div>
              <div className="px-6 py-6">
                Subsidy Support
              </div>
            </div>

            {[
              {
                consumption: "0 - 150",
                capacity: "1 - 2 kW",
                subsidy: "₹30,000 - 60,000",
              },
              {
                consumption: "150 - 300",
                capacity: "2 - 3 kW",
                subsidy: "₹60,000 - 78,000",
              },
              {
                consumption: "> 300",
                capacity: "Above 3 kW",
                subsidy: "₹78,000 (Flat)",
              },
            ].map(({ consumption, capacity, subsidy }) => (
              <div
                key={consumption}
                className="grid grid-cols-3 border-b border-[#f1efec] text-[14px] last:border-b-0 md:text-[16px]"
              >
                <div className="px-6 py-6 font-bold text-[#1A1C1A] md:px-18">
                  {consumption}
                </div>
                <div className="px-6 py-6 text-[#5D3F3C]">
                  {capacity}
                </div>
                <div className="px-6 py-6 font-semibold text-[#BA0013]">
                  {subsidy}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#faf9f7] py-16 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-0">
          <h2 className="text-center text-[30px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
            Benefits
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
            {[
              {
                icon: Warehouse,
                title: "Subsidy for Residential Households",
                description:
                  "The scheme offers a significant financial cushion by providing up to 40% subsidy for the installation of rooftop solar systems, making solar energy accessible and affordable for families across India.",
              },
              {
                icon: Factory,
                title: "Subsidy for GHS/RWA",
                description:
                  "Group Housing Societies and Resident Welfare Associations can benefit from Rs. 18,000 per kW for common facilities including EV Charging infrastructure up to 500 kW capacity (@ 3 kW per house).",
              },
            ].map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="grid gap-7 rounded-[8px] border border-[#ece7e2] bg-white px-8 py-9 shadow-[0_6px_14px_rgba(26,28,26,0.10)] md:grid-cols-[64px_1fr] md:px-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#BA00131A]">
                  <Icon className="h-7 w-7 text-[#BA0013]" strokeWidth={2.2} />
                </div>

                <div>
                  <h3 className="text-[24px] font-semibold leading-tight text-[#1A1C1A]">
                    {title}
                  </h3>
                  <p className="mt-5 text-[16px] leading-[1.55] text-[#5D3F3C]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-[#e9e7e4] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-24 md:px-0">
          <div>
            <h2 className="text-[30px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
              Eligibility Criteria
            </h2>

            <div className="mt-12 space-y-6">
              {[
                "Indian citizen with valid residency status",
                "Owner of a house with a suitable rooftop for solar",
                "Valid active electricity connection in the same premises",
                "No prior government solar subsidy availed for the same location",
              ].map((item) => (
                <div
                  key={item}
                  className="flex min-h-14 items-center gap-4 rounded-[8px] bg-white px-5 py-4 shadow-[0_1px_4px_rgba(26,28,26,0.04)]"
                >
                  <CircleCheck
                    className="h-5 w-5 flex-none text-[#BA0013]"
                    strokeWidth={2.2}
                  />
                  <p className="text-[16px] leading-[1.35] text-[#5D3F3C]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white p-7 shadow-[0_18px_28px_rgba(26,28,26,0.12)] md:mt-24">
            <img
              src="/criteria.png"
              alt="PM Surya Ghar solar eligibility illustration"
              className="h-60 w-full rounded-[6px] object-cover object-center md:h-60"
            />
          </div>
        </div>
      </section>

      {/* Solar Smarter Planning */}
      <section className="bg-[#faf9f7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-0">
          <div className="text-center">
            <h2 className="text-[30px] font-bold leading-tight text-[#1A1C1A] md:text-[40px]">
              How Shashwatt Helps You Plan Solar Smarter
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#5D3F3C]">
              We bridge the gap between policy and practical implementation.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
            {[
              {
                step: "01",
                title: "Understand Requirement",
                description: "Analyzing your peak loads and monthly unit consumption.",
              },
              {
                step: "02",
                title: "Check Suitability",
                description:
                  "Satellite-based assessment of your rooftop space and shadow profile.",
              },
              {
                step: "03",
                title: "Estimate Capacity",
                description:
                  "Calculating the exact kW needed for maximum ROI and subsidy.",
              },
              {
                step: "04",
                title: "Plan Installation",
                description:
                  "Full execution from vendor selection to commissioning.",
              },
            ].map(({ step, title, description }) => (
              <article key={step} className="text-center">
                <p className="text-[44px] font-bold leading-none text-[#BA00131A] md:text-[48px]">
                  {step}
                </p>
                <h3 className="mt-4 text-[16px] font-bold leading-tight text-[#1A1C1A]">
                  {title}
                </h3>
                <p className="mx-auto mt-3 max-w-55 text-[14px] leading-[1.35] text-[#5D3F3C]">
                  {description}
                </p>
              </article>
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
