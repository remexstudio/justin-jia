import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl tracking-tight text-ink">Now</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Current focus: stub for P2.
      </p>
    </main>
  );
}
