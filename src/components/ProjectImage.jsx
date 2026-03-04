const ProjectImage = ({ image }) => {

    if (!image) {
        return null;
    }
    
    return (
        <figure className="project-image flex flex-col gap-4 items-center max-w-2xl max-h-96 mx-auto">
            <img src={image.src} alt={image.alt} className="border-2 rounded-lg shadow-md overflow-hidden w-full object-cover"/>
            <figcaption className="text-xs text-muted-foreground font-inter">{image.description}</figcaption>
        </figure>
    );
}

export default ProjectImage;