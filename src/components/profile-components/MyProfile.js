import UserImg from "../../assets/user.png";

const MyProfile = () => {
  return (
    <div className="my-profile">
      <div className="my-profile__header">
        <h1 className="font-face-gs-black my-profile__heading">
          HỒ SƠ CỦA TÔI
        </h1>
        <p className="font-face-gs-normal my-profile__description">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </p>
      </div>
      <div className="center-horizontal my-profile__main">
        <form className="font-face-gs-normal my-profile__form">
          <label className="center-horizontal my-profile__form-label">
            <p className="my-profile__form-label-title">Tên đăng nhập</p>
            <p className="my-profile__form-login-name">loremipsum</p>
          </label>
          <label className="center-horizontal my-profile__form-label">
            <p className="my-profile__form-label-title">Tên</p>
            <input
              className="font-face-gs-normal my-profile__form-input"
              type="text"
              name="name"
            />
          </label>
          <label className="center-horizontal my-profile__form-label">
            <p className="my-profile__form-label-title">Email</p>
            <input
              className="font-face-gs-normal my-profile__form-input"
              type="email"
              name="name"
            />
          </label>
          <label className="center-horizontal my-profile__form-label">
            <p className="my-profile__form-label-title">Số điện thoại</p>
            <input
              className="font-face-gs-normal my-profile__form-input"
              type="tel"
              name="name"
            />
          </label>
          <label className="center-horizontal my-profile__form-label">
            <p className="my-profile__form-label-title">Giới tính</p>
            <div className="center-horizontal my-profile__form-gender-selection">
              <div className="center-horizontal my-profile__form-gender-item">
                <input
                  className="my-profile__form-gender-radio"
                  name="gender"
                  type="radio"
                  value="male"
                  id="male"
                />
                <label className="my-profile__form-gender-label" htmlFor="male">Nam</label>
                <span className="my-profile__form-gender-check"></span>
              </div>
              <div className="center-horizontal my-profile__form-gender-item">
                <input
                  className="my-profile__form-gender-radio"
                  name="gender"
                  type="radio"
                  value="female"
                  id="female"
                />
                <label className="my-profile__form-gender-label" htmlFor="female">Nữ</label>
                <span className="my-profile__form-gender-check"></span>
              </div>
              <div className="center-horizontal my-profile__form-gender-item">
                <input
                  className="my-profile__form-gender-radio"
                  name="gender"
                  type="radio"
                  value="other"
                  id="other"
                />
                <label className="my-profile__form-gender-label" htmlFor="other">Khác</label>
                <span className="my-profile__form-gender-check"></span>
              </div>
            </div>
          </label>
          <label className="center-horizontal my-profile__form-label">
            <p className="my-profile__form-label-title">Ngày sinh</p>
            <input
              className="font-face-gs-normal my-profile__form-input"
              type="date"
              name="name"
            />
          </label>
          <button className="font-face-gs-normal my-profile__form-button">
            Lưu thay đổi
          </button>
        </form>
        <div className="center-vertical font-face-gs-normal my-profile__img-upload">
          <img className="my-profile__img" src={UserImg} alt="User Avatar" />
          <button className="font-face-gs-normal my-profile__img-button">
            Chọn ảnh
          </button>
          <p className="my-profile__img-note">Dung lượng file tối đa 16MB</p>
          <p className="my-profile__img-note">Định dạng JPEG, PNG</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
