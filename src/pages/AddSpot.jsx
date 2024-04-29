import { TextField } from "@mui/material";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../lottiefiles/deer.json";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Context } from "../routeControles/ContextServer";

export default function AddSpot() {
  const { user, setCurrentData } = useContext(Context);

  const { uid } = user;

  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    data.uid = uid;
    fetch("http://localhost:5000/places", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setCurrentData(data));
  };
  return (
    <div className=" mt-5 flex lg:my-10 my-8">
      <div className=" hidden lg:block lg:w-1/2">
        <Lottie animationData={groovyWalkAnimation} />
      </div>
      <div className=" font-Poppins w-full lg:w-1/2 ">
        <div>
          <h1 className=" lg:text-4xl text-2xl font-bold text-center lg:py-5 py-3">
            Add Tourist Spot
          </h1>
        </div>
        <form
          className="flex flex-col gap-3 !text-white"
          onSubmit={handleSubmit(submit)}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            {...register("name")}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Photo URL"
            variant="outlined"
            {...register("photoURL")}
          />
          <TextField
            id="outlined-basic"
            label="Tourist Spot Name"
            variant="outlined"
            {...register("spotName")}
          />
          <TextField
            id="outlined-basic"
            label=" Spot Country Name"
            variant="outlined"
            {...register("countryName")}
          />
          <TextField
            id="outlined-basic"
            label="Spot Location"
            variant="outlined"
            {...register("location")}
          />
          <TextField
            id="outlined-basic"
            label="Spot Description"
            variant="outlined"
            {...register("description")}
          />
          <TextField
            id="outlined-basic"
            label="Avarage Cost"
            variant="outlined"
            type="number"
            {...register("cost")}
          />
          <TextField
            id="outlined-basic"
            label="Seasonality - Like Summer, Winter"
            variant="outlined"
            {...register("season")}
          />
          <TextField
            id="outlined-basic"
            label="Travel Time - Like 7 Days"
            type="number"
            variant="outlined"
            {...register("travelTime")}
          />
          <TextField
            id="outlined-basic"
            label="Total Visitor Per Year"
            variant="outlined"
            type="number"
            {...register("totalVisitor")}
          />
          <button className=" bg-green-500 rounded-xl lg:py-2 text-white py-1 lg:text-xl font-lg font-semibold">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
