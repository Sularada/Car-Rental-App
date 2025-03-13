import { db } from "./firebase";
import {
  addDoc,
  collection,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";

export async function getCar(id) {
  const carRef = doc(db, "cars", id);
  const carSnap = await getDoc(carRef);
  return carSnap.data();
}
export async function getFilteredCars(model, minPrice, maxPrice, rentalState) {
  try {
    const carsCollection = collection(db, "cars");
    let filters = [
      where("price", ">=", minPrice),
      where("price", "<=", maxPrice),
      where("rentalState", "==", rentalState),
    ];
    if (model !== "") {
      filters.push(where("model", "==", model));
    }
    const carsQuery = query(carsCollection, ...filters);
    const snapshot = await getDocs(carsQuery);
    const filteredCars = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("filter", filteredCars);
    return filteredCars;
  } catch (error) {
    console.error("Filtreleme Yapılamadı", error);
  }
}
export async function getModels() {
  try {
    const querySnapshot = await getDocs(collection(db, "cars"));
    const models = querySnapshot.docs.map((doc) => doc.data().model);
    console.log(models);
    return models;
  } catch (error) {
    console.error("Model bilgileri alınamadı", error);
  }
}
export async function updateRentalState(id, state) {
  const carRef = doc(db, "cars", id);
  await updateDoc(carRef, {
    rentalState: state,
  });
}
