import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CollectionDetails({ id }) {
  // const { collectionId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/collections/${collectionId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return undefined;
        }
      })
      .then((data) => {
        setItems(data);
      });
  }, [collectionId]);

  return (
    <div>
      <h2>Location Pins in Collection</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionDetails;
