import Section from "../../common/Section";
import "./style.css";

export default () => (
  <Section
    title="Stats"
    stats={<div className="stats"></div>}
    thumb={<button className="thumbUp" />}
  />
);
