import * as React from "react"
import { Avatar, Container, Typography } from "@mui/material";

const NameCard = (props) => {
  const { avatar, name, jobTitle } = props;

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <div>
        <Avatar
          alt="Yeqing Kong"
          src={avatar}
          sx={{ width: 200, height: 200, margin: "auto" }}
        />
      </div>
      <Typography variant="h5" align="center" sx={{ pt: 3 }}>{name}</Typography>
      <Typography variant="subtitle1" align="center" sx={{ pt: 3 }}>{jobTitle}</Typography>
    </Container>
  )
}

export default NameCard;
