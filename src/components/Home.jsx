import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import CollectionCard from "./CollectionCard.jsx";
import { Progress } from "./ui/progress.jsx";
import NavBar from "./NavBar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import NavBar from "./NavBar.jsx";

function Home({ user }) {
  const [collections, setCollections] = useState([]);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    setProgress(15);
    if (user.id) {
      setProgress(25);
      fetch(`http://localhost:4000/${user.id}/collections`)
        .then((response) => {
          setProgress(50);
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setCollections(data);
          setProgress(75);
        })
        .catch((error) =>
          console.error("Fetching Collections Failed: ", error)
        );
    }
    setProgress(90);
  }, [user.id]);

  while (progress < 75) {
    return (
      <Progress value={progress} className="w-[50%]">
        Loading
      </Progress>
    );
  }

  const collections_list = collections.map((collection) => (
    <CollectionCard
      key={collection.id}
      id={collection.id}
      title={collection.title}
    />
  ));

  return (
    <div>
      {/* <NavBar /> */}
      <main>
        <h2 className="text-center">Welcome {user.username}</h2>

        <div className="flex justify-between">
          <div className="mx-5">
            <h3 className="text-center">Your Collections:</h3>
            <ul className="collection-list">{collections_list}</ul>
          </div>
          <div className="mx-5" htmlFor="collection-details">
            <p className="text-right">Show detailed collection view here</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
