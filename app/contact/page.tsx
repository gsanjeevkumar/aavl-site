// app/contact/page.tsx

import Image from "next/image";
import { siteConfig } from "@/lib/site";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-xl px-4 py-20">
      <div className="relative mx-auto mb-10 aspect-4/3 w-full max-w-sm overflow-hidden rounded-lg">
        <Image
          src="/contact-hero.jpg"
          alt="Recover Accident Value appraiser ready to assist with your claim"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
      <p className="mt-4 text-muted-foreground">
        Request a free consultation. Call {siteConfig.phone} or send us a
        message below.
      </p>

      <div className="mt-8 rounded-lg border border-border p-6">
        <ContactForm />
      </div>
    </main>
  );
}
