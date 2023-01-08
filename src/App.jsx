import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { PhotoCamera } from "@mui/icons-material";
import styles from "./styles";

const {
  StyledContainer,
  PhotoCameraStyled,
  StyledButtonsContainer,
  StyledCardGrid,
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  StyledFooter,
} = styles;

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => (
  <>
    <CssBaseline />
    <AppBar position="relative" sx={{ width: "100%" }}>
      <Toolbar sx={{ display: "flex", gap: "1rem" }}>
        <PhotoCamera />
        <Typography variant="h6">Photo Album</Typography>
      </Toolbar>
    </AppBar>
    <main>
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
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            aspernatur fuga qui rem distinctio deserunt voluptates asperiores.
          </Typography>
          <div>
            <StyledButtonsContainer
              container
              spacing={2}
              justifyContent="center"
            >
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
      <StyledCardGrid maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item maxWidth="sm" key={card} xs={12} sm={6} md={4}>
              <StyledCard>
                <StyledCardMedia
                  image="https://source.unsplash.com/random"
                  title="image title"
                />
                <StyledCardContent>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography gutterBottom variant="paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </Typography>
                </StyledCardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledCardGrid>
    </main>
    <StyledFooter>
      <Typography variant="h6" align="center" gutterBottom>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, modi.
      </Typography>
    </StyledFooter>
  </>
);

export default App;
