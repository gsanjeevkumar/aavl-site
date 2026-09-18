import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/backgrounds/hero/technology.jpg')] bg-cover bg-center bg-fixed">
      <Image
        src="/hero-car.jpg"
        alt="Luxury sedan representing a vehicle affected by diminished value"
        fill
        priority
        className="object-cover scale-150"
      />

      {/* Dark gradient overlay: darker on the left where text sits */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/15"></div>

      <div className="container relative mx-auto py-32">

        <h1
          className="font-bold text-white leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", maxWidth: "12ch" }}
        >
          Your Vehicle Was Repaired.
          <br />
          Its Value <span className="text-amber-400">Wasn&apos;t.</span>
        </h1>

        <p
          className="mt-6 max-w-xl text-xl text-white inline-block rounded-lg px-4 py-3"
          style={{ background: "rgba(0,0,0,.45)" }}
        >
          Even excellent repairs may not restore your vehicle&apos;s market
          value. An accident history can lower its value — and you may be
          entitled to recover that loss.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded font-semibold shadow-lg hover:bg-blue-700"
          >
            Get a Free Claim Review
          </Link>

          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="border border-white px-8 py-4 rounded text-white hover:bg-white/10"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}