export const personalInfo = {
  name: "Gokul M",
  tagline: "Software Developer | Problem Solver | Tech Enthusiast",
  email: "mgokul26092005@gmail.com",
  phone: "+91 9489423032",
  location: "Dharmapuri, Tamilnadu",
  linkedin: "https://www.linkedin.com/in/gokul-m-685121303/",
  github: "https://github.com/Gokuldinesh26",
  resumeUrl: "/resume.pdf" // You would upload your actual resume PDF to the public folder
};

export const skills = [
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },
  { name: "Power BI", level: 65, category: "Tools" }
];

export const projects = [
  {
    id: 1,
    title: "CONCRETE STRENGTH PREDICTION — ML",
    description: "Built a machine learning model to predict concrete strength based on material composition. Applied regression algorithms for accurate strength estimation.",
    technologies: ["Python", "Machine Learning", "Regression", "Data Analysis"],
    githubUrl: "https://github.com/Gokuldinesh26/concrete-strength-prediction",
    liveUrl: "https://github.com/Gokuldinesh26/concrete-strength-prediction",
    image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Sep 2023"
  },
  {
    id: 2,
    title: "THALASSEMIA DETECTION — DL",
    description: "Developed a deep learning model for Thalassemia prediction using medical images. Implemented CNN with TensorFlow for feature extraction and classification.",
    technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "Medical Imaging"],
    githubUrl: "https://github.com/Gokuldinesh26/thalassemia-detection",
    liveUrl: "https://github.com/Gokuldinesh26/thalassemia-detection",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024"
  },
  {
    id: 3,
    title: "PERSONAL TIME CAPSULE — WEB APP",
    description: "Created a web platform to store and retrieve personal memories securely over time. Used Node.js, MongoDB, and implemented user authentication.",
    technologies: ["Node.js", "MongoDB", "Express", "Authentication", "Web Development"],
    githubUrl: "https://github.com/Gokuldinesh26/personal-time-capsule",
    liveUrl: "https://github.com/Gokuldinesh26/personal-time-capsule",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024"
  }
];
export const achievements = [
  {
    id: 1,
    title: "MongoDB Associate Developer",
    organization: "MongoDB University",
    date: "2024",
    description: "Achieved MongoDB Associate Developer certification, demonstrating proficiency in MongoDB database design, CRUD operations, aggregation, and performance optimization.",
    type: "certification"
  },
  {
    id: 2,
    title: "Paper Publication - Machine Learning Model for Concrete Strength Prediction",
    organization: "IEEE ICCCNT 2024, IIT Mandi, Himachal Pradesh, India",
    date: "2024",
    description: `Presented a paper titled "Machine Learning Model for Concrete Strength Prediction" at the Fifteenth International IEEE Conference (ICCCNT 2024), IIT Mandi, Himachal Pradesh, India.
    • Link: https://ieeexplore.ieee.org/abstract/document/10724333`,
    type: "publication"
  }
];
