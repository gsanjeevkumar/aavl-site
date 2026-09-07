// app/services/page.tsx

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold text-foreground md:text-5xl">
        Our Services
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        We help vehicle owners identify and pursue financial losses related to
        their vehicle after an automobile accident.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">
          Diminished Value Disputes
        </h2>
        <p className="mt-3 text-muted-foreground">
          Following an automobile accident, a vehicle may be repaired to
          excellent condition. However, the vehicle may still carry an accident
          history that affects its market value.
        </p>
        <p className="mt-3 text-muted-foreground">
          RAV assists clients with evaluating and documenting the potential
          difference between the vehicle&apos;s value before the accident and
          its value after the accident and repairs. When appropriate, RAV works
          with its partnered attorneys and law firms to pursue recovery of the
          diminished value from the applicable insurance carrier.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">
          Total Loss Valuation Disputes
        </h2>
        <p className="mt-3 text-muted-foreground">
          When an insurance company declares a vehicle a total loss, the vehicle
          owner may disagree with the valuation assigned to the vehicle. RAV
          assists with reviewing total loss valuations and related documentation
          to determine whether the valuation should be further reviewed or
          disputed.
        </p>
        <p className="mt-3 text-muted-foreground">
          Relevant documents may include insurance company valuation reports,
          vehicle condition information, vehicle options and features,
          comparable vehicle information, prior condition information, and other
          relevant valuation documentation.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">
          Loss of Use Claims
        </h2>
        <p className="mt-3 text-muted-foreground">
          Depending upon the circumstances, a vehicle owner may experience
          financial loss resulting from the inability to use their vehicle
          following an accident. RAV reviews the available information and works
          with partnered attorneys and law firms where appropriate to pursue
          applicable claims.
        </p>
      </section>

      <p className="mt-12 rounded-lg border border-border bg-muted p-4 text-sm text-muted-foreground">
        All submissions of claims to insurance carriers are made through an
        attorney partnered with RAV. Recover Accident Value is not a law firm
        and does not provide legal advice or legal representation.
      </p>

      <div className="mt-10">
        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          Get a Free Claim Review
        </Link>
      </div>
    </main>
  );
}
