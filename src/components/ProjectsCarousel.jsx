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
            <CarouselPrevious className={"hidden sm:block"}/>
            <CarouselContent>
                {projects.map((project) => (
                    <CarouselItem className="basis-[85%] sm:basis-1/2 my-2" key={project.title}>
                        <ProjectCard project={project}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className={"hidden sm:block"}/>
        </Carousel>
    )
};

export default ProjectsCarousel;