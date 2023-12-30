import "./style.css";

const Section = ({
  title,
  form,
  title2,
  extraHeaderContent,
  body,
  stats,
  thumb,
}) => (
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
      <div className="section__body">{body}</div>
    </div>
    <div>
      {stats}
      {thumb}
    </div>
  </section>
);

export default Section;
