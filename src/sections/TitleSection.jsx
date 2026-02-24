const TitleSection = ({title, description}) => {
    return (
        <section className="title-section">
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
}

export default TitleSection;