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
              <a href="#education" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium">Education</a>
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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-5 md:mb-6">AI Engineer & Software Engineer</h1>
              <div className="mb-8 md:mb-10 max-w-xl space-y-3">
                <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">Building Agentic AI systems, RAG applications, and scalable backend platforms.</p>
                <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">
                  MS Computer Science – George Mason University
                  <br />
                  Open to Software Engineer, AI Engineer, and Machine Learning Engineer opportunities. 📍 Seattle, WA | Available for Full-Time Roles
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="bg-black text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm font-medium hover:bg-gray-800 text-center sm:text-left">
                  View Projects
                </a>
                <a href="/AahanJainAISWE.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-100 text-center sm:text-left">
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
                  <p className="text-sm sm:text-base text-gray-600 font-medium mt-1">Software Development Intern</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-medium shrink-0 sm:text-right">Aug 2023 – Apr 2024</p>
              </header>
              <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed max-w-3xl">
                <p className="text-gray-900 font-semibold">
                  Shipped a production AI customer-support assistant using prompt-engineered RAG pipelines and Azure OpenAI, handling 500+ daily employee queries with 90% response accuracy.
                </p>
                <p className="text-gray-600">
                  Built backend services in Django and MongoDB and orchestrated LangChain workflows to provide intelligent document retrieval and question answering across HR policies, holidays, and organizational knowledge.
                </p>
              </div>
              <div className="mt-6 sm:mt-7">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4">Key Impact</h4>
                <ul className="space-y-6 sm:space-y-7 text-xs sm:text-sm text-gray-600 leading-relaxed list-disc pl-4 marker:text-gray-400">
                  <li className="pl-1">
                    Served 500+ daily employee queries with 90% response accuracy using Azure OpenAI and RAG.
                  </li>
                  <li className="pl-1">
                    Reduced issue resolution time from 4 days to 2 days across 10+ client organizations.
                  </li>
                  <li className="pl-1">
                    Built Django and MongoDB backend services supporting real-time AI query handling.
                  </li>
                  <li className="pl-1">
                    Deployed through Azure and CI/CD pipelines, contributing to stable releases across multiple client environments.
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-gray-200">
                {['Python', 'Django', 'MongoDB', 'Azure OpenAI', 'LangChain', 'RAG', 'Azure', 'CI/CD'].map((tag) => (
                  <span key={tag} className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">Education</h2>
            <div className="space-y-5 sm:space-y-6">
              <article className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6 pb-5 sm:pb-6 border-b border-gray-200">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">George Mason University</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-medium mt-1">Master of Science in Computer Science</p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Aug 2024 – May 2026</p>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Fairfax, VA</p>
                  </div>
                </header>
                <div className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-3xl">
                  <p className="text-gray-600">GPA: 3.73/4.0</p>
                </div>
                <div className="mt-6 sm:mt-7">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Data Mining', 'Data Structures', 'Algorithm Design', 'Distributed Systems'].map((course) => (
                      <span key={course} className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              <article className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6 pb-5 sm:pb-6 border-b border-gray-200">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">Vishwakarma Institute of Technology</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-medium mt-1">Bachelor of Technology in Computer Engineering</p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Aug 2020 – May 2024</p>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Pune, India</p>
                  </div>
                </header>
                <div className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-3xl">
                  <p className="text-gray-600">CGPA: 3.37/10</p>
                </div>
              </article>
            </div>
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
                I'm a Software Engineer and AI Engineer with an MS in Computer Science from George Mason University, focused on building production-ready AI systems, RAG applications, and scalable backend platforms.
              </p>
              <p className="text-sm sm:text-base">
                My work combines strong software engineering fundamentals with applied AI — from LangGraph multi-agent workflows and retrieval systems to FastAPI/Django backends, ML pipelines, and cloud deployment.
              </p>
              <p className="text-sm sm:text-base">
                I'm especially interested in building intelligent products where LLMs, machine learning, and backend systems work together to solve real user problems.
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
              {[
                {
                  title: 'AI & LLM',
                  skills: ['LangGraph', 'LangChain', 'LlamaIndex', 'RAG', 'Agentic RAG', 'Multi-Agent Systems', 'Prompt Engineering'],
                },
                {
                  title: 'Languages',
                  skills: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL'],
                },
                {
                  title: 'Backend & APIs',
                  skills: ['FastAPI', 'Django', 'Spring Boot', 'REST APIs'],
                },
                {
                  title: 'Frontend',
                  skills: ['React', 'Next.js'],
                },
                {
                  title: 'Data & Databases',
                  skills: ['PostgreSQL', 'MongoDB', 'Pinecone', 'pgvector', 'Vector Databases', 'ETL'],
                },
                {
                  title: 'Machine Learning',
                  skills: ['PyTorch', 'XGBoost', 'LSTM', 'DistilBERT', 'Hugging Face', 'scikit-learn', 'MLflow', 'TensorFlow'],
                },
                {
                  title: 'Cloud & DevOps',
                  skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
                },
              ].map(({ title, skills }) => (
                <div key={title}>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-5 tracking-tight">{title}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {skills.map((skill) => (
                      <span key={skill} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs text-gray-700 border border-gray-300 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-1.5 tracking-tight">AI Decision Intelligence Platform</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-3 sm:mb-3.5">Solo project</p>
                <div className="text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed space-y-2.5 flex-1">
                  <p>AI-powered decision platform helping small businesses forecast demand, optimize pricing, and receive explainable recommendations.</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-5 sm:mb-6">
                  {['LangGraph', 'XGBoost', 'LSTM', 'DistilBERT', 'SHAP', 'FastAPI', 'pgvector', 'MLflow', 'Docker', 'Kubernetes'].map((tag) => (
                    <span key={tag} className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium">
                  GitHub →
                </a>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-1.5 tracking-tight">DocuMind – AI Documentation Generator</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-3 sm:mb-3.5">Research project · group</p>
                <div className="text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed space-y-2.5 flex-1">
                  <p>Multi-agent Agentic RAG platform that ingests GitHub repositories, generates documentation, architecture diagrams, and enables semantic codebase exploration.</p>
                  <p>1,000+ line codebases · 30% onboarding reduction</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-5 sm:mb-6">
                  {['LangGraph', 'LlamaIndex', 'Pinecone', 'FastAPI', 'RAGAS', 'LangSmith'].map((tag) => (
                    <span key={tag} className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href="https://documind-691.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-white bg-black border border-black rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium hover:bg-gray-800 hover:border-gray-800"
                  >
                    Live Demo →
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium">
                    GitHub →
                  </a>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 sm:p-7 md:p-8 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-1.5 tracking-tight">EventCart – Event-Driven Checkout Microservices</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-3 sm:mb-3.5">Solo project</p>
                <div className="text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed space-y-2.5 flex-1">
                  <p>An event-driven microservices checkout system using Kafka, Redis, and Saga-based fault tolerance.</p>
                  <p>1,000+ transactions · 85% test coverage · 35% lower latency</p>
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
                  <p>An end-to-end ML pipeline to forecast purchase behavior and generate LLM-based deal messages.</p>
                  <p>22,500 transactions · 150 customers · Random Forest prediction pipeline</p>
                  <p>Served via a Django REST API with a Next.js dashboard.</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-5 sm:mb-6">
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Django</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">PostgreSQL</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Machine Learning</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">Next.js</span>
                  <span className="px-2 sm:px-2.5 py-1 rounded text-xs text-gray-700 border border-gray-300 font-medium">REST APIs</span>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href="https://customer-recommendation-system-842fg5exs-aahan14jains-projects.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-white bg-black border border-black rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium hover:bg-gray-800 hover:border-gray-800"
                  >
                    Live Demo →
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 inline-block font-medium">
                    GitHub →
                  </a>
                </div>
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
                <a href="mailto:aahanjain1114@gmail.com" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base break-all sm:break-normal">aahanjain1114@gmail.com</a>
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
