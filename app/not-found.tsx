import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That address is not on Justin Jia’s site.",
};

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pt-12 sm:pt-20">
      <h1 className="letter-name">Page not found</h1>
      <p className="letter-quiet mt-2 sm:max-w-[42ch]">
        That address is not on this site. The letter still starts at home.
      </p>
      <p className="mt-10 sm:mt-12">
        <Link href="/" className="cta">
          Back home
        </Link>
      </p>
    </main>
  );
}
