import { useEffect, useState } from "react";
import { getCar } from "../../../../firebase/dbController";
import { useParams } from "react-router";
import CarDetailTemplate from "../../templates/CardDetailTemplate";

function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    setCar(await getCar(id));
  }
  return <CarDetailTemplate car={car} id={id} />;
}

export default CarDetailPage;
