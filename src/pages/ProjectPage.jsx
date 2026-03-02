import { useParams } from "react-router";

const ProjectPage = () => {
    let params = useParams();

    return (
        <h1>{params.id}</h1>

    );
}

export default ProjectPage;