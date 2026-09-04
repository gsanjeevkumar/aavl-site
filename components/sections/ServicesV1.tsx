import Image from "next/image";

const services = [
  {
    title: "Initial Claim Consultation",
    description: "Professional, independent evaluation as part of your diminished value claim.",
    icon: "/assets/icons/services/claim-consultation.png",
  },
  {
    title: "Accident Documentation Review",
    description: "Thorough analysis of accident reports and police documentation.",
    icon: "/assets/icons/services/accident-documentation.png",
  },
  {
    title: "Repair Estimate Analysis",
    description: "Detailed examination of repair shop estimates for accuracy.",
    icon: "/assets/icons/services/repair-estimate-analysis.png",
  },
  {
    title: "Repair Invoice Review",
    description: "Line-by-line review of repair invoices for fair pricing.",
    icon: "/assets/icons/services/repair-invoice-review.png",
  },
  {
    title: "Insurance Estimate Comparison",
    description: "Comparing insurance estimates to ensure you get fair value.",
    icon: "/assets/icons/services/insurance-estimate-comparison.png",
  },
  {
    title: "Damage Severity Assessment",
    description: "Professional assessment of damage severity and impact on value.",
    icon: "/assets/icons/services/damage-severity-assessment.png",
  },
];

export default function ServicesV1() {
  return (
    <section className="py-16 bg-muted" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Our Services
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
  };
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative rounded-2xl bg-[url('/assets/images/backgrounds/hero/technology.jpg')] bg-cover bg-center p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Icon - Always Visible */}
      <div className="relative mb-4">
        <Image
          src={service.icon}
          alt={service.title}
          fill
          className="object-contain transition-all duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content - Hidden by Default, Revealed on Hover */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-blue-100">
          {service.description}
        </p>
        <button className="mt-4 bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 flex items-center">
          Read more
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
