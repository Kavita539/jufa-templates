import React from 'react';
import { Box, IconButton, Stack, Typography } from "@mui/material";

import CourseCard from "../components/Card/CourseCard";

import courseData from "../data/courseData";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const Body = () => {
  return (
    <>
    <Stack sx={{ justifyContent: "flex-start", mx: 54, pt: 4 }}>
    <Typography
      variant="subtitle1"
      color="#ef6c00"
      sx={{ textAlign: "left" }}
    >
      Online Courses
    </Typography>
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      <Typography variant="h6" fontSize="1.5rem" fontWeight="500">
        Explore Featured Courses
      </Typography>
      <Stack direction="row">
        <IconButton>
          <WestIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <EastIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  </Stack>

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
    }}
  >
    <Stack direction="row" spacing={3}>
      {courseData.map((course) => (
        <CourseCard
          offer={course.offer}
          title={course.title}
          followed={course.followed}
          viewed={course.viewed}
          liked={course.liked}
          time={course.time}
          lectures={course.lectures}
          proficiency={course.proficiency}
          fee={course.fee}
        />
      ))}
    </Stack>
  </Box>
    </>
  )
}

export default Body
