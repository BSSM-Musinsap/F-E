import "./input.css";

const Input = (props) => {
  if (props.type === "text") {
    return (
      <>
        <div id={"input"}>
          <section className={props.class}>
            <input type="text" placeholder={props.text} />
          </section>
        </div>
      </>
    );
  } else if (props.type === "password") {
    return (
      <div id={"input"}>
        <section className={props.class}>
          <input type="password" placeholder={props.text} />
        </section>
      </div>
    );
  } else if (props.type === "button") {
    return (
      <div id={"input"}>
        <section className={props.class}>
          <button type={props.role}>{props.text}</button>
        </section>
      </div>
    );
  }
};

export default Input;
