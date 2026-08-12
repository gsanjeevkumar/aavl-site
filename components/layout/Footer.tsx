import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

// lucide-react no longer ships brand/logo icons, so these are inlined.
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
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.5 20h-3.37v-6.06c0-1.45-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2V20H9.42V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.08 2.26 4.08 5.2V20Z" />
    </svg>
  ),
  twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H21l-6.6 7.55L22 21h-6.2l-4.86-6.4L5.35 21H3.24l7.06-8.07L2.5 3h6.35l4.39 5.86L18.9 3Zm-1.08 16.2h1.16L7.24 4.72H6L17.82 19.2Z" />
    </svg>
  ),
} as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-white">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-10 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt={`${siteConfig.name} logo`} width={32} height={31} />
            <p className="text-lg font-bold">{siteConfig.name}</p>
          </div>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            {siteConfig.description}
          </p>

          <div className="mt-4 flex items-center gap-3">
            {siteConfig.social.map((item) => {
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
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
