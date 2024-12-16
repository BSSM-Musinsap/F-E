import "./PayItem.css";
import { S3Server } from "@/Route";
import { useState } from "react";
import Remove from "@assets/remove.svg";

const PayItem = (props) => {
  const [count, setCount] = useState(props.count);

  return (
    <div id={"payItem"}>
      <section>
        <div className="contentContainer">
          <input type="checkbox" />
          <div className={"imageFrame"}>
            {/*<img src={`${S3Server}${props.product_image_id}`}*/}
            {/*     className={"image"}*/}
            {/*     alt="main_item image" />*/}
            <img
              src={`${S3Server}${props.id}`}
              className={"image"}
              alt="item image"
            />
          </div>
          <div className={"textContainer"}>
            <p className={"brand"}>{props.brand}</p>
            <p className={"itemName"}>{props.name}</p>
            <div className={"countContainer"}>
              <p className={"count"}>{count}개</p>
              <div
                className="plus"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </div>
              <div
                className="minus"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </div>
            </div>
            <p className={"price"}>{props.price} 원</p>
          </div>
        </div>
        <div className={"remove"}>
          <img src={Remove} />
        </div>
      </section>
    </div>
  );
};

export default PayItem;
