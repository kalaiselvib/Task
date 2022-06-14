/** @format */

import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  const navItems = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about us",
      path: "/about",
    },
    {
      name: "gallery",
      path: "/gallery",
    },
    {
      name: "contact us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="App">
      <Navbar navItems={navItems} />
      <Homepage />
      <Footer/>
    </div>
  );
}

export default App;
