import { Box, Grid } from "@mui/material"
import { ClassroomCard } from "./ClassroomCard"

export const ClassroomList = ({classrooms})=>{
    return (
        <Box sx={{ flexGrow: 1, m:5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {classrooms.map(classroom => (
                    <Grid item xs={2} sm={4} md={3} key={classroom.id} >
                        <ClassroomCard classroom={classroom}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}