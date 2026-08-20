import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <Image
        src="/hero-car.jpg"
        alt="Luxury sedan representing a vehicle affected by diminished value"
        fill
        priority
        className="object-cover opacity-25"
      />

      <div className="container relative mx-auto py-32">

        <h1 className="text-6xl font-bold max-w-3xl">
          Your Vehicle Was Repaired.
          Its Value Wasn&apos;t.
        </h1>

        <p className="mt-6 max-w-xl text-xl">
          Recover the compensation you deserve with
          independent diminished value appraisals.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-accent text-white px-8 py-4 rounded">
            Free Claim Review
          </button>

          <button className="border px-8 py-4 rounded">
            Call (728) 213-0495
          </button>
        </div>
      </div>
    </section>
  );
}