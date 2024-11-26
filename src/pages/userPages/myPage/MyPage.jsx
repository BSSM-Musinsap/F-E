import './myPage.css'
import {useEffect, useState} from "react";
import Header from "../../../components/header/Header.jsx";
import {S3Server} from "../../../Route.jsx";

const MyPage = () => {
    const [user_data, setUser_data] = useState(null)

    useEffect(() => {
        setUser_data({
            user_id: "aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3VzZXIvcHJvZmlsZTEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QU1KNkQ2NUhEQVQzRVpDOVExTU8lMkYyMDI0MTEyMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMjNUMTU1MzA4WiZYLUFtei1FeHBpcmVzPTQzMjAwJlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lKQlRVbzJSRFkxU0VSQlZETkZXa001VVRGTlR5SXNJbVY0Y0NJNk1UY3pNalF3T1RFME55d2ljR0Z5Wlc1MElqb2liWGwxYzJWeUluMC4wTjZfZ2hBQXNzcXVEaFFWM3BINkhFblgtTDNxX0h0RjRIaTlHWjNuRU1tcUZ2RXpON09NNFMwQkh6WUtpWGhzVzkyRnJaMHhPMlJPZjJJSG9ma2RFUSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmdmVyc2lvbklkPW51bGwmWC1BbXotU2lnbmF0dXJlPWNlNWJlMTc5M2ZhN2MyYjJiMTNiMDU4YmVmNjZhYjA2YzhiNjYyN2ZmNTM4NzkwZmUwMTU5OTIzZDM0ZWVmYzU",
            user_name: "카리나",
            user_level: 8,
            user_wishlist: [
                {
                    product_id: "UUID",
                    product_brand: "가까이 유니언",
                    product_name: "루바토 브이넥 반팔 티셔츠 네이비",
                    product_price: 48000,
                    product_discount_rate: 30,
                    product_image_id: "aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3Byb2R1Y3RzLyVFMSU4NCU4MCVFMSU4NSVBMSVFMSU4NCU4MSVFMSU4NSVBMSVFMSU4NCU4QiVFMSU4NSVCNS0lRTElODQlOEIlRTElODUlQjIlRTElODQlODIlRTElODUlQjUlRTElODQlOEIlRTElODUlQTUlRTElODYlQUIlRTElODQlOEMlRTElODUlQjNfJUUxJTg0JTg1JUUxJTg1JUFFJUUxJTg0JTg3JUUxJTg1JUExJUUxJTg0JTkwJUUxJTg1JUE5LSVFMSU4NCU4NyVFMSU4NSVCMyVFMSU4NCU4QiVFMSU4NSVCNSVFMSU4NCU4MiVFMSU4NSVBNiVFMSU4NiVBOC0lRTElODQlODclRTElODUlQTElRTElODYlQUIlRTElODQlOTElRTElODUlQTElRTElODYlQUYtJUUxJTg0JTkwJUUxJTg1JUI1JUUxJTg0JTg5JUUxJTg1JUE3JUUxJTg0JThFJUUxJTg1JUIzLSVFMSU4NCU4MiVFMSU4NSVBNiVFMSU4NCU4QiVFMSU4NSVCNSVFMSU4NCU4NyVFMSU4NSVCNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BTUo2RDY1SERBVDNFWkM5UTFNTyUyRjIwMjQxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyM1QxNDU4MDlaJlgtQW16LUV4cGlyZXM9NDMyMDAmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpCVFVvMlJEWTFTRVJCVkRORldrTTVVVEZOVHlJc0ltVjRjQ0k2TVRjek1qUXdPVEUwTnl3aWNHRnlaVzUwSWpvaWJYbDFjMlZ5SW4wLjBONl9naEFBc3NxdURoUVYzcEg2SEVuWC1MM3FfSHRGNEhpOUdaM25FTW1xRnZFek43T000UzBCSHpZS2lYaHNXOTJGcloweE8yUk9mMklIb2ZrZEVRJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9ZWMzZGZhZTZlNWU2MmMxY2U4ZDdlMDQ1Yjk2NjNjMTk3YzYzMDFjMDFiYWNhODg5OWJiZWM0NzA4ZWUyMjU5OQ",
                    product_category: ["의류"],
                    product_is_wish: false,
                },
                {
                    product_id: "UUID",
                    product_brand: "갭",
                    product_name: "레오 리커버리 글로그",
                    product_price: 79000,
                    product_discount_rate: "15",
                    product_image_id: "aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3Byb2R1Y3RzLyVFMSU4NCU4MCVFMSU4NSVBMiVFMSU4NiVCOF8lRTElODQlODUlRTElODUlQTYlRTElODQlOEIlRTElODUlQTktJUUxJTg0JTg1JUUxJTg1JUI1JUUxJTg0JThGJUUxJTg1JUE1JUUxJTg0JTg3JUUxJTg1JUE1JUUxJTg0JTg1JUUxJTg1JUI1LSVFMSU4NCU4MCVFMSU4NSVCMyVFMSU4NiVBRiVFMSU4NCU4NSVFMSU4NSVBOSVFMSU4NCU4MCVFMSU4NSVCMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BTUo2RDY1SERBVDNFWkM5UTFNTyUyRjIwMjQxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyM1QxNDU4MzlaJlgtQW16LUV4cGlyZXM9NDMyMDAmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpCVFVvMlJEWTFTRVJCVkRORldrTTVVVEZOVHlJc0ltVjRjQ0k2TVRjek1qUXdPVEUwTnl3aWNHRnlaVzUwSWpvaWJYbDFjMlZ5SW4wLjBONl9naEFBc3NxdURoUVYzcEg2SEVuWC1MM3FfSHRGNEhpOUdaM25FTW1xRnZFek43T000UzBCSHpZS2lYaHNXOTJGcloweE8yUk9mMklIb2ZrZEVRJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9ZTY5MTEyMGJlOTljMjFiOWM2NzhiOWRjNThiMWZhMWNjNTIzODUzMWViNGVjNzdhY2U4YTI3YWIwYjkzM2Q2MA",
                    product_category: ["신발"],
                    product_is_wish: true,
                }
            ],
            user_order_history: [],
        });
        console.log("user_data 업데이트됨");
    }, []);

    if (!user_data) {
        return <div>로딩 중...</div>;
    }

    return (
        <div id={"myPage"}>
            <Header myPage={true}/>
            <section className={"userInfo"}>
                <div className={"user"}>
                    <ul>
                        <li>
                            <div className={"profile"}>
                                <img src={`${S3Server}${user_data.user_id}`} alt="유저 프로파일"/>
                            </div>
                        </li>
                        <li>
                            <div className={"name"}>{user_data.user_name}</div>
                        </li>
                        <li>
                            <div className={"level"}>{"Lv. " + user_data.user_level}</div>
                        </li>
                        <li>
                            <div className={"edit"}>내 정보 수정</div>
                        </li>
                    </ul>
                </div>
            </section>
            <main>
                <section className={"wishlist"}>
                    <section className={"header"}>
                        <div><p>찜하신 상품</p></div>
                        <div><p>전체 보기</p></div>
                    </section>
                    <section className={"items"}>

                    </section>
                </section>
            </main>
        </div>
    )
}

export default MyPage