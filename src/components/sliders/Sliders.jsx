import leftArrowButton from '../.././assets/leftArrowButton.svg'
import rightArrowButton from '../.././assets/rightArrowButton.svg'

import './sliders.css'
import {useEffect, useRef, useState} from "react";

const Sliders = () => {

    // const move_count = useRef(1);
    const [move_count, setMove_count] = useState(1)
        
    let banner_style = {
        transform: "translateX(calc(calc(-50% + 1908px) - " + 1272 * move_count + "px))"
    }

    let banner =
        <ul className={"banners"} style={banner_style}>
            <li>
                <div></div>
            </li>
            <li>
                <div></div>
            </li>
            <li>
                <div></div>
            </li>
            <li>
                <div></div>
            </li>
        </ul>
    const move_left = () => {
        setMove_count(prev => (prev + 1) % 4)
    }
    const move_right = () => {
        setMove_count(prev => prev !== 0 ? (prev - 1) % 4 : 3)
    }

    return (
        <>
            <section id={"slider"}>
                {banner}
                <ul className={"buttons"}>
                    <li onClick={move_right}><img src={leftArrowButton} alt="left arrow button of banner"/></li>
                    <li onClick={move_left}><img src={rightArrowButton} alt="right arrow button of banner"/></li>
                </ul>
            </section>
        </>
    )
}

export default Sliders;