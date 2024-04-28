import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa6";
export default function PackageDeatils() {
  const [data, setData] = useState(null);
  const {
    cost,
    countryName,
    description,
    location,
    photoURL,
    season,
    spotName,
    totalVisitor,
  } = data || {};
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/places/id/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <section>
      <div className=" flex flex-col lg:flex-row gap-3 justify-between  lg:mt-16 mt-8">
        <div className=" lg:w-1/2 w-full order-1 lg:-order-1 my-auto ">
          <h1 className="lg:text-4xl text-3xl font-bold">{spotName}</h1>
          <div className=" border-b-4 border-t-4 rounded-2xl p-4 lg:my-4 my-2">
            <div className=" flex items-center gap-2">
              <FaLocationDot />
              <p>
                {location}, {countryName}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <GoPersonFill />
              <p>{totalVisitor} Visitors/Year</p>
            </div>
            <div className=" flex items-center gap-2">
              <FaCloud />
              <p>{season}</p>
            </div>
          </div>
          <div>
            <p>
              <span className=" text-lg font-semibold">Description: </span>
              {description}
            </p>
          </div>
          <div className="lg:py-2 lg:px-2 text-center lg:text-2xl text-xl font-semibold text-white lg:mt-5 mt-2 rounded-xl bg-green-500">
            <h3>
              Total Package Cost: <span>{cost} $ </span>
            </h3>
          </div>
        </div>
        <div className=" lg:w-1/2 w-full rounde">
          <img className="  w-full rounded-2xl" src={photoURL} alt="" />
        </div>
      </div>
    </section>
  );
}
