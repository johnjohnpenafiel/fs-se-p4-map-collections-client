import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CollectionDetails() {
  const { collectionId } = useParams();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/collections/${collectionId}/items`)
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error("Fetching Locations Failed: ", error));
  }, [collectionId]);

  return (
    <div>
      <h2>Locations in Collection</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionDetails;
