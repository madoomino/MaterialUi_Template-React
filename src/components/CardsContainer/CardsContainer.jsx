import { Button, CardActions, Grid, Typography } from "@mui/material";
import styles from "../../styles";
const { StyledCardGrid, StyledCard, StyledCardMedia, StyledCardContent } =
  styles;
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const IMGS_URL = "https://source.unsplash.com/random/topics=sky";
const CardsContainer = () => {
  return (
    <StyledCardGrid maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item maxWidth="sm" key={card} xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardMedia
                image={IMGS_URL}
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
  );
};

export default CardsContainer;
