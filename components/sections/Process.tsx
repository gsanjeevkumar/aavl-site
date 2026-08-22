import Image from "next/image";

const steps = [
  { title: "Contact Us", desc: "Share your accident details.", icon: "/assets/icons/services/contact-us.png" },
  { title: "We Evaluate", desc: "Review documents and vehicle damage.", icon: "/assets/icons/services/claim-consultation.png" },
  { title: "Receive Report", desc: "Get a detailed appraisal report.", icon: "/assets/icons/features/professional-reports.png" },
  { title: "Claim Your Lost Value", desc: "Secure fair compensation.", icon: "/assets/icons/features/independent-unbiased.png" },
];

export default function Process() {
  return (
    <section className="py-16" id="process">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Our Simple Process
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mx-auto size-16">
                <Image src={step.icon} alt={step.title} fill className="object-contain" />
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
