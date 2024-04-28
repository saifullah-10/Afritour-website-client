import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { FaLocationDot } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaPerson } from "react-icons/fa6";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { IoTime } from "react-icons/io5";
import { Button } from "@mui/material";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

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

export default function TouristCard({ place }) {
  const { _id, photoURL, spotName, totalVisitor, season, cost } = place;

  return (
    <Card>
      <CardMedia
        className=" !h-[300px] !w-full !bg-cover !object-contain"
        component="img"
        image={photoURL}
        alt="Paella dish"
      />
      <CardContent>
        <div className=" lg:text-3xl text-xl font-extrabold">
          <p>{spotName}</p>
        </div>

        <div className=" flex items-center gap-1 pb-2 mt-3">
          <FaPerson />
          <p className="font-medium">
            Visitor/Year: <span>{totalVisitor}</span>
          </p>
        </div>
        <div className=" flex items-center gap-1 pb-2">
          <IoTime />
          <p className="font-medium">
            {" "}
            Travel Time: <span>{season}</span>
          </p>
        </div>
        <div className=" flex items-center gap-1 ">
          <FaLocationDot />
          <span className="font-medium">Cairo, Egypt</span>
        </div>
      </CardContent>
      <CardContent className=" !p-0 !pl-4">
        <Typography
          variant="body2"
          color="text.secondary"
          className=" lg:!text-lg !font-medium"
        >
          <div className=" flex items-center gap-1 py-2 mr-4  rounded-xl bg-orange-500">
            <p className="font-bold text-lg lg:text-2xl text-white  text-center w-full">
              Package Price: <span>{cost} USD</span>
            </p>
          </div>
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
          <Link to={`/places/${_id}`}>
            <Button
              variant="text"
              className=" !text-xl !font-semibold !bg-gray-200 "
            >
              View Details
            </Button>
          </Link>
        </ExpandMore>
      </CardActions>
    </Card>
  );
}

TouristCard.propTypes = {
  place: PropTypes.node,
};
