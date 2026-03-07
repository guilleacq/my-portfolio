const CustomLink = ({icon = null, text = "", href}) => {
    return (
        <a 
            href={href} 
            className="flex flex-row items-center gap-2 font-normal text-accent hover:underline text-base" 
            target="_blank" rel="noopener noreferrer"
        >
            {icon}
            {text}
        </a>
    );
}

export default CustomLink;