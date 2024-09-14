import './item.css'
import cart from '../../assets/ABCart.svg'
import favorites from '../../assets/favorite.svg'
import SFavorites from '../../assets/SFavorite.svg'
import { useState, useRef } from 'react'
import { baseURL } from "../../Route.jsx"

const Item = (props) => {
    const [isActionBarVisible, setIsActionBarVisible] = useState(false)
    const itemRef = useRef(null)

    const handleMouseEnter = () => {
        setIsActionBarVisible(true)
    }

    const handleMouseLeave = () => {
        setIsActionBarVisible(false)
    }

    return (
        <section
            id={"item"}
            ref={itemRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={"imageFrame"}>
                <div className={"actionBar"} style={{ opacity: isActionBarVisible ? '100' : '0' }}>
                    <img src={cart} alt="add to cart" />
                    {
                        props.favorite === false ? (
                            <img src={favorites} alt="add to favorite" />
                        ) : (
                            <img src={SFavorites} alt="remove to favorite" />
                        )}
                </div>

                <img src={`${baseURL}/api/image/${props.id}`}
                     className={"image"}
                     alt="item image" />
            </div>
            <p className={"brand"}>{props.brand}</p>
            <p className={"name"}>{props.name}</p>
            <p className={"original"}>{props.original}</p>
            <p className={"discount"}>{props.discount}%</p>
            <p className={"price"}>{props.price}</p>
        </section>
    )
}

export default Item
