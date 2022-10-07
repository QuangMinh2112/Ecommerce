import Logo from "../../assets/logo/logo-colored.svg";
import Payment from "../../assets/payment.svg";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
import Zalo from "../../assets/zalo.svg";

const ProfileFooter = () => {
  return (
    <div className="left-vertical profile-footer">
      <div className="profile-footer__wrapper">
        <ul className="font-face-din-light profile-footer__list">
          <li className="font-face-din-bold bolder-primary profile-footer__item">Hỗ trợ khách hàng</li>
          <li className="text profile-footer__item">Hotline: 6677-1508</li>
          <li className="text profile-footer__item">Các câu hỏi thường gặp</li>
          <li className="text profile-footer__item">Gửi yêu cầu hỗ trợ</li>
          <li className="text profile-footer__item">Hướng dẫn đặt hàng</li>
          <li className="text profile-footer__item">Phương thức vận chuyển</li>
          <li className="text profile-footer__item">Chính sách đổi trả</li>
          <li className="text profile-footer__item">Hướng dẫn trả góp</li>
          <li className="text profile-footer__item">Chính sách hàng nhập khẩu</li>
          <li className="text profile-footer__item">Hỗ trợ khách hàng: hotro@blushop.vn</li>
          <li className="text profile-footer__item">Báo lỗi bảo mật: security@blushop.vn</li>
        </ul>
        <ul className="font-face-din-light profile-footer__list">
          <li className="font-face-din-bold bolder-primary profile-footer__item">Về Blushop</li>
          <li className="text profile-footer__item">Giới thiệu Blushop</li>
          <li className="text profile-footer__item">Tuyển dụng</li>
          <li className="text profile-footer__item">Chính sách bảo mật thanh toán</li>
          <li className="text profile-footer__item">Chính sách bảo mật thông tin cá nhân</li>
          <li className="text profile-footer__item">Chính sách giải quyết khiếu nại</li>
          <li className="text profile-footer__item">Điều khoản sử dụng</li>
          <li className="text profile-footer__item">Tiếp thị liên kết cùng Blushop</li>
          <li className="text profile-footer__item">Bán hàng doanh nghiệp</li>
          <li className="text profile-footer__item">Điều kiện vận chuyển</li>
        </ul>
        <ul className="font-face-din-light profile-footer__list">
          <li className="font-face-din-bold bolder-primary profile-footer__item">Hợp tác và liên kết</li>
          <li className="text profile-footer__item">Quy chế hoạt động Sàn GDTMĐT</li>
          <li className="text profile-footer__item">Bán hàng cùng Blushop</li>
          <li className="font-face-din-bold bolder-primary profile-footer__item profile-footer__item--margin-top">Phương thức thanh toán</li>
          <li className="profile-footer__item">
            <img className="profile-footer__item-img" src={Payment} alt="Payment" />
          </li>
        </ul>
        <ul className="font-face-din-light profile-footer__list">
          <li className="font-face-din-bold bolder-primary profile-footer__item">Kết nối với chúng tôi</li>
          <li className="profile-footer__item profile-footer__item-icon-list">
            <img className="profile-footer__item-icon" src={Facebook} alt="Facebook" />
            <img className="profile-footer__item-icon" src={Youtube} alt="Youtube" />
            <img className="profile-footer__item-icon" src={Zalo} alt="Zalo" />
          </li>
          <li className="profile-footer__item">
            <img className="profile-footer__item-logo" src={Logo} alt="Blushop" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileFooter;
