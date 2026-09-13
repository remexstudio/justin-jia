import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Path",
};

export default function PathPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl tracking-tight text-ink">Path</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Background and trajectory: stub for P2.
      </p>
    </main>
  );
}
