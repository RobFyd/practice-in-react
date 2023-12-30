import "./style.css";

const Section = ({ title, form, title2, extraHeaderContent, body }) => (
  <section className="section">
    <div>
      <h2>{title}</h2>
      {form}
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
