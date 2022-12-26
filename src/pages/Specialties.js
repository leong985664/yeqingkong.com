import * as React from "react"
import { Chip, Container, Typography } from "@mui/material";

const Specialties = (props) => {
  const { specialties } = props;

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Specialties</Typography>
      {specialties.map(specialty => {
        return <Chip color="primary" variant="outlined" size="large" label={specialty.name} sx={{ margin: 0.5 }}/>
      })}
    </Container>
  )
}

export default Specialties;
