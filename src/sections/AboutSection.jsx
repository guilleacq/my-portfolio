import TitledTextSection from "./TitledTextSection";

const text = `I'm Guillermo, a software engineer who cares more about solving the problem than about the tool on the shelf. If I know it, I use it. If I don't, I learn it. What matters is getting it right.

I enjoy building software that makes sense, from understanding the problem to shipping something that works well. I'm always learning, always curious, and always looking for the next challenge.

Fluent in English, Italian, and Spanish (and Portuguese coming soon!).`

const AboutSection = () => {
    return (
        <section>
            <TitledTextSection title={"about"} text={text}/>
        </section>
    );
}

export default AboutSection;