import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl tracking-tight text-ink">Work</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Selected work: stub for P3.
      </p>
    </main>
  );
}
