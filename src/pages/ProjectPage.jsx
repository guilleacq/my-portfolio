import { Navigate, useParams } from "react-router";
import { projects } from "@/data/projects";
import HeroSection from "@/sections/HeroSection";
import ProjectImage from "@/components/ProjectImage";
import ProjectDataSection from "@/sections/ProjectDataSection";
import Separator from "@/components/Separator";
import TitledTextSection from "@/sections/TitledTextSection";
import ArrowLink from "@/components/ArrowLink";

const ProjectPage = () => {
    let params = useParams();

    const projectIndex = projects.findIndex(p => p.id === params.id);
    const project = projects[projectIndex];

    if (projectIndex === -1) {
        return (<Navigate to="/" />);
    }

    return (
        <>
            <ArrowLink to={"/"} direction="left" text="back"/>

            <HeroSection
                title={project.title}
                description={project.description}
            />

            <div className="flex flex-col gap-12">
                <ProjectDataSection links={project.links} tags={project.tags} />
                <ProjectImage image={project.image} />

                {project.image && project.problem && <Separator />}

                <TitledTextSection title={"problem"} text={project.problem} />
                <TitledTextSection title={"solution"} text={project.solution} />

                <Separator />


            </div>

            <div className="flex flex-row justify-end">
                {projectIndex - 1 >= 0 &&
                    <ArrowLink to={`/project/${projects[projectIndex - 1].id}`} direction="left" text="previous" muted={true} className="mr-auto"/>
                }

                {projectIndex < projects.length - 1 &&
                    <ArrowLink to={`/project/${projects[projectIndex + 1].id}`} text="next" />
                }
            </div>

        </>
    );
}

export default ProjectPage;