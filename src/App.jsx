import "./App.scss";
// import your icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import { Routes, Route } from "react-router-dom";
import Confectionery from "./Pages/Confectionery/Confectionery";
import BakeryBiscuit from "./Pages/BakeryBiscuits/BakeryBiscuits";
import LiveBakery from "./Pages/LiveBakery/LiveBakery";
import GoForWheat from "./Pages/GoForWheat/GoForWheat";
import Grocery from "./Pages/Grocery/Grocery";
import WholesaleEnquiry from "./Pages/WholesaleEnquiry/WholesaleEnquiry";
import FindStore from "./Pages/FindStore/FindStore";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nanduchef" element={<Home />} />
        <Route path="/findStore" element={<FindStore />} />
        <Route path="/about" element={<About />} />
        <Route path="/confectionery" element={<Confectionery />} />
        <Route path="/bakeryBiscuits" element={<BakeryBiscuit />} />
        <Route path="/liveBakery" element={<LiveBakery />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/goForWheat" element={<GoForWheat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wholesaleEnquiry" element={<WholesaleEnquiry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      {/* <Register /> */}

    </>
  );
}
export default App;
library.add(fab, fas, far);
