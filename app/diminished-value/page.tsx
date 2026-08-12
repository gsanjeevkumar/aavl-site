// app/diminished-value/page.tsx

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function DiminishedValuePage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-20">
      <div className="relative mx-auto mb-10 aspect-square w-full max-w-sm overflow-hidden rounded-lg">
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
        Even when a vehicle is repaired correctly, its market value can drop
        simply because it now has an accident on its history. This loss in
        value is known as <strong className="text-foreground">diminished value</strong>,
        and in many cases you may be entitled to compensation for it.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">
        What is diminished value?
      </h2>
      <p className="mt-3 text-muted-foreground">
        Diminished value is the difference between a vehicle&apos;s market
        value before an accident and its market value after repairs are
        complete. Buyers and dealers typically pay less for a vehicle with an
        accident history, even if the repairs were performed to a high
        standard.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">
        How do insurance companies calculate it?
      </h2>
      <p className="mt-3 text-muted-foreground">
        Insurers often use formulas that undervalue the true loss. An
        independent, USPAP-informed appraisal provides an objective,
        defensible estimate of the actual diminished value.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">
        Who qualifies?
      </h2>
      <p className="mt-3 text-muted-foreground">
        If your vehicle was damaged in an accident that was not your fault
        and has since been repaired, you may be eligible to file a
        diminished value claim against the at-fault party&apos;s insurance.
      </p>

      <div className="mt-10">
        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          Request a Free Assessment
        </Link>
      </div>
    </main>
  );
}
