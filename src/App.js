import { useState, useEffect } from "react";
import GlobalStyles, { Container } from "./components/global/GlobalStyles";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import Footer from "./components/Footer";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <GlobalStyles />
      {windowWidth <= 520 ? <MobileNav /> : <Navbar />}

      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/company" exact component={Company} />
          <Route path="/locations" exact component={Locations} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/web-design" exact component={WebDesign} />
          <Route path="/app-design" exact component={AppDesign} />
          <Route path="/graphic-design" exact component={GraphicDesign} />
        </Switch>
      </Container>

      <Footer />
    </>
  );
};

export default App;
