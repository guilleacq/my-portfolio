import { Navigate, useParams } from "react-router";
import { projects } from "@/data/projects";

const ProjectPage = () => {
    let params = useParams();
    const project = projects.find(p => p.id === params.id);

    if (project == null) {
        return (<Navigate to="/"/>);
    }

    return (
        <>
            <h1>{project.id}</h1>
            <p>{project.title}</p>
            <p>{project.description}</p>
        </>
    );
}

export default ProjectPage;