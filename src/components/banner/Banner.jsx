import './banner.css'

const Banner = (props) => {
    return (
        <>
            <div id={"banner"}>
                <p>{props.text}</p>
            </div>
        </>
    )
}

export default Banner