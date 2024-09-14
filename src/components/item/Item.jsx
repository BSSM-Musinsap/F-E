import './item.css'
import cart from '../../assets/ABCart.svg'
import favorites from '../../assets/favorite.svg'
import SFavorites from '../../assets/SFavorite.svg'
import {useState, useRef, useContext} from 'react'
import { baseURL } from "../../Route.jsx"
import category from "../category/Category.jsx";

const Item = (props) => {
    const { categoryList } = useContext(props.dataContext)
    const [isActionBarVisible, setIsActionBarVisible] = useState(false)
    const [isFavorite, setIsFavorite] = useState(props.favorite)
    const itemRef = useRef(null)

    if (!categoryList.includes(props.categories[0]) && categoryList.length > 0) {
        return <></>
    }

    const handleMouseEnter = () => {
        setIsActionBarVisible(true)
    }

    const handleMouseLeave = () => {
        setIsActionBarVisible(false)
    }

    const handleSetFavorite = () => {
        setIsFavorite(!isFavorite)

        const form = new FormData()

        form.append('id', props.id)
        form.append('favorite', !isFavorite)

        props.server.post("api/favorite", form)
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
                        isFavorite === false ? (
                            <img src={favorites} alt="add to favorite" onClick={handleSetFavorite} />
                        ) : (
                            <img src={SFavorites} alt="remove to favorite" onClick={handleSetFavorite} />
                        )}
                </div>

                <div className={"categories"} style={{ opacity: isActionBarVisible ? '100' : '0' }}>
                    <p>{props.categories[0]}</p>
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
