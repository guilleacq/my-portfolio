import TitledSection from "../components/TitledSection.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

// I will load these from outside later
const projects = [
{ title: "Project One", description: "A cool thing I built" },
{ title: "Project Two", description: "Another cool thing" },
{ title: "Project Three", description: "Yet another one" },
];


const ProjectsSection = () => {
    return (
        <section>
            <TitledSection title={"my_projects"}>
                <Carousel>
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem key={project.title}>
                                <ProjectCard title={project.title} description={project.description}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </TitledSection>
        </section>
    );
}

export default ProjectsSection;