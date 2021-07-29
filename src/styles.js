import styled from "styled-components";

export const MuseamHeader = styled.div`
  background-color: gray;
  height: 60;
  padding: 10px 5px;
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: xx-large;
`;

export const ThumbnailContainer = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 48px;
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Art = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
`;
