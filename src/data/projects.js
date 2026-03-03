export const projects = [
    { 
        id: "ask2d2", 
        title: "Ask2d2", 
        description: "An AI Chatbot hooked to a RAG system that provides accurate answers for university students.", 
        tags: ["ai", "express.js", "rag"],
        links: [
            {type: "github", url: "https://www.github.com"},
            {type: "demo", url: "https://www.ucu.edu.uy"},
        ],
        image: {
            src: "/imgtest.jpg",
            description: "Ask2d2 architecture diagram",
            alt: "Diagram showcasing the architecture of Ask2d2, including the AI Chatbot and RAG system components."
        },
        problem: "The problem I wanted to solve with this project was to create a simple and effective way to showcase my projects and skills in a visually appealing way. I wanted to create a website that would allow me to easily share my work with potential employers and collaborators, while also providing a platform for me to express my creativity and personality.",
        solution: "The solution I implemented was to create a personal portfolio website using React and Tailwind CSS. The website features a clean and modern design, with sections for my projects, skills, and contact information. I also implemented a blog section where I can share my thoughts and insights on various topics related to technology and programming."
    },
    { id: "proj2", title: "Project Two", description: "Another cool thing", tags: ["react", "node.js"] },
    { id: "proj3", title: "Project Three", description: "Yet another one", tags: ["python", "django"] },
]; 