import { ArtInfo, Art } from "../styles";
const ArtDetails = ({ artDetails }) => {
  return (
    <ArtInfo>
      <Art>
        <img
          src={artDetails["primaryImage"]}
          height="auto"
          width="100%"
          alt="artImage"
        />
      </Art>
      <Art style={{ paddingLeft: 10 }}>
        <span>
          <b>Department: {artDetails.department}</b>
        </span>
        <br />
        {artDetails.culture ? <span> Culture: {artDetails.culture}</span> : ""}
      </Art>
    </ArtInfo>
  );
};

export default ArtDetails;
