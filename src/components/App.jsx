import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import CollectionDetails from "./CollectionsDetails";
import Login from "./Login";
import CollectionCard from "./CollectionCard";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  // useEffect() for check_session
  useEffect(() => {
    fetch("http://localhost:4000/check_session", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return {};
        }
      })
      .then((data) => {
        console.log("userLoader data", data);
        setUser(data);
      });
    if (user) {
      setIsLoading(false);
    } else if (!user) {
      setIsLoading(true);
    }
  }, []);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Home user={user} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home user={user} />} />
          <Route
            path="/collections/:collectionId"
            element={<CollectionDetails />}
          />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

// fix login component loading before check session is finished
// add shadcn and tailwind css styling to collection cards and divs
// add NavBar styling and learn react routing
