import React from "react";
import useUser from "state/user/useUser";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import Header from "components/Header";
import RecipeReviewCard from "components/RecipeReviewCard";

function Dashboard() {
  const { user } = useUser();

  return (
    <div>
      <Header />

      <Container fixed>
        <Box pt={10} pb={5}>
          <Typography variant="h5" gutterBottom component="h2">
            Bienvenido(a) {user.displayName}
          </Typography>
          <Box py={2} />
          <Typography variant="subtitle1" component="p">
            Esta es la lista de <strong>servicios</strong> que te podrían
            <strong> interesar</strong>:
          </Typography>
        </Box>
      </Container>

      <Container fixed>
        <Grid container>
          {[...Array(24)].map(() => (
            <Grid item xs={12} md={4}>
              <Box py={3}>
                <RecipeReviewCard />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
