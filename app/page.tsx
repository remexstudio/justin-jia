import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pt-12 sm:pt-20">
      <p className="letter-name" translate="no">
        Justin Jia
      </p>
      <p className="letter-role mt-1">AI Product Manager</p>

      <h1 className="letter-lede mt-10 sm:mt-14 sm:max-w-[28ch]">
        I design AI agents as products — after years building the systems they
        have to live on.
      </h1>

      <p className="mt-8 text-[1.0625rem] leading-relaxed text-ink-muted">
        Founder,{" "}
        <a
          href="https://remex-atelier.vercel.app"
          className="studio-link"
          translate="no"
        >Remex Studio</a>.
      </p>

      <p className="mt-10 flex flex-col items-start gap-3 sm:mt-12 sm:flex-row sm:gap-8">
        <Link href="/path" className="cta">
          Read the path
        </Link>
        <Link href="/work" className="cta">
          View selected work
        </Link>
      </p>
    </main>
  );
}
