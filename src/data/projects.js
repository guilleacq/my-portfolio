export const projects = [
    {
        id: "portfolio",
        title: "Personal Portfolio",
        description: "A minimalist personal portfolio website built with React and Tailwind CSS, designed to showcase projects and provide easy access to contact links and blog content.",
        tags: ["react", "tailwind", "shadcn/ui", "frontend"],
        links: [
            { type: "demo", url: "https://www.guillermoacq.com" },
            { type: "github", url: "https://github.com/guilleacq/my-portfolio" },
            
        ],
        image: {
            src: "/portfolio.jpg",
            description: "Screenshot of personal portfolio homepage",
            alt: "Minimalist portfolio website with project showcase"
        },
        problem: "I wanted to establish my own space on the web where I could showcase the projects I'm working on, express myself, and provide easy access to contact links and my blog. While there were many portfolio templates available, I needed something that truly reflected my personal style and gave me full control over the content without being tied to external systems.",
        solution: "I built a custom portfolio from scratch using React.js, styled with Tailwind CSS and enhanced with shadcn/ui components alongside custom-built ones. While I initially considered a full-stack solution with an admin panel or a headless CMS for content management, I decided those approaches were overkill for a personal portfolio. Instead, I opted for a simpler, more maintainable approach with content managed directly in code. The design is minimalist and self-designed, heavily inspired by Notion's clean interface (an app I use frequently). The result is a lightweight, personal space that contains exactly what I need, nothing more, nothing less."
    },
    {
        id: "ask2d2",
        title: "Ask2d2",
        description: "A RAG-powered AI chatbot built with Python and Flask that answers university students' questions using only official university documents, eliminating hallucinations and providing instant, accurate responses.",
        tags: ["backend", "python", "ai", "python", "rag", "react", "docker"],
        image: {
            src: "/ask2d2.jpg",
            description: "Screenshot of the official presentation for Ask2d2",
            alt: "Powerpoint presentation of Ask2d2, including the AI Chatbot and RAG system components."
        },
        problem: "University students constantly struggle to get quick, official answers about administrative processes, course enrollment, or academic procedures, often waiting hours or days for a response from university staff. At the same time, using a generic LLM for this isn't viable either, since they tend to hallucinate and fabricate information, which is the last thing you want when dealing with official academic processes.",
        solution: "As part of a university challenge at UCU, my team and I built a functional AI chatbot prototype in a few intense days. The system is built around a RAG pipeline using ChromaDB as our vector store, which lets the model pull answers only from official university documents instead of generating them freely. We chose GPT-4o mini for its balance of speed and cost, since the chatbot needed to feel responsive while staying within budget. I led the backend development with Python and Flask, and our stack included React on the frontend and Docker for deployment. I also pitched the project directly to the university. It was a great exercise in turning an idea into a working product fast and as a tight team.",
    },
    {
        id: "erasmus-lobby",
        title: "Erasmus Lobby",
        description: "A Club Penguin-inspired social platform for exchange students, featuring real-time chat, friend systems, and a virtual lobby where users can interact while exploring a hand-drawn representation of Genoa's Piazza de Ferrari.",
        tags: ["full-stack", "javascript", "php", "mysql", "xampp", "languages"],
        links: [
            { type: "github", url: "https://github.com/guilleacq/genova-game-php" },
        ],
        image: {
            src: "/erasmus-lobby.jpg",
            description: "Erasmus Lobby virtual space with Genoa's Piazza de Ferrari",
            alt: "Virtual lobby interface with hand-drawn Italian architecture and global chat"
        },
        problem: "When I arrived in Italy for my semester abroad, I took a web development course taught in Italian and was tasked with building a final project in PHP, a language I had never used before. Exchange students often struggle to find other people in their same situation to connect with, the exception being some specific communities. We wanted to create something that felt like a virtual hangout space where Erasmus students could meet, chat, and build friendships organically.",
        solution: `Together with my teammate from Germany (we were the only exchange students in the class), we built Erasmus Lobby, a Club Penguin-inspired social platform using PHP, MySQL, and vanilla JavaScript on XAMPP. I learned PHP from scratch for this project and handled the full-stack development: designing and coding the interface, implementing the backend logic, building a custom session-based authentication system with password hashing, and securing the application against SQL injection. 
        
        The platform features a virtual lobby where users can walk around while chatting in real-time, add friends, and compete on a leaderboard. My teammate designed the beautiful hand-drawn background of Piazza de Ferrari in Genoa, where we were studying. The system includes proper authentication, secure data handling, and a backend structured around endpoint-like logic. 
        
        While the code structure could be improved (we essentially created one class per endpoint and the frontend is a bit scattered) the application is fully functional and was successfully tested with multiple users locally.
        
        It was a crash course in rapid development, international collaboration, and learning on the fly.`
    },
    {
        id: "galeria-piovani",
        title: "E-commerce Gallery",
        description: "A custom WordPress-based digital gallery and e-commerce platform built for painter Carlos Piovani, featuring a curated showcase of his artwork, optional shop functionality, and an integrated blog.",
        tags: ["wordpress", "ecommerce"],
        links: [
            { type: "demo", url: "https://www.carlospiovani.com" },
        ],
        image: {
            src: "/piovani.jpg",
            description: "Digital gallery homepage showcasing Carlos Piovani's artwork",
            alt: "Art gallery website with painting showcase and blog"
        },
        problem: "Carlos Piovani, a painter who considers himself a 'laborer of art,' needed a space to showcase his work professionally with the flexibility to potentially sell pieces online in the future. He also wanted the ability to maintain a personal blog to share his artistic process and thoughts. The challenge was delivering a polished, functional platform within a limited budget while keeping it simple enough for him to manage independently.",
        solution: "I evaluated building a custom full-stack application but determined that, given the budget constraints and straightforward requirements, starting from an established platform made more sense. I learned WordPress specifically for this project and built the site using WooCommerce as a base, heavily customizing a template to match his artistic identity and needs. The result is a clean digital gallery where he can upload new paintings, write blog posts, and manage everything himself. The e-commerce features are currently disabled but can be activated whenever he's ready, and the site includes a review system for visitor feedback. My goal here was to translate his vision into a practical, maintainable solution."
    },
    {
        id: "splitout",
        title: "Splitout",
        description: "A 2D multiplayer platformer shooter built in Unity with local PvP for up to 4 players, featuring custom movement, combat mechanics, and handcrafted arena levels.",
        tags: ["C#", "Unity", "Teamwork"],
        links: [
            { type: "demo", url: "https://www.youtube.com/watch?v=xWIx4LyOXPg" },
        ],
        image: {
            src: "/splitout.jpg",
            description: "Splitout Game Logo",
            alt: "Logo for the videogame Splitout"
        },
        problem: "Starting from a university assignment with zero experience in C# or game development, the goal was to build a fully functional and polished multiplayer game from scratch, one that real people could pick up and enjoy, while learning the tools and coordinating as a team.",
        solution: "We created Splitout, a local PvP platformer for up to 4 players. I took on a core developer role, implementing player controls, combat mechanics, health and damage systems, and overall game flow in C#. We ran continuous playtesting cycles throughout development, using direct player feedback to refine mechanics and level design with each iteration. The project ended up going well beyond the classroom: we showcased it at LevelUY and multiple national gaming events, putting it in front of a real audience."
    }
]; 