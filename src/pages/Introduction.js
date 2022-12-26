import { Container, Grid } from "@mui/material";
import * as React from "react"
import Contacts from "./Contacts";
import Biography from "./Biography";
import NameCard from "./NameCard";
import Specialties from "./Specialties";
import GetBiographyFromContentful from "../utils/GetBiographyFromContentful";
import GetContactsFromContentful from "../utils/GetContactsFromContentful";
import GetSpecialtiesFromContentful from "../utils/GetSpecialtiesFromContentful";

const Introduction = () => {

  const contentfulBiography = GetBiographyFromContentful();
  const contentfulContacts = GetContactsFromContentful();
  const contentfulSpecialties = GetSpecialtiesFromContentful();

  return (
    <Container disableGutters maxWidth="lg" sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <NameCard avatar={contentfulBiography.avatar.url} name={contentfulBiography.name} jobTitle={contentfulBiography.jobTitle}/>
          <Contacts contacts={contentfulContacts}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Biography content={contentfulBiography.content} cv={contentfulBiography.cv.url}/>
          <Specialties specialties={contentfulSpecialties}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Introduction;
