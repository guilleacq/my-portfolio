import TitledSection from "../components/TitledSection";

const text = `Hi! Thank you for stopping by my little website, I'm Guillermo. 
I have been into computers ever since I was a little kid`

const AboutSection = () => {
    return (
        <section className="flex mt-8">
            <TitledSection title={"about_me"}>
                <p className="text-stone-300">{text}</p>
            </TitledSection>
        </section>
    );
}

export default AboutSection;