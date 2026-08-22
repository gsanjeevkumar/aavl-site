import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { title: "Initial Claim Consultation", icon: "/assets/icons/services/claim-consultation.png" },
  { title: "Accident Documentation Review", icon: "/assets/icons/services/accident-documentation.png" },
  { title: "Repair Estimate Analysis", icon: "/assets/icons/services/repair-estimate-analysis.png" },
  { title: "Repair Invoice Review", icon: "/assets/icons/services/repair-invoice-review.png" },
  { title: "Insurance Estimate Comparison", icon: "/assets/icons/services/insurance-estimate-comparison.png" },
  { title: "Damage Severity Assessment", icon: "/assets/icons/services/damage-severity-assessment.png" },
];

export default function Services() {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Our Services
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <div className="relative mb-2 size-12">
                  <Image src={service.icon} alt="" fill className="object-contain" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Professional, independent evaluation as part of your diminished
                value claim.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
