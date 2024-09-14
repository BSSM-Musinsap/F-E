import './home.css'

import Header from "../../../components/header/Header.jsx"
import Sliders from "../../../components/sliders/Sliders.jsx"
import Banner from "../../../components/banner/Banner.jsx"
import Category from "../../../components/category/Category.jsx"
import {createContext, useContext, useEffect, useState} from "react"
import Item from "../../../components/item/Item.jsx"

const getItems = (server, set) => {
    server.get("/api/items")
        .then((res) => {
            // console.log(res.data)
            set(res.data)
        })
}

const DataContext = createContext()

const Home = (props) => {
    const [items, setItems] = useState([])
    const [checkChange, setCheckChange] = useState(true)
    const [categoryList, setCategoryList] = useState([])

    const handleList = (category) => {
        if (categoryList.includes(category)) {
            setCategoryList(
                prevState => prevState.filter(
                    (item) => item !== category
                )
            )
        } else {
            setCategoryList(
                prevState => [
                    ...prevState, category
                ]
            )
        }
    }

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

            <DataContext.Provider value={{checkChange, setCheckChange, categoryList, handleList}}>
                <ul className={"categories"}>
                    <li><Category text={"의류"} dataContext={DataContext}/></li>
                    <li><Category text={"바지"} dataContext={DataContext}/></li>
                    <li><Category text={"신발"} dataContext={DataContext}/></li>
                    <li><Category text={"원피스 / 스커트"} dataContext={DataContext}/></li>
                    <li><Category text={"패션 소품"} dataContext={DataContext}/></li>
                    <li><Category text={"아우터"} dataContext={DataContext}/></li>
                    <li><Category text={"속옷 / 홈웨어"} dataContext={DataContext}/></li>
                    <li><Category text={"가방"} dataContext={DataContext}/></li>
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
                                        favorite={item.favorite}
                                        categories={item.categories}
                                        dataContext={DataContext}
                                    />
                                </li>
                            ))}
                        </ul>
                    ))}
                </ul>
            </DataContext.Provider>


        </main>
    )
}

export default Home
