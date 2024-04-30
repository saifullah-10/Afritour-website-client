import { useContext, useState } from "react";
import TouristCard from "../components/Header/TouristCard";
import { Context } from "../routeControles/ContextServer";

export default function AllSpot() {
  const { allData } = useContext(Context);
  const [sortData, setSortData] = useState(allData);
  const handleSort = () => {
    const sortedData = [...allData].sort(function (a, b) {
      return a.cost - b.cost;
    });
    setSortData(sortedData);
  };

  return (
    <div className="lg:mt-10 mt-8">
      <div className=" lg:text-4xl text-3xl text-center font-bold border-b-2 pb-4 border-orange-500">
        <h1>All Tourist Spots</h1>
      </div>
      <div className=" flex items-center lg:mt-8 mt-4">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#F5B041] text-[#FEF9E7] lg:text-3xl text-xl hover:bg-[#F8C471] font-semibold "
          >
            Sort
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={handleSort} className=" text-lg font-medium ">
              <a> Sort By Cost</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-6 mt-4 lg:mt-8">
        {sortData.map((place) => (
          <TouristCard key={place._id} place={place} />
        ))}
      </div>
    </div>
  );
}
