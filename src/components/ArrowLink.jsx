import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ArrowLink = ({ to, text = "", direction = "right", muted = false, className = ""}) => {

    if (!to)
        return null;

    return (
        <>
            <Link to={to} className={`${className} flex flex-row items-center gap-2 w-fit py-2 hover:underline 
                ${muted ? 'text-muted-foreground decoration-muted-foreground' : 'text-accent decoration-accent'}
                ${direction === "left" ? 'pr-4' : 'pl-4'}  
                `} 
                aria-label={`Link that takes you to ${text}`}>

                {direction === "left" && <FaArrowLeft className="text-sm"/>}
                <span className="text-base leading-none">{text}</span>
                {direction !== "left" && <FaArrowRight className="text-sm"/>}
            </Link>
        </>

    );
}

export default ArrowLink;