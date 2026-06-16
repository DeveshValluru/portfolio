export type SkillGroup = {
  name: string;
  items: string[];
  tone?: "default" | "learning";
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["Python", "C++", "C", "Java", "Bash", "SQL"]
  },
  {
    name: "ML / DL & GenAI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "Transformers",
      "PEFT / LoRA",
      "Diffusers",
      "vLLM (deployment)"
    ]
  },
  {
    name: "Techniques",
    items: [
      "LLM Fine-tuning",
      "Multi-agent systems",
      "Agentic AI",
      "MCP",
      "RAG",
      "NLP",
      "Feature engineering",
      "EDA",
      "PCA",
      "Clustering"
    ]
  },
  {
    name: "Tools & Infra",
    items: [
      "AWS",
      "Docker",
      "FastAPI",
      "Gradio",
      "Streamlit",
      "PostgreSQL",
      "SLURM",
      "Git",
      "Linux"
    ]
  },
  {
    name: "Currently wrapping my mind around",
    tone: "learning",
    items: [
      "CUDA kernels",
      "GPU programming",
      "vLLM internals",
      "Inference optimization",
      "KV-cache behavior",
      "Attention implementations",
      "Multi-GPU training (DDP / FSDP)",
      "Distributed inference",
      "Tensor parallelism"
    ]
  }
];

export const education = [
  {
    school: "Arizona State University",
    degree: "M.S. Computer Science",
    detail: "GPA 4.0/4.0",
    period: "Aug 2024 - May 2026",
    location: "Tempe, AZ",
    coursework: [
      "Natural Language Processing",
      "Agentic AI",
      "Planning & Learning in AI",
      "Data Mining",
      "Perception in Robotics",
      "Algorithms in Computational Biology"
    ]
  },
  {
    school: "National Institute of Technology, Tiruchirappalli",
    degree: "B.Tech, Electronics & Communication",
    detail: "GPA 3.2/4.0",
    period: "Aug 2017 - May 2021",
    location: "India",
    coursework: []
  }
];

export const certifications = [
  {
    name: "Generative Adversarial Networks (GANs) Specialization",
    issuer: "Coursera · DeepLearning.AI"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services"
  }
];
