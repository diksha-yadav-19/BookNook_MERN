import React from "react";

function Cards({ item }) {
  const handleBuyNow = () => {
    window.open(item.url, "_blank"); // Opens the URL in a new tab
    // window.location.href = item.url; // Uncomment this line to navigate in the same tab
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="w-[350px] h-[350px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            <span>{item.name}</span>
            <div className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {item.category}
            </div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions justify-between mt-4">
            <div className="bg-red-100 text-red-800 text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
              {item.price === 0 ? "Free" : `$${item.price}`}
            </div>
            <button
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
