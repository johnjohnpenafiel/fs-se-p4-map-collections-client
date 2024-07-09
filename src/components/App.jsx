import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
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
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
