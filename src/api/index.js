import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import products from "../json/product.json";

const firebaseConfig = {
    apikey:import.meta.env.VITE_FIREBASE_API_KEY ,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
    projectId:import.meta.env.VITE_FIREBASE_PROJECTID ,
    storageBucet:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ,
    appId:import.meta.env.VITE_FIREBASE_APPID ,
    mesasurementId:import.meta.env.VITE_FIREBASE_MEASUREMENTID ,

  };

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const ProductsCollection = collection(db, "product"); 

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(ProductsCollection);
  querySnapshot.forEach(async (product) => {
    await deleteDoc(doc(db, "product", product.id));
  });
  // ADD NEW DOCS
  products.forEach(async (product) => {
    const docRef = await doc(ProductsCollection);
    await setDoc(docRef, { ...product, id: docRef.id });
  });
};

export const getProducts = async () => {
    const querySnapshot = await getDocs(ProductsCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
    console.log({ result });
    return result
 };

