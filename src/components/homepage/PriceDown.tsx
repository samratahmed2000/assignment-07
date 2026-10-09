import { FaCaretDown } from "react-icons/fa";


const PriceDown = () => {
    return (
        <div className="flex items-center gap-1">
            <span className="text-green-700">
                <FaCaretDown />
            </span>
            আজ দাম কমেছে
        </div>
    );
};

export default PriceDown;