import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import CollectionCard from "./CollectionCard.jsx";

function Home({ user }) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    if (user.id) {
      fetch(`http://localhost:4000/${user.id}/collections`)
        .then((response) => response.json())
        .then(setCollections)
        .catch((error) =>
          console.error("Fetching Collections Failed: ", error)
        );
    }
  }, [user.id]);

  const collections_list = collections.map((collection) => (
    <CollectionCard
      key={collection.id}
      id={collection.id}
      title={collection.title}
    />
  ));

  return (
    <div>
      <main>
        <h2>Welcome {user.username}</h2>
        <h3>Your Collections:</h3>
        <ul className="collection-list">{collections_list}</ul>
      </main>
    </div>
  );
}

export default Home;
