import { Box, IconButton, Stack, Typography } from "@mui/material";
import "./App.css";
import CourseCard from "./components/Card/CourseCard";
import NavBar from "./components/NavBar/NavBar";
import courseData from "./data/courseData";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <NavBar />
<Body/>

    </div>
  );
}

export default App;
