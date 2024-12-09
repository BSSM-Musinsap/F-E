import "./banner.css";
import { S3Server } from "../../Route.jsx";

const Banner = (props) => {
  return (
    <div id={"banner"}>
      <img src={props.id} alt="banner" />
    </div>
  );
};

export default Banner;
