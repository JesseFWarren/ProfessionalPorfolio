export const personalInfo = {
  name: "Jesse Warren V",
  title: "Master's Student at Duke University Studying Artificial Intelligence",
  imageUrl: "/profile.jpg",
  about: "I aspire to develop AI-powered solutions that enhance operational efficiency and drive innovation, focusing on real-time problem-solving. I will graduate with my Master's degree in July of 2025 and I wish to pursue a career in Machine Learning.",
  contact: {
    email: "warrenwjj@gmail.com",
    github: "https://github.com/JesseFWarren",
    linkedin: "https://www.linkedin.com/in/jesse-f-warren/",
  }
};

export const skills = [
  {
    name: "AI/ML",
    items: ["PyTorch", "Keras", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP", "Modeling"],
  },
  {
    name: "Deployment & Automation",
    items: ["CI/CD", "GitHub Actions", "Apache Airflow", "Google Cloud Functions", "Serverless", "Flask", "FastAPI"],
  },
  {
    name: "Cloud & MLOps",
    items: ["AWS", "Amazon Sagemaker", "Azure ML", "Docker", "Kubernetes", "MLflow"],
  },
  {
    name: "Programming",
    items: ["Python", "C/C++", "C#", "Java", "Typescript", "Go", "Rust", "SQL", "R"],
  },
  {
    name: "Web Development",
    items: ["React", "Next.js", "Node.js", "FastAPI", "GraphQL", "Javascript", "HTML and CSS"],
  },
  {
    name: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    name: "Data Visualization",
    items: ["Tableau", "Plotly", "PowerBI",]
  },
  {
    name: "Tools",
    items: ["Git", "VS Code", "PyCharm", "Jupyter Lab", "Adobe Studios", "Android Studio"],
  },
  {
    name: "Math & Statistics",
    items: ["Linear Algebra", "Calculus", "Probability", "Statistics", "Optimization", "Bayesian Inference", "Hypothesis Testing"],
  },
];

export const experience = [
  {
    title: "Data Analytics Intern",
    company: "Federal Communications Commission",
    location: "Washington D.C.",
    period: "2023 - 2024",
    description: [
      "Streamlined data pipeline processes by automating API data retrieval, formatting, and analytics, improving efficiency",
      "Developed a user-friendly application that enabled employees to quickly access critical data, boosting productivity",
      "Deployed the application company-wide, simplifying workflows and enhancing task efficiency across teams ",
      "uthored comprehensive documentation and 'how-to' guides to ensure project maintainability; the application continues to enhance workflow a year after launch",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Elsetic",
    location: "Barcelona, Spain",
    period: "2022",
    description: [
      "Managed project execution and developed the mobile front-end, ensuring seamless progress and delivering high-quality results",
      "Led the development of the company’s newest app from inception through beta testing, ensuring timely delivery and high functionality",
      "Mentored intern coworkers in agile methodology, accelerating their learning curve and contributing to their professional growth",
    ],
  },
];

export const education = [
  {
    degree: "M.S. in Artificial Intelligence for Product Innovation",
    school: "Duke University",
    location: "Durham, NC",
    period: "2024 - 2025",
    description: "Focus: Machine Learning",
  },
  {
    degree: "B.S. in Computer Science and Business",
    school: "Lehigh University",
    location: "Bethleham, PA",
    period: "2020 - 2024",
    description: "Dual degree with a focus on Computer Science",
  },
]; 

export const projects = [
    {
      title: "Computer Vision Recaptcha Solver",
      description: "Trained and deployed an object detection model to solve google recaptchas and obtained a 52% accuracy improvement versus the random selection baseline.",
      technologies: ["Computer Vision", "AWS", "Python", "Yolo", "Selenium", "Feature Engineering", "Data Collection"],
      internalLink: "/projects/recaptcha",
      externalLink: "https://github.com/JesseFWarren/Computer-Vision-Recaptcha-Solver",
      image: "/projects/nlp/main.png",
    },
    {
      title: "Vehicle Detection For Biker Safety",
      description: "Trained and implemented a CV model capable of detecting road hazards and potential dangers in real-time to enhance cyclist safety. Integrated model into hardware and conducted rigerous testing prior to beta launch.",
      technologies: ["Computer Visison", "Python", "Tensorflow", "Amazon Sagemaker", "Jupyter Notebook", "Hardware Integration", "Data Collection"],
      internalLink: "/projects/drone-nav", //drone-nav
      externalLink: "https://github.com/jamesgasek/skillion-capstone",
      image: "/projects/drone/main.jpg",
    },
  ];