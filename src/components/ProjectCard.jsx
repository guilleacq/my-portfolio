import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Badge } from "./ui/badge";
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
                {project.tags.slice(0, tagLimit).map((tag, index) => (
                    <Badge key={index} variant="outline" className={"text-accent"}>{tag}</Badge>
                ))}
            </div>

            <Link
                to={"/project/" + project.id} 
                className="absolute inset-0 rounded-xl" 
                rel="noopener noreferrer"
                aria-label={`View project: ${project.id}`}
            />

        </Card>
    )
};

export default ProjectCard;