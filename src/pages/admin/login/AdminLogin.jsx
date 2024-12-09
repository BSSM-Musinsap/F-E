import "./adminLogin.css";
import "@/fonts/fonts.css";
import Input from "@components/input/Input.jsx";
import MUSINSAP from "@assets/MUSINSAP.svg";
import ADMIN from "@assets/ADMIN.svg";

const AdminLogin = () => {
  return (
    <div id={"adminLogin"}>
      <img className="logo" src={MUSINSAP} alt="Musinsap logo" />
      <img className="logo" src={ADMIN} alt="ADMIN text" />
      <section className={"inputs"}>
        <div className={"login-input"}>
          <p>이메일</p>
          <Input type={"text"} text={"이메일을 입력해주세요"} class={"login"} />
        </div>
        <div className={"login-input"}>
          <p>비밀번호</p>
          <Input
            type={"password"}
            text={"비밀번호를 입력해주세요"}
            class={"login"}
          />
        </div>
        <div className={"login-input"}>
          <Input
            type={"button"}
            role={"submit"}
            text={"로그인"}
            class={"login"}
          />
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
