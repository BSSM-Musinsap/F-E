import './home.css'

import Header from '../../../components/header/Header.jsx'
import Sliders from "../../../components/sliders/Sliders.jsx";
import Banner from "../../../components/banner/Banner.jsx"
import Category from "../../../components/category/Category.jsx";

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

            <ul className={"categories"}>
                <li><Category text={"의류"}/></li>
                <li><Category text={"바지"}/></li>
                <li><Category text={"신발"}/></li>
                <li><Category text={"원피스 / 스커트"}/></li>
                <li><Category text={"패션 소품"}/></li>
                <li><Category text={"아우터"}/></li>
                <li><Category text={"속옷 / 홈웨어"}/></li>
                <li><Category text={"가방"}/></li>
            </ul>
        </main>
    )
}

export default Home