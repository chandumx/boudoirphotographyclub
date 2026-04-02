"use client";

const cityTemplateSnippets = [
  "Discover the top boudoir photographers in {city}, {state}. Our curated directory features verified professionals...",
  "Looking for a boudoir photographer in {city}? Browse our handpicked selection of talented artists who specialize...",
  "{city} is home to some of the most talented boudoir photographers in {state}. Whether you are looking for...",
];

const stateTemplateSnippets = [
  "Find the best boudoir photographers across {state}. Our directory covers every major city with verified...",
  "Explore boudoir photography in {state}. From intimate studio sessions to outdoor shoots, discover professionals...",
  "{state} offers a diverse community of boudoir photographers ready to capture your confidence and beauty...",
];

function TemplateCard({ text }: { text: string }) {
  return (
    <div className="bg-surface-container-lowest p-5 rounded-sm ring-1 ring-outline-variant/10">
      <p className="text-sm text-on-surface-variant leading-relaxed">
        {text.slice(0, 100)}...
      </p>
    </div>
  );
}

export default function ContentPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-headline text-on-surface">
          Content Management
        </h1>
        <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
          Manage templates and content across the directory
        </p>
      </div>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-headline text-on-surface">
              City Page Templates
            </h2>
            <p className="text-xs text-on-surface-variant opacity-60 mt-1">
              12 templates total
            </p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-on-primary rounded-sm text-xs font-label uppercase tracking-widest hover:opacity-90 transition-opacity">
            Edit Templates
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cityTemplateSnippets.map((t, i) => (
            <TemplateCard key={i} text={t} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-headline text-on-surface">
              State Page Templates
            </h2>
            <p className="text-xs text-on-surface-variant opacity-60 mt-1">
              3 templates total
            </p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-on-primary rounded-sm text-xs font-label uppercase tracking-widest hover:opacity-90 transition-opacity">
            Edit Templates
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stateTemplateSnippets.map((t, i) => (
            <TemplateCard key={i} text={t} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-headline text-on-surface">
              FAQ Templates
            </h2>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-on-primary rounded-sm text-xs font-label uppercase tracking-widest hover:opacity-90 transition-opacity">
            Edit Templates
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest p-5 rounded-sm ring-1 ring-outline-variant/10">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary">
                location_city
              </span>
              <h3 className="font-headline text-on-surface">City FAQs</h3>
            </div>
            <p className="text-2xl font-headline text-on-surface">8</p>
            <p className="text-xs text-on-surface-variant opacity-60">
              templates configured
            </p>
          </div>
          <div className="bg-surface-container-lowest p-5 rounded-sm ring-1 ring-outline-variant/10">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary">
                map
              </span>
              <h3 className="font-headline text-on-surface">State FAQs</h3>
            </div>
            <p className="text-2xl font-headline text-on-surface">3</p>
            <p className="text-xs text-on-surface-variant opacity-60">
              templates configured
            </p>
          </div>
        </div>
      </section>

      <div className="bg-surface-container-low p-5 rounded-sm">
        <p className="text-xs text-on-surface-variant opacity-60">
          <span className="font-bold">Template variables available:</span>{" "}
          <code className="bg-surface-container-high px-1.5 py-0.5 rounded text-primary">
            {"{city}"}
          </code>{" "}
          <code className="bg-surface-container-high px-1.5 py-0.5 rounded text-primary">
            {"{state}"}
          </code>{" "}
          <code className="bg-surface-container-high px-1.5 py-0.5 rounded text-primary">
            {"{region}"}
          </code>
        </p>
      </div>
    </>
  );
}
