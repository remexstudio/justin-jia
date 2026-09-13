import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product work directed at Remex Studio: try-on to checkout, warehouse knowledge with gates, morning briefs, and ecommerce exception queues.",
};

type WorkCard = {
  title: string;
  problem: string;
  constraints: string;
  shipped: string;
  next: string;
  studyHref: string;
  studyLabel: string;
  capability?: string;
};

const CARDS: readonly WorkCard[] = [
  {
    title: "Beauty try-on to checkout",
    problem:
      "Guests arrive with skin and occasion, not a shopping list. They need one recommendation, then a path through try-on, bag, pay, and desk aftercare.",
    constraints:
      "English only. One hero SKU for the demo. No live payments, no real brand logos, no fake conversion metrics. Counter feel, not chatbot chrome.",
    shipped:
      "Consult asks two questions, returns one hero SKU, then carries the session through try-on overlay, bag, mock pay, and desk handoff with a session summary.",
    next: "Shade mapping for deeper undertones, a travel mini attach, and an approval gate before any live catalog write.",
    studyHref: "https://remex-atelier.vercel.app/work/lumen-atelier",
    studyLabel: "View studio study",
  },
  {
    title: "Warehouse knowledge with approval gates",
    problem:
      "Operators need cited answers from warehouse and ledger knowledge, then a propose path for adjustments that never executes alone.",
    constraints:
      "English only. Agents may Propose; they must not Execute. No real bank connections. No fake recovery metrics. Rejected tickets stay visible.",
    shipped:
      "Ask with citations, a source browser, change tickets with Approve and Reject, and an audit log for the demo session.",
    next: "Stronger locator linking and a dual-review queue before any live ledger write. Keep Propose, not Execute.",
    studyHref: "https://remex-atelier.vercel.app/work/northline",
    studyLabel: "View studio study",
  },
  {
    title: "Morning brief, not a dashboard",
    problem:
      "Communications desks wake to noise. They need a sorted brief, draft help in two tones, and a hard line before anything publishes.",
    constraints:
      "English only. Synthetic posts only. Never auto-publish. No real social networks. No fake engagement percentages. Escalate stays explicit.",
    shipped:
      "Morning brief buckets (Priority, Watch, Noise), thread detail, dual-tone drafts with escalate, and a digest that never claims a live post.",
    next: "Richer watchlists and a stricter embargo gate before an escalated draft can leave the desk.",
    studyHref: "https://remex-atelier.vercel.app/work/kite",
    studyLabel: "View studio study",
  },
  {
    title: "Ecommerce exception queue",
    problem:
      "Commerce desks drown in exception tickets. They need triage, timelines, and suggested actions without the agent moving money on its own.",
    constraints:
      "English only. No payment processor. No fake recovery percentages. Refunds wait for Approve. Policy stays readable.",
    shipped:
      "A six-ticket exception queue, case detail with timeline and suggested actions, a refund approval gate, and a written policy page.",
    next: "Carrier webhooks and dual-approve for high-severity refunds.",
    studyHref: "https://remex-atelier.vercel.app/work/paperline",
    studyLabel: "View studio study",
    capability: "Capability: Kafka-backed fan-in for exception intake.",
  },
] as const;

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pt-12 sm:pt-20">
      <h1 className="letter-name">Work</h1>
      <p className="letter-quiet mt-2 sm:max-w-[42ch]">
        Product work directed at{" "}
        <a
          href="https://remex-atelier.vercel.app"
          className="studio-link"
          translate="no"
        >
          Remex Studio
        </a>
        . Studio studies, not employment claims.
      </p>

      <ul className="mt-10 list-none space-y-0 p-0 sm:mt-14">
        {CARDS.map((card) => (
          <li
            key={card.title}
            className="border-t border-rule py-10 first:border-t-0 first:pt-0 last:pb-0"
          >
            <article>
              <h2 className="text-[1.125rem] font-medium leading-snug tracking-[-0.01em] text-ink text-pretty">
                {card.title}
              </h2>

              <dl className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed sm:max-w-[42ch]">
                <div>
                  <dt className="letter-quiet">Problem</dt>
                  <dd className="mt-1 text-ink">{card.problem}</dd>
                </div>
                <div>
                  <dt className="letter-quiet">Constraints</dt>
                  <dd className="mt-1 text-ink-muted">{card.constraints}</dd>
                </div>
                <div>
                  <dt className="letter-quiet">What shipped</dt>
                  <dd className="mt-1 text-ink-muted">{card.shipped}</dd>
                </div>
                <div>
                  <dt className="letter-quiet">Next cut</dt>
                  <dd className="mt-1 text-ink-muted">{card.next}</dd>
                </div>
              </dl>

              {card.capability ? (
                <p className="letter-quiet mt-4 sm:max-w-[42ch]">
                  {card.capability}
                </p>
              ) : null}

              <p className="mt-5">
                <a
                  href={card.studyHref}
                  className="cta"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {card.studyLabel}
                </a>
              </p>
            </article>
          </li>
        ))}
      </ul>

      <p className="mt-12 sm:mt-14">
        <Link href="/path" className="cta">
          Read the path
        </Link>
      </p>
    </main>
  );
}
