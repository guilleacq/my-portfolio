 

const ProjectCard = ({ title, description }) => {
    return (
        <div className="project-card bg-red-500">
            <h3 className="text-2xl font-bold text-stone-200">{title}</h3>
            <p className="text-stone-300 mt-2">{description}</p>
        </div>
    )
};

export default ProjectCard;