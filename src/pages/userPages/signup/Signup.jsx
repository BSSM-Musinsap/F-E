import './signup.css'
import '../../../fonts/fonts.css'

import Input from "../../../components/input/Input.jsx";

const Signup = () => {
    return (
        <>
            <div id={"signup"}>
                <h1>회원가입</h1>

                <section className={"inputs"}>
                    <div className={"signup-input"}>
                        <p>이메일</p>
                        <Input type={"text"} text={"이메일을 입력해주세요"} class={"signup"}/>
                    </div>

                    <div className={"signup-input"}>
                        <p>비밀번호</p>
                        <Input type={"password"} text={"비밀번회를 입력해주세요"} class={"signup"}/>
                    </div>

                    <div className={"signup-input"}>
                        <p>비밀번호 재입력</p>
                        <Input type={"password"} text={"비밀번호를 다시 입력해주세요"} class={"signup"}/>
                    </div>

                    <div className={"signup-input"}>
                        <Input type={"button"} role={"submit"} text={"회원가입"} class={"signup"}/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Signup