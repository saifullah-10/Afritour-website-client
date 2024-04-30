import { PropTypes } from "prop-types";
import { useContext } from "react";

import { FaCloud } from "react-icons/fa";

import { IoPricetag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Context } from "../routeControles/ContextServer";
export default function CountryCard({ place }) {
  const { loader } = useContext(Context);
  const {
    _id,
    photoURL,
    countryName,
    description,
    location,

    spotName,
    season,
    cost,
  } = place;
  console.log(loader);
  return (
    <>
      {!loader ? (
        <div className="max-w-full bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <div className="relative">
            <img className="w-full rounded-xl" src={photoURL} alt="Image" />
          </div>
          <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
            {spotName}
          </h1>
          <div className="my-4">
            <div className="flex space-x-1 items-center text-xl font-bold">
              <p>{countryName},</p>
              <p>{location}</p>
            </div>
            <div className="flex space-x-1 items-center lg:my-2 my-1">
              <span>
                <IoPricetag className=" text-xl text-indigo-500" />
              </span>
              <p>{cost} USD</p>
            </div>
            <div className="flex space-x-1 items-center">
              <span>
                <FaCloud className=" text-xl text-indigo-500" />
              </span>
              <p>{season}</p>
            </div>
            <div className="flex space-x-1 ">
              <p className="  text-lg lg:text-xl font-medium text-gray-700">
                Description:{" "}
              </p>
              <p>{description}</p>
            </div>
            <Link to={`/places/${_id}`}>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </>
  );
}
CountryCard.propTypes = {
  place: PropTypes.node,
  loader: PropTypes.boll,
};
