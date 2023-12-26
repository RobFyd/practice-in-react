import "./style.css";

const Form = () => (
  <form className="form">
    <input className="form__field" placeholder="what to do?" autoFocus />
    <button className="form__button">Add new task</button>
  </form>
);


export default Form;