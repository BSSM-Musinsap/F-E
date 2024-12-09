import "./Home_item.css";
import cart from "../../assets/ABCart.svg";
import favorites from "@assets/favorite.svg";
import SFavorites from "@assets/SFavorite.svg";
import { useState, useRef } from "react";
import { S3Server } from "../../Route.jsx";

const Home_Item = (props) => {
  const [isActionBarVisible, setIsActionBarVisible] = useState(false);
  const itemRef = useRef(null);

  const handleMouseEnter = () => {
    setIsActionBarVisible(true);
  };

  const handleMouseLeave = () => {
    setIsActionBarVisible(false);
  };

  const handleSetFavorite = () => {
    setIsFavorite(!isFavorite);

    // const form = new FormData()
    //
    // form.append('id', props.id)
    // form.append('favorite', !isFavorite)
    //
    // props.server.post("api/favorite", form)
  };

  return (
    <section
      id={"item"}
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={"imageFrame"}>
        <div
          className={"actionBar"}
          style={{ opacity: isActionBarVisible ? "100" : "0" }}
        >
          <img src={cart} alt="add to cart" />
        </div>
        <div
          className={"categories"}
          style={{ opacity: isActionBarVisible ? "100" : "0" }}
        >
          <p>{props.categories[0]}</p>
        </div>
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
  );
};

export default Home_Item;
