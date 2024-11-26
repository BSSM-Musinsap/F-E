import MUSINSAP from '../../assets/MUSINSAP.svg'
import Cart from '../../assets/shopping_cart.svg'
import {useEffect, useState} from "react"

import './header.css'
import {S3Server} from "../../Route.jsx"

const Header = (props) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (!props.myPage) {
            setUserData({
                user_id: "aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3VzZXIvcHJvZmlsZTEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QU1KNkQ2NUhEQVQzRVpDOVExTU8lMkYyMDI0MTEyMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMjNUMTU1MzA4WiZYLUFtei1FeHBpcmVzPTQzMjAwJlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lKQlRVbzJSRFkxU0VSQlZETkZXa001VVRGTlR5SXNJbVY0Y0NJNk1UY3pNalF3T1RFME55d2ljR0Z5Wlc1MElqb2liWGwxYzJWeUluMC4wTjZfZ2hBQXNzcXVEaFFWM3BINkhFblgtTDNxX0h0RjRIaTlHWjNuRU1tcUZ2RXpON09NNFMwQkh6WUtpWGhzVzkyRnJaMHhPMlJPZjJJSG9ma2RFUSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmdmVyc2lvbklkPW51bGwmWC1BbXotU2lnbmF0dXJlPWNlNWJlMTc5M2ZhN2MyYjJiMTNiMDU4YmVmNjZhYjA2YzhiNjYyN2ZmNTM4NzkwZmUwMTU5OTIzZDM0ZWVmYzU",
                user_name: "카리나",
            })
        } else {
            setUserData({
                user_id: "aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3VzZXIvcHJvZmlsZTEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QU1KNkQ2NUhEQVQzRVpDOVExTU8lMkYyMDI0MTEyMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMjNUMTU1MzA4WiZYLUFtei1FeHBpcmVzPTQzMjAwJlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lKQlRVbzJSRFkxU0VSQlZETkZXa001VVRGTlR5SXNJbVY0Y0NJNk1UY3pNalF3T1RFME55d2ljR0Z5Wlc1MElqb2liWGwxYzJWeUluMC4wTjZfZ2hBQXNzcXVEaFFWM3BINkhFblgtTDNxX0h0RjRIaTlHWjNuRU1tcUZ2RXpON09NNFMwQkh6WUtpWGhzVzkyRnJaMHhPMlJPZjJJSG9ma2RFUSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmdmVyc2lvbklkPW51bGwmWC1BbXotU2lnbmF0dXJlPWNlNWJlMTc5M2ZhN2MyYjJiMTNiMDU4YmVmNjZhYjA2YzhiNjYyN2ZmNTM4NzkwZmUwMTU5OTIzZDM0ZWVmYzU",
                user_name: "카리나",
                user_level: 8
            })
        }

    }, [])

    const mainHeader = (
        userData !== null ?
            <div className="profile">
                <img src={Cart} alt="장바구니 아이콘"/>
                {userData.user_id && (
                    <img
                        src={`${S3Server}${userData.user_id}`}
                        className="image"
                        alt="사용자 프로필 이미지"
                    />
                )}
                <p>{userData.user_name}</p>
            </div>
            : <div className="login"><p>로그인 / 회원가입</p></div>
    )

    return (
        <header id="header">
            <div className="userData">
                <img src={MUSINSAP} className="logo" alt="뮤신사 로고"/>
                {mainHeader}
            </div>
            {
                props.myPage !== true ? (
                    <nav className="nav">
                        <ul>
                            {["잡화대전", "추천", "랭킹", "하루 세일", "스타일", "이벤트"].map((item, index) => (
                                <li key={index}><p>{item}</p></li>
                            ))}
                        </ul>
                    </nav>
                ) : null
            }
        </header>
    )
}

export default Header