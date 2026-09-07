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
            Recover Accident Value (RAV) assists vehicle owners following an
            automobile accident with identifying and pursuing certain financial
            losses related to their vehicle.
          </p>

          <p className="mt-4">
            One of our primary services involves diminished value disputes. Even
            when a vehicle has been repaired properly and the repairs are
            excellent, the vehicle may still carry an accident history that
            negatively affects its market value.
          </p>

          <p className="mt-4">
            We also assist with total loss valuation disputes and loss of use
            claims. When applicable, claims are pursued through an attorney
            partnered with RAV.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Recover Accident Value is not a law firm and does not provide legal
            advice or legal representation. Any legal advice or legal
            representation is provided solely by the attorney or law firm
            responsible for that representation.
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