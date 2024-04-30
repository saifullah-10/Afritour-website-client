import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
export default function Countries({ data }) {
  const { image, country_name, description } = data;
  return (
    <Link to={`/countryspots/${country_name}`}>
      <div>
        <div className="w-full mx-auto">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-full  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 ">
                  {country_name}
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 ">
                <span className=" text-lg font-semibold">Description: </span>{" "}
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Countries.propTypes = {
  data: PropTypes.obj,
};
