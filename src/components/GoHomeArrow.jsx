import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const GoHomeArrow = () => {
    return (
        <>
            <Link to="/" className="flex flex-row items-center gap-2 w-fit p-2" aria-label={`Go home`}>
                <FaArrowLeft className="text-accent text-xs"/>
                <p className="text-xs text-accent">back</p>
            </Link>
        </>
    );
}

export default GoHomeArrow;