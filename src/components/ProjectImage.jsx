import { useState } from "react";

const ProjectImage = ({ image }) => {
    const [loaded, setLoaded] = useState(false);

    if (!image) {
        return null;
    }

    return (
        <figure className="project-image flex flex-col gap-4 items-center max-w-2xl max-h-96 mx-auto">
            {!loaded && (
                <div className="w-full h-64 bg-muted rounded-lg animate-pulse" />
            )}
            <img
                src={image.src}
                alt={image.alt}
                className={`border-2 rounded-lg shadow-md overflow-hidden w-full object-cover ${loaded ? "" : "hidden"}`}
                onLoad={() => setLoaded(true)}
            />
            {loaded && (
                <figcaption className="text-sm text-muted-foreground font-inter">
                    {image.description}
                </figcaption>
            )}
        </figure>
    );
}

export default ProjectImage;