import "./App.scss";
import Header from "./Components/Header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import Hero from "./Components/Hero/Hero";
// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
    <Header />
    <Hero/>
    <Footer/>
    </>
  );
}
export default App;
library.add(fab, fas, far)
