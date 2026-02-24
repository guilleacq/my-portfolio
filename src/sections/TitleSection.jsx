const TitleSection = ({title, description}) => {
    return (
        <section className="flex flex-col gap-4">
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
}

export default TitleSection;