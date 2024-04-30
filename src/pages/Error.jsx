import { Link } from "react-router-dom";
import error from "../assets/error.png";
export default function Error() {
  return (
    <div className=" w-full min-h-screen flex justify-center items-center">
      <div>
        <img src={error} alt="" />
        <Link to={"/"}>
          {" "}
          <h1 className=" text-center text-2xl font-bold py-1 bg-indigo-500 rounded-lg text-white">
            Go To Home
          </h1>
        </Link>
      </div>
    </div>
  );
}
