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
        { 
        id: "splitout", 
        title: "Splitout", 
        description: "A C# and Unity-based 2D multiplayer platformer shooter with local PvP for up to 4 players, featuring custom movement, combat mechanics, and handcrafted arena levels.", 
        tags: ["C#", "Unity", "Teamwork"],
        links: [
            {type: "demo", url: "https://www.youtube.com/watch?v=xWIx4LyOXPg"},
        ],
        image: {
            src: "/splitout.png",
            description: "Splitout Game Logo",
            alt: "Logo for the videogame Splitout"
        },
        problem: "Starting from a university assignment with no prior experience in C# or game development, the goal was to build a fully functional, fun, and polished game from the ground up, while learning the tools, coordinating as a team, and meeting the bar of a real, presentable product.",
        solution: "We created Splitout. I took on a developer role, implementing core gameplay systems in C#: player controls, combat mechanics, health and damage logic, and overall game flow. Working in Unity, I built a solid technical foundation in the language while actively contributing to every iteration of the game. We ran continuous playtesting cycles and incorporated direct player feedback to refine mechanics and level design over time. On the team side, we used Git for version control, which kept collaboration smooth and taught me a lot about working in a shared codebase. The project grew well beyond its academic origins, and we were proud to showcase it at major national events like LevelUY, putting it in front of a real audience for the first time."
    },
    { id: "proj2", title: "Project Two", description: "Another cool thing", tags: ["react", "node.js"] },
    { id: "proj3", title: "Project Three", description: "Yet another one", tags: ["python", "django"] },
]; 