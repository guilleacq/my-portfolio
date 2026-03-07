const Accordeon = ({title, children}) => {
    return (
        <details className="group">
            <summary className="cursor-pointer font-semibold hover:text-white transition-colors list-none flex items-center gap-2">
                <span className="text-sm transition-transform group-open:rotate-90">▶</span>
                {title}
            </summary>
            <div className="mt-2 pl-4 text-gray-300 border-l border-gray-700">
                {children}
            </div>
        </details>
    );
}

export default Accordeon;