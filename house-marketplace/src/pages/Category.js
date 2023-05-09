import { database } from "../firebase";
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
            const listingsRef = collection(database, 'users');
          // create a query
      } catch (error) {}
    };
  });
  return <div>Category</div>;
}

export default Category;
