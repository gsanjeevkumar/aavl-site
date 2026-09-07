import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

// Lucide‑like SVG icons embedded for social links
const socialIcons = {
  facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.6 0-4.4 1.6-4.4 4.5v2.2H7v3.2h2.8V21h3.7Z" />
    </svg>
  ),
  instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452c-0.944 0-1.872-0.072-2.754-0.203 0.562-1.088 0.938-2.317 0.938-3.713 0-4.179-3.382-7.562-7.562-7.562-4.181 0-7.563 3.383-7.563 7.562 0 1.343 0.333 2.607 0.902 3.718-0.579 0.092-1.136 0.14-1.693 0.14-0.151 0-0.295-0.003-0.438-0.017 0.697-1.069 1.094-2.42 1.094-3.898 0-4.197 3.402-7.604 7.587-7.604 1.903 0 3.628 0.711 4.918 1.878 1.29-1.167 3.013-1.878 4.918-1.878 4.181 0 7.587 3.406 7.587 7.587 0 1.498-0.397 2.854-1.089 3.915 1.1 0.131 2.045 0.203 2.063 0.203 0.021 0 0.039-0.015 0.039-0.033 0-0.022-0.003-0.047-0.021-0.062-0.053-0.061-1.975-1.764-2.73-2.291-0.293-0.093-0.573-0.188-0.836-0.187-1.158 0-0.712-0.73 4.182-0.005-0.003-0.873-4.079-1.016-5.562 0-2.06-1.777-1.826-5.758 9-5.722-0-2.4460191 0 .7042c3. Tw" />
    </svg>
  ),
  twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.22c-5.57 0-10 4.43-10 10 0 5.12 3.73 9.3 8.56 9.97.63.12.87-.28.87-.62 0-.3-.01-1.3-.01-2.27-3.49 0-4.21-3.31-4.21-3.31c-.73-1.86-1.8-2.4-1.8-2.4-1.47-1 .02-1.52-.3-2.4-1.48-4.2-6-3.85-11.6-3.5Z" />
    </svg>
  ),
  tiktok: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.85.13V9.4a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 1 0 6.34 6.34V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.45a4.85 4.85 0 0 1-1-.04Z" />
    </svg>
  ),
} as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-white">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-10 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/assets/logos/logo-icon.png" alt={`${siteConfig.name} logo`} width={32} height={35} />
            <p className="text-lg font-bold">{siteConfig.name}</p>
          </div>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            {siteConfig.description}
          </p>

          <div className="mt-4 flex items-center gap-3">
            {siteConfig.social
              .filter((item) => item.icon === "facebook" || item.icon === "instagram" || item.icon === "tiktok")
              .map((item) => {
                const Icon = socialIcons[item.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
          </div>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-white/80">
          <p>
            <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        <p className="mx-auto max-w-3xl px-4">
          <strong>Disclaimer:</strong> Recover Accident Value is not a law firm
          and does not provide legal advice or legal representation. Claims
          requiring legal representation or submission to an insurance carrier
          are handled through independent attorneys and law firms partnered
          with RAV. No recovery is guaranteed. Submitting information through
          this website does not create an attorney-client relationship.
        </p>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
