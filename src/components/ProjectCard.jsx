import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import CustomLink from "./CustomLink";
import { Badge } from "./ui/badge";


const ProjectCard = ({ title = "", description = "", tags = []}) => {
    return (
        <Card className={"relative w-full max-w-sm h-50 flex flex-col justify-between"}>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>{title}</CardTitle>
                    <span className="text-accent">→</span>
                </div>
                <CardDescription className="mt-2 line-clamp-3">{description}</CardDescription>
            </CardHeader>

            <div className="flex gap-2 px-6 pb-6">
                {tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline">{tag}</Badge>
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