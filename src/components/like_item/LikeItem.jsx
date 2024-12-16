import "./LikeItem.css";
import { S3Server } from "@/Route";

const LikeItem = (props) => {
  return (
    <div id={"my-page-item"}>
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
        <p className={"brand"}>{props.brand}</p>
        <p className={"name"}>{props.name}</p>
        <p className={"original"}>{props.original}</p>
        <p className={"discount"}>{props.discount}%</p>
        <p className={"price"}>{props.price}</p>
      </section>
    </div>
  );
};

export default LikeItem;
