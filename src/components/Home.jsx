import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import CollectionCard from "./CollectionCard.jsx";
import { Progress } from "./ui/progress.jsx";
import NavBar from "./NavBar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import NavBar from "./NavBar.jsx";
import { Button } from "./ui/button.jsx";
import Logout from "./Logout.jsx";
import CollectionItem from "./CollectionItem.jsx";

function Home({ user }) {
  const [collections, setCollections] = useState([]);
  const [progress, setProgress] = useState(13);
  const [items, setItems] = useState([]);

  // navigate = useNavigate();

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

  function handleCardClick(id) {
    event.preventDefault();
    fetch(`http://localhost:4000/collection_items/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return undefined;
        }
      })
      .then((data) => {
        console.log("loading items... ", data);
        setItems(data);
      });
  }

  const collectionsList = collections.map((collection) => (
    <CollectionCard
      key={collection.id}
      id={collection.id}
      title={collection.title}
      className="m-y-5"
      handleCardClick={handleCardClick}
    />
  ));

  const itemsList = items.map((item) => (
    <CollectionItem key={item.id} item={item} />
  ));

  return (
    <div>
      {/* <NavBar /> */}
      <main>
        <h2 className="p-4 text-center">Welcome {user.username}</h2>
        <div className="flex flex-col md:flex-row min-h-screen">
          <div className="flex-1 mx-5">
            <h3 className="text-center">Your Collections:</h3>
            <ul className="collection-list">{collectionsList}</ul>
          </div>
          <div className="mx-5 flex-1" htmlFor="collection-details">
            <p className="text-right">Show detailed collection view here</p>
            <ul className="items-list">{itemsList}</ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
