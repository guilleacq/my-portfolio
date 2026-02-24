const TitleSection = ({title, description}) => {
    return (
        <div className="title-section">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default TitleSection;