import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Justin Jia is building and looking for: Remex Studio, AI Product Manager roles, and what he is not selling.",
};

export default function NowPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pt-12 sm:pt-20">
      <h1 className="letter-name">Now</h1>

      <div className="mt-10 space-y-6 text-[1.0625rem] leading-relaxed text-ink sm:mt-14 sm:max-w-[38ch]">
        <p>
          I&apos;m building{" "}
          <a
            href="https://remex-atelier.vercel.app"
            className="studio-link"
            translate="no"
          >
            Remex Studio
          </a>
          : English-language product work around AI agents and the systems they
          run on.
        </p>

        <p>
          I&apos;m looking for AI Product Manager roles where product judgment
          and systems depth both matter.
        </p>

        <p className="text-ink-muted">
          I&apos;m not selling cloud-migration outsourcing. If you need a
          migration shop, this isn&apos;t it.
        </p>
      </div>

      <p className="mt-10 sm:mt-12">
        <Link href="/path" className="cta">
          Read the path
        </Link>
      </p>
    </main>
  );
}
