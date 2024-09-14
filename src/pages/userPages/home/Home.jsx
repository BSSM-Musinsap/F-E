import './home.css'

import Header from "../../../components/header/Header.jsx"
import Sliders from "../../../components/sliders/Sliders.jsx"
import Banner from "../../../components/banner/Banner.jsx"
import Category from "../../../components/category/Category.jsx"
import {useEffect, useState} from "react"
import Item from "../../../components/item/Item.jsx"

const getItems = (server, set) => {
    server.get("/api/items")
        .then((res) => {
            // console.log(res.data)
            set(res.data)
        })
}

const Home = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems(props.server, setItems)
    }, []);

    return (
        <main>
            <Header/>

            <Sliders/>

            <ul className={"cards"}>
                <li><Banner text={"잡화대전"}/></li>
                <li><Banner text={"신규입점"}/></li>
                <li><Banner text={"단독 런칭"}/></li>
                <li><Banner text={"아울렛"}/></li>
                <li><Banner text={"키즈"}/></li>
                <li><Banner text={"럭셔리"}/></li>
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

            <ul className={"items"}>
                {Array.from({length: Math.ceil(items.length / 4)}, (_, index) => (
                    <ul key={index} className={"item-group"}>
                        {items.slice(index * 4, index * 4 + 4).map((item) => (
                            <li key={item.id}>
                                <Item
                                    id={item.id}
                                    server={props.server}
                                    image={item.image}
                                    brand={item.brand}
                                    name={item.name}
                                    original={item.originalPrice}
                                    discount={item.discountPercent}
                                    price={item.discountedPrice}
                                    favorite={false}
                                />
                            </li>
                        ))}
                    </ul>
                ))}
            </ul>

        </main>
    )
}

export default Home
