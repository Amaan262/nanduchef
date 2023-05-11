import "./App.scss";
// import your icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Hero from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import { Routes, Route } from "react-router-dom";
import Confectionery from "./Components/Confectionery/Confectionery";
import BakeryBiscuit from "./Components/BakeryBiscuits/BakeryBiscuits";
import LiveBakery from "./Components/LiveBakery/LiveBakery";
import Grocery from "./Components/Grocery/Grocery";
import GoForWheat from "./Components/GoForWheat/GoForWheat";
import WholesaleEnquiry from "./Components/WholesaleEnquiry/WholesaleEnquiry";
import Breads from "./Components/LiveBakery/Breads";
import FindStore from "./Components/FindStore/FindStore";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/nanduchef" element={<Hero />} />
        <Route path="/findStore" element={<FindStore/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/confectionery" element={<Confectionery />} />
        <Route path="/bakeryBiscuits" element={<BakeryBiscuit />} />
        <Route path="/liveBakery" element={<LiveBakery />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/goForWheat" element={<GoForWheat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wholesaleEnquiry" element={<WholesaleEnquiry />} />
        <Route path="/liveBakery/breads" element={<Breads />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
library.add(fab, fas, far);
