import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl tracking-tight text-ink">Contact</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Ways to reach me: stub for P5.
      </p>
    </main>
  );
}
