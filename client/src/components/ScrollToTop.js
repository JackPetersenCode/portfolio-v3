import React, {useState, useEffect} from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 50) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <div>
            {showButton && <FaAngleDoubleUp className="top-btn-position" onClick={scrollTop} /> ? <FaAngleDoubleUp className="top-btn-position" onClick={scrollTop} /> : ''}
        </div>
    )
}

export default ScrollToTop;