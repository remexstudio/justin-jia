import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email Justin Jia at hello@remexstudio.com. LinkedIn, GitHub, and X. Resume PDF coming.",
};

const EMAIL = "hello@remexstudio.com";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pt-12 sm:pt-20">
      <h1 className="letter-name">Contact</h1>
      <p className="letter-quiet mt-2 sm:max-w-[42ch]">
        Email first. Profiles if you need them.
      </p>

      <dl className="mt-10 sm:mt-14">
        <div className="border-t border-rule py-8 first:border-t-0 first:pt-0 last:pb-0">
          <dt className="letter-quiet">Email</dt>
          <dd className="mt-1">
            <a
              href={`mailto:${EMAIL}`}
              className="cta break-words"
              translate="no"
            >
              {EMAIL}
            </a>
          </dd>
        </div>

        <div className="border-t border-rule py-8 last:pb-0">
          <dt className="letter-quiet">
            LinkedIn <span className="text-ink-faint">(placeholder)</span>
          </dt>
          <dd className="mt-1">
            <a
              href="https://www.linkedin.com/in/justin-jia"
              className="studio-link"
              rel="noopener noreferrer"
              translate="no"
            >
              Justin Jia
            </a>
          </dd>
        </div>

        <div className="border-t border-rule py-8 last:pb-0">
          <dt className="letter-quiet">GitHub</dt>
          <dd className="mt-1">
            <a
              href="https://github.com/qinlinj"
              className="studio-link"
              rel="noopener noreferrer"
              translate="no"
            >
              qinlinj
            </a>
          </dd>
          <dd className="mt-2">
            <a
              href="https://github.com/remexstudio"
              className="studio-link"
              rel="noopener noreferrer"
              translate="no"
            >
              remexstudio
            </a>
          </dd>
        </div>

        <div className="border-t border-rule py-8 last:pb-0">
          <dt className="letter-quiet">X</dt>
          <dd className="mt-1 text-ink" translate="no">
            @QinlinJ
          </dd>
        </div>

        <div className="border-t border-rule py-8 last:pb-0">
          <dt className="letter-quiet">Resume</dt>
          <dd className="mt-1 text-ink-muted">PDF coming</dd>
        </div>
      </dl>
    </main>
  );
}
