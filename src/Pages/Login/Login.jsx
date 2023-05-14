import './Login.scss'
import logo from "../../Images/nanduchefRound.png";
import { Link } from "react-router-dom";
import { FavoriteBorderSharp, PersonOutlineRounded, RoomOutlined, ShoppingCartOutlined } from "@material-ui/icons";

const headerStyle = {
    backgroundColor: "rgb(0, 0, 0, 0.1)",
    padding: "10px 30px",
}


const Login = () => {
    return (
        <>

            <div className="login_page">
                <div className="header_content" style={headerStyle}>
                    <a className="logo" href="/nanduchef">
                        <img src={logo} alt="nandu-chef" />
                    </a>
                    <div className="quick_links">
                        <Link to="/findStore">
                            <span>Find Our Store</span>
                            <RoomOutlined className='icon' />
                        </Link>
                        <Link to="#">
                            <PersonOutlineRounded className='icon' />
                        </Link>
                        <Link to="#">
                            <FavoriteBorderSharp className="icon" />
                        </Link>
                        <Link to="#">
                            <ShoppingCartOutlined className="icon" />
                        </Link>
                    </div>
                </div>

                <div className='login_container'>
                    <div className="login_wrapper">
                        <p className='title'>SIGN IN</p>
                        <form action="">
                            <input type="text" placeholder='username' />
                            <input type="email" placeholder='email' />
                            <input type="password" placeholder='password' />
                            <button type='submit '>LOGN IN</button>
                            <Link to="#/">FORGET PASSWORD?</Link>
                            <Link to="/Register">CREATE AN ACCOUNT</Link>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login