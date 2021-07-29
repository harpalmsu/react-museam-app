import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ArtDetails from "./ArtDetails";

const Thumbnail = ({ objectID }) => {
  console.log(objectID, "objectid");
  const [artDetails, setArtDetails] = useState("");

  const [show, setShow] = useState(false);

  const updateShow = (show) => {
    show = !show;
    setShow(show);
  };

  useEffect(() => {
    getThumbNailDetails(objectID).then((result) => {
      setArtDetails(result);
    });
  }, []);

  const artDescription = () => {
    if (artDetails.creditLine) {
      return <span>{artDetails.creditLine}</span>;
    } else {
      return "";
    }
  };

  return (
    <div
      onClick={() => updateShow(show)}
      className="thumbnail"
      style={{ padding: 10, border: "1px solid gray" }}
    >
      <img
        src={artDetails.primaryImageSmall}
        height="200"
        width="200"
        alt="artThumbnail"
      />
      {artDescription()}

      <Modal show={show} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{artDetails.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArtDetails artDetails={artDetails} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => updateShow(show)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  function getThumbNailDetails() {
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;

    return fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
};
export default Thumbnail;
