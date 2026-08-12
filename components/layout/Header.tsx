import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary">
          <Image src="/logo.png" alt={`${siteConfig.name} logo`} width={36} height={35} />
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
          className={buttonVariants({ size: "sm", className: "hidden md:inline-flex" })}
        >
          Call {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}
