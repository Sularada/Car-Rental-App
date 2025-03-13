import { useEffect, useState } from "react";
import "./App.css";
import { getCars, getModels, updateRentalState } from "./firebase/dbController";
import NavbarPart from "./stories/components/organisms/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./stories/components/organisms/Footer";
import HomePage from "./stories/components/pages/HomePage";
function App() {
  const [cars, setCars] = useState();
  useEffect(() => {
    fetchCars();
    getModels();
    updateRentalState("8e7JYqcRketWKd9Y4n43", false);
  }, []);
  async function fetchCars() {
    setCars(await getCars());
  }

  return (
    <>
      <NavbarPart />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
