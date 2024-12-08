import './home.css'

import Header from "../../../components/header/Header.jsx"
import Sliders from "../../../components/sliders/Sliders.jsx"
import Banner from "../../../components/banner/Banner.jsx"
import Category from "../../../components/category/Category.jsx"
import {createContext, useContext, useEffect, useState} from "react"
import Home_Item from "../../../components/main_item/Home_Item.jsx"

import banner1 from "../../../assets/banners/잡화대전.png"
import banner2 from "../../../assets/banners/신규 입점.png"
import banner3 from "../../../assets/banners/단독 런칭.png"
import banner4 from "../../../assets/banners/아올렛.png"
import banner5 from "../../../assets/banners/키즈.png"
import banner6 from "../../../assets/banners/럭셔리.png"
// import axios from "axios";
// const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

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

    // useEffect(() => {
    //     // getItems(props.server, setItems)
    //     setItems(
    //       axios.get(API_SERVER_URL, {
    //       params: {
    //         key1: 'value1',
    //         key2: 'value2'
    //       }
    //     }))
    // }, []);

    return (
        <main id={"home"}>
            <Header/>

            <Sliders/>

            <ul className={"cards"}>
                <li><Banner id={banner1}/></li>
                <li><Banner id={banner2}/></li>
                <li><Banner id={banner3}/></li>
                <li><Banner id={banner4}/></li>
                <li><Banner id={banner5}/></li>
                <li><Banner id={banner6}/></li>
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
                                    <Home_Item
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
