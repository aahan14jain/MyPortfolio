'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { skillCategories } from '../lib/skills'
import DecisionPlatformCard from './DecisionPlatformCard'

const projects = [
  {
    title: 'Cadence — Purchase-Timing Recommendations',
    blurb:
      'Predicts when a customer is likely to buy again at a given vendor and surfaces deal-style offers, with alternates, in a JWT-secured dashboard — backed by a Random Forest model trained on purchase-gap data.',
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'scikit-learn', 'Next.js', 'JWT', 'Docker'],
    href: 'https://github.com/aahan14jain/customer-recommendation-system',
    metric: '90% accuracy',
    accent: '#F5A623',
    preview: {
      label: 'Repurchase Model',
      title: 'Cadence · model eval',
      highlight: '90%',
      bars: [
        { label: 'Accuracy', value: '90%', width: '90%' },
        { label: 'Purchase gaps analyzed', value: '3.3K', width: '55%' },
        { label: 'Transactions served', value: '22.5K', width: '82%' },
      ],
    },
  },
  {
    title: 'Choreo — Event-Driven Checkout Platform',
    blurb:
      'A saga-based checkout system where order, inventory, payment, and notification services coordinate over Kafka instead of a single monolith. Redis handles idempotency; a live ops dashboard tracks saga status over WebSockets.',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Kubernetes'],
    href: 'https://github.com/aahan14jain/eventcart-microservices',
    metric: '85% coverage',
    accent: '#A78BFA',
    preview: {
      label: 'Saga Checkout',
      title: 'Choreo · live ops',
      highlight: '−35%',
      bars: [
        { label: 'Concurrent orders', value: '1,000+', width: '88%' },
        { label: 'Read latency', value: '−35%', width: '65%' },
        { label: 'Test coverage', value: '85%', width: '85%' },
      ],
    },
  },
  {
    title: 'Lift — A/B Testing & Experimentation Framework',
    blurb:
      "An end-to-end Python framework for product experimentation — multi-arm z-tests and Welch's t-tests with FDR correction, logistic regression for conversion drivers, and paired t-tests for LLM prompt evaluation, with optional Redshift/S3/Lambda integration.",
    stack: ['Python', 'pandas', 'SciPy', 'statsmodels', 'scikit-learn', 'AWS Redshift', 'S3'],
    href: 'https://github.com/aahan14jain/experimentation-ab-testing-framework',
    metric: '10K users',
    accent: '#2DD4BF',
    preview: {
      label: 'Experiment Engine',
      title: 'Lift · eval suite',
      highlight: '95%',
      bars: [
        { label: 'Synthetic users', value: '10K', width: '80%' },
        { label: 'Prompt variants tested', value: '5.2K', width: '62%' },
        { label: 'Significance level', value: '95%', width: '95%' },
      ],
    },
  },
] as const

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState(skillCategories[0].title)
  const [openExp, setOpenExp] = useState({ research: true, hexagon: true })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')

  const activeSkills = useMemo(
    () => skillCategories.find((c) => c.title === activeSkill)?.skills ?? [],
    [activeSkill]
  )

  const marqueeSkills = skillCategories.flatMap((c) => c.skills).slice(0, 20)

  useEffect(() => {
    const root = document.documentElement
    const onMove = (e: MouseEvent) => {
      root.style.setProperty('--mx', `${e.clientX}px`)
      root.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  function submit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Hello from ${name || 'your site'}`)
    const body = encodeURIComponent(`${note}\n\n— ${name} (${email})`)
    window.location.href = `mailto:aahanjain1114@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060d14] text-sky-50">
      <div className="spotlight pointer-events-none fixed inset-0 z-0" />
      <div className="mesh-grid pointer-events-none absolute inset-0 z-0 opacity-60" />

      {/* Top signal bar */}
      <header className="relative z-20 border-b border-sky-500/15 bg-[#060d14]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-sm font-bold tracking-[0.2em] text-sky-100">
            AAHAN<span className="text-sky-400">.DEV</span>
          </a>
          <nav className="hidden items-center gap-4 text-xs font-medium uppercase tracking-wider text-sky-200/70 md:flex lg:gap-5">
            <a href="#work" className="hover:text-sky-300">Work</a>
            <a href="#about" className="hover:text-sky-300">About</a>
            <a href="#beyond-coding" className="hover:text-sky-300">Beyond</a>
            <a href="#stack" className="hover:text-sky-300">Stack</a>
            <a href="#build" className="hover:text-sky-300">Build</a>
            <a href="#connect" className="hover:text-sky-300">Connect</a>
          </nav>
          <div className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold text-sky-200">
            <span className="live-dot h-2 w-2 rounded-full bg-sky-400" />
            Seattle, WA · Open to Relocation
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        {/* Hero — brand signal, not sticky card clone */}
        <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
          <div className="rise">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              Creativity × Technology
            </p>
            <h1 className="font-display text-[clamp(3rem,10vw,6.5rem)] font-bold leading-[0.88] tracking-tight text-white">
              Build
              <br />
              <span className="text-sky-400">intelligent</span>
              <br />
              systems.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-sky-100/70 sm:text-lg">
              I&apos;m Aahan — a Software Engineer and AI/ML Engineer building agentic workflows, RAG platforms, and backends that ship to production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#build"
                className="rounded-md bg-sky-400 px-5 py-3 text-sm font-bold text-[#060d14] transition hover:bg-cyan-300"
              >
                Explore builds
              </a>
              <a
                href="/AahanAIMLportfoliopdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-sky-400/40 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-400/10"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="rise-delay relative mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute -inset-3 rounded-3xl border border-dashed border-sky-400/40" aria-hidden />
            <div className="frame-tilt relative overflow-hidden rounded-3xl border border-sky-300/20 bg-sky-950/50 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.7)]">
              <img src="/profile.jpg" alt="Aahan Jain" className="aspect-[4/5] w-full object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060d14] via-[#060d14]/70 to-transparent p-5">
                <p className="font-display text-xl font-bold text-white">Aahan Jain</p>
                <p className="text-sm text-sky-200/80">MS CS · George Mason University</p>
              </div>
            </div>
            <div className="relative z-10 mt-4 flex justify-center gap-4 text-sm text-sky-300">
              <a href="https://github.com/aahan14jain" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
              <span className="text-sky-700">·</span>
              <a href="https://www.linkedin.com/in/aahan-jain-30222020b/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
              <span className="text-sky-700">·</span>
              <a href="mailto:aahanjain1114@gmail.com" className="hover:text-white">Email</a>
            </div>
          </div>
        </section>

        {/* Infinite skill marquee — different from icon list */}
        <section className="border-y border-sky-500/15 bg-sky-950/40 py-4" aria-label="Technology marquee">
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max gap-3">
              {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
                <span
                  key={`${skill.name}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-[#0a1520] px-4 py-2 text-sm text-sky-100"
                >
                  <img src={skill.icon} alt="" className={`h-4 w-4 ${skill.mono ? 'mono-icon' : ''}`} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Work timeline */}
        <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">Signal</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Where I&apos;ve shipped</h2>

          <div className="mt-10 space-y-4">
            <div>
              <button
                type="button"
                onClick={() => setOpenExp((v) => ({ ...v, research: !v.research }))}
                className="flex w-full items-start justify-between gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] p-5 text-left transition hover:border-sky-400/40 sm:p-6"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                    <h3 className="font-display text-xl font-bold text-white">George Mason University, CS 691</h3>
                  </div>
                  <p className="mt-1 pl-6 text-sm text-sky-300">
                    Research — AI-Accelerated Software Engineering (DocuMind) · Fairfax, VA · Sept 2025 – Dec 2025
                  </p>
                </div>
                <span className="text-sky-400">{openExp.research ? '−' : '+'}</span>
              </button>
              {openExp.research && (
                <div className="border-l border-sky-400/30 ml-6 mt-4 space-y-3 pl-6 text-sm leading-relaxed text-sky-100/75">
                  <p>
                    I built DocuMind so engineers can ask plain-English questions about a codebase and get cited answers, docs, and diagrams instead of tracing files by hand.
                  </p>
                  <p>
                    It&apos;s a Flask API with a LangGraph agent that mixes semantic search, grep/AST parsing, and a code call graph — plus MongoDB for history and S3 for artifacts.
                  </p>
                  <p>
                    Mixing vector search with graph traversal raised accuracy from 64% to 73% on our eval set, under 3s average, backed by 200+ automated tests.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Python', 'Flask', 'LangGraph', 'LlamaIndex', 'Pinecone', 'MongoDB', 'S3', 'Docker', 'Agentic RAG'].map((t) => (
                      <span key={t} className="rounded-md border border-sky-400/25 px-2 py-1 text-xs text-sky-200">{t}</span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/dhwani82/DocuMind-691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block pt-1 text-sm font-semibold text-sky-300 transition hover:text-sky-100"
                  >
                    GitHub →
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setOpenExp((v) => ({ ...v, hexagon: !v.hexagon }))}
                className="flex w-full items-start justify-between gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] p-5 text-left transition hover:border-sky-400/40 sm:p-6"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                    <h3 className="font-display text-xl font-bold text-white">Hexagon</h3>
                  </div>
                  <p className="mt-1 pl-6 text-sm text-sky-300">Software Development Intern · Aug 2023 – Apr 2024</p>
                </div>
                <span className="text-sky-400">{openExp.hexagon ? '−' : '+'}</span>
              </button>
              {openExp.hexagon && (
                <div className="border-l border-sky-400/30 ml-6 mt-4 space-y-3 pl-6 text-sm leading-relaxed text-sky-100/75">
                  <p className="font-medium text-sky-50">
                    Shipped a production AI support assistant with prompt-engineered RAG + Azure OpenAI — 500+ daily queries at 90% accuracy.
                  </p>
                  <p>• Cut issue resolution from 4 days → 2 days across 10+ client orgs</p>
                  <p>• Django + MongoDB services for real-time AI query handling</p>
                  <p>• Azure CI/CD deployments across multiple client environments</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Python', 'Django', 'MongoDB', 'Azure OpenAI', 'LangChain', 'RAG'].map((t) => (
                      <span key={t} className="rounded-md border border-sky-400/25 px-2 py-1 text-xs text-sky-200">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-sky-400/15 p-5">
              <p className="text-xs uppercase tracking-widest text-sky-500">Education</p>
              <h3 className="mt-2 font-display text-lg font-bold text-white">George Mason University</h3>
              <p className="text-sm text-sky-300">MS Computer Science · GPA 3.73</p>
              <p className="mt-1 text-xs text-sky-100/50">Aug 2024 – May 2026 · Fairfax, VA</p>
            </div>
            <div className="rounded-2xl border border-sky-400/15 p-5">
              <p className="text-xs uppercase tracking-widest text-sky-500">Education</p>
              <h3 className="mt-2 font-display text-lg font-bold text-white">Vishwakarma Institute</h3>
              <p className="text-sm text-sky-300">BTech Computer Engineering · CGPA 3.37</p>
              <p className="mt-1 text-xs text-sky-100/50">Aug 2020 – May 2024 · Pune, India</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <div className="rounded-3xl border border-sky-400/20 bg-[#0a1520] p-6 sm:p-8">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">About</h2>
            <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-sky-100/70 sm:text-base">
              <p>
                I like taking the unglamorous parts of AI systems seriously — retrieval quality, latency, evaluation — because that&apos;s usually where the real product lives, not in the demo.
              </p>
              <p>
                My work sits at the intersection of applied ML and production software: LangGraph multi-agent pipelines, hybrid retrieval systems, and the FastAPI/Django backends and AWS infrastructure that keep them running under real load.
              </p>
              <p>
                I&apos;m drawn to problems where a model&apos;s output has to survive contact with real users, real data, and real failure modes — not just a notebook.
              </p>
            </div>
          </div>
        </section>

        {/* Beyond Coding */}
        <section id="beyond-coding" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          <div className="rounded-3xl border border-sky-400/20 bg-[#0a1520] p-6 sm:p-8">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Beyond Coding</h2>
            <ul className="mt-6 max-w-3xl list-disc space-y-4 pl-5 text-sm leading-relaxed text-sky-100/70 marker:text-sky-400 sm:text-base">
              <li className="pl-1">
                Lifeguard at George Mason University — split-second decisions under pressure, on a much shorter feedback loop than shipping code.
              </li>
              <li className="pl-1">
                Sports person through and through — soccer and swimming keep me moving, and F1 is my Sunday ritual (strategy, timing, and zero room for lag).
              </li>
              <li className="pl-1">
                Cook constantly, always mid-experiment with a recipe — same instinct as running an A/B test, just with more salt.
              </li>
            </ul>
          </div>
        </section>

        {/* Interactive stack filter */}
        <section id="stack" className="border-y border-sky-500/10 bg-[#0a1520] py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">Toolkit</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Tune the stack</h2>
            <p className="mt-3 max-w-xl text-sm text-sky-100/60">
              Click a lane — the chip cloud remaps. Same brain, different frequency.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => setActiveSkill(cat.title)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeSkill === cat.title
                      ? 'bg-sky-400 text-[#060d14]'
                      : 'border border-sky-400/25 text-sky-200 hover:border-sky-300'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {activeSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="skill-chip inline-flex items-center gap-2 rounded-2xl border border-sky-400/20 bg-sky-400/5 px-4 py-3 text-sm text-sky-50"
                >
                  <img src={skill.icon} alt="" className={`h-5 w-5 ${skill.mono ? 'mono-icon' : ''}`} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal project rail */}
        <section id="build" className="py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">Builds</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Scroll the lab</h2>
              </div>
              <p className="hidden text-xs text-sky-100/40 sm:block">Drag / scroll sideways →</p>
            </div>
          </div>
          <div className="scroll-x mt-8 flex gap-4 overflow-x-auto px-5 pb-4 sm:px-8">
            <DecisionPlatformCard index="01" />
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-panel w-[min(85vw,340px)] shrink-0 rounded-3xl border border-sky-400/15 bg-[#0a1520] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="proj-index font-display text-4xl font-bold text-sky-900 transition-colors">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
                    style={{
                      color: project.accent,
                      backgroundColor: `${project.accent}26`,
                    }}
                  >
                    {project.metric}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sky-100/65">{project.blurb}</p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-stone-200/80 bg-[#faf6ef] p-3.5 shadow-[0_12px_32px_-20px_rgba(120,80,40,0.35)]">
                  <div className="mb-3 flex items-end justify-between gap-2">
                    <div>
                      <p
                        className="text-[9px] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: project.accent }}
                      >
                        {project.preview.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-stone-900">
                        {project.preview.title}
                      </p>
                    </div>
                    <p
                      className="font-display text-xl font-semibold tabular-nums"
                      style={{ color: project.accent }}
                    >
                      {project.preview.highlight}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {project.preview.bars.map((bar) => (
                      <div key={bar.label}>
                        <div className="mb-0.5 flex items-baseline justify-between gap-2 text-[10px] text-stone-600">
                          <span>{bar.label}</span>
                          <span className="tabular-nums text-stone-800">{bar.value}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-stone-200/90">
                          <div
                            className="h-full rounded-full"
                            style={{ width: bar.width, backgroundColor: project.accent }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-md bg-sky-950 px-2 py-1 text-[11px] text-sky-300">{s}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center border-t border-sky-400/15 pt-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold transition hover:opacity-80"
                    style={{ color: project.accent }}
                  >
                    GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Connect — not LET'S WORK TOGETHER clone */}
        <section id="connect" className="border-t border-sky-500/15 bg-gradient-to-b from-sky-950/50 to-[#060d14] py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">Connect</p>
              <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                Got a hard problem?
                <br />
                <span className="text-sky-400">Send a signal.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-sky-100/60">
                Open to Software Engineer, AI Engineer, and Machine Learning Engineer roles.
              </p>
              <a
                href="mailto:aahanjain1114@gmail.com"
                className="mt-8 inline-block font-display text-2xl font-bold text-white underline decoration-sky-400/50 underline-offset-8 transition hover:decoration-sky-300 sm:text-3xl"
              >
                aahanjain1114@gmail.com
              </a>
            </div>

            <form onSubmit={submit} className="rounded-3xl border border-sky-400/20 bg-[#0a1520] p-6 sm:p-8">
              <label className="block text-xs text-sky-400">Name</label>
              <input
                className="mt-1.5 w-full rounded-xl border border-sky-400/20 bg-[#060d14] px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
              <label className="mt-4 block text-xs text-sky-400">Email</label>
              <input
                type="email"
                className="mt-1.5 w-full rounded-xl border border-sky-400/20 bg-[#060d14] px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
              <label className="mt-4 block text-xs text-sky-400">Signal</label>
              <textarea
                className="mt-1.5 min-h-[110px] w-full resize-y rounded-xl border border-sky-400/20 bg-[#060d14] px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What are we building?"
                required
              />
              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-sky-400 py-3.5 text-sm font-bold text-[#060d14] transition hover:bg-cyan-300"
              >
                Transmit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-sky-500/10 py-8 text-center text-xs text-sky-100/40">
        © 2026 Aahan Jain · Built with intent
      </footer>
    </div>
  )
}
