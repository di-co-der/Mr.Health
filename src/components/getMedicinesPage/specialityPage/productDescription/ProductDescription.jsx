import React from "react";
import { useParams, useNavigate } from "react-router-dom";

//components
import Header from "../../Header";
import LocationDropdown from "../../LocationDropdown";
import NoProductCard from "../NoProductCard";
import StarRating from "../../../discoverHospitalPage/StarRating";
import FooterList from "./FooterList";

//data
import medicines from "../../../../data/medicines";


function ProductDescription() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = medicines.find(
    (product) => product.id === parseInt(productId)
  );

  // Debugging: Log the productId and type
  console.log("Product ID from URL:", productId, typeof productId);
  // Debugging: Log the product object to see if it was found
  console.log("Product found:", product);
  if (!product) {
    return <NoProductCard />;
  }

  return (
    <div className=" max-w-sm mx-auto min-h-screen flex justify-center ">
      <div className="max-w-sm w-full">
        <header className="pt-12">
          <Header title={product.name} />
        </header>
        <LocationDropdown
          locations={[
            "Agra",
            "Delhi",
            "Bengaluru",
            "Chennai",
            "Kolkata",
            "Mumbai",
          ]}
          defaultLocation="Mumbai"
        />
        <div className="border-t-4 mt-4 pb-20 px-4">
          <div className="flex justify-center p-4">
            <img src={product.image} alt={product.name} className="h-60" />
          </div>

          <h1 className="text-xl font-semibold ">{product.name}</h1>

          <div className="add-qty-button">
            <p className="text-lg font-bold">{product.MRP}</p>
            <p className="text-sm">Inclusive of all taxes</p>
            <p className="text-sm text-white bg-red-500 inline rounded-md px-2">
              Discount: {product.discount}
            </p>
          </div>
          <div className="flex items-center border-b-2 py-4">
            <StarRating rating={product.rating} />
            <span className="ml-2 text-[#0086FF] font-medium text-sm italic">
              ({product.totalRating})
            </span>
          </div>

          <div className="border-b-4 py-4">
          <h3 className=" font-semibold text-[#0086FF] pb-4">Select Pack Size</h3>
            <div className="flex items-center gap-2">
              <button className="border-2 px-4 text-sm rounded-lg py-1 hover:border-red-500 hover:text-red-600"> 150g </button>            
              <button className="border-2 px-4 text-sm rounded-lg py-1 hover:border-red-500 hover:text-red-600"> 250g </button>
            <button className="border-2 px-4 text-sm rounded-lg py-1 hover:border-red-500 hover:text-red-600"> 300g </button>
            </div>
          </div>


          <h3 className="py-4 font-semibold text-[#0086FF] ">Product Description</h3>
          <p className="border-b-4 pb-4">{product.ProductDescription}</p>

          <h3 className="py-4 font-semibold text-[#0086FF]">Ingredients:</h3>
          <ul className="list-disc list-inside border-b-4 pb-4">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3 className="py-4 font-semibold text-[#0086FF]">Benefits:</h3>
          <p className="border-b-4 pb-4">{product.Benefits}</p>
        </div>
        <FooterList />
      </div>
    </div>
  );
}

export default ProductDescription;
