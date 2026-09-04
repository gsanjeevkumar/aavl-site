import Image from "next/image";
import InsuranceComparisonIcon from "@/public/icons/service-insurance-comparison.svg";

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
          Recover the compensation you deserve with
          independent diminished value appraisals.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-accent text-white px-8 py-4 rounded">
            Free Claim Review
          </button>

          <button className="border border-white px-8 py-4 rounded text-white">
            Call (728) 213-0495
          </button>
        </div>
      </div>
    </section>
  );
}