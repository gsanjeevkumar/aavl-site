import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Diminished Value Disputes",
    icon: "/assets/icons/services/claim-consultation.png",
    desc: "Even after excellent repairs, an accident history can lower your vehicle's market value. We evaluate and document the difference between its value before and after the accident.",
  },
  {
    title: "Total Loss Valuation Disputes",
    icon: "/assets/icons/services/repair-estimate-analysis.png",
    desc: "If you disagree with the valuation your insurer assigned to a totaled vehicle, we review the valuation and related documentation to determine whether it should be disputed.",
  },
  {
    title: "Loss of Use Claims",
    icon: "/assets/icons/services/repair-invoice-review.png",
    desc: "If you experienced financial loss from being unable to use your vehicle after an accident, we evaluate potential loss of use claims.",
  },
];

export default function Services() {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Our Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          We help vehicle owners identify and pursue financial losses related
          to their vehicle after an automobile accident.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-[url('/assets/images/backgrounds/hero/technology.jpg')] bg-cover bg-center">
              <CardHeader>
                <div className="relative mb-2 size-12">
                  <Image src={service.icon} alt="" fill className="object-contain" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {service.desc}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Where a claim is pursued or submitted to an insurance carrier, it is
          handled through an attorney partnered with RAV.
        </p>
      </div>
    </section>
  );
}
