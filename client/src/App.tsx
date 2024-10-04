import { Outlet } from "react-router-dom"

import Nav from "./components/Nav Component Folder/Nav";
import Footer from "./components/Footer Component Folder/Footer";

function App() {
  return (
    <>
      <Nav />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default App;
