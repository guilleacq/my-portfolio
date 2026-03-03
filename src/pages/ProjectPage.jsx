import { Navigate, useParams } from "react-router";
import { projects } from "@/data/projects";
import HeroSection from "@/sections/HeroSection";
import ProjectTags from "@/components/ProjectTags";
import ProjectLinks from "@/components/ProjectLinks";
import GoHomeArrow from "@/components/GoHomeArrow";

const ProjectPage = () => {
    let params = useParams();
    const project = projects.find(p => p.id === params.id);

    if (project == null) {
        return (<Navigate to="/"/>);
    }

    return (
        <>
            <GoHomeArrow/>

            <HeroSection
                title={project.title}
                description={project.description}
            />
                
            <div className="flex flex-col gap-6 md:flex-row md:gap-2">
                <ProjectLinks links={project.links}/>

                {project.links && <div className="hidden border-l h-6 mx-4 md:block"></div>}
                
                <div className="flex flex-row gap-2">
                    <ProjectTags tags={project.tags} className="text-primary text-xs px-3 py-1"/>
                </div>
                
            </div>
        </>
    );
}

export default ProjectPage;