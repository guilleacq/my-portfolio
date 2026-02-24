const ToggleableSection = ({title, children}) => {
    return (
        <div className="toggleable-section">
            <details>
                <summary>{title}</summary>
                <div>{children}</div>
        </details>
        </div>
    );
}

export default ToggleableSection;