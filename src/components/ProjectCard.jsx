const ProjectCard = ({ project = null }) => {
    return (
        <div className="project-card">
            <h3 className="text-2xl font-bold text-stone-200">Test</h3>
            <p className="text-stone-300 mt-2">Este es un test lol</p>
            <div className="flex mt-4 gap-4">
                {project.links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    )
};

export default ProjectCard;