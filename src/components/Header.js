import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img width={150} src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <li>
            <button className="ctaBtn" onClick={handleLogin}>
              {isLogin ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
