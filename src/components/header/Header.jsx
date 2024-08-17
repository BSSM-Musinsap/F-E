import MUSINSAP from '../../assets/MUSINSAP.svg';
import Cart from '../../assets/shopping_cart.svg';
import {useEffect, useState} from "react";

import './header.css'

const Header = () => {
    const [name, setName] = useState("test")
    const [profileImage, setProfileImage] = useState("test")
    useEffect(() => {
        setName("카리나")
        setProfileImage("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")
    }, []);

    return (
        <>
            <header id={"header"}>
                <section className={"userData"}>
                    <img src={MUSINSAP} className={"logo"} alt="Musinsap logo"/>
                    <section className={"profile"}>
                        <img src={Cart} alt="Cart image"/>
                        <img src={`data:image/jpeg;base64,${profileImage}`} className={"image"} alt="Profile image"/>
                        <p>{name}</p>
                    </section>
                </section>
                <nav className={"nav"}>
                    <ul>
                        <li><p>잡화대전</p></li>
                        <li><p>추천</p></li>
                        <li><p>랭킹</p></li>
                        <li><p>하루 세일</p></li>
                        <li><p>스타일</p></li>
                        <li><p>이벤트</p></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header