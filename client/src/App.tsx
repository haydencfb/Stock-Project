import { Outlet } from "react-router-dom"
import { CssBaseline } from "@mui/material";
import Nav from "./components/nav-comp-folder/Nav";
import Footer from "./components/footer-comp-folder/Footer";

function App() {


  return (
    <>
    <CssBaseline />
      <Nav />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default App;
