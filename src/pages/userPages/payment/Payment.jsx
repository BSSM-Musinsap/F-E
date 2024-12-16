import "./payment.css";
import { useEffect, useState } from "react";
import Header from "@components/header/Header.jsx";
import { S3Server } from "@/Route";
import PayItem from "@/components/pay_item/PayItem.jsx";
import backIcon from "@/assets/backIcon.svg";

const MyPage = () => {
  const [user_data, setUser_data] = useState(null);
  const cost = useState("68,600");

  useEffect(() => {
    setUser_data({
      user_id:
        "aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3VzZXIvcHJvZmlsZTEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QU1KNkQ2NUhEQVQzRVpDOVExTU8lMkYyMDI0MTEyMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMjNUMTU1MzA4WiZYLUFtei1FeHBpcmVzPTQzMjAwJlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lKQlRVbzJSRFkxU0VSQlZETkZXa001VVRGTlR5SXNJbVY0Y0NJNk1UY3pNalF3T1RFME55d2ljR0Z5Wlc1MElqb2liWGwxYzJWeUluMC4wTjZfZ2hBQXNzcXVEaFFWM3BINkhFblgtTDNxX0h0RjRIaTlHWjNuRU1tcUZ2RXpON09NNFMwQkh6WUtpWGhzVzkyRnJaMHhPMlJPZjJJSG9ma2RFUSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmdmVyc2lvbklkPW51bGwmWC1BbXotU2lnbmF0dXJlPWNlNWJlMTc5M2ZhN2MyYjJiMTNiMDU4YmVmNjZhYjA2YzhiNjYyN2ZmNTM4NzkwZmUwMTU5OTIzZDM0ZWVmYzU",
      user_name: "카리나",
      user_level: 8,
      user_wishlist: [
        {
          product_id: "UUID",
          product_brand: "가까이 유니언",
          product_name: "루바토 브이넥 반팔 티셔츠 네이비",
          product_price: 48000,
          product_discount_rate: 30,
          product_image_id: "example_image_url",
          product_category: ["의류"],
          product_count: 1,
          product_is_wish: false,
        },
        {
          product_id: "UUID2",
          product_brand: "갭",
          product_name: "레오 리커버리 글로그",
          product_price: 79000,
          product_discount_rate: 15,
          product_image_id: "example_image_url2",
          product_category: ["신발"],
          product_count: 2,
          product_is_wish: true,
        },
      ],
      user_order_history: [],
    });
    console.log("user_data 업데이트됨");
  }, []);

  if (!user_data) {
    return <div>로딩 중...</div>;
  }

  return (
    <div id={"payment"}>
      <Header myPage={true} />
      <section className={"topContent"}>
        <div className={"back"}>
          <img src={backIcon}></img>
          <span>뒤로가기</span>
        </div>
        <div className={"title"}>결제하기</div>
      </section>
      <main>
        <section className={"paymentList"}>
          <section className={"payItems"}>
            {user_data.user_wishlist.map((item, index) => (
              <div key={index}>
                <PayItem
                  id={item.product_id}
                  brand={item.product_brand}
                  name={item.product_name}
                  count={item.product_count}
                  original={item.product_price.toLocaleString("ko-KR")}
                  price={(
                    item.product_price *
                    (1 - item.product_discount_rate * 0.01)
                  ).toLocaleString("ko-KR")}
                  favorite={item.product_is_wish}
                  categories={item.product_category}
                />
              </div>
            ))}
          </section>
        </section>
        <div className="cost">
          <div className="allText">총 결제 금액</div>
          <div className="allCost">{cost} 원</div>
        </div>
        <div className="buttonContainer">
          <div className="button">총 {cost}원 구매하기</div>
        </div>
      </main>
    </div>
  );
};

export default MyPage;
