const faqs = [
  {
    q: "What is diminished value?",
    a: "Diminished value is the difference between a vehicle's market value before an accident and its market value after the accident and repairs. Even excellent repairs may not restore the vehicle's value because of its accident history.",
  },
  {
    q: "What services does RAV provide?",
    a: "RAV assists vehicle owners with diminished value disputes, total loss valuation disputes, and loss of use claims. Where a claim is pursued, it is handled through an attorney partnered with RAV.",
  },
  {
    q: "How much does it cost?",
    a: "RAV operates on a contingency fee basis — no recovery, no fee. If a recovery is obtained, the applicable contingency fee is 40% of the recovery, subject to the terms of the signed contingency fee agreement.",
  },
  {
    q: "Is RAV a law firm?",
    a: "No. Recover Accident Value is not a law firm and does not provide legal advice or legal representation. Any legal advice or representation is provided solely by the attorney or law firm responsible for that representation.",
  },
  {
    q: "How do I get started?",
    a: "Complete the free claim review form on our contact page. We'll review your information and let you know whether it may involve a diminished value, total loss, or loss of use claim.",
  },
  {
    q: "What documents should I have ready?",
    a: "Helpful documents include your repair estimate, insurance valuation, vehicle photos, accident photos, police report, and any other relevant documentation.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-center text-4xl font-bold text-foreground">
          Frequently Asked Questions
        </h1>

        <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-[url('/assets/images/backgrounds/hero/technology.jpg')] bg-cover bg-center">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-6">
              <h3 className="font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
