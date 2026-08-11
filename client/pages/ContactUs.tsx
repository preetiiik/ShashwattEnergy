import NewPageLayout from "../components/NewPageLayout";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  Check,
} from "lucide-react";

// Photos — served from the /public/calculatorimg folder
const heroImg = "/contactusimg/contact-hero.png";

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

interface ContactDetail {
  icon: typeof Phone;
  label: string;
  value: string;
  extra?: string;
}

const contactDetails: ContactDetail[] = [
  { icon: Phone, label: "Call Us", value: "+91 7829575683 / +91 9972975683" },
  { icon: Mail, label: "Email Us", value: "contact@shashwatt.com" },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "C-512, Industrial Estate, Gokul road, 7th Cross, Hubballi - 580032",
  },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const promises: string[] = [
  "Free Site Assessment & Energy Audit",
  "ROI & Payback Period Projection",
  "Subsidy (PM Surya Ghar) Guidance",
  "Design and Guidance"
];

export default function Contact() {
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

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial">("Residential");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!fullName || !email) return;
    // Wire this up to your enquiry endpoint / CRM.
    setSubmitted(true);
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
                style={heading}
                className={`inline-block bg-[#FFDAD8] text-stone-900 font-semibold text-sm px-5 py-2 rounded-full mb-7 transition-all duration-700 ease-out ${
                  heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Contact Us
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
              Let's Start Your Solar Journey
            </h1>
            <p
              style={{ transitionDelay: heroIn ? "240ms" : "0ms" }}
              className={`text-white/90 text-lg max-w-xl transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Whether you're exploring solar for your home, business, or community, our team is here
              to help you find the right solution for your energy needs.
            </p>
          </div>
        </div>
      </header>

      {/* ============ CONTACT INFO BAR ============ */}
      <section className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:divide-x divide-stone-200 divide-y sm:divide-y-0 px-6 lg:px-10">
          {contactDetails.map(({ icon: Icon, label, value }) => (
            <div key={label} className="py-8 sm:py-10 px-0 sm:px-4 md:px-6 sm:first:pl-0">
              <Icon size={18} className="text-red-700 mb-3" />
              <div style={heading} className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-1.5">
                {label}
              </div>
              <div style={heading} className="font-bold text-sm text-stone-800 leading-snug">
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FORM ============ */}
      <section className="py-24 px-6 lg:px-10 bg-stone-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <span style={heading} className="block text-red-700 font-bold text-sm tracking-widest uppercase mb-6">
              Get in Touch
            </span>
            <h2 style={heading} className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Tell Us About Your Energy Needs
            </h2>
            <p className="text-stone-500 text-base max-w-md mb-10">
              Every building is unique. Share a few details about your property, and our technical
              specialists will prepare a customized feasibility report and solar proposal for you
              within 24 hours of survey.
            </p>

            <div className="space-y-5">
              {promises.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-red-50 text-red-700 flex items-center justify-center">
                    <Check size={16} />
                  </div>
                  <span style={heading} className="font-semibold text-sm text-stone-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-stone-200 p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-red-50 text-red-700 flex items-center justify-center mb-5">
                    <Check size={22} />
                  </div>
                  <h3 style={heading} className="font-bold text-lg mb-2">Enquiry sent</h3>
                  <p className="text-stone-500 text-sm">
                    Thanks, {fullName.split(" ")[0] || "there"}. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={heading} className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label style={heading} className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={heading} className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 00000 00000"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label style={heading} className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
                        Property Type
                      </label>
                      <div className="relative">
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value as "Residential" | "Commercial")}
                          className="w-full appearance-none bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
                        >
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label style={heading} className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Pune"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
                    />
                  </div>

                  <div className="mb-8">
                    <label style={heading} className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
                      Your Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600 resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    style={heading}
                    className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 transition-colors text-white font-semibold py-4 rounded-xl"
                  >
                    Send Enquiry <ArrowRight size={18} />
                  </button>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
    </NewPageLayout>
  );
}