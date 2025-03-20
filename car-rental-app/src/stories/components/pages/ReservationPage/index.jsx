import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCar, updateRentalState } from "../../../../firebase/dbController";
import ReservationTemplate from "../../templates/ReservationTemplate";

const ReservationPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    setCar(await getCar(id));
  }
  return (
    <ReservationTemplate
      car={car}
      updateRentalState={updateRentalState}
      id={id}
    />
  );
};

export default ReservationPage;
