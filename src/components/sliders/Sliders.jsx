import leftArrowButton from "../.././assets/leftArrowButton.svg";
import rightArrowButton from "../.././assets/rightArrowButton.svg";

import "./sliders.css";
import { useState } from "react";
import { S3Server } from "../../Route.jsx";

import slider0 from "../../assets/sliders/0.png";
import slider1 from "../../assets/sliders/1.png";
import slider2 from "../../assets/sliders/2.png";
import slider3 from "../../assets/sliders/3.png";

const Sliders = () => {
  // const move_count = useRef(1);
  const [move_count, setMove_count] = useState(1);

  let banner_style = {
    transform:
      "translateX(calc(calc(-50% + 1908px) - " + 1272 * move_count + "px))",
  };

  let banner = (
    <ul className={"banners"} style={banner_style}>
      <li>
        <div>
          <img src={slider0} alt="banner1" />
        </div>
      </li>
      <li>
        <div>
          <img src={slider1} alt="banner2" />
        </div>
      </li>
      <li>
        <div>
          <img src={slider2} alt="banner3" />
        </div>
      </li>
      <li>
        <div>
          <img src={slider3} alt="banner4" />
        </div>
      </li>
    </ul>
  );
  const move_left = () => {
    setMove_count((prev) => (prev + 1) % 4);
  };
  const move_right = () => {
    setMove_count((prev) => (prev !== 0 ? (prev - 1) % 4 : 3));
  };

  return (
    <section id={"slider"}>
      {banner}
      <ul className={"buttons"}>
        <li onClick={move_right}>
          <img src={leftArrowButton} alt="left arrow button of banner" />
        </li>
        <li onClick={move_left}>
          <img src={rightArrowButton} alt="right arrow button of banner" />
        </li>
      </ul>
    </section>
  );
};

export default Sliders;
