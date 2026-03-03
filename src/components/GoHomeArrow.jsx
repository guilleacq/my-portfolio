import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const GoHomeArrow = () => {
    return (
        <>
            <Link to="/" className="flex flex-row items-center gap-2 w-fit pr-4 py-2 decoration-accent hover:underline" aria-label={`Go home`}>
                <FaArrowLeft className="text-accent text-xs"/>
                <span className="text-sm text-accent leading-none">back</span>
            </Link>
        </>
    );
}

export default GoHomeArrow;