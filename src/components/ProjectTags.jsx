import { Badge } from "./ui/badge";

const ProjectTags = ({tags = [], variant = "outline", className = "text-foreground", limit = null}) => {

    const finalTags = (limit == null ? tags : tags.slice(0, limit)); 

    return (
        <div className="flex flex-row gap-2">
            {finalTags.map((tag, index) => (
                <Badge 
                    key={index} 
                    variant={variant} 
                    className={className}>
                    {tag}
                </Badge>
            ))}
        </div>
    );
}

export default ProjectTags;