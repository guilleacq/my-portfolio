const HeroSection = ({title, description}) => {
    return (
        <section className="flex flex-col gap-4">
            <h1>{title}</h1>
            <p className="text-stone-400">{description}</p>
        </section>
    );
}

export default HeroSection;