import './categoty.css'
import {useState} from "react";

import close from '../../assets/close.svg'

const Category = (props) => {
    const [sel, setSel] = useState(false)

    return (
        <>
            <section id={"category"} onClick={() => setSel(!sel)}>
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