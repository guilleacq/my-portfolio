import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const NextProjectArrow = ({to = null, muted = false}) => {

    if (to == null)
        return;

    return (
        <>
            <Link to={to} className={`flex flex-row items-center gap-2 w-fit pl-4 py-2 hover:underline 
                ${muted ? 'text-muted-foreground decoration-muted-foreground' : 'text-accent decoration-accent'}`} 
                aria-label={`See next project`}>                
                <span className="text-sm leading-none">next project</span>
                <FaArrowRight className="text-xs"/>
            </Link>
        </>
    );
}

export default NextProjectArrow;