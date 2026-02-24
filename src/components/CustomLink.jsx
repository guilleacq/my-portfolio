const CustomLink = ({icon = null, text, href}) => {
    return (
        <a href={href}>
            {icon}
            {text}
        </a>
    );
}

export default CustomLink;