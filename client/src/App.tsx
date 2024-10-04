import { Outlet } from "react-router-dom"
import { CssBaseline } from "@mui/material";
import Nav from "./components/Nav Component Folder/Nav";
import Footer from "./components/Footer Component Folder/Footer";

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
