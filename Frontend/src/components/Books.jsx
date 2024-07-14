import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";
export default function Books() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-nook-api-tawny.vercel.app/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20">
        <br />
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-400"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore our diverse collection of books available for purchase.
            Whether you're seeking the latest bestsellers, timeless classics, or
            specialized texts, we offer a wide range of titles to suit your
            interests and needs. Invest in knowledge and adventure with our
            carefully curated selection of books that cater to all ages and
            tastes.
            <br />
            Happy reading!
          </p>
          <Link to="/">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
