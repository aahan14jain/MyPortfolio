const SHAP_BARS = [
  { label: 'Weekend demand', value: '42%', width: '88%', color: '#0f766e' },
  { label: 'Rain forecast', value: '28%', width: '62%', color: '#0d9488' },
  { label: 'Last week waste', value: '15%', width: '41%', color: '#e11d48' },
] as const

type DecisionPlatformCardProps = {
  index?: string
  githubHref?: string
}

export default function DecisionPlatformCard({
  index = '01',
  githubHref = 'https://github.com/aahan14jain/ai-decision-intelligence-platform',
}: DecisionPlatformCardProps) {
  return (
    <article className="decision-card group relative w-[min(88vw,360px)] shrink-0 overflow-hidden rounded-3xl border border-[#0b3d38]/80 p-5 sm:p-6">
      {/* Grain overlay */}
      <div className="decision-card-grain pointer-events-none absolute inset-0 z-[1]" aria-hidden />

      <div className="relative z-[2]">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col items-start gap-2">
            <span className="font-display text-4xl font-bold tabular-nums text-[#0a2f2b] transition-colors duration-300 group-hover:text-[#fbbf24]/35">
              {index}
            </span>
            <span className="rounded-md border border-[#fbbf24]/25 bg-[#fbbf24]/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#fbbf24]/90">
              Featured
            </span>
          </div>
          <span className="rounded-lg border border-[#fbbf24]/35 bg-[#fbbf24]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#fbbf24] shadow-[0_0_20px_-8px_rgba(251,191,36,0.55)]">
            75% F1 (fixed from 99% leakage)
          </span>
        </div>

        <h3 className="font-fraunces mt-5 text-[1.35rem] font-semibold leading-snug tracking-tight text-[#f6f0e6] sm:text-xl">
          86IQ — Decision Intelligence for Restaurants
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#ebe3d4]/75">
          86IQ tells restaurant owners what to do next and why — ranked daily prep, menu-cut, and ops recommendations with confidence scores and plain-English SHAP explanations.
        </p>

        {/* Embedded product preview — SHAP drivers mini chart */}
        <div className="decision-preview mt-5 overflow-hidden rounded-2xl border border-[#1c1917]/10 bg-[#faf6ef] p-3.5 shadow-[0_12px_32px_-20px_rgba(120,80,40,0.35)] transition-[filter,transform] duration-300 group-hover:brightness-110">
          <div className="mb-3 flex items-end justify-between gap-2">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0f766e]/80">
                Live decision signal
              </p>
              <p className="font-fraunces mt-0.5 text-sm font-semibold text-stone-900">
                Harbor Kitchen · morning brief
              </p>
            </div>
            <p className="font-fraunces text-xl font-semibold tabular-nums text-amber-700">87%</p>
          </div>
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-stone-500">
            Why — top drivers
          </p>
          <div className="space-y-2">
            {SHAP_BARS.map((bar) => (
              <div key={bar.label}>
                <div className="mb-0.5 flex items-baseline justify-between gap-2 text-[10px] text-stone-600">
                  <span>{bar.label}</span>
                  <span className="tabular-nums text-stone-800">{bar.value}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-stone-200/90">
                  <div
                    className="h-full rounded-full"
                    style={{ width: bar.width, backgroundColor: bar.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {['Next.js', 'FastAPI', 'LangGraph', 'XGBoost', 'SHAP', 'Prophet', 'AWS Bedrock', 'Terraform'].map((tag) => (
            <span
              key={tag}
              className="decision-badge rounded-lg border border-[#fbbf24]/25 bg-[rgba(251,191,36,0.08)] px-2.5 py-1 text-[11px] font-medium text-[#fbbf24] transition-[box-shadow,border-color,background-color] duration-250"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#f6f0e6]/10 pt-4">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#fbbf24] transition hover:text-[#fcd34d]"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub →
          </a>
        </div>
      </div>
    </article>
  )
}
