// app/about/page.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold mb-8">
            About Recover Accident Value
          </h1>
          <p>
            Recover Accident Value specializes in
            independent diminished value appraisals
            that help vehicle owners recover compensation
            after an accident.
          </p>

          <p className="mt-4">
            Our USPAP-informed reports provide objective,
            professional evaluations to protect your rights.
          </p>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-lg">
          <Image
            src="/about-appraiser.jpg"
            alt="Appraiser reviewing a vehicle after an accident"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}