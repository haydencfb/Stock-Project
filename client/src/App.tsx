import { Outlet } from "react-router-dom"
import { CssBaseline } from "@mui/material";
import Nav from "./components/nav-comp-folder/Nav";
import Footer from "./components/footer-comp-folder/Footer";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Header from "./components/condHeader-comp-folder/Header";

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/' || location.pathname === '/SignupPage';

  return (
    <>
      <CssBaseline />
      
      {hideNavAndFooter ? (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <>
          <Nav />
            <main>
              <Outlet />
            </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
