import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import ProjectTags from "./ProjectTags"; 
import { Link } from "react-router";

const tagLimit = 4; 


const ProjectCard = ({project}) => {
    return (
        <Card className={"relative w-full max-w-sm h-50 flex flex-col justify-between transition-all duration-200 hover:bg-muted"}>
            <CardHeader>
                <div className="flex justify-between items-center mt-2">
                    <CardTitle>{project.title}</CardTitle>
                    {/* <span className="text-accent">→</span> */}
                </div>
                <CardDescription className="mt-2 line-clamp-3">{project.description}</CardDescription>
            </CardHeader>

            <div className="flex gap-2 mx-6 mt-auto">
                <ProjectTags tags={project.tags} limit={3}/>
            </div>

            <Link
                to={"/project/" + project.id} 
                className="absolute inset-0 rounded-xl" 
                aria-label={`View project: ${project.id}`}
            />
        </Card>
    )
};

export default ProjectCard;