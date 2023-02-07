import { Card, CardActions, CardContent, Rating, Typography } from "@mui/material"

const TeacherCard = ({name, desc}) => {
  return (
    <Card>
    <CardContent>
    <Typography>{name}</Typography>
    <Typography>{desc}</Typography>
    <Rating size="small" defaultValue={5}/>
    </CardContent>
    <CardActions></CardActions>
    </Card>
  )
}

export default TeacherCard
