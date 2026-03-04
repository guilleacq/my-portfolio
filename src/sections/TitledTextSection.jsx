import TitledSection from "@/components/TitledSection";

const TitledTextSection = ({title, text}) => {
    if (!title || !text) {
        return null;
    }


    return (
        <TitledSection title={title}>
            <p className="text-foreground">{text}</p>
        </TitledSection>
    );
}

export default TitledTextSection;