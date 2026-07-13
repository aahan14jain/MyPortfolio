export type SkillItem = {
  name: string
  icon: string
  /** Monochrome SVG that needs invert on dark backgrounds */
  mono?: boolean
}

export type SkillCategory = {
  title: string
  skills: SkillItem[]
}

const si = (slug: string): SkillItem['icon'] =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${slug}.svg`

const di = (name: string, file = `${name}-original.svg`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${file}`

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & LLM',
    skills: [
      { name: 'LangGraph', icon: si('langchain'), mono: true },
      { name: 'LangChain', icon: si('langchain'), mono: true },
      { name: 'LlamaIndex', icon: si('meta'), mono: true },
      { name: 'Agentic AI', icon: si('openai'), mono: true },
      { name: 'Agentic RAG', icon: si('openai'), mono: true },
      { name: 'Multi-Agent Systems', icon: si('openai'), mono: true },
      { name: 'Prompt Engineering', icon: si('openai'), mono: true },
      { name: 'OpenAI API', icon: si('openai'), mono: true },
      { name: 'Azure OpenAI', icon: di('azure') },
      { name: 'AWS Bedrock', icon: si('amazonwebservices'), mono: true },
      { name: 'Cursor', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cursor.svg', mono: true },
      { name: 'GitHub Copilot', icon: si('githubcopilot'), mono: true },
    ],
  },
  {
    title: 'ML & Statistics',
    skills: [
      { name: 'scikit-learn', icon: di('scikitlearn') },
      { name: 'PyTorch', icon: di('pytorch') },
      { name: 'TensorFlow', icon: di('tensorflow') },
      { name: 'XGBoost', icon: di('python') },
      { name: 'Prophet', icon: si('meta'), mono: true },
      { name: 'SHAP', icon: di('python') },
      { name: 'statsmodels', icon: di('python') },
      { name: 'scipy', icon: si('scipy'), mono: true },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: di('python') },
      { name: 'Java', icon: di('java') },
      { name: 'C++', icon: di('cplusplus') },
      { name: 'TypeScript', icon: di('typescript') },
      { name: 'JavaScript', icon: di('javascript') },
      { name: 'SQL', icon: di('mysql') },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'FastAPI', icon: si('fastapi'), mono: true },
      { name: 'Django', icon: di('django', 'django-plain.svg') },
      { name: 'Spring Boot', icon: di('spring') },
      { name: 'Node.js', icon: di('nodejs') },
      { name: 'REST APIs', icon: si('swagger'), mono: true },
      { name: 'Apache Kafka', icon: si('apachekafka'), mono: true },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: di('react') },
      { name: 'Next.js', icon: di('nextjs') },
      { name: 'Angular', icon: di('angular') },
    ],
  },
  {
    title: 'Data & Databases',
    skills: [
      { name: 'PostgreSQL', icon: di('postgresql') },
      { name: 'MongoDB', icon: di('mongodb') },
      { name: 'Pinecone', icon: si('milvus'), mono: true },
      { name: 'ETL', icon: si('apacheairflow'), mono: true },
      { name: 'Redis', icon: di('redis') },
      { name: 'DynamoDB', icon: si('amazondynamodb'), mono: true },
      { name: 'RedShift', icon: si('amazonredshift'), mono: true },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: di('amazonwebservices', 'amazonwebservices-original-wordmark.svg') },
      { name: 'RDS', icon: si('amazonrds'), mono: true },
      { name: 'S3', icon: si('amazons3'), mono: true },
      { name: 'CloudWatch', icon: si('amazoncloudwatch'), mono: true },
      { name: 'Lambda', icon: si('awslambda'), mono: true },
      { name: 'IAM', icon: si('amazoniam'), mono: true },
      { name: 'Docker', icon: di('docker') },
      { name: 'Kubernetes', icon: di('kubernetes') },
      { name: 'CI/CD', icon: si('githubactions'), mono: true },
      { name: 'Git', icon: di('git') },
      { name: 'Terraform', icon: di('terraform') },
      { name: 'Jenkins', icon: di('jenkins') },
      { name: 'Azure', icon: di('azure') },
      { name: 'Linux', icon: di('linux') },
    ],
  },
  {
    title: 'Testing & Monitoring',
    skills: [
      { name: 'JUnit', icon: di('junit') },
      { name: 'Mockito', icon: di('java') },
      { name: 'Splunk', icon: si('splunk'), mono: true },
      { name: 'Prometheus', icon: di('prometheus') },
      { name: 'Grafana', icon: di('grafana') },
      { name: 'Airtable', icon: si('airtable'), mono: true },
    ],
  },
]
