import "./OrderItem.css";
import { S3Server } from "@/Route";

const OrderItem = (props) => {
  return (
    <div id={"item"}>
      <section>
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
          <p className={"name"}>{props.name}</p>
          <p className={"original"}>{props.original}</p>
          <p className={"discount"}>{props.discount}%</p>
          <p className={"price"}>{props.price}</p>
        </div>
      </section>
    </div>
  );
};

export default OrderItem;
