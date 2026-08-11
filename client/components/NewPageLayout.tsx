import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Earth,
  Share2,
  ContactRound,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

interface NewPageLayoutProps {
  children: ReactNode;
}

export default function NewPageLayout({
  children,
}: NewPageLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#431013]">

      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

      <nav className="absolute left-0 right-0 top-0 z-50 text-white">

        <div className="mx-auto flex h-29.5 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* LOGO */}
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

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 text-[14px] font-semibold md:flex">

            <Link
              to="/"
              className="transition hover:text-white/80"
            >
              Home
            </Link>

            <Link
              to="/residential"
              className="transition hover:text-white/80"
            >
              Residential
            </Link>

            <Link
              to="/commercial"
              className="transition hover:text-white/80"
            >
              Commercial
            </Link>

            <Link
              to="/pm-surya-ghar"
              className="transition hover:text-white/80"
            >
              PM Surya Ghar Yojana
            </Link>

            <Link
              to="/about"
              className="transition hover:text-white/80"
            >
              About Us
            </Link>

            <Link
              to="/projects"
              className="transition hover:text-white/80"
            >
              Projects
            </Link>

            <Link
              to="/faq"
              className="transition hover:text-white/80"
            >
              FAQ
            </Link>

            <Link
              to="/blog"
              className="transition hover:text-white/80"
            >
              Blog
            </Link>

            <Link
              to="/calculator"
              className="transition hover:text-white/80"
            >
              Calculator
            </Link>

          </div>

          {/* CONTACT BUTTON */}
          <Link
            to="/contact"
            className="hidden rounded-[8px] bg-[#BA0013] px-7 py-3 text-[16px] font-semibold text-white transition hover:bg-[#a90011] md:block"
          >
            Contact Us
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mx-6 rounded-lg bg-black/70 px-6 py-5 backdrop-blur-md md:hidden">

            <div className="flex flex-col gap-4 text-sm">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/residential"
                onClick={() => setMenuOpen(false)}
              >
                Residential
              </Link>

              <Link
                to="/commercial"
                onClick={() => setMenuOpen(false)}
              >
                Commercial
              </Link>

              <Link
                to="/pm-surya-ghar"
                onClick={() => setMenuOpen(false)}
              >
                PM Surya Ghar Yojana
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>

              <Link
                to="/faq"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>

              <Link
                to="/blog"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/calculator"
                onClick={() => setMenuOpen(false)}
              >
                Calculator
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>

            </div>

          </div>
        )}

      </nav>


      {/* ===================================================== */}
      {/* PAGE CONTENT */}
      {/* ===================================================== */}

      <div>
        {children}
      </div>


      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="min-h-105 bg-[url('/cta-bg.png')] bg-cover bg-center">

        <div className="mx-auto flex min-h-105 max-w-7xl items-center px-6 lg:px-10">

          <div className="w-full max-w-113.75 text-center md:ml-12">

            <h2 className="mx-auto text-[30px] font-bold leading-[1.16] text-[#1A1C1A] md:text-[40px]">
              Ready to Make the
              <br />
              Switch to Solar?
            </h2>

            <p className="mx-auto mt-6 text-[18px] leading-normal text-[#1A1C1A]">
              Start your journey towards energy independence today
              with India's most trusted solar engineering team.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-5">

              <Link
                to="/contact"
                className="inline-flex h-12.5 min-w-33.5 items-center justify-center rounded-xl bg-[#BA0013] px-7 text-[16px] text-white shadow-[0_16px_28px_rgba(186,0,19,0.22)] transition hover:bg-[#a90011]"
              >
                Contact Us
              </Link>

              <Link
                to="/calculator"
                className="inline-flex h-12.5 min-w-41 items-center justify-center rounded-xl bg-white px-7 text-[16px] text-[#1A1C1A] shadow-[0_16px_28px_rgba(39,31,25,0.12)] transition hover:text-[#BA0013]"
              >
                Calculate Savings
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="bg-[#341010] text-white">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:px-10 py-16 md:grid-cols-[1.25fr_1fr_1fr_1.35fr]">

          {/* COMPANY */}
          <div>

            <Link
              to="/"
              className="inline-flex items-center"
            >
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
              Empowering a sustainable future by
              <br />
              delivering innovative solar energy
              <br />
              systems. Based in Hubballi, serving
              <br />
              the nation.
            </p>

            <div className="mt-8 flex items-center gap-8">

              <Link
                to="#"
                aria-label="Website"
                className="text-white"
              >
                <Earth size={20} />
              </Link>

              <Link
                to="#"
                aria-label="Share"
                className="text-white"
              >
                <Share2 size={20} />
              </Link>

              <Link
                to="#"
                aria-label="Profile"
                className="text-white"
              >
                <ContactRound size={20} />
              </Link>

            </div>

          </div>


          {/* SERVICE */}
          <div>

            <h3 className="mb-8 text-[24px] font-semibold text-[#BA0013]">
              Service
            </h3>

            <div className="flex flex-col gap-5 text-[16px] leading-tight text-[#FAF9F6]">

              <Link to="/residential">
                Residential Solar
              </Link>

              <Link to="/commercial">
                Commercial Solar
              </Link>

              <Link to="/industrial">
                Industrial Solutions
              </Link>

              <Link to="/pm-surya-ghar">
                PM Surya Ghar
                <br />
                Yojana
              </Link>

              <Link to="/calculator">
                Calculator
              </Link>

            </div>

          </div>


          {/* ABOUT */}
          <div>

            <h3 className="mb-8 text-[24px] font-semibold text-[#BA0013]">
              About Us
            </h3>

            <div className="flex flex-col gap-5 text-[16px] leading-tight text-[#FAF9F6]">

              <Link to="/about">
                About Us
              </Link>

              <Link to="/projects">
                Projects
              </Link>

              <Link to="/blog">
                Blogs
              </Link>

              <Link to="/faq">
                FAQ
              </Link>

            </div>

          </div>


          {/* SUPPORT */}
          <div>

            <h3 className="mb-8 text-[24px] font-semibold text-[#BA0013]">
              Support
            </h3>

            <div className="flex flex-col gap-5 text-[16px] leading-[1.45] text-[#FAF9F6]">

              <div className="flex gap-4">

                <Phone
                  className="mt-0.5 shrink-0 text-[#BA0013]"
                  size={18}
                />

                <p>
                  +917829575683 / 9972975683
                </p>

              </div>

              <div className="flex gap-4">

                <Mail
                  className="mt-0.5 shrink-0 text-[#BA0013]"
                  size={18}
                />

                <p>
                  support@shashwatt.com
                </p>

              </div>

              <div className="flex gap-4">

                <MapPin
                  className="mt-0.5 shrink-0 text-[#BA0013]"
                  size={18}
                />

                <p>
                  C-512, Industrial Estate, Gokul
                  <br />
                  Road, Hubballi - 580030
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="border-t border-white/20 bg-[#341010] py-4 text-center text-[16px] text-[#FAF9F6]">
          All rights reserved. Designed by Spitel @2026
        </div>

      </footer>

    </main>
  );
}