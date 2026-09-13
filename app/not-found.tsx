import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-16">
      <h1 className="text-2xl tracking-tight text-ink">Page not found</h1>
      <p className="mt-2 text-sm text-ink-muted">
        That path does not exist.{" "}
        <Link href="/" className="underline underline-offset-4 hover:text-ink">
          Back home
        </Link>
        .
      </p>
    </main>
  );
}
