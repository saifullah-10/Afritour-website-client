import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TouristCard from "../components/Header/TouristCard";

export default function CountrySpots() {
  const [spots, setspots] = useState([]);
  const country = useParams();
  console.log(country.country);
  useEffect(() => {
    fetch(`http://localhost:5000/places/country/${country.country}`)
      .then((res) => res.json())
      .then((data) => setspots(data));
  }, [country.country]);
  return (
    <div className=" lg:my-10 my-5">
      <div className=" border-b-4 border-indigo-500 pb-3 rounded-lg">
        <h1 className=" lg:text-4xl text-2xl font-bold text-center">
          Tourist Spot In {country.country}
        </h1>
      </div>
      <div className=" grid lg:grid-cols-3 gap-10 md:grid-cols-2 lg:mt-8">
        {spots.map((spot) => (
          <TouristCard key={spot._id} place={spot} />
        ))}
      </div>
    </div>
  );
}
