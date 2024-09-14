import React, { useState } from "react";
import StarRating from "../../components/discoverHospitalPage/StarRating"; // Assuming you're using this component for the star ratings
import { GoHeart } from "react-icons/go"; // Outline heart
import { FaHeart } from "react-icons/fa"; // Filled heart
import CacoonBaby from "../../assets/CacoonBaby.png";
import JohnsonBaby from "../../assets/JohnsonBaby.png";

function HealthProductCard() {
  // State to keep track of clicked heart icons
  const [selectedHearts, setSelectedHearts] = useState([]);

  const products = [
    {
      id: 1,
      image: CacoonBaby, 
      name: "Cacoon Baby Blanket - 100% soft cotton ....",
      rating: 4,
      totalRating: 40,
      MRP: "₹699",
      price: "₹349.50",
      discount: "50%",
    },
    {
      id: 2,
      image: JohnsonBaby, 
      name: "Johnson’s Baby Cream - 50g",
      rating: 4.5,
      totalRating: 55,
      MRP: "₹649",
      price: "₹324.50",
      discount: "50%",
    },
    {
      id: 3,
      image: CacoonBaby, 
      name: "Cacoon Baby Blanket - 100% soft cotton ....",
      rating: 3.5,
      totalRating: 20,
      MRP: "₹799",
      price: "₹479.40",
      discount: "40%",
    },
    {
      id: 4,
      image: JohnsonBaby, 
      name: "Johnson’s Baby Cream - 50g",
      rating: 5,
      totalRating: 78,
      MRP: "₹549",
      price: "₹274.50",
      discount: "50%",
    },
    {
      id: 5,
      image: CacoonBaby, 
      name: "Cacoon Baby Blanket - 100% soft cotton ....",
      rating: 4.8,
      totalRating: 90,
      MRP: "₹499",
      price: "₹299.40",
      discount: "40%",
    },
    {
      id: 6,
      image: JohnsonBaby, 
      name: "Johnson’s Baby Cream - 50g",
      rating: 4.2,
      totalRating: 65,
      MRP: "₹399",
      price: "₹239.40",
      discount: "40%",
    },
  ];

  // Toggle heart selection
  const toggleHeart = (id) => {
    setSelectedHearts((prevSelectedHearts) =>
      prevSelectedHearts.includes(id)
        ? prevSelectedHearts.filter((heartId) => heartId !== id)
        : [...prevSelectedHearts, id]
    );
  };

  return (
    <div className="px-6 border-b-4 pb-4 mb-40">
      <h1 className="pb-4 font-semibold text-[#0086ff]">Healthy Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-40 rounded-2xl cursor-pointer hover:shadow-md border-[2px] border-[#0086FF]"
          >
            {/* Heart Icon with click handler */}
            <div
              className="text-[27px] inline-block absolute top-4 right-3 z-50"
              onClick={() => toggleHeart(product.id)}
            >
              {/* Conditionally render either outline or filled heart */}
              {selectedHearts.includes(product.id) ? (
                <FaHeart className="text-[#00cccc]" /> // Filled heart when selected
              ) : (
                <GoHeart className="text-[#00cccc]" /> // Outline heart when not selected
              )}
            </div>

            {/* Product Image */}
            <div>
                <div className="bg-red-200 rounded-t-2xl ">
              <img
                src={product.image}
                alt={product.name}
                className="border-b-[2px] border-[#0086FF] rounded-t-2xl h-full w-full"
                />
                </div>

              {/* Product Details */}
              <div className="px-2">
                <p
                  className="text-[#0086FF] text-center font-medium text-wrap leading-none truncate p-[2.5px]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {product.name}
                </p>

                <div className="flex justify-center items-center">
                  <StarRating rating={product.rating} />
                  <span className="ml-2 text-[#0086FF] font-medium text-sm">
                    ({product.totalRating})
                  </span>
                </div>

                <p className="text-sm">
                  <span className="bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent">
                    MRP
                  </span>
                  <span
                    className="line-through bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent ml-1"
                    style={{
                      WebkitTextFillColor: "transparent",
                      WebkitTextStroke: "0.005px black",
                    }}
                  >
                    {product.MRP}
                  </span>
                </p>

                <p className="flex items-center gap-4 pb-1">
                  <span className="bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <div className="text-sm bg-red-500 text-white rounded-md px-1">
                    {product.discount} OFF
                  </div>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className="py-3 text-center mx-3 cursor-pointer hover:bg-[#b7ebee] mt-6 rounded-md bg-[#c2eef0]">View All</div>
    </div>
  );
}

export default HealthProductCard;
