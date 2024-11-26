import './home.css'

import Header from "../../../components/header/Header.jsx"
import Sliders from "../../../components/sliders/Sliders.jsx"
import Banner from "../../../components/banner/Banner.jsx"
import Category from "../../../components/category/Category.jsx"
import {createContext, useContext, useEffect, useState} from "react"
import Item from "../../../components/item/Item.jsx"

import banner1 from "../../../assets/banners/잡화대전.png"
import banner2 from "../../../assets/banners/신규 입점.png"
import banner3 from "../../../assets/banners/단독 런칭.png"
import banner4 from "../../../assets/banners/아올렛.png"
import banner5 from "../../../assets/banners/키즈.png"
import banner6 from "../../../assets/banners/럭셔리.png"

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
                product_image_id: "aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3Byb2R1Y3RzLyVFMSU4NCU4MCVFMSU4NSVBMSVFMSU4NCU4MSVFMSU4NSVBMSVFMSU4NCU4QiVFMSU4NSVCNS0lRTElODQlOEIlRTElODUlQjIlRTElODQlODIlRTElODUlQjUlRTElODQlOEIlRTElODUlQTUlRTElODYlQUIlRTElODQlOEMlRTElODUlQjNfJUUxJTg0JTg1JUUxJTg1JUFFJUUxJTg0JTg3JUUxJTg1JUExJUUxJTg0JTkwJUUxJTg1JUE5LSVFMSU4NCU4NyVFMSU4NSVCMyVFMSU4NCU4QiVFMSU4NSVCNSVFMSU4NCU4MiVFMSU4NSVBNiVFMSU4NiVBOC0lRTElODQlODclRTElODUlQTElRTElODYlQUIlRTElODQlOTElRTElODUlQTElRTElODYlQUYtJUUxJTg0JTkwJUUxJTg1JUI1JUUxJTg0JTg5JUUxJTg1JUE3JUUxJTg0JThFJUUxJTg1JUIzLSVFMSU4NCU4MiVFMSU4NSVBNiVFMSU4NCU4QiVFMSU4NSVCNSVFMSU4NCU4NyVFMSU4NSVCNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BTUo2RDY1SERBVDNFWkM5UTFNTyUyRjIwMjQxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyM1QxNDU4MDlaJlgtQW16LUV4cGlyZXM9NDMyMDAmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpCVFVvMlJEWTFTRVJCVkRORldrTTVVVEZOVHlJc0ltVjRjQ0k2TVRjek1qUXdPVEUwTnl3aWNHRnlaVzUwSWpvaWJYbDFjMlZ5SW4wLjBONl9naEFBc3NxdURoUVYzcEg2SEVuWC1MM3FfSHRGNEhpOUdaM25FTW1xRnZFek43T000UzBCSHpZS2lYaHNXOTJGcloweE8yUk9mMklIb2ZrZEVRJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9ZWMzZGZhZTZlNWU2MmMxY2U4ZDdlMDQ1Yjk2NjNjMTk3YzYzMDFjMDFiYWNhODg5OWJiZWM0NzA4ZWUyMjU5OQ",
                product_category: ["의류"],
                product_is_wish: false,
            },
            {
                product_id: "UUID",
                product_brand: "갭",
                product_name: "레오 리커버리 글로그",
                product_price: 79000,
                product_discount_rate: "15",
                product_image_id: "aHR0cDovLzEyNy4wLjAuMTo5MDAwL211c2luc2FwL3Byb2R1Y3RzLyVFMSU4NCU4MCVFMSU4NSVBMiVFMSU4NiVCOF8lRTElODQlODUlRTElODUlQTYlRTElODQlOEIlRTElODUlQTktJUUxJTg0JTg1JUUxJTg1JUI1JUUxJTg0JThGJUUxJTg1JUE1JUUxJTg0JTg3JUUxJTg1JUE1JUUxJTg0JTg1JUUxJTg1JUI1LSVFMSU4NCU4MCVFMSU4NSVCMyVFMSU4NiVBRiVFMSU4NCU4NSVFMSU4NSVBOSVFMSU4NCU4MCVFMSU4NSVCMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BTUo2RDY1SERBVDNFWkM5UTFNTyUyRjIwMjQxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyM1QxNDU4MzlaJlgtQW16LUV4cGlyZXM9NDMyMDAmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpCVFVvMlJEWTFTRVJCVkRORldrTTVVVEZOVHlJc0ltVjRjQ0k2TVRjek1qUXdPVEUwTnl3aWNHRnlaVzUwSWpvaWJYbDFjMlZ5SW4wLjBONl9naEFBc3NxdURoUVYzcEg2SEVuWC1MM3FfSHRGNEhpOUdaM25FTW1xRnZFek43T000UzBCSHpZS2lYaHNXOTJGcloweE8yUk9mMklIb2ZrZEVRJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9ZTY5MTEyMGJlOTljMjFiOWM2NzhiOWRjNThiMWZhMWNjNTIzODUzMWViNGVjNzdhY2U4YTI3YWIwYjkzM2Q2MA",
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
