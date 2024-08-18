import './item.css'

import cart from '../../assets/ABCart.svg'
import favorites from '../../assets/favorite.svg'
import SFavorites from '../../assets/SFavorite.svg'
import {useState} from "react";

const Item = (props) => {
    // const [show, setShow] = useState(true)

    return (
        <>
            <section id={"item"}>
                <div className={"imageFrame"}>
                    <div className={"actionBar"}>
                        <img src={cart} alt="add to cart"/>
                        {
                            props.favorite === false ? (
                                <img src={favorites} alt="add to favorite"/>
                        ) : (
                                <img src={SFavorites} alt="remove to favorite"/>
                        )}
                    </div>

                    <img src={`data:image/jpeg;base64,${props.image}`}
                         className={"image"}
                         alt="item image"/>
                </div>
                <p className={"brand"}>{props.brand}</p>
                <p className={"name"}>{props.name}</p>
                <p className={"original"}>{props.original}</p>
                <p className={"discount"}>{props.discount}%</p>
                <p className={"price"}>{props.price}</p>
            </section>
        </>
    )
}

export default Item