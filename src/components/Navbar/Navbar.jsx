import { PhotoCamera } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="relative" sx={{ width: "100%" }}>
      <Toolbar sx={{ display: "flex", gap: "1rem" }}>
        <PhotoCamera />
        <Typography variant="h6">Photo Album</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
