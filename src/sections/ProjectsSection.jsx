import TitledSection from "../components/TitledSection.jsx";
import ProjectsCarousel from "@/components/ProjectsCarousel.jsx";
import { projects } from "@/data/projects.js";


const ProjectsSection = () => {
    return (
        <section>
            <TitledSection title={"projects"} noPadding={true}>
                <ProjectsCarousel projects={projects}/>
            </TitledSection>
        </section>
    );
}

export default ProjectsSection;