import { Typewriter } from "react-simple-typewriter";
import Slider from "../components/slider/Slider";
import { useContext, useEffect, useState } from "react";
import { Context } from "../routeControles/ContextServer";
import { FaAnglesDown } from "react-icons/fa6";
import "./commonStyle/down-arrow.css";
import TouristCard from "../components/Header/TouristCard";
import Countries from "../components/Header/Countries";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  useEffect(() => {
    fetch("https://b9a10-server-side-saifullah-10.vercel.app/places/6")
      .then((res) => res.json())
      .then((data) => setPlaceData(data));

    fetch("https://b9a10-server-side-saifullah-10.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const { mode } = useContext(Context);
  return (
    <section className=" lg:mt-4 font-Poppins ">
      <div className=" lg:flex lg:px-20 ">
        <div className=" lg:w-1/2 lg:py-40 py-10">
          <h1 className=" text-2xl lg:text-4xl font-bold text-center lg:text-left ">
            Welcome To AfriTour
          </h1>
          <div className="">
            <h1
              className=" lg:text-left text-center lg:py-4 py-3"
              style={{
                margin: "auto 0",
                fontWeight: "normal",
              }}
            >
              {" "}
              <span
                style={{
                  color: mode === "light" ? "black" : "yellow",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "South Africa",
                    "Tanzania",
                    "Kenya",
                    "Morocco",
                    "Egypt",
                    "Namibia",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
          <div>
            <p className=" lg:pr-10 text-center lg:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              quibusdam iste adipisci hic reiciendis! Earum beatae eveniet
              pariatur blanditiis molestiae.
            </p>
          </div>
          <div className="down-arrow left-60 bottom-24 text-4xl lg:block hidden ">
            <FaAnglesDown />
          </div>
        </div>
        <div className=" lg:w-1/2">
          <Slider></Slider>
        </div>
      </div>
      {/* start tourist places */}
      <div className=" mt-10 lg:mt-20">
        <div className="lg:py-10 py-5">
          <h1 className=" lg:text-4xl text-2xl font-bold  text-center">
            Our Package
          </h1>
          <p className=" text-center lg:pt-2">
            Our Best Packages With Best Price
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-10">
          {placeData?.map((place) => (
            <TouristCard key={place._id} place={place} />
          ))}
        </div>
      </div>
      {/* start countries  */}
      <div className=" mt-10 lg:mt-20">
        <div className="lg:py-10 py-5">
          <h1 className=" lg:text-4xl text-2xl font-bold  text-center">
            Countries
          </h1>
          <p className=" text-center lg:pt-2">
            Those Countries We Are Currently Working
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-10">
          {countries.map((data) => (
            <Countries key={data._id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
