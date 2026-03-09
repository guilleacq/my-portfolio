import ProjectTags from "@/components/ProjectTags";
import ProjectLinks from "@/components/ProjectLinks";

const ProjectDataSection = ({ links = null, tags = null}) => {
    return (
        <div className="flex flex-col gap-6 md:flex-row md:gap-2">
            {links && <ProjectLinks links={links} />}

            {links && tags && <div className="hidden border-l h-6 mx-4 md:block"></div>}

            {tags && (
                <ProjectTags
                    tags={tags}
                    className="text-primary text-sm px-3 py-1"
                />
            )}
        </div>
    );
}

export default ProjectDataSection;