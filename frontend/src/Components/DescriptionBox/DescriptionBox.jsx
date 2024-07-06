import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">
          Description
        </div>
        <div className="description-nav-box">
          Reviews(122)
        </div>
        <div className="descriptionbox-description">
          <p>An e-commerce website is a dynamic platform that enables businesses to sell products and services online. It provides a seamless shopping experience by featuring a wide range of products organized into categories, detailed product descriptions, high-resolution images, and customer reviews. Users can easily navigate the site using a user-friendly interface, search for specific items, and add desired products to their shopping cart. The checkout process is secure and efficient, supporting multiple payment methods including credit/debit cards, digital wallets, and bank transfers. </p>
        <p>
        the website offers personalized user accounts where customers can track their orders, manage their wish lists, and receive tailored recommendations based on their shopping history.
        </p>
        </div>
      </div>
    </div>
  );
};
export default DescriptionBox;
