import { Badge } from "./ui/badge";

const ProjectTags = ({ tags = [], variant = "outline", className = "text-foreground", limit = null }) => {
    const finalTags = (limit == null ? tags : tags.slice(0, limit)); 

    return (
        <div className="w-full max-w-full overflow-x-auto overflow-y-hidden scrollbar-none">
            <div className="flex flex-row gap-2 lowercase w-max">
                {finalTags.map((tag, index) => (
                    <Badge 
                        key={index} 
                        variant={variant} 
                        className={className}>
                        {tag}
                    </Badge>
                ))}
            </div>
        </div>
    );
}

export default ProjectTags;