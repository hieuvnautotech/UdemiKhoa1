import { db } from "../firebase.config";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchListings = async () => {
        try {
          //get ref
            const listingsRef = collection(db, 'listings');
          // create a query
          const q = query(
            listingsRef,
            where("type", "==", params.categoryName),
            orderBy("timestamp", "desc"),
            limit(10)
          );
      } catch (error) {}
    }; 
  });
  return <div>Category</div>;
}

export default Category;
