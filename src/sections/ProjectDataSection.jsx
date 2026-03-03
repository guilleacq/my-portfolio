import ProjectTags from "@/components/ProjectTags";
import ProjectLinks from "@/components/ProjectLinks";

const ProjectDataSection = ({ links, tags }) => {
    return (
        <div className="flex flex-col gap-6 md:flex-row md:gap-2">
            <ProjectLinks links={links} />

            {links && <div className="hidden border-l h-6 mx-4 md:block"></div>}

            <div className="flex flex-row gap-2">
                <ProjectTags tags={tags} className="text-primary text-xs px-3 py-1" />
            </div>
        </div>
    );
}

export default ProjectDataSection;