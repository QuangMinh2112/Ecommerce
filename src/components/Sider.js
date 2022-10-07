import Logo from "../assets/logo/logo.svg";
import UserImg from "../assets/user.png";

const Sider = () => {
  return (
    <div className="center-vertical sider">
      <div className="center-vertical sider__logo">
        <img className="sider__logo-img" src={Logo} alt="Blushop" />
        <p className="font-face-o-bold sider__logo-text">Blushop</p>
      </div>
      <div className="center-vertical sider__user">
        <img className="sider__user-img" src={UserImg} alt="User" />
        <p className="font-face-o-light sider__user-name">Username</p>
      </div>
      <hr className="separate-line" />
      <div className="center-vertical sider__menu">
        <i className="sider__menu-icon sider__menu-icon--checked fa-solid fa-house"></i>
        <i className="sider__menu-icon fa-solid fa-magnifying-glass"></i>
        <i className="sider__menu-icon fa-regular fa-cart-shopping"></i>
        <i className="sider__menu-icon fa-solid fa-heart"></i>
      </div>
      <hr className="separate-line" />
      <div className="center-vertical sider__submenu">
        <i className="sider__menu-icon fa-solid fa-bars"></i>
        <i className="sider__menu-icon fa-regular fa-bell"></i>
      </div>
    </div>
  );
};

export default Sider;
