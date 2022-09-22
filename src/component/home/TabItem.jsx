import { Tabs } from "antd";
import React from "react";

const TabItem = () => {
  const items = [
    {
      label: `THỜI TRANG`,
      key: "1",
    },
    {
      label: `ĐIỆN THOẠI VÀ PHỤ KIỆN`,
      key: "2",
    },
    {
      label: `MẸ & BÉ`,
      key: "3",
    },
    {
      label: `THIẾT BỊ ĐIỆN TỬ`,
      key: "4",
    },
    {
      label: `NHÀ CỬA VÀ ĐỜI SỐNG`,
      key: "5",
    },
    {
      label: `SẮC ĐẸP`,
      key: "6",
    },
    {
      label: `GIÀY DÉP`,
      key: "7",
    },
    {
      label: `SỨC KHOẺ`,
      key: "8",
    },
    {
      label: `VĂN PHÒNG PHẨM`,
      key: "9",
    },
    {
      label: `GIA DỤNG`,
      key: "10",
    },
    {
      label: `TRANG SỨC`,
      key: "11",
    },
    {
      label: `THỰC PHẨM`,
      key: "12",
    },
    {
      label: `Ô TÔ`,
      key: "13",
    },
    {
      label: `DU LỊCH`,
      key: "14",
    },
    {
      label: `THỂ THAO`,
      key: "15",
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Tabs
      onChange={onChange}
      items={items}
      style={{ fontWeight: "bold", marginLeft: 30 }}
    />
  );
};

export default TabItem;
