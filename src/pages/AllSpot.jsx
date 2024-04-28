import { useEffect, useState } from "react";
import TouristCard from "../components/Header/TouristCard";

export default function AllSpot() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="lg:mt-10 mt-8">
      <div className=" lg:text-4xl text-3xl text-center font-bold border-b-2 pb-4 border-orange-500">
        <h1>All Tourist Spots</h1>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap6 lg:mt-8">
        {data.map((place) => (
          <TouristCard key={place._id} place={place} />
        ))}
      </div>
    </div>
  );
}
