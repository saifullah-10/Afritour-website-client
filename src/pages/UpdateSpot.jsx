import { useContext, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Context } from "../routeControles/ContextServer";
import swal from "sweetalert";

export default function UpdateSpot() {
  const { setUpdateData } = useContext(Context);
  const id = useParams();
  const [countryName, setcountryName] = useState("");
  const handleChange = (event) => {
    setcountryName(event.target.value);
  };
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    data.countryName = countryName;
    if (!data.countryName) {
      swal("Please Provide A country", "", "error");
      return;
    }
    console.log(data);
    fetch(`https://server-code-woad.vercel.app/places/update/${id.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateData(data);
        swal("Updated", "", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("Something Wrong", "", "error");
      });
  };

  return (
    <div className=" lg:my-10">
      <div className=" border-b-rose-400 border-b-4 mb-5">
        <h1 className=" lg:text-4xl text-2xl font-bold text-center lg:py-5 py-3">
          Update Data
        </h1>
      </div>
      <div>
        <div className=" lg:w-1/2 mx-auto ">
          <form
            className="flex flex-col gap-3 !text-white"
            onSubmit={handleSubmit(submit)}
          >
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
            {/* <TextField
              id="outlined-basic"
              label=" Spot Country Name"
              variant="outlined"
              {...register("countryName")}
            /> */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Country Name
              </InputLabel>
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
