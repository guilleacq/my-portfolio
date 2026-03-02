import { Navigate, useParams } from "react-router";
import { projects } from "@/data/projects";
import HeroSection from "@/sections/HeroSection";
import ProjectLinksSection from "@/sections/ProjectLinksSection";

const ProjectPage = () => {
    let params = useParams();
    const project = projects.find(p => p.id === params.id);

    if (project == null) {
        return (<Navigate to="/"/>);
    }

    return (
        <>
            <HeroSection
                title={project.title}
                description={project.description}
            />

            <ProjectLinksSection links={project.links}/>
        </>
    );
}

export default ProjectPage;