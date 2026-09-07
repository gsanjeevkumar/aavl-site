import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="bg-[url('/assets/images/backgrounds/hero/technology.jpg')] bg-cover bg-center py-16 text-white" id="contact-cta">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
        <h2 className="text-3xl font-bold">
          Don&apos;t Leave Money On The Table
        </h2>
        <p className="max-w-xl text-white/80">
          Get a free claim review and find out whether you may be entitled to
          recover diminished value, total loss, or loss of use compensation.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default", className: "bg-accent text-accent-foreground hover:bg-accent/90" })}
          >
            Get a Free Claim Review
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className={buttonVariants({ variant: "outline", className: "border-white/40 bg-transparent text-white hover:bg-white/10" })}
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
