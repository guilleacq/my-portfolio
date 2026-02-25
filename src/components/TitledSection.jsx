const TitledSection = ({title, children}) => {
    return (
        <div>
            <div className="text-xs text-stone-400 flex items-center gap-2 font-inter">
                <span className="text-blue-400">{'>'}</span>
                {title}
            </div>
            <div className="mt-4 pl-4">
                {children}
            </div>
        </div>
    )
};

export default TitledSection;