import { useState, useEffect } from "react";
import GlobalStyles from "./components/global/GlobalStyles";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Company from "./pages/Company";
import Contact from "./pages/Contact";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      {windowWidth <= 375 ? <MobileNav /> : <Navbar />}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/company" exact component={Company} />
        <Route path="/locations" exact component={Locations} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
