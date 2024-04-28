import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { IoMdPricetag } from "react-icons/io";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { FaLocationDot } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Countries() {
  return (
    <Card>
      {/* <CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"
      /> */}
      <CardMedia height="194">
        <div className=" grid grid-cols-2 gap-2 lg:p-3 p-1 ">
          <img
            className=" rounded-xl"
            src="https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className=" rounded-xl"
            src="https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />

          <img
            className=" rounded-xl"
            src="https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className=" rounded-xl"
            src="https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </CardMedia>
      <CardContent>
        <div className=" lg:text-3xl text-xl font-semibold">
          <p>Egypt</p>
        </div>
        <div className=" flex items-center gap-1 py-2">
          <IoMdPricetag />
          <p>
            Package Price: <span>450 USD</span>
          </p>
        </div>
        <div className=" flex items-center gap-1">
          <FaLocationDot />
          <span>Cairo, Egypt</span>
        </div>
      </CardContent>
      <CardContent className=" !p-0 !pl-4">
        <Typography
          variant="body2"
          color="text.secondary"
          className=" lg:!text-lg !font-medium"
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore>
          <Button variant="text">View Details</Button>
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
