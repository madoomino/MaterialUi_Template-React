import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardMedia, CardContent, Container } from "@mui/material";

export default {
  StyledContainer: styled(Container)(
    ({ theme }) => `
    margin-top: 4rem;
    background-color: ${theme.palette.background.paper};
  `
  ),
  StyledButtonsContainer: styled(Grid)`
    margin-top: 1rem;
    gap: 1rem;
  `,
  StyledCardGrid: styled(Container)`
    margin-top: 6rem;
    padding: 20px 0;
  `,
  StyledCard: styled(Card)`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  StyledCardMedia: styled(CardMedia)`
    padding-top: 56.25%;
  `,
  StyledCardContent: styled(CardContent)`
    flex-grow: 1;
  `,
  StyledFooter: styled("footer")`
    margin-top: 2rem;
    background-color: #fff;
    padding: 50px 0;
  `,
};
