const CustomLink = ({icon = null, text = "", href}) => {
    return (
        <a 
            href={href} 
            className="flex flex-row items-center gap-2 font-medium text-blue-300 hover:underline" 
            target="_blank" rel="noopener noreferrer"
        >
            {icon}
            {text}
        </a>
    );
}

export default CustomLink;