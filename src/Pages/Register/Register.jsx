import './register.scss'
import { FavoriteBorderSharp, PersonOutlineRounded,  RoomOutlined,  ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../Images/nanduchefRound.png";


const headerStyle = {
    backgroundColor: "rgb(0, 0, 0, 0.1)",
    padding: "10px 30px",
}


const Register = () => {
    return (
        <>
            <div className="register_page">
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
                <div className='register_container' >
                    <div className="register_wrapper">
                        <p className='title'>CREATE AN ACCOUNT</p>
                        <form action="">
                            <input type="text" placeholder='first name' />
                            <input type="text" placeholder='last name' />
                            <input type="text" placeholder='username' />
                            <input type="email" placeholder='email' />
                            <input type="password" placeholder='password' />
                            <input type="password" placeholder='confirm password' />
                            <span>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
                            <Link to='/login'>Already have Account? </Link>
                            <button type='submit '>CREATE ACCOUNT</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register