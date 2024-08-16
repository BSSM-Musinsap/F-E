import './login.css'
import '../../../fonts/fonts.css'

import Input from "../../../components/input/input.jsx";

import MUSINSAP from '../../../assets/MUSINSAP.svg'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div id={"login"}>
                <img className="logo" src={MUSINSAP} alt="Musinsap logo"/>

                <section className={"inputs"}>
                    <div className={"login-input"}>
                        <p>이메일</p>
                        <Input type={"text"} text={"이메일을 입력해주세요"} class={"login"}/>
                    </div>

                    <div className={"login-input"}>
                        <p>비밀번호</p>
                        <Input type={"password"} text={"비밀번호를 입력해주세요"} class={"login"}/>
                    </div>

                    <div className={"login-input"}>
                        <Input type={"button"} role={"submit"} text={"로그인"} class={"login"}/>
                    </div>

                    <div className={"notMember"}>
                        <p>회원이 아니신가요? <Link to={"/signup"} style={{textDecoration: "none"}}><b>회원가입</b></Link></p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login