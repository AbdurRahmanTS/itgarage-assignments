import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Profile.css"

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Profile = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className="profile">
        <CardHeader
          action={
            <IconButton aria-label="settings" className="plus-icon">
              <AddCircleOutlineIcon />
            </IconButton>
          }
        />
        <Avatar style={{width: "175px", height: "195px", margin: "auto", border: "5px solid #50597b"}} aria-label="recipe">
              <CardMedia
                component="img"
                height="194"
                image="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
                alt="Anne Hathaway picture"
              />
            </Avatar>
        <CardContent>
        <h1 style={{color: "white"}}>Anne Hathaway</h1>
          <Typography variant="body2" color="#9099b7">
          Lorem ipsum dolor sit amet consectetuer adipiscing
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ul className="profile-options">
            <li><a className="comments" href="#40"><p><CommentIcon className="icon" />23</p></a></li>
            <li><a className="views" href="#41"><p><VisibilityIcon className="icon" />841</p></a></li>
            <li><a className="likes" href="#42"><p><FavoriteBorderIcon className="icon" />49</p></a></li>
        </ul>
        </CardActions>
      </Card>
    </div>
  );
};

export default Profile;
