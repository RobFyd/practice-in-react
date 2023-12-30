import Form from "../Form";
import "./style.css";

const Section = ({ title, title2, body, extraHeaderContent }) => (
  <section className="section">
    <div>
      <h2>{title}</h2>
      <Form />
    </div>
    <div>
      <div>
        <h2>{title2}</h2>
        {extraHeaderContent}
      </div>
      <div className="section__body">
        {body}
      </div>
    </div>
  </section>
);

export default Section;
