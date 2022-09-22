import React from "react";
import "./footer.css";
import "../FontAwesome/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_info">
        <ul className="footer_info_list">
          <h4>Hỗ trợ khách hàng</h4>
          <li>Hotline: 6677-1508</li>
          <li>Các câu hỏi thường gặp</li>
          <li>Gửi yêu cầu hỗ trợ</li>
          <li>Hướng dẫn đặt hàng</li>
          <li>Phương thức vận chuyển</li>
          <li>Chính sách đổi trả</li>
          <li>Hướng dẫn trả góp</li>
          <li>Chính sách hàng nhập khẩu</li>
          <li>Hỗ trợ khách hàng: hotro@blushop.vn</li>
          <li>Báo lỗi bảo mật: security@blushop.vn</li>
        </ul>
      </div>
      <div className="footer_info">
        <ul className="footer_info_list">
          <h4>Về Blushop</h4>
          <li>Giới thiệu Tiki</li>
          <li>Tuyển dụng</li>
          <li>Chính sách bảo mật thanh toán</li>
          <li>Chính sách bảo mật thông tin cá nhân</li>
          <li>Chính sách giải quyết khiếu nại</li>
          <li>Điều khoản sử dụng</li>
          <li>Tiếp thị liên kết cùng Blushop</li>
          <li>Bán hàng doanh nghiệp</li>
          <li>Điều kiện vận chuyển</li>
        </ul>
      </div>
      <div className="footer_info">
        <ul className="footer_info_list">
          <h4>Hợp tác và liên kết</h4>
          <li>Quy chế hoạt động Sàn GDTMĐT</li>
          <li>Bán hàng cùng Blushop</li>
        </ul>
        <ul className="footer_info_list">
          <h4>Phương thức thanh toán</h4>
          <div class="footer_info_card">
            <img
              src="https://thuvienmuasam.com/uploads/default/original/1X/e39c1355bc0ea0915980948c5715d58171c0ea11.png"
              alt="card"
              width="300px"
            />
          </div>
        </ul>
      </div>
      <div className="footer_info">
        <ul className="footer_info_list">
          <h4>Kết nối với chúng tôi</h4>
          <div className="footer_info_mxh">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              style={{ color: "blue" }}
              className="footer_info_icon"
            />
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              style={{ color: "red" }}
              className="footer_info_icon"
            />
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              style={{ color: "orange" }}
              className="footer_info_icon"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
