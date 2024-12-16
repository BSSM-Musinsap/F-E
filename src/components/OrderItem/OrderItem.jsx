import "./OrderItem.css";
import { S3Server } from "@/Route";

const OrderorderItem = (props) => {
  return (
    <div id={"orderItem"}>
      <section>
        <div className={"imageFrame"}>
          {/*<img src={`${S3Server}${props.product_image_id}`}*/}
          {/*     className={"image"}*/}
          {/*     alt="main_orderItem image" />*/}
          <img
            src={`${S3Server}${props.id}`}
            className={"image"}
            alt="orderItem image"
          />
        </div>
        <div className={"textContainer"}>
          <p className={"brand"}>{props.brand}</p>
          <p className={"name"}>{props.name}</p>
          <p className={"original"}>{props.original}</p>
          <p className={"discount"}>{props.discount}%</p>
          <p className={"price"}>{props.price}</p>
        </div>
      </section>
    </div>
  );
};

export default OrderorderItem;
