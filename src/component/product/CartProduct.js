import React from "react";
import { Card, Rate } from "antd";

const CartProduct = ({ id, name, startPoint, price, image }) => {
  //Phần chuyển đổi số
  const currencyFormatDE = (num) => {
    if (typeof num === "number") {
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    } else {
      return "";
    }
  };
  const handleShowProductDetails = () => {
    console.log("hehe");
  };
  return (
    <div>
      <Card
        // className="card-product"
        hoverable
        onClick={handleShowProductDetails}
        style={{
          width: 300,
          height: 450,
          borderRadius: 15,
        }}
        cover={<img alt="product" src={image} />}
      >
        <div style={{ fontWeight: 700 }}>{name}</div>
        <div>
          <Rate disabled defaultValue={startPoint} />
          <span
            style={{
              fontWeight: 400,
              paddingLeft: 5,
              borderLeft: "1px solid black",
              marginLeft: 5,
            }}
          >
            Đã bán 1000+
          </span>
        </div>
        <div style={{ fontWeight: 500, textDecoration: "line-through" }}>
          {currencyFormatDE(price)}đ
        </div>
        <div style={{ fontWeight: 700, color: "red", fontSize: 20 }}>
          {currencyFormatDE(price * 0.9)}đ
        </div>
      </Card>
    </div>
  );
};

export default CartProduct;
