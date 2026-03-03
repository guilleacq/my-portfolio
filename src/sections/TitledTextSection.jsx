import TitledSection from "@/components/TitledSection";

const TitledTextSection = ({title = "", text = null}) => {
    if (text == null) {
        return null;
    }


    return (
        <TitledSection title={title}>
            <p className="text-foreground">{text}</p>
        </TitledSection>
    );
}

export default TitledTextSection;