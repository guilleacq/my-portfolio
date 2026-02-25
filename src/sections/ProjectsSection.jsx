import TitledSection from "../components/TitledSection.jsx";
import ProjectsCarousel from "@/components/ProjectsCarousel.jsx";
import { projects } from "@/data/projects.js";


const ProjectsSection = () => {
    return (
        <section>
            <TitledSection title={"my_projects"}>
                <ProjectsCarousel projects={projects}/>
            </TitledSection>
        </section>
    );
}

export default ProjectsSection;