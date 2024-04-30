import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { Context } from "../routeControles/ContextServer";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function MyList() {
  const { userData, setDeleteData } = useContext(Context);

  const deleteUsers = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://server-code-woad.vercel.app/places/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            swal("Success! Your file has been deleted!", {
              icon: "success",
            });
            setDeleteData(data);
          })
          .catch((err) => console.log(err));
      } else {
        swal("Your  file is safe!");
      }
    });
  };

  return (
    <>
      {!userData.length == 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: { lg: "1.5rem", md: "1rem" },
                    fontWeight: "bold",
                  }}
                >
                  Image
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: { lg: "1.5rem", md: "1rem" },
                    fontWeight: "bold",
                  }}
                >
                  Spot Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: { lg: "1.5rem", md: "1rem" },
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Country
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: { lg: "1.5rem", md: "1rem" },
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Location
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: { lg: "1.5rem", md: "1rem" },
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Update / Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((data) => (
                <TableRow
                  key={data._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <img src={data.photoURL} alt="" width={100} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.spotName}
                  </TableCell>
                  <TableCell align="center">{data.countryName}</TableCell>
                  <TableCell align="center">{data.location}</TableCell>
                  <TableCell align="center">
                    <div className=" lg:block flex flex-col gap-2 justify-center">
                      <Link to={`/update/${data._id}`}>
                        {" "}
                        <button className=" px-2 py-1 bg-pink-500 text-white text-bold rounded-lg mr-2 ">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteUsers(data._id)}
                        className=" px-2 py-1 bg-red-500 text-white text-bold rounded-lg "
                      >
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h1 className=" lg:text-4xl text-2xl text-center py-5 font-bold">
          You Have No Data. Please Add Spot
        </h1>
      )}
    </>
  );
}
