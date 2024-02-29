import Input from "../../Input";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Wrapper } from "./styled";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("search");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
        <Input
            placeholder="Filter tasks"
            value={query || ""}
            onChange={onInputChange}
        />
    </Wrapper>
  );
};
