import React, { useState } from "react";
import classNames from "classnames";
import ShowBox from "../showbox/ShowBox";
import ThumbNail from "../thumbnail/ThumbNail";
import Button from "../button/Button"; 
import styles from "./ProductLightBox.module.css";

const products = [
  {
    id: "1",
    product: "./src/assets/images/image-product-1.jpg",
    thumbNail: "./src/assets/images/image-product-1-thumbnail.jpg",
  },
  {
    id: "2",
    product: "./src/assets/images/image-product-2.jpg",
    thumbNail: "./src/assets/images/image-product-2-thumbnail.jpg",
  },
  {
    id: "3",
    product: "./src/assets/images/image-product-3.jpg",
    thumbNail: "./src/assets/images/image-product-3-thumbnail.jpg",
  },
  {
    id: "4",
    product: "./src/assets/images/image-product-4.jpg",
    thumbNail: "./src/assets/images/image-product-4-thumbnail.jpg",
  },
];

function ProductLightBox() {
  const initialValue = products[0];
  const [selectedProduct, setSelectedProduct] = useState(initialValue);

  const handleClick = (id) => {
    const product = products.find((product) => product.id === id);
    setSelectedProduct(product);
  };

  return (
    <div className={classNames(styles["product-lightbox"])}>
      <ShowBox imgUrl={selectedProduct.product} />
      <ul className={classNames(styles["thumbnail-list"])}>
        {products.map((product) => (
          <li
            key={product.id}
            id={product.id}
            onClick={() => handleClick(product.id)}
          >
            <ThumbNail
              isSelected={product.id === selectedProduct.id}
              thumbNail={product.thumbNail}
            />
          </li>
        ))}
      </ul>
      <div className={styles["button-container"]}>
      </div>
    </div>
  );
}

export default ProductLightBox;
