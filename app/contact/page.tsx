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
          alt="Auto Accident Value Loss appraiser ready to assist with your claim"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
        <Image src="/keyfob.png" alt="" width={56} height={44} className="object-contain" />
      </div>
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
