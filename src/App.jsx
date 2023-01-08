import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

const App = () => (
  <>
    <CssBaseline />
    <Navbar />
    <MainContent />
    <Footer />
  </>
);

export default App;
