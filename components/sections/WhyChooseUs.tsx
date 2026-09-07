import Image from "next/image";

const points = [
  {
    title: "No Recovery, No Fee",
    desc: "We operate on a contingency fee basis. If there is no recovery, you do not owe a contingency fee.",
    icon: "/assets/icons/features/independent-unbiased.png",
  },
  {
    title: "Independent & Unbiased",
    desc: "Evaluations that protect your rights, not the insurer's bottom line.",
    icon: "/assets/icons/features/professional-reports.png",
  },
  {
    title: "Professional Approach",
    desc: "Thorough review of your accident, repairs, and insurance documentation.",
    icon: "/assets/icons/features/fast-turnaround.png",
  },
  {
    title: "Partnered Attorneys",
    desc: "Where a claim is pursued, it is handled through an attorney partnered with RAV.",
    icon: "/assets/icons/features/insurance-claim-assistance.png",
  },
  {
    title: "Clear, Plain Language",
    desc: "We explain your options in terms any vehicle owner can understand.",
    icon: "/assets/icons/features/attorney-support.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-muted py-16" id="why-choose-us">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Why Choose Us?
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="rounded-lg bg-[url('/assets/images/backgrounds/hero/technology.jpg')] bg-cover bg-center p-6 shadow-sm">
              <div className="relative size-12">
                <Image src={point.icon} alt="" fill className="object-contain" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{point.desc}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          No recovery is guaranteed. If a recovery is obtained, the applicable
          contingency fee is 40% of the recovery, subject to the terms and
          conditions of the signed contingency fee agreement.
        </p>
      </div>
    </section>
  );
}
