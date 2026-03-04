import LabeledContent from "@/components/LabeledContent";

const TitledTextSection = ({title, text}) => {
    if (!title || !text) {
        return null;
    }


    return (
        <LabeledContent title={title}>
            <p className="text-foreground whitespace-pre-line">{text}</p>
        </LabeledContent>
    );
}

export default TitledTextSection;