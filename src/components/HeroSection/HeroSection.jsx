import { Button, Typography, Grid } from "@mui/material";
import styles from "../../styles";
const { StyledContainer, StyledButtonsContainer } = styles;
const HeroSection = () => {
  return (
    <div>
      <StyledContainer maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          sx={{ marginTop: "2rem" }}
        >
          Photo Album
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          aspernatur fuga qui rem distinctio deserunt voluptates asperiores.
        </Typography>
        <div>
          <StyledButtonsContainer container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See my photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </StyledButtonsContainer>
        </div>
      </StyledContainer>
    </div>
  );
};

export default HeroSection;
