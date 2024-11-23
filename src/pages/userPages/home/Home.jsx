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
        // getItems(props.server, setItems)
        const items = [
            {
                product_id: "UUID",
                product_brand: "가까이 유니언",
                product_name: "루바토 브이넥 반팔 티셔츠 네이비",
                product_price: 48000,
                product_discount_rate: 30,
                product_image_id: "",
                product_category: ["의류"],
                product_is_wish: false,
            },
            {
                product_id: "UUID",
                product_brand: "갭",
                product_name: "레오 리커버리 글로그",
                product_price: 79000,
                product_discount_rate: "15",
                product_image_id: "",
                product_category: ["신발"],
                product_is_wish: true,
            }
        ]
        setItems(items)
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
                                        id={item.product_id}
                                        // server={props.server}
                                        image={item.product_image_id}
                                        brand={item.product_brand}
                                        name={item.product_name}
                                        original={item.product_price.toLocaleString('ko-KR', {
                                            style: 'decimal',
                                            maximumFractionDigits: 0
                                        })}
                                        discount={item.product_discount_rate}
                                        price={(item.product_price * (1 - (item.product_discount_rate * 0.01)))
                                            .toLocaleString('ko-KR', {
                                            style: 'decimal',
                                            maximumFractionDigits: 0
                                            }
                                        )}
                                        favorite={item.product_is_wish}
                                        categories={item.product_category}
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
