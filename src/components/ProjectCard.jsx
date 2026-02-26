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

const tagLimit = 4; 


const ProjectCard = ({ title = "", description = "", tags = []}) => {
    return (
        <Card className={"relative w-full max-w-sm h-50 flex flex-col justify-between transition-all duration-200 hover:bg-muted"}>
            <CardHeader>
                <div className="flex justify-between items-center mt-2">
                    <CardTitle>{title}</CardTitle>
                    {/* <span className="text-accent">→</span> */}
                </div>
                <CardDescription className="mt-2 line-clamp-3">{description}</CardDescription>
            </CardHeader>

            <div className="flex gap-2 mx-6 mt-auto">
                {tags.slice(0, tagLimit).map((tag, index) => (
                    <Badge key={index} variant="outline" className={"text-accent"}>{tag}</Badge>
                ))}
            </div>

            <a 
            href={"/projects"} 
            className="absolute inset-0 rounded-xl" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`View project: ${title}`}
            />

        </Card>
    )
};

export default ProjectCard;