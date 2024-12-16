import "./myPage.css";
import { useEffect, useState } from "react";
import Header from "@components/header/Header.jsx";
import { S3Server } from "@/Route";
import LikeItem from "@/components/like_item/LikeItem";
import OrderItem from "@/components/order_item/OrderItem";

const MyPage = () => {
  const [user_data, setUser_data] = useState(null);

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
    <div id={"myPage"}>
      <Header myPage={true} />
      <section className={"userInfo"}>
        <div className={"user"}>
          <ul>
            <li>
              <div className={"profile"}>
                <img
                  src={`${S3Server}${user_data.user_id}`}
                  alt="유저 프로파일"
                />
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
            <div>
              <p>찜하신 상품</p>
            </div>
            <div>
              <p>전체 보기</p>
            </div>
          </section>
          <section className={"likeItems"}>
            {user_data.user_wishlist.map((item, index) => (
              <div key={index}>
                <LikeItem
                  id={item.product_id}
                  brand={item.product_brand}
                  name={item.product_name}
                  original={item.product_price.toLocaleString("ko-KR")}
                  discount={item.product_discount_rate}
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
        <section className={"order"}>
          <section className={"header"}>
            <div>
              <p>주문 내역</p>
            </div>
            <div>
              <p>전체 보기</p>
            </div>
          </section>
          <section className={"orderItems"}>
            {user_data.user_wishlist.map((item, index) => (
              <div key={index}>
                <OrderItem
                  id={item.product_id}
                  brand={item.product_brand}
                  name={item.product_name}
                  original={item.product_price.toLocaleString("ko-KR")}
                  discount={item.product_discount_rate}
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
      </main>
    </div>
  );
};

export default MyPage;
