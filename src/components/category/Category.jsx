import './categoty.css'
import {useContext, useState} from "react";

import close from '../../assets/close.svg'

const Category = (props) => {
    const { setCheckChange, handleList } = useContext(props.dataContext)
    const [sel, setSel] = useState(false)

    const setter = () => {
        setCheckChange(sel)
        setSel(!sel)
        handleList(props.text)
    }

    return (
        <>
            <section id={"category"} onClick={setter}>
                <div className={sel.valueOf()+""}>
                    <ul>
                        <li><p>{props.text}</p></li>
                        <li> {
                            sel === true ? <img src={close} alt="close"/> : <></>
                        } </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Category