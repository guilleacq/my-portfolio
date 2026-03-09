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
        <Carousel className={"pr-2"}>
            <CarouselPrevious className={"hidden md:inline-flex"}/>
            <CarouselContent>
                {projects.map((project) => (
                    <CarouselItem className="basis-[85%] sm:basis-1/2 md:basis-1/2 my-2" key={project.title}>
                        <ProjectCard project={project}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className={"hidden md:inline-flex"}/>
        </Carousel>
    )
};

export default ProjectsCarousel;