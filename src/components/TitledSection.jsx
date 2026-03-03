const TitledSection = ({title, children, noPadding = false}) => {
    return (
        <div>
            <div className="text-xs text-muted-foreground flex items-center gap-2 font-inter">
                <span className="text-accent">{'>'}</span>
                {title}
            </div>
            <div className={`mt-4 ${noPadding ? '' : 'pl-4'}`}>
                {children}
            </div>
        </div>
    )
};

export default TitledSection;