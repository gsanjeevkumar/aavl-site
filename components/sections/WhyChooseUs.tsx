import Image from "next/image";

const points = [
  {
    title: "Independent & Unbiased",
    desc: "Evaluations that protect your rights, not the insurer's bottom line.",
    icon: "/icons/feature-independent.png",
  },
  {
    title: "USPAP-Informed Reports",
    desc: "Professional appraisal reports meeting industry standards.",
    icon: "/icons/feature-uspap.png",
  },
  {
    title: "Fast Turnaround",
    desc: "Quick service when you need it most.",
    icon: "/icons/feature-fast.png",
  },
  {
    title: "Insurance Claim Assistance",
    desc: "We work with insurers on your behalf.",
    icon: "/icons/feature-insurance-claim.png",
  },
  {
    title: "Attorney & Litigation Support",
    desc: "Expert opinions, rebuttals, and court-ready reports.",
    icon: "/icons/feature-attorney.png",
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
            <div key={point.title} className="rounded-lg bg-background p-6 shadow-sm">
              <div className="relative size-12">
                <Image src={point.icon} alt="" fill className="object-contain" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
