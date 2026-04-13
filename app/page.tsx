export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            <div className="text-base sm:text-lg font-medium text-gray-900 tracking-tight">Portfolio</div>
            <div className="flex gap-4 sm:gap-6 lg:gap-8">
              <a href="#experience" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium">Experience</a>
              <a href="#about" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium">About</a>
              <a href="#skills" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium">Skills</a>
              <a href="#projects" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium">Projects</a>
              <a href="#contact" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
            <div className="flex-1 w-full">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-5 md:mb-6">Hi, I'm Aahan Jain.</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed max-w-xl">Software Engineer building scalable, data-driven, and AI-powered applications.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="bg-black text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm font-medium hover:bg-gray-800 text-center sm:text-left">
                  View Projects
                </a>
                <a href="/AahanJain_AISWE.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-100 text-center sm:text-left">
                  View Resume
                </a>
                <a href="https://github.com/aahan14jain" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-100 text-center sm:text-left">
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 md:mt-2">
              <img
                src="/profile.jpg"
                alt="Aahan Jain"
                width={220}
                height={220}
                className="rounded-full w-[220px] h-[220px] object-cover shadow-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">Experience</h2>
            <article className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
              <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6 pb-5 sm:pb-6 border-b border-gray-200">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">Hexagon</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium mt-1">Software Engineering Intern</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-medium shrink-0 sm:text-right">Aug 2023 – Apr 2024</p>
              </header>
              <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed max-w-3xl">
                <p className="text-gray-900 font-semibold">
                  Built a production AI chatbot enabling employees to instantly access HR policies, holidays, and organizational data. Designed to handle 500+ daily queries.
                </p>
                <p className="text-gray-600">
                  Engineered a RAG-based system using LangChain and vector embeddings, deployed on Azure with CI/CD and unit-tested APIs.
                </p>
              </div>
              <div className="mt-6 sm:mt-7">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4">Key Impact</h4>
                <ul className="space-y-6 sm:space-y-7 text-xs sm:text-sm text-gray-600 leading-relaxed list-disc pl-4 marker:text-gray-400">
                  <li className="pl-1">
                    Reduced issue resolution time by 50% across 10+ client organizations, enabling employees to instantly access HR policies and organizational data through natural language queries.
                  </li>
                  <li className="pl-1">
                    Delivered 90%+ accurate responses using a RAG pipeline combining vector embeddings, MongoDB (PDFs), and MySQL (employee data) orchestrated via LangChain.
                  </li>
                  <li className="pl-1">
                    Deployed on Azure with Jenkins CI/CD and unit-tested APIs, contributing in an Agile team with bi-weekly releases and continuous feature delivery.
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-gray-200">
                {['Python', 'Django', 'React', 'LangChain', 'RAG', 'Azure'].map((tag) => (
                  <span key={tag} className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-7 md:mb-8 tracking-tight">About</h2>
            <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed max-w-3xl">
              <p className="text-sm sm:text-base">
                I'm a Master's student in Computer Science at George Mason University and a Software Engineer focused on building scalable, real-world systems.
              </p>
              <p className="text-sm sm:text-base">
                My work combines strong engineering fundamentals with data and AI to design intelligent applications that solve practical problems. I'm particularly interested in applying machine learning and LLMs within production systems, not just models in isolation.
              </p>
              <p className="text-sm sm:text-base">
                I enjoy working across the full stack—from backend architecture and APIs to data-driven features—while keeping a strong focus on clean design, performance, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Coding */}
      <section id="beyond-coding" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-7 md:mb-8 tracking-tight">Beyond Coding</h2>
            <div className="max-w-3xl">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Outside of engineering, I stay active and enjoy exploring creative and cultural interests.
              </p>
              <ul className="space-y-3.5 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed list-disc pl-5 marker:text-gray-400">
                <li className="pl-1">Lifeguard at George Mason University — responsible for safety and quick decision-making in high-pressure situations</li>
                <li className="pl-1">Enjoy playing soccer and swimming — staying active through teamwork and discipline</li>
                <li className="pl-1">Passionate about cooking and experimenting with new recipes</li>
                <li className="pl-1">Enjoy traveling and experiencing new places</li>
                <li className="pl-1">Interested in learning new languages and cultures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-5 tracking-tight">Software Engineering</h3>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Python</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Java</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">JavaScript</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">TypeScript</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">React</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Node.js</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Django</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Flask</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">REST APIs</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Git</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Docker</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">System Design</span>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-5 tracking-tight">Data & AI</h3>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Machine Learning</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Feature Engineering</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Data Mining</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Pandas</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">NumPy</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Scikit-learn</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">LLMs</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">LangChain</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">RAG</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Prompt Engineering</span>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-5 tracking-tight">Cloud & Systems</h3>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">AWS</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Azure</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Kubernetes</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">CI/CD</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Kafka</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">Microservices</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">PostgreSQL</span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <div className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-1.5 tracking-tight">DocuMind – AI Documentation Generator</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-3 sm:mb-3.5">Research project · group</p>
                <div className="text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed space-y-2.5 flex-1">
                  <p>An AI agent that auto-generates docstrings, READMEs, and architecture diagrams from Python code using AST parsing and LLMs.</p>
                  <p>Reduced developer onboarding time by 30% across a 1,000+ line codebase.</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-5 sm:mb-6">
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Python</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Flask</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">AST parsing</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">LLM</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">LangChain</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Mermaid.js</span>
                </div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium">
                  GitHub →
                </a>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-1.5 tracking-tight">EventCart – Event-Driven Checkout Microservices</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-3 sm:mb-3.5">Solo project</p>
                <div className="text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed space-y-2.5 flex-1">
                  <p>An event-driven microservices checkout system using Kafka, Redis, and Saga-based fault tolerance.</p>
                  <p>Handles 1,000+ transactions with 85% test coverage and 35% lower latency.</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-5 sm:mb-6">
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Java</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Spring Boot</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Kafka</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Redis</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Microservices</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Prometheus</span>
                </div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium">
                  GitHub →
                </a>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-1.5 tracking-tight">Customer Recommendation System</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-3 sm:mb-3.5">Team of 3</p>
                <div className="text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed space-y-2.5 flex-1">
                  <p>An end-to-end ML pipeline processing 22,500+ transactions to forecast purchase behavior and generate LLM-based deal messages.</p>
                  <p>Served via a Django REST API with a Next.js dashboard.</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-5 sm:mb-6">
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Django</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">PostgreSQL</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Machine Learning</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Next.js</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">REST APIs</span>
                </div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium">
                  GitHub →
                </a>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-1.5 tracking-tight">Tourist Guide System</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-3 sm:mb-3.5">Solo project</p>
                <div className="text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed space-y-2.5 flex-1">
                  <p>A map-first travel planner that geocodes cities, surfaces restaurants, hospitals, pharmacies, and emergency POIs via OpenStreetMap/Overpass, and plots OSRM routes live on a React Leaflet canvas.</p>
                  <p>Express backs two geospatial JSON endpoints across four POI presets—typical city-to-neighborhood lookups stay on one screen instead of three separate map apps, with zero paid map SDKs.</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-5 sm:mb-6">
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">React</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Express</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Leaflet</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">OpenStreetMap</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">OSRM</span>
                </div>
                <a href="https://github.com/aahan14jain/tourist-guide-system" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium">
                  GitHub →
                </a>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-3.5 tracking-tight">Experimentation & A/B Testing Framework</h3>
                <div className="text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed space-y-2.5 flex-1">
                  <p>An end-to-end experimentation framework that processes 10,000+ user events to enable data-driven product decisions across cohorts and variants.</p>
                  <p>Implemented z-tests, confidence intervals, and logistic regression — achieving 1.5–3.0% performance improvement across 5+ variants.</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-5 sm:mb-6">
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Python</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">SciPy</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">ETL Pipelines</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Statistical Testing</span>
                </div>
                <a href="https://github.com/aahan14jain/experimentation-ab-testing-framework" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium">
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-9 md:mb-10 tracking-tight">Contact</h2>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="font-medium text-gray-900 sm:w-28 text-xs sm:text-sm tracking-tight">Email:</div>
                <a href="mailto:aahan.14jain@gmail.com" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base break-all sm:break-normal">aahan.14jain@gmail.com</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="font-medium text-gray-900 sm:w-28 text-xs sm:text-sm tracking-tight">LinkedIn:</div>
                <a href="https://www.linkedin.com/in/aahan-jain-30222020b" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base break-all sm:break-normal">linkedin.com/in/aahan-jain-30222020b</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="font-medium text-gray-900 sm:w-28 text-xs sm:text-sm tracking-tight">GitHub:</div>
                <a href="https://github.com/aahan14jain" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base break-all sm:break-normal">github.com/aahan14jain</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center text-gray-600 text-xs sm:text-sm">
            <p>© 2026 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
