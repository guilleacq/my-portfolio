import TitledSection from "../components/TitledSection";

const text = `Hi! Thank you for stopping by my little website, I'm Guillermo. 
I have been into computers ever since I was a little kid`

const AboutSection = () => {
    return (
        <section>
            <TitledSection title={"about"}>
                <p className="text-foreground">{text}</p>
            </TitledSection>
        </section>
    );
}

export default AboutSection;