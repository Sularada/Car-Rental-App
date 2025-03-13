import { db } from "./firebase";
import {
  addDoc,
  collection,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";

export async function getCars() {
  try {
    const querySnapshot = await getDocs(collection(db, "cars"));
    const cars = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(cars);
    return cars;
  } catch (error) {
    console.error("Araba bilgileri alınamadı", error);
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
