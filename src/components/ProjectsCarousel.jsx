import ProjectCard from "@/components/ProjectCard.jsx";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

const ProjectsCarousel = ({projects}) => {
    return (
        <Carousel>
            <CarouselContent>
                {projects.map((project) => (
                    <CarouselItem className="sm:basis-1 md:basis-1/2" key={project.title}>
                        <ProjectCard title={project.title} description={project.description} tags={project.tags}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
};

export default ProjectsCarousel;