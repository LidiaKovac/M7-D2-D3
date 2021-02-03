import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Details from "./components/Details";
import Navbar from "./components/NavBar";
import { useState } from "react";

function App(props) {
  const [location, setLocation] = useState();
  const [position, setPosition] = useState();
  const getPosition = (pos) => {
    setPosition(pos);
  };
  const getLocation = (loc) => {
    setLocation(loc);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/">
          <Navbar />
        </Route>
        <Route exact path="/">
          <Home locate={getLocation} position={getPosition} />
        </Route>
        <Route exact path="/jobs">
          <Details position={position} location={location} />{" "}
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
