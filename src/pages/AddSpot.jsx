import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import Lottie from "lottie-react";
import groovyWalkAnimation from "../lottiefiles/deer.json";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Context } from "../routeControles/ContextServer";
import swal from "sweetalert";

export default function AddSpot() {
  const { user, setCurrentData } = useContext(Context);

  const { uid } = user;
  const [countryName, setcountryName] = useState("");
  const handleChange = (event) => {
    setcountryName(event.target.value);
  };
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    data.countryName = countryName;
    if (!data.countryName) {
      swal("Please Provide A country", "", "error");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      swal("Please Provide A Valid Email", "", "error");
      return;
    }
    data.uid = uid;
    fetch("https://b9a10-server-side-saifullah-10.vercel.app/places", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentData(data);
        swal("Successfully Added", "", "success");
        reset();
      })
      .catch((err) => {
        swal("Somthing Went Wrong", "", "error");
        console.error(err);
      });
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
            required
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email")}
            required
          />
          <TextField
            id="outlined-basic"
            label="Photo URL"
            variant="outlined"
            {...register("photoURL")}
            required
          />
          <TextField
            id="outlined-basic"
            label="Tourist Spot Name"
            variant="outlined"
            {...register("spotName")}
            required
          />
          {/* <TextField
            id="outlined-basic"
            label=" Spot Country Name"
            variant="outlined"
            {...register("countryName")}
            required
          /> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              rules={{ required: "Country Name is required" }}
              // value="Country Name"
              label="Country Name"
              // inputRef={register}
              name="countryName"
              onChange={handleChange}
            >
              <MenuItem value="South Africa">South Africa</MenuItem>
              <MenuItem value="Tanzania">Tanzania</MenuItem>
              <MenuItem value="Kenya">Kenya</MenuItem>
              <MenuItem value="Morocco">Morocco</MenuItem>
              <MenuItem value="Egypt">Egypt</MenuItem>
              <MenuItem value="Namibia">Namibia</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Spot Location"
            variant="outlined"
            {...register("location")}
            required
          />
          <TextField
            id="outlined-basic"
            label="Spot Description"
            variant="outlined"
            {...register("description")}
            required
          />
          <TextField
            id="outlined-basic"
            label="Avarage Cost"
            variant="outlined"
            type="number"
            {...register("cost")}
            required
          />
          <TextField
            id="outlined-basic"
            label="Seasonality - Like Summer, Winter"
            variant="outlined"
            {...register("season")}
            required
          />
          <TextField
            id="outlined-basic"
            label="Travel Time - Like 7 Days"
            type="number"
            variant="outlined"
            {...register("travelTime")}
            required
          />
          <TextField
            id="outlined-basic"
            label="Total Visitor Per Year"
            variant="outlined"
            type="number"
            {...register("totalVisitor")}
            required
          />
          <button className=" bg-green-500 hover:bg-green-600 rounded-xl lg:py-2 text-white py-1 lg:text-xl font-lg font-semibold">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
