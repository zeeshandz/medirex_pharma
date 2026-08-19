import { createFileRoute } from "@tanstack/react-router";
import {
  Pill,
  Syringe,
  FlaskConical,
  Droplets,
  ShieldCheck,
  Factory,
  Microscope,
  PackageCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import heroPlant from "@/assets/hero-plant.jpg";
import workersLine from "@/assets/workers-line.jpg";
import packing from "@/assets/packing.jpg";
import injectionLine from "@/assets/injection-line.jpg";
import syrupLine from "@/assets/syrup-line.jpg";
import capsuleLine from "@/assets/capsule-line.jpg";
import qcLab from "@/assets/qc-lab.jpg";
import facility from "@/assets/facility-exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medirex Pharma — Tablet, Capsule, Injection & Syrup Manufacturer" },
      {
        name: "description",
        content:
          "Medirex Pharma manufactures tablets, capsules, dry & liquid injections, syrups and ointments in WHO-GMP certified clean-room facilities.",
      },
      {
        property: "og:title",
        content: "Medirex Pharma — Tablet, Capsule, Injection & Syrup Manufacturer",
      },
      {
        property: "og:description",
        content:
          "WHO-GMP certified pharma manufacturing: tablets, capsules, injections, syrups, ointments and contract manufacturing.",
      },
    ],
  }),
  component: Index,
});

const products = [
  {
    icon: Pill,
    title: "Tablets",
    desc: "Plain, film-coated, enteric-coated and sustained-release tablets on high-speed rotary presses.",
  },
  {
    icon: FlaskConical,
    title: "Capsules",
    desc: "Hard gelatin and HPMC capsules with automatic filling, polishing and 100% weight sorting.",
  },
  {
    icon: Syringe,
    title: "Injections — Dry & Liquid",
    desc: "Dry powder vials and liquid ampoules filled under aseptic Grade-A laminar airflow.",
  },
  {
    icon: Droplets,
    title: "Syrups & Suspensions",
    desc: "Sugar-free syrups, dry syrups and oral suspensions in fully automated liquid blocks.",
  },
  {
    icon: PackageCheck,
    title: "Ointments & Creams",
    desc: "Tubes, jars and gels manufactured in dedicated external-preparation sections.",
  },
  {
    icon: Microscope,
    title: "Sachets & Powders",
    desc: "ORS, effervescent and protein powders with auger-based sachet filling lines.",
  },
];

const gallery = [
  { src: workersLine, alt: "Male and female workers in full cover dress on the medicine line", label: "Production Team — Full Cover Dress" },
  { src: packing, alt: "Blister packing machine packing tablets", label: "Blister & Strip Packing System" },
  { src: injectionLine, alt: "Sterile injection vial filling line", label: "Aseptic Injection Filling" },
  { src: syrupLine, alt: "Syrup bottle filling line", label: "Liquid & Syrup Block" },
  { src: capsuleLine, alt: "Capsule filling machine with red and white capsules", label: "Capsule Filling Section" },
  { src: qcLab, alt: "Scientist working in quality control laboratory", label: "Quality Control Laboratory" },
  { src: heroPlant, alt: "Tablet compression machines inside clean room plant", label: "Tablet Compression Hall" },
  { src: facility, alt: "Exterior view of the pharmaceutical manufacturing facility", label: "Manufacturing Campus" },
];

const stats = [
  { value: "25+", label: "Years in Pharma" },
  { value: "450+", label: "Product Formulations" },
  { value: "6", label: "GMP Manufacturing Blocks" },
  { value: "20+", label: "Export Countries" },
];

const capabilities = [
  {
    icon: Factory,
    title: "Clean-Room Plant",
    desc: "Class 100 / Grade A–D areas with HVAC, HEPA filtration, air locks and pressure-differential monitoring.",
  },
  {
    icon: ShieldCheck,
    title: "WHO-GMP & ISO",
    desc: "WHO-GMP, ISO 9001:2015 and Schedule-M compliant systems with full batch traceability.",
  },
  {
    icon: Microscope,
    title: "In-House QA / QC",
    desc: "HPLC, UV, dissolution, stability chambers and microbiology lab for every batch released.",
  },
  {
    icon: PackageCheck,
    title: "Contract Manufacturing",
    desc: "Third-party and PCD franchise manufacturing with your brand, artwork and packing.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="gradient-primary grid h-9 w-9 place-items-center rounded-md font-display text-lg font-bold text-primary-foreground">
              M
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Medirex <span className="text-primary">Pharma</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#products">Products</a>
            <a className="transition-colors hover:text-primary" href="#plant">Our Plant</a>
            <a className="transition-colors hover:text-primary" href="#gallery">Gallery</a>
            <a className="transition-colors hover:text-primary" href="#quality">Quality</a>
            <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-primary-deep"
          >
            Enquire Now
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroPlant}
            alt="Pharmaceutical clean room with tablet manufacturing machines"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.32_0.14_27/0.94)_0%,oklch(0.45_0.18_27/0.78)_45%,oklch(0.45_0.18_27/0.25)_100%)]" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
            <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
              WHO-GMP · ISO 9001:2015 · Schedule M
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-primary-foreground md:text-6xl">
              Trusted Manufacturing of Tablets, Capsules, Injections &amp; Syrups
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Medirex Pharma runs fully automated, temperature-controlled clean-room blocks with
              trained male and female operators, in-house QA/QC and validated packing systems —
              delivering medicines that doctors and distributors rely on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                View Product Range
              </a>
              <a
                href="#plant"
                className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
              >
                Take a Plant Tour
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-primary-soft">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Product Range
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Every major dosage form, under one roof
            </h2>
            <p className="mt-3 text-muted-foreground">
              From oral solids to sterile injectables, each section is independently designed,
              validated and monitored.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.title} className="surface-card group p-6 transition-shadow hover:shadow-[var(--shadow-elegant)]">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Plant */}
        <section id="plant" className="gradient-soft border-y border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Inside Our Plant
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                A facility built around hygiene and discipline
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our manufacturing campus houses separate blocks for oral solids, liquids and
                sterile products. Every operator enters through change rooms and works in full
                cover dress — coverall, hood, mask, gloves and dedicated footwear.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Dedicated male and female change rooms with air showers",
                  "Purified water plant with RO, EDI and loop distribution",
                  "Validated HVAC with HEPA filters and pressure monitoring",
                  "Automated blister, strip, bottle and carton packing lines",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={facility}
                alt="Pharmaceutical plant building exterior"
                loading="lazy"
                width={1280}
                height={912}
                className="col-span-2 h-56 w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
              />
              <img
                src={workersLine}
                alt="Workers in cover dress on the production line"
                loading="lazy"
                width={1280}
                height={912}
                className="h-44 w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
              />
              <img
                src={packing}
                alt="Tablet blister packing machine"
                loading="lazy"
                width={1280}
                height={912}
                className="h-44 w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Gallery</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Plant, people and packing systems</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g) => (
              <figure
                key={g.label}
                className="group relative overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1280}
                  height={912}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,oklch(0.3_0.12_27/0.92),transparent)] px-4 pb-3 pt-10 text-sm font-semibold text-primary-foreground">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Quality */}
        <section id="quality" className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Quality &amp; Capability
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Compliance is checked at every stage
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((c) => (
                <article key={c.title} className="surface-card p-6">
                  <c.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <img
                src={qcLab}
                alt="Quality control laboratory with analytical instruments"
                loading="lazy"
                width={1280}
                height={912}
                className="h-72 w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
              />
              <img
                src={injectionLine}
                alt="Aseptic injection vial filling line"
                loading="lazy"
                width={1280}
                height={912}
                className="h-72 w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <div className="gradient-primary overflow-hidden rounded-2xl px-7 py-12 shadow-[var(--shadow-elegant)] md:px-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                  Partner with Medirex Pharma
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/85">
                  Share your product list or third-party manufacturing requirement — our team
                  replies with formulation options, packing specs and pricing within 24 hours.
                </p>
                <div className="mt-8 space-y-3 text-sm text-primary-foreground/90">
                  <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4" /> +91 98765 43210
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-4 w-4" /> care@medirexpharma.com
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="h-4 w-4" /> Plot 42, Pharma City, Baddi, Himachal Pradesh
                  </p>
                </div>
              </div>
              <form className="surface-card space-y-4 p-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Your name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                  <input
                    required
                    placeholder="Company"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <input
                  required
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
                <textarea
                  rows={4}
                  placeholder="Products required (tablets, capsules, injections, syrups...)"
                  className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="font-display font-semibold text-foreground">
            Medirex <span className="text-primary">Pharma</span>
          </p>
          <p>© {new Date().getFullYear()} Medirex Pharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
