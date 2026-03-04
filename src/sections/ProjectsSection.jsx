import LabeledContent from "../components/LabeledContent.jsx";
import ProjectsCarousel from "@/components/ProjectsCarousel.jsx";
import { projects } from "@/data/projects.js";


const ProjectsSection = () => {
    return (
        <section>
            <LabeledContent title={"projects"} noPadding={true}>
                <ProjectsCarousel projects={projects}/>
            </LabeledContent>
        </section>
    );
}

export default ProjectsSection;