import Accordeon from "../components/Accordeon.jsx"

const text = `Hi! Thank you for stopping by my little website, I'm Guillermo. 
I have been into computers ever since I was a little kid`

const AboutSection = () => {
    return (
        <section className="flex mt-8">
            <Accordeon title={"about_me"}>
                <p>{text}</p>
            </Accordeon>
        </section>
    );
}

export default AboutSection;