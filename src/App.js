import "./App.scss";
import Header from "./Components/Header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
function App() {
  return (
    <>
    <Header />
    </>
  );
}
export default App;
library.add(fab, fas, far)
