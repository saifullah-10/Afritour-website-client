import { Typewriter } from "react-simple-typewriter";
import Slider from "../components/slider/Slider";

export default function Home() {
  return (
    <section className=" lg:mt-4">
      <div className=" flex ">
        <div className=" lg:w-1/2">
          <h1>Welcome To AfriTourism</h1>
          <div>
            <h1
              style={{
                margin: "auto 0",
                fontWeight: "normal",
              }}
            >
              {" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Eat", "Sleep", "Code", "Repeat!"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
        <div className=" w-1/2">
          <Slider></Slider>
        </div>
      </div>
    </section>
  );
}
