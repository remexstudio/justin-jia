import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Short judgment notes on AI agents: when not to build one, why approval gates are the product, and how systems experience constrains agents.",
};

type Note = {
  title: string;
  body: readonly string[];
};

const NOTES: readonly Note[] = [
  {
    title: "When you should not build an Agent",
    body: [
      "Skip the agent when the job is a form, a filter, or a deterministic workflow with a known happy path. An LLM wrapper around a decision tree is still a decision tree, only slower and harder to audit.",
      "Build one when the work needs judgment under incomplete information, and a human still owns the outcome. If you cannot name who approves the consequential step, you are not ready for an agent.",
    ],
  },
  {
    title: "Approval gates are the product",
    body: [
      "The demo that impresses is rarely the model. It is Propose, Approve, Reject, and an audit trail that survives the session. Agents that Execute alone look clever until the first wrong refund or ledger write.",
      "Treat the gate as the surface you ship: clear tickets, visible rejections, and a hard line before money or policy moves. Capability without a gate is a liability dressed as progress.",
    ],
  },
  {
    title: "How systems experience constrains Agents",
    body: [
      "Agents inherit the permissions, cost, and operability of the systems underneath them. Weak IAM, noisy queues, and opaque data make the agent look broken when the substrate is the problem.",
      "Product judgment without systems depth ships agents that cannot be run. Systems depth without product judgment ships pipes nobody asked for. The constraint is the same as the opportunity: design the agent for the system it has to live on.",
    ],
  },
] as const;

export default function WritingPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pt-12 sm:pt-20">
      <h1 className="letter-name">Writing</h1>
      <p className="letter-quiet mt-2 sm:max-w-[42ch]">
        Short notes on judgment. Not a blog.
      </p>

      <ul className="mt-10 list-none space-y-0 p-0 sm:mt-14">
        {NOTES.map((note) => (
          <li
            key={note.title}
            className="border-t border-rule py-10 first:border-t-0 first:pt-0 last:pb-0"
          >
            <article>
              <h2 className="text-[1.125rem] font-medium leading-snug tracking-[-0.01em] text-ink text-pretty">
                {note.title}
              </h2>
              <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed text-ink-muted sm:max-w-[42ch]">
                {note.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>

      <p className="mt-12 sm:mt-14">
        <Link href="/work" className="cta">
          View selected work
        </Link>
      </p>
    </main>
  );
}
