import './home.css'

import Header from '../../../components/header/Header.jsx'
import Sliders from "../../../components/sliders/Sliders.jsx";
import Banner from "../../../components/banner/Banner.jsx"

const Home = () => {
    return (
        <main>
            <Header />

            <Sliders />

            <ul className={"cards"}>
                <li><Banner text={"잡화대전"}/></li>
                <li><Banner text={"신규입점"} /></li>
                <li><Banner text={"단독 런칭"} /></li>
                <li><Banner text={"아울렛"} /></li>
                <li><Banner text={"키즈"} /></li>
                <li><Banner text={"럭셔리"} /></li>
            </ul>
        </main>
    )
}

export default Home