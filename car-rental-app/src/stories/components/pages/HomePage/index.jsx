import { useEffect, useState } from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import { getCars } from "../../../../firebase/dbController";

const HomePage = () => {
  const [cars, setCars] = useState(null);
  useEffect(() => {
    fetchCars();
    //getModels();
    //updateRentalState("8e7JYqcRketWKd9Y4n43", false);
  }, []);
  async function fetchCars() {
    setCars(await getCars());
  }
  return (
    <>
      {cars != null ? <HomeTemplate cars={cars} /> : <p>Sayfa Yükleniyor...</p>}
    </>
  );
};

export default HomePage;
