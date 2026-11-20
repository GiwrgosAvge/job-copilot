const features = [
  {
    title: "Track every application",
    body: "A pipeline board from Saved to Offer, with notes and interview dates.",
  },
  {
    title: "Paste a job post, get structure",
    body: "AI extracts the role, skills, seniority and salary in seconds.",
  },
  {
    title: "Know what the market wants",
    body: "See which skills appear most across the jobs you care about.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center gap-12 px-4 py-24 sm:px-8">
      <section className="flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Job Copilot
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Your job search, organised.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Save job posts, follow each application, and learn from the data what
          employers are really looking for.
        </p>
      </section>

      <ul className="grid gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {feature.body}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
