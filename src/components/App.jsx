import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CollectionDetails from "./CollectionsDetails";
import Login from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  if (!loggedIn) {
    return (
      <Login
        setLoggedIn={setLoggedIn}
        setUser={setUser}
        loggedIn={loggedIn}
        user={user}
      />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home user={user} />} />
        <Route
          path="/collections/:collectionId"
          element={<CollectionDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
