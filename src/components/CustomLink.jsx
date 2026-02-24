const CustomLink = ({icon = null, text = null, href}) => {
    return (
        <a href={href}>
            {icon}
            {text}
        </a>
    );
}

export default CustomLink;