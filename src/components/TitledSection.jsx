const TitledSection = ({title, children}) => {
    return (
        <div>
            <div className="text-xs text-muted-foreground flex items-center gap-2 font-inter">
                <span className="text-accent">{'>'}</span>
                {title}
            </div>
            <div className="mt-4 pl-4">
                {children}
            </div>
        </div>
    )
};

export default TitledSection;