export interface AiDevelopmentTopic {
  slug: string;
  title: string;
  iconName: string;
  iconColor: string;
  iconBg: string;
  shortDescription: string;
  description: string;
  features: string[];
  useCases: string[];
}

export const aiDevelopmentColumns: AiDevelopmentTopic[][] = [
  [
    {
      slug: 'machine-learning-development',
      title: 'Machine Learning Development',
      iconName: 'Brain',
      iconColor: 'text-violet-500',
      iconBg: 'bg-violet-500/10',
      shortDescription: 'Custom ML models trained on your data.',
      description:
        'We design, train, and deploy machine learning models tailored to your business objectives — from classification and regression to recommendation engines and anomaly detection.',
      features: [
        'End-to-end model development lifecycle',
        'Feature engineering and data preprocessing',
        'Model evaluation with cross-validation',
        'Production-ready model packaging',
        'Continuous retraining pipelines'
      ],
      useCases: ['Fraud detection', 'Demand forecasting', 'Customer churn prediction', 'Quality assurance automation']
    },
    {
      slug: 'llm-integration',
      title: 'LLM Integration',
      iconName: 'Bot',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-500/10',
      shortDescription: 'Embed large language models into your products.',
      description:
        'Integrate GPT, Claude, Llama, and other LLMs into your applications with secure API layers, prompt engineering, and context management for reliable outputs.',
      features: [
        'Multi-provider LLM orchestration',
        'Prompt template libraries',
        'Token usage optimization',
        'Fallback and retry strategies',
        'Output validation and guardrails'
      ],
      useCases: ['Document summarization', 'Code assistants', 'Customer support bots', 'Content generation']
    },
    {
      slug: 'ai-chatbot-development',
      title: 'AI Chatbot Development',
      iconName: 'MessageSquare',
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-500/10',
      shortDescription: 'Intelligent conversational agents for any channel.',
      description:
        'Build AI-powered chatbots that understand context, handle multi-turn conversations, and integrate with your CRM, knowledge base, and support workflows.',
      features: [
        'Multi-channel deployment (web, Slack, WhatsApp)',
        'Knowledge base grounding',
        'Human handoff workflows',
        'Conversation analytics dashboard',
        'Multilingual support'
      ],
      useCases: ['24/7 customer support', 'Lead qualification', 'Internal IT helpdesk', 'E-commerce shopping assistants']
    },
    {
      slug: 'generative-ai-development',
      title: 'Generative AI Development',
      iconName: 'Sparkles',
      iconColor: 'text-pink-500',
      iconBg: 'bg-pink-500/10',
      shortDescription: 'Create content, images, and code with AI.',
      description:
        'Harness generative AI to produce text, images, audio, and code at scale while maintaining brand consistency and quality controls.',
      features: [
        'Text-to-image and image-to-image pipelines',
        'Brand-aligned content generation',
        'Batch processing at scale',
        'Content moderation filters',
        'Version control for generated assets'
      ],
      useCases: ['Marketing creative production', 'Product descriptions', 'Design mockups', 'Code scaffolding']
    },
    {
      slug: 'ai-agent-development',
      title: 'AI Agent Development',
      iconName: 'Workflow',
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-500/10',
      shortDescription: 'Autonomous agents that plan and execute tasks.',
      description:
        'Develop AI agents that break down complex goals into steps, use tools autonomously, and collaborate with humans in the loop for high-stakes decisions.',
      features: [
        'Tool-calling and function execution',
        'Multi-step reasoning chains',
        'Memory and state management',
        'Agent orchestration frameworks',
        'Audit trails for every action'
      ],
      useCases: ['Research automation', 'Sales outreach agents', 'Data analysis assistants', 'DevOps automation']
    }
  ],
  [
    {
      slug: 'computer-vision-solutions',
      title: 'Computer Vision Solutions',
      iconName: 'Eye',
      iconColor: 'text-cyan-500',
      iconBg: 'bg-cyan-500/10',
      shortDescription: 'Visual intelligence for images and video.',
      description:
        'Deploy computer vision models for object detection, segmentation, OCR, facial recognition, and real-time video analytics across edge and cloud.',
      features: [
        'Custom object detection models',
        'Real-time video stream processing',
        'OCR and document parsing',
        'Image classification pipelines',
        'Edge-optimized inference'
      ],
      useCases: ['Manufacturing defect detection', 'Retail shelf monitoring', 'Security surveillance', 'Medical imaging analysis']
    },
    {
      slug: 'nlp-solutions',
      title: 'NLP Solutions',
      iconName: 'Languages',
      iconColor: 'text-indigo-500',
      iconBg: 'bg-indigo-500/10',
      shortDescription: 'Understand and process human language at scale.',
      description:
        'Build natural language processing systems for sentiment analysis, entity extraction, text classification, translation, and semantic search.',
      features: [
        'Named entity recognition (NER)',
        'Sentiment and intent classification',
        'Semantic search indexing',
        'Multi-language NLP pipelines',
        'Custom tokenizer and embedding models'
      ],
      useCases: ['Review sentiment tracking', 'Contract analysis', 'Search relevance tuning', 'Compliance monitoring']
    },
    {
      slug: 'predictive-analytics',
      title: 'Predictive Analytics',
      iconName: 'LineChart',
      iconColor: 'text-teal-500',
      iconBg: 'bg-teal-500/10',
      shortDescription: 'Forecast outcomes with data-driven models.',
      description:
        'Turn historical data into actionable forecasts using statistical models and machine learning to predict trends, risks, and opportunities.',
      features: [
        'Time-series forecasting',
        'Risk scoring models',
        'What-if scenario simulation',
        'Automated report generation',
        'Real-time prediction APIs'
      ],
      useCases: ['Revenue forecasting', 'Inventory optimization', 'Credit risk assessment', 'Maintenance scheduling']
    },
    {
      slug: 'rag-systems',
      title: 'RAG Systems',
      iconName: 'Database',
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-500/10',
      shortDescription: 'Retrieval-augmented generation for accurate AI.',
      description:
        'Implement RAG architectures that ground LLM responses in your proprietary documents, databases, and knowledge bases for factual, up-to-date answers.',
      features: [
        'Vector database setup and indexing',
        'Hybrid search (semantic + keyword)',
        'Chunking and embedding strategies',
        'Citation and source attribution',
        'Incremental index updates'
      ],
      useCases: ['Internal knowledge search', 'Legal document Q&A', 'Product documentation bots', 'Research assistants']
    },
    {
      slug: 'custom-ai-models',
      title: 'Custom AI Models',
      iconName: 'Cpu',
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-500/10',
      shortDescription: 'Bespoke models built for your domain.',
      description:
        'When off-the-shelf AI is not enough, we train custom models from scratch or fine-tune foundation models on your proprietary datasets.',
      features: [
        'Domain-specific model architecture',
        'Transfer learning and fine-tuning',
        'Data annotation workflows',
        'Model compression and distillation',
        'Benchmarking against baselines'
      ],
      useCases: ['Industry-specific classifiers', 'Proprietary language models', 'Specialized recommendation engines', 'Custom embeddings']
    }
  ],
  [
    {
      slug: 'ai-automation',
      title: 'AI Automation',
      iconName: 'GitBranch',
      iconColor: 'text-lime-500',
      iconBg: 'bg-lime-500/10',
      shortDescription: 'Automate repetitive workflows with AI.',
      description:
        'Combine AI with workflow automation to eliminate manual tasks in operations, finance, HR, and customer service — with intelligent decision points.',
      features: [
        'Workflow design and orchestration',
        'Document processing automation',
        'Email and ticket triage',
        'Approval routing with AI scoring',
        'Integration with existing tools (Zapier, n8n, custom APIs)'
      ],
      useCases: ['Invoice processing', 'Employee onboarding', 'Ticket categorization', 'Report generation']
    },
    {
      slug: 'ai-consulting',
      title: 'AI Consulting',
      iconName: 'Headphones',
      iconColor: 'text-sky-500',
      iconBg: 'bg-sky-500/10',
      shortDescription: 'Strategy, roadmaps, and feasibility studies.',
      description:
        'Get expert guidance on AI adoption — from use-case discovery and ROI analysis to technology selection, team structure, and implementation roadmaps.',
      features: [
        'AI readiness assessment',
        'Use-case prioritization workshops',
        'Technology stack recommendations',
        'Proof-of-concept development',
        'Change management planning'
      ],
      useCases: ['Digital transformation planning', 'AI vendor evaluation', 'Team capability building', 'Regulatory compliance guidance']
    },
    {
      slug: 'mlops-deployment',
      title: 'MLOps & Deployment',
      iconName: 'Cloud',
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-400/10',
      shortDescription: 'Ship and monitor models in production.',
      description:
        'Establish MLOps pipelines for continuous integration, deployment, monitoring, and governance of machine learning models at scale.',
      features: [
        'CI/CD for ML models',
        'Model versioning and registry',
        'A/B testing in production',
        'Drift detection and alerting',
        'Auto-scaling inference endpoints'
      ],
      useCases: ['Model lifecycle management', 'Production monitoring', 'Rollback strategies', 'Multi-environment deployments']
    },
    {
      slug: 'ai-api-development',
      title: 'AI API Development',
      iconName: 'Layers',
      iconColor: 'text-rose-500',
      iconBg: 'bg-rose-500/10',
      shortDescription: 'Expose AI capabilities via robust APIs.',
      description:
        'Design and build RESTful and GraphQL APIs that wrap your AI models with authentication, rate limiting, caching, and comprehensive documentation.',
      features: [
        'OpenAPI / Swagger documentation',
        'Authentication and API key management',
        'Rate limiting and quota controls',
        'Response caching strategies',
        'Webhook and streaming support'
      ],
      useCases: ['SaaS AI features', 'Partner integrations', 'Mobile app backends', 'Microservices architecture']
    },
    {
      slug: 'ai-voice-assistants',
      title: 'AI Voice Assistants',
      iconName: 'Mic',
      iconColor: 'text-fuchsia-500',
      iconBg: 'bg-fuchsia-500/10',
      shortDescription: 'Voice-enabled AI for hands-free interaction.',
      description:
        'Build voice assistants with speech-to-text, natural language understanding, and text-to-speech for IVR systems, smart devices, and mobile apps.',
      features: [
        'Speech recognition tuning',
        'Voice activity detection',
        'Natural-sounding TTS voices',
        'Multi-turn voice conversations',
        'Telephony and WebRTC integration'
      ],
      useCases: ['Call center automation', 'Smart home devices', 'Accessibility tools', 'Drive-through ordering systems']
    }
  ],
  [
    {
      slug: 'ai-data-pipeline',
      title: 'AI Data Pipeline',
      iconName: 'Database',
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500/10',
      shortDescription: 'Reliable data infrastructure for AI workloads.',
      description:
        'Build scalable data pipelines that ingest, clean, transform, and serve data for training and inference — with quality checks at every stage.',
      features: [
        'ETL/ELT pipeline design',
        'Data validation and quality gates',
        'Feature store implementation',
        'Batch and streaming ingestion',
        'Data lineage tracking'
      ],
      useCases: ['Training data preparation', 'Real-time feature serving', 'Data warehouse integration', 'Labeling pipeline setup']
    },
    {
      slug: 'ai-model-fine-tuning',
      title: 'AI Model Fine-Tuning',
      iconName: 'Wrench',
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-500/10',
      shortDescription: 'Adapt foundation models to your needs.',
      description:
        'Fine-tune pre-trained models on your domain-specific data using LoRA, QLoRA, and full fine-tuning techniques for optimal performance at lower cost.',
      features: [
        'LoRA and QLoRA fine-tuning',
        'Hyperparameter optimization',
        'Evaluation benchmark suites',
        'Dataset curation and augmentation',
        'Model merging and ensemble techniques'
      ],
      useCases: ['Domain-specific LLMs', 'Custom classification heads', 'Style-adapted generation', 'Low-resource language support']
    },
    {
      slug: 'edge-ai-solutions',
      title: 'Edge AI Solutions',
      iconName: 'Smartphone',
      iconColor: 'text-red-500',
      iconBg: 'bg-red-500/10',
      shortDescription: 'Run AI models on-device and at the edge.',
      description:
        'Optimize and deploy AI models on mobile devices, IoT sensors, and edge servers for low-latency, offline-capable intelligent applications.',
      features: [
        'Model quantization and pruning',
        'ONNX and TensorRT optimization',
        'Mobile SDK integration (iOS, Android)',
        'Edge server deployment',
        'Federated learning setups'
      ],
      useCases: ['On-device face recognition', 'IoT predictive maintenance', 'Autonomous drone navigation', 'Offline mobile apps']
    },
    {
      slug: 'ai-security-governance',
      title: 'AI Security & Governance',
      iconName: 'Lock',
      iconColor: 'text-slate-500',
      iconBg: 'bg-slate-500/10',
      shortDescription: 'Secure, compliant, and responsible AI systems.',
      description:
        'Implement AI governance frameworks covering data privacy, model bias auditing, explainability, and compliance with EU AI Act, GDPR, and industry standards.',
      features: [
        'Bias and fairness auditing',
        'Model explainability (SHAP, LIME)',
        'PII detection and redaction',
        'Access control and audit logging',
        'Compliance documentation'
      ],
      useCases: ['Regulated industry deployments', 'Ethical AI reviews', 'Privacy-preserving ML', 'Board-level AI governance']
    },
    {
      slug: 'ai-powered-saas',
      title: 'AI-Powered SaaS',
      iconName: 'Shield',
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-400/10',
      shortDescription: 'Build AI-native software products.',
      description:
        'From MVP to scale, we help you architect and build SaaS products with AI at the core — multi-tenant, subscription-ready, and built for growth.',
      features: [
        'Multi-tenant architecture',
        'Usage-based billing integration',
        'AI feature flagging and rollout',
        'Admin dashboards and analytics',
        'White-label customization'
      ],
      useCases: ['AI writing tools', 'Analytics platforms', 'Vertical SaaS products', 'API-first AI services']
    }
  ]
];

export const allAiDevelopmentTopics: AiDevelopmentTopic[] = aiDevelopmentColumns.flat();

export function getAiTopicBySlug(slug: string): AiDevelopmentTopic | undefined {
  return allAiDevelopmentTopics.find((topic) => topic.slug === slug);
}

export function getAllAiTopicSlugs(): string[] {
  return allAiDevelopmentTopics.map((topic) => topic.slug);
}
