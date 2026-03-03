import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const GoHomeArrow = ({muted = false}) => {
    return (
        <>
            <Link to="/" className={`flex flex-row items-center gap-2 w-fit pr-4 py-2 hover:underline 
                ${muted ? 'text-muted-foreground decoration-muted-foreground' : 'text-accent decoration-accent'}`} 
                aria-label={`Go home`}>
                <FaArrowLeft className="text-xs"/>
                <span className="text-sm leading-none">back</span>
            </Link>
        </>
    );
}

export default GoHomeArrow;