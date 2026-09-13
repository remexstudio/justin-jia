import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl tracking-tight text-ink">Writing</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Notes and judgment: stub for P4.
      </p>
    </main>
  );
}
