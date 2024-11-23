import leftArrowButton from '../.././assets/leftArrowButton.svg'
import rightArrowButton from '../.././assets/rightArrowButton.svg'

import './sliders.css'
import {useEffect, useRef, useState} from "react";
import {S3Server} from "../../Route.jsx";

const Sliders = () => {

    // const move_count = useRef(1);
    const [move_count, setMove_count] = useState(1)
        
    let banner_style = {
        transform: "translateX(calc(calc(-50% + 1908px) - " + 1272 * move_count + "px))"
    }

    let banner =
        <ul className={"banners"} style={banner_style}>
            <li>
                <div><img src={`${S3Server}aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3NsaWRlcnMvMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BTUo2RDY1SERBVDNFWkM5UTFNTyUyRjIwMjQxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyM1QxNDU3MTVaJlgtQW16LUV4cGlyZXM9NDMyMDAmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpCVFVvMlJEWTFTRVJCVkRORldrTTVVVEZOVHlJc0ltVjRjQ0k2TVRjek1qUXdPVEUwTnl3aWNHRnlaVzUwSWpvaWJYbDFjMlZ5SW4wLjBONl9naEFBc3NxdURoUVYzcEg2SEVuWC1MM3FfSHRGNEhpOUdaM25FTW1xRnZFek43T000UzBCSHpZS2lYaHNXOTJGcloweE8yUk9mMklIb2ZrZEVRJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9NjgyZjQ1MDJhYWU1ODlhMWRiNGE1MzE0ZDAyNTk0MmYzNmQyMzdlYTA4MjAzNzk2NDQ3YjFiYjJkZTA2OTIwMw`} alt="banner1"/></div>
            </li>
            <li>
                <div><img src={`${S3Server}aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3NsaWRlcnMvMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BTUo2RDY1SERBVDNFWkM5UTFNTyUyRjIwMjQxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyM1QxNDU3MjlaJlgtQW16LUV4cGlyZXM9NDMxOTkmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpCVFVvMlJEWTFTRVJCVkRORldrTTVVVEZOVHlJc0ltVjRjQ0k2TVRjek1qUXdPVEUwTnl3aWNHRnlaVzUwSWpvaWJYbDFjMlZ5SW4wLjBONl9naEFBc3NxdURoUVYzcEg2SEVuWC1MM3FfSHRGNEhpOUdaM25FTW1xRnZFek43T000UzBCSHpZS2lYaHNXOTJGcloweE8yUk9mMklIb2ZrZEVRJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9NWUzNTExNzQ4NWIyOTVlOTE5MGNlZGY4OTA0OWVkNTQ0Mzg5MGNkODI4YWVkMjVmNDE1YjFkZjdlZTBlYmM0MQ`} alt="banner2"/></div>
            </li>
            <li>
                <div><img src={`${S3Server}aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3NsaWRlcnMvMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BTUo2RDY1SERBVDNFWkM5UTFNTyUyRjIwMjQxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyM1QxNDU3MzdaJlgtQW16LUV4cGlyZXM9NDMyMDAmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpCVFVvMlJEWTFTRVJCVkRORldrTTVVVEZOVHlJc0ltVjRjQ0k2TVRjek1qUXdPVEUwTnl3aWNHRnlaVzUwSWpvaWJYbDFjMlZ5SW4wLjBONl9naEFBc3NxdURoUVYzcEg2SEVuWC1MM3FfSHRGNEhpOUdaM25FTW1xRnZFek43T000UzBCSHpZS2lYaHNXOTJGcloweE8yUk9mMklIb2ZrZEVRJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9NWRhYjE1MzhhMTIyMzllNWU1MDY3Mzk3NDczZmIyODFmYzJiOGIwOWFmYWY1NWQzOTg5NDIwMmZmZWQzMDhlZg`} alt="banner3"/></div>
            </li>
            <li>
                <div><img src={`${S3Server}aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3NsaWRlcnMvMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BTUo2RDY1SERBVDNFWkM5UTFNTyUyRjIwMjQxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyM1QxNDU3NDdaJlgtQW16LUV4cGlyZXM9NDMxOTkmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpCVFVvMlJEWTFTRVJCVkRORldrTTVVVEZOVHlJc0ltVjRjQ0k2TVRjek1qUXdPVEUwTnl3aWNHRnlaVzUwSWpvaWJYbDFjMlZ5SW4wLjBONl9naEFBc3NxdURoUVYzcEg2SEVuWC1MM3FfSHRGNEhpOUdaM25FTW1xRnZFek43T000UzBCSHpZS2lYaHNXOTJGcloweE8yUk9mMklIb2ZrZEVRJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9MjEwMDYxNzE5MTBlYTZjMTU3NzRlM2M5MDJhM2M0NDQwODBmOGYxNWY3ZmNkN2EwNzU3MTAwM2VlY2E3ZTAyNg`} alt="banner4"/></div>
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