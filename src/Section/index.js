import "./style.css";

const Section = ({ title, form, extraHeaderContent, body, stats, thumb }) => (
  <section className="section">
    <div>
      <h2>{title}</h2>
      {form}
    </div>
    <div>
      {extraHeaderContent}
      <div className="section__body">{body}</div>
    </div>
    <div>
      {stats}
      {thumb}
    </div>
  </section>
);

export default Section;
