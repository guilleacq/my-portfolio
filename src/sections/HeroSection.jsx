const HeroSection = ({title, description}) => {
    return (
        <section className="flex flex-col gap-4 break-words">
            <h1 className="text-foreground">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
        </section>
    );
}

export default HeroSection;