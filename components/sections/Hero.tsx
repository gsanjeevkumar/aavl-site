import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/backgrounds/hero/technology.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/50"></div>

      <Image
        src="/hero-car.jpg"
        alt="Luxury sedan representing a vehicle affected by diminished value"
        fill
        priority
        className="object-cover"
      />

      <div className="container relative mx-auto py-32">

        <h1 className="text-6xl font-bold max-w-3xl text-white">
          Your Vehicle Was Repaired.
          Its Value Wasn&apos;t.
        </h1>

        <p className="mt-6 max-w-xl text-xl text-white/90">
          Even excellent repairs may not restore your vehicle&apos;s market
          value. An accident history can lower its value — and you may be
          entitled to recover that loss.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="bg-accent text-white px-8 py-4 rounded font-semibold hover:bg-accent/90"
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