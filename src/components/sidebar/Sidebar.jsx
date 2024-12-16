import "./Sidebar.css";
import WhiteLogo from "@/assets/whiteMUSINSAP.svg";
import AdminLogin from "@/assets/adminLogo.svg";

const Sidebar = () => {
  return (
    <div className="styledSidebar">
      <div className="topContainer">
        <div className="logoContainer">
          <img className="logo" src={WhiteLogo} />
        </div>
        <div className="categoryContainer">
          <div className="category">등록 상품 조회</div>
          <div className="category">상품 등록</div>
        </div>
      </div>
      <div className="bottomContainer">
        <img src={AdminLogin} />
      </div>
    </div>
  );
};

export default Sidebar;
