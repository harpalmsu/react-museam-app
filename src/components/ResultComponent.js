import ThumbnailComponent from "./ThumbnailComponent";
import { ThumbnailContainer } from "../styles";
const ResultComponent = (props) => {
  return (
    <ThumbnailContainer>
      {props.result.map((value, key) => {
        return (
          <div key={key}>
            <ThumbnailComponent objectID={value} />
          </div>
        );
      })}
    </ThumbnailContainer>
  );
};
export default ResultComponent;
