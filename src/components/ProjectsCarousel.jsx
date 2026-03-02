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
            <CarouselPrevious/>
            <CarouselContent>
                {projects.map((project) => (
                    <CarouselItem className="sm:basis-full md:basis-1/2 my-2" key={project.title}>
                        <ProjectCard title={project.title} description={project.description} tags={project.tags}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext/>
        </Carousel>
    )
};

export default ProjectsCarousel;