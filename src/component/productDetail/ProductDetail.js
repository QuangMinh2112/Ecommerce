import "../FontAwesome/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, Rate } from "antd";
import React from "react";

const ProductDetail = () => {
  //Phần chuyển đổi số
  //   const currencyFormatDE = (num) => {
  //     if (typeof num === "number") {
  //       return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  //     } else {
  //       return "";
  //     }
  //   };

  return (
    <>
      <div className="detail">
        <div>Name</div>
        <div className="detail_info">
          <div className="detail_info_slider">
            <Carousel>
              <div>
                <img
                  src="https://vnn-imgs-f.vgcloud.vn/2019/05/09/15/hinh-anh-moi-nhat-ve-iphone-xr-2019-gia-re-1.jpg"
                  alt="slider"
                  width="500"
                  height="600"
                />
              </div>
              <div>
                <img
                  src="https://vnn-imgs-f.vgcloud.vn/2019/05/09/15/hinh-anh-moi-nhat-ve-iphone-xr-2019-gia-re-1.jpg"
                  alt="slider"
                  width="500"
                  height="600"
                />
              </div>
            </Carousel>
            <div>
              <div>
                Chia sẻ: <FontAwesomeIcon icon={["fab", "facebook"]} />
                <FontAwesomeIcon icon={["fab", "facebook-messenger"]} />
                <FontAwesomeIcon icon={["fab", "square-instagram"]} />
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </div>
              <div>
                <FontAwesomeIcon icon="heart" /> Đã thích (1,2k)
              </div>
            </div>
          </div>
          <div className="detail_info_sidebar">
            <div>
              <Rate disabled defaultValue={5} />
              <div>Đánh giá 888+</div>
              <div>Đã bán 1000+</div>
            </div>
            <div>
              <h2>1.000.000đ</h2>
              <p>1.000.000đ</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
