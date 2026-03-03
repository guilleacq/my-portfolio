import CustomLink from "@/components/CustomLink";
import { FaGithub, FaPlayCircle, FaExternalLinkAlt } from "react-icons/fa";

const linkIcons = {
    github: <FaGithub/>,
    demo: <FaPlayCircle/>,
    default: <FaExternalLinkAlt/>
}

const ProjectLinks = ({links}) => {
    if (links == null)
        return;

    return (
        <div className="flex flex-row items-center gap-4">
            {links.map((link) => (
                <CustomLink 
                    key={link.type}    
                    text={link.type} 
                    icon={linkIcons[link.type] ?? linkIcons["default"]} 
                    href={link.url}
                />
            ))}
        </div>
    );
}

export default ProjectLinks;