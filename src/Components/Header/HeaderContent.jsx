import './HeaderContent.scss'
import logo from '../../Images/nanduchefRound.png'
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { FavoriteBorderSharp, PersonSharp, RoomSharp, Search, ShoppingCartOutlined, Menu } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const HeaderContent = () => {
  // const [search,setSearch] = useState('')
  const navigate = useNavigate()


  const searchOnChangeHandler = (e) => {
    navigate(`/search?query=${e.target.value}`)
  }
  return (
    <div className="header_content">
      <div className="menubtn">
        <Menu />
      </div>
      <a className="logo" href="/">
        <img src={logo} alt="nandu-chef" />
      </a>
      <div className="search_box">
        <input type="text" onChange={searchOnChangeHandler} placeholder="Search" />
        <button type="submit">
          <Search />
        </button>
      </div>
      <div className="quick_links">
        <Link to="/findStore">
          <span>Find Our Store</span>
          <RoomSharp />
        </Link>
        <Link to="#">
          <PersonSharp />
        </Link>
        <Link to="#">
          <FavoriteBorderSharp />
        </Link>
        <Link to="#">
          <Badge badgeContent={4} color="secondary" overlap="rectangular">
            <ShoppingCartOutlined />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default HeaderContent;
