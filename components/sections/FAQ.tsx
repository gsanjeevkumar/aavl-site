const faqs = [
  {
    q: "What is diminished value?",
    a: "The reduction in a vehicle's market value after it has been in an accident, even when repairs are completed correctly.",
  },
  {
    q: "Can I file after repairs?",
    a: "Yes. Many diminished value claims are filed after repairs are completed.",
  },
  {
    q: "How long does the process take?",
    a: "Typically a few business days for the initial evaluation and report.",
  },
  {
    q: "Will insurance pay?",
    a: "Many insurers do pay diminished value claims when supported by a professional appraisal report.",
  },
  {
    q: "What documents are required?",
    a: "Accident documentation, repair estimates, and repair invoices help us prepare the most accurate report.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-center text-4xl font-bold text-foreground">
          Frequently Asked Questions
        </h1>

        <div className="mt-10 divide-y divide-border rounded-lg border border-border">
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
