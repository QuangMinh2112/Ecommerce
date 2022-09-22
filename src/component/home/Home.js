import React from "react";
import Slider from "./Slider";
import Header from "../header/Header";
import MainFunction from "./MainFunction";
import Hotsale from "./Hotsale";
import CartProduct from "../product/CartProduct";
import { Col, Row } from "antd";
import product from "../fakeApi";
import "./home.css";
import TabItem from "./TabItem";
import Advertise from "./Advertise";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Row>
        <Col span={1} xl={2} md={2} sm={2}>
          <Header />
        </Col>
        <Col span={23} xl={22} md={22} sm={22}>
          <div className="main">
            <TabItem />
            <Slider />
            <MainFunction />
            <Advertise />
            <Hotsale />
          </div>
          <div className="list_product">
            <div className="list_product_item">
              {product.map(({ id, name, startPoint, price, image }) => {
                return (
                  <CartProduct
                    key={id}
                    name={name}
                    startPoint={startPoint}
                    price={price}
                    image={image}
                  />
                );
              })}
            </div>
          </div>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default Home;
