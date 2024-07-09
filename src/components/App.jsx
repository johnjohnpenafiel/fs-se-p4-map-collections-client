import React from "react"
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (<Login setLoggedIn={setLoggedIn} />);
  }

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
)
}

export default App;

