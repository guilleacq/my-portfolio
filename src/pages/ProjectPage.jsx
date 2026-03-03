import { Navigate, useParams } from "react-router";
import { projects } from "@/data/projects";
import HeroSection from "@/sections/HeroSection";
import GoHomeArrow from "@/components/GoHomeArrow";
import ProjectImage from "@/components/ProjectImage";
import ProjectDataSection from "@/sections/ProjectDataSection";
import Separator from "@/components/Separator";
import TitledTextSection from "@/sections/TitledTextSection";

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

            <div className="flex flex-col gap-12">
                <ProjectDataSection links={project.links} tags={project.tags}/>
                <ProjectImage image={project.image}/>

                <Separator/>

                <TitledTextSection title={"problem"} text={project.problem}/>
                <TitledTextSection title={"solution"} text={project.solution}/>


            </div>

        </>
    );
}

export default ProjectPage;