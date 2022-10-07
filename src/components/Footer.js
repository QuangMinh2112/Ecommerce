const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "absolute",
        width: "100vw",
        height: "40px",
        bottom: "0",
        right: "0",
        background:
          "linear-gradient(135deg, #e6e7e8 0%, #eecebe 60%, #3b8ca5 100%)",
      }}
    >
      <p className="font-face-o-normal footer__license" style={{
        color: "var(--white-color)",
        marginRight: "16px",
      }}>© 2022 Blushop. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
