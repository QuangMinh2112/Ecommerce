import Logo from "../../assets/logo/logo.svg";
import UserImg from "../../assets/user.png";

const ProfileSider = () => {
  return (
    <div className="left-vertical profile-sider">
      <div className="center-horizontal profile-sider__logo">
        <img className="profile-sider__logo-img" src={Logo} alt="Blushop" />
        <p className="font-face-o-bold profile-sider__logo-text">Blushop</p>
      </div>
      <div className="center-horizontal profile-sider__user">
        <img className="profile-sider__user-img" src={UserImg} alt="User" />
        <div className="left-vertical profile-sider__user-detail">
          <p className="font-face-gs-black profile-sider__user-name">
            Example User
          </p>
          <p className="font-face-o-light profile-sider__user-email">
            example@gmail.com
          </p>
        </div>
      </div>
      <div className="left-vertical profile-sider__shopping-menu">
        <div className="center-horizontal profile-sider__menu-item">
          <i className="profile-sider__menu-item-icon fa-regular fa-cart-shopping"></i>
          <p className="font-face-gs-normal profile-sider__menu-item-name">Giỏ hàng</p>
        </div>
        <div className="center-horizontal profile-sider__menu-item">
          <i className="profile-sider__menu-item-icon fa-solid fa-heart"></i>
          <p className="font-face-gs-normal profile-sider__menu-item-name">Danh sách yêu thích</p>
        </div>
      </div>
      <hr className="separate-line-longer" />
      <div className="left-vertical profile-sider__profile-menu">
        <div className="center-horizontal profile-sider__menu-item">
          <i className="profile-sider__menu-item-icon fa-solid fa-file"></i>
          <p className="font-face-gs-normal profile-sider__menu-item-name">Hồ sơ của tôi</p>
        </div>
        <div className="center-horizontal profile-sider__menu-item profile-sider__menu-item--checked">
          <i className="profile-sider__menu-item-icon fa-solid fa-location-dot"></i>
          <p className="font-face-gs-normal profile-sider__menu-item-name">Địa chỉ</p>
        </div>
        <div className="center-horizontal profile-sider__menu-item">
          <i className="profile-sider__menu-item-icon fa-regular fa-credit-card"></i>
          <p className="font-face-gs-normal profile-sider__menu-item-name">Thanh toán</p>
        </div>
        <div className="center-horizontal profile-sider__menu-item">
          <i className="profile-sider__menu-item-icon fa-solid fa-clock-rotate-left"></i>
          <p className="font-face-gs-normal profile-sider__menu-item-name">Lịch sử mua hàng</p>
        </div>
        <div className="center-horizontal profile-sider__menu-item">
          <i className="profile-sider__menu-item-icon fa-solid fa-lock"></i>
          <p className="font-face-gs-normal profile-sider__menu-item-name">Đổi mật khẩu</p>
        </div>
      </div>
      <hr className="separate-line-longer" />
      <div className="center-horizontal profile-sider__logout">
          <i className="profile-sider__menu-item-icon fa-solid fa-right-from-bracket"></i>
          <p className="font-face-gs-bold profile-sider__menu-item-name">Đăng xuất</p>
        </div>
    </div>
  );
};

export default ProfileSider;
