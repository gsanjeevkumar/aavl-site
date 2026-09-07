import Image from "next/image";

const steps = [
  { title: "Complete the Free Claim Review Form", desc: "Provide information about the accident, your vehicle, and the insurance carriers involved.", icon: "/assets/icons/services/contact-us.png" },
  { title: "Submit Documents", desc: "Upload available documents relating to the accident, repairs, and insurance claim.", icon: "/assets/icons/services/claim-consultation.png" },
  { title: "Claim Review", desc: "We review your information to determine whether it may involve a diminished value, total loss, or loss of use claim.", icon: "/assets/icons/features/professional-reports.png" },
  { title: "Client Agreement", desc: "If accepted, you'll receive the applicable contingency fee agreement and required documentation to review and sign.", icon: "/assets/icons/features/independent-unbiased.png" },
  { title: "Attorney Claim Submission", desc: "Where a claim is pursued, it is submitted to the insurance carrier through an attorney partnered with RAV.", icon: "/assets/icons/features/attorney-support.png" },
];

export default function Process() {
  return (
    <section className="py-16" id="process">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-foreground">
          How the Process Works
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-5 bg-[url('/assets/images/backgrounds/hero/technology.jpg')] bg-cover bg-center">
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

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          RAV itself is not a law firm and does not provide legal advice or
          legal representation.
        </p>
      </div>
    </section>
  );
}
