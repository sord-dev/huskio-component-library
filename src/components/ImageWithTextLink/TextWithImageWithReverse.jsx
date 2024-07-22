import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function ImageWithTextLink({
  image,
  title,
  desc,
  link,
  alt,
}) {
  return (
    <section className={styles["image-with-text-link"]}>
      <div className={styles["image-with-text-link-image"]}>
        <img
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles["image-with-text-link-content"]}>
        <h1 className={styles["image-with-text-link-title"]}>{title}</h1>
        <p
          className={styles["image-with-text-link-description"]}
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
        <a href={link} className={styles["image-with-text-link-button"]}>
          Read More
        </a>
      </div>
    </section>
  );
}

ImageWithTextLink.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string,
};

ImageWithTextLink.defaultProps = {
  image: "",
  title: "Title goes here",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsum deserunt inventore quis, molestias, vero laudantium id modi, saepe odit ab! Possimus maxime veritatis, porro deleniti quisquam sed vitae eius! Autem ab ex molestiae sint fugit impedit doloremque commodi laborum, dicta tempore unde, ipsum, consequatur nam laudantium cupiditate! Explicabo nihil placeat totam cumque sequi nesciunt enim id atque rem ipsam!",
  link: "/",
  alt: "Background Image",
  _tag: "content-image"
};
