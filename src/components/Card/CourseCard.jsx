import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EastIcon from "@mui/icons-material/East";

const CourseCard = ({
  offer,
  followed,
  viewed,
  liked,
  title,
  time,
  lectures,
  proficiency,
  fee,
}) => {
  return (
    <Card sx={{ maxWidth: 340, position: "relative" }}>
      <CardContent
        sx={{
          backgroundImage: `url("https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
          height: 190,
          width: 340,
          objectFit: "cover",
          display: "flex",
          gap: "1rem",
          backgroundSize: "100%",
        }}
      >
        <Typography
          sx={{
            bgcolor: "#1a237e",
            height: 25,
            color: "#fff",
            padding: "0 0.5rem",
          }}
        >
          Featured
        </Typography>
        <Typography
          sx={{
            bgcolor: "#1e88e5",
            height: 25,
            color: "#fff",
            padding: "0 0.5rem",
          }}
        >
          {offer}
        </Typography>
      </CardContent>
      <Avatar alt="course-avatar" sx={{ my: -2.5, ml: 32 }} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ py: 2 }}>
          <Chip
            icon={<PersonOutlineOutlinedIcon/>}
            label={followed}
            sx={{ bgcolor: "transparent", '& .MuiChip-icon' : {color: "#ef6c00", ml: 0, border: "1px solid whitesmoke", borderRadius: '50%', p: 0.2} }}
          />
          <Chip
            icon={<VisibilityOutlinedIcon/>}
            label={viewed}
            sx={{ bgcolor: "transparent", '& .MuiChip-icon' : {color: "#ef6c00", ml: 0, border: "1px solid whitesmoke", borderRadius: '50%', p: 0.2} }}
          />
          <Chip
            icon={<StarBorderOutlinedIcon/>}
            label={liked}
            sx={{ bgcolor: "transparent", '& .MuiChip-icon' : {color: "#ef6c00", ml: 0, border: "1px solid whitesmoke", borderRadius: '50%', p: 0.2} }}
          />
        </Stack>
        <Typography variant="h6" sx={{fontWeight: '500'}}>{title}</Typography>
        <Stack direction="row" sx={{ py: 2 }}>
          <Chip
            icon={<WatchLaterIcon/>}
            label={time}
            sx={{ bgcolor: "transparent", '& .MuiChip-icon' : {color: "#1a237e", ml: 0} }}
          />
          <Chip
            icon={<VideoCallIcon/>}
            label={lectures}
            sx={{ bgcolor: "transparent", '& .MuiChip-icon' : {color: "#1a237e", ml: 0} }}
          />
          <Chip
            icon={<FormatListBulletedIcon/>}
            label={proficiency}
            sx={{ bgcolor: "transparent", '& .MuiChip-icon' : {color: "#1a237e", ml: 0} }}
          />
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between", bgcolor: '#b3e5fc', alignItems: 'center' }}>
        <Typography
          sx={{ display: "flex", alignItems: "center", fontSize: '0.8rem'}}
        >
          <AttachMoneyIcon sx={{fontSize: '18px'}}/>
          {fee}
        </Typography>
        <Button endIcon={<EastIcon/>} size="small" sx={{color: "#1a237e", textTransform: 'capitalize', fontSize: '0.8rem'}}>More Details</Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
