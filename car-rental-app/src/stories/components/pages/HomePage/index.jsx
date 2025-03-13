import { useEffect, useState } from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import { getModels } from "../../../../firebase/dbController";

const HomePage = () => {
  const [models, setModels] = useState();
  const [filters, setFilters] = useState({
    model: "",
    min: 0,
    max: 6000,
    rentalState: true,
  });
  useEffect(() => {
    fetchCars();
  }, []);
  async function fetchCars() {
    setModels([...new Set(await getModels())]);
  }
  return (
    <>
      {models ? (
        <HomeTemplate
          models={models}
          filters={filters}
          setFilters={setFilters}
        />
      ) : (
        <p>Sayfa Yükleniyor...</p>
      )}
    </>
  );
};

export default HomePage;
