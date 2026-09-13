import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Path",
  description:
    "How Justin Jia moved from shipping as an engineer through cloud systems and consultative intake to AI Product Manager work.",
};

const BEATS = [
  {
    title: "Engineer shipping product",
    body: "I started by shipping product as an engineer: features that had to land, stay up, and stay operable by people who weren't me.",
  },
  {
    title: "Cloud and microservices",
    body: "I worked deep in cloud and microservices. The hard parts were permissions, cost, and operability: who can do what, what it costs at scale, and whether humans can run it without heroics.",
  },
  {
    title: "Consultative brief intake",
    body: "I learned to take briefs consultatively: listen first, name the real problem, then shape what to build. That intake habit still opens every product conversation I have.",
  },
  {
    title: "Why AI Product Manager",
    body: "I moved toward AI Product Manager work because agents are products that sit on those same systems. Product judgment without systems depth breaks; systems depth without product judgment never ships. I want both.",
  },
] as const;

export default function PathPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pt-12 sm:pt-20">
      <h1 className="letter-name">Path</h1>
      <p className="letter-quiet mt-2 sm:max-w-[42ch]">
        Four turns that shaped how I work.
      </p>

      <ol className="mt-10 list-none space-y-10 p-0 sm:mt-14">
        {BEATS.map((beat, index) => (
          <li
            key={beat.title}
            className="border-t border-rule pt-8 first:border-t-0 first:pt-0"
          >
            <p className="letter-quiet tabular-nums" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-[1.125rem] font-medium leading-snug tracking-[-0.01em] text-ink text-pretty">
              {beat.title}
            </h2>
            <p className="mt-3 max-w-[42ch] text-[1.0625rem] leading-relaxed text-ink-muted">
              {beat.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-12 flex flex-col items-start gap-3 sm:mt-14 sm:flex-row sm:gap-8">
        <Link href="/now" className="cta">
          See what I&apos;m doing now
        </Link>
        <Link href="/work" className="cta">
          View selected work
        </Link>
      </p>
    </main>
  );
}
