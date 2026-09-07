// app/diminished-value/page.tsx

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function DiminishedValuePage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-20">
      <div className="relative mx-auto mb-10 aspect-[235/128] w-full max-w-md overflow-hidden rounded-lg">
        <Image
          src="/diminished-value.jpg"
          alt="Tablet displaying a diminished value appraisal report"
          fill
          priority
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-foreground md:text-5xl">
        Diminished Value Explained
      </h1>

      <p className="mt-6 text-lg text-muted-foreground">
        Even when a vehicle has been repaired properly and the repairs are
        excellent, the vehicle may still carry an accident history that
        negatively affects its market value.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">
        What is diminished value?
      </h2>
      <p className="mt-3 text-muted-foreground">
        Diminished value refers to the difference between a vehicle&apos;s
        market value before an accident and its market value after the
        accident and repairs. A vehicle with an accident history is often
        worth less than an otherwise identical vehicle without one — even if
        the repairs were performed to a high standard.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">
        How RAV can help
      </h2>
      <p className="mt-3 text-muted-foreground">
        RAV assists clients with evaluating and documenting the potential
        difference between the vehicle&apos;s value before the accident and
        its value after the accident and repairs. When appropriate, RAV works
        with its partnered attorneys and law firms to pursue recovery of the
        diminished value from the applicable insurance carrier.
      </p>

      <p className="mt-10 rounded-lg border border-border bg-muted p-4 text-sm text-muted-foreground">
        Recover Accident Value is not a law firm and does not provide legal
        advice or legal representation. Any legal advice or legal
        representation is provided solely by the attorney or law firm
        responsible for that representation.
      </p>

      <div className="mt-10">
        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          Get a Free Claim Review
        </Link>
      </div>
    </main>
  );
}
