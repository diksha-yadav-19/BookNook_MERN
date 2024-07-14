import React from "react";
import book from "../../public/book.jpeg";
const About = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-white py-8 px-4 sm:px-8 lg:px-16 mt-28">
      <div className="sm:w-1/2 mb-6 sm:mb-0">
        <img src={book} alt="About Booknook" className="rounded-md shadow-lg" />
      </div>
      <div className="sm:w-1/2 sm:pl-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          About Booknook
        </h2>
        <p className="text-gray-600 mb-4">
          Welcome to Booknook, your ultimate online resource for finding great
          books. While you can't shop for books directly on our website, we
          provide convenient links to Amazon for purchasing your favorite books.
          Additionally, we offer links to websites where you can find free
          books. Dive into the world of literature with Booknook!
        </p>
        <p className="text-gray-600">
          Whether you're looking for the latest bestsellers, classic literature,
          or free resources, Booknook is here to guide you. Explore our curated
          selection and discover your next great read today.
        </p>
      </div>
    </div>
  );
};

export default About;
