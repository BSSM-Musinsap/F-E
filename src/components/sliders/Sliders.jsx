import leftArrowButton from '../.././assets/leftArrowButton.svg'
import rightArrowButton from '../.././assets/rightArrowButton.svg'

import './sliders.css'

const Sliders = () => {
    return (
        <>
            <section id={"slider"}>
                <ul className={"banners"}>
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
                <ul className={"buttons"}>
                    <li><img src={leftArrowButton} alt="left arrow button of banner"/></li>
                    <li><img src={rightArrowButton} alt="right arrow button of banner"/></li>
                </ul>
            </section>
        </>
    )
}

export default Sliders;