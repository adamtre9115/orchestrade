import React from "react";
// import css from "css-loader";
import "./Footer.css";

const Footer = props => {
  return (
     <div className="ifooter py-3 sticky-bottom"> {/*className={ styles.ifooter }*/}
      <footer>
        &copy;2018 Orchestrade
      </footer>
    </div>
  );
};

export default Footer;
