import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function HeroBannerWithTitleAndSubtitle({
  image,
  title,
  subtitle,
  alt,
}) {
  return (
    <section className={styles["hero"]}>
      <img
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles['text']}>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["subtitle"]}>{subtitle}</p>
      </div>
    </section>
  );
}

HeroBannerWithTitleAndSubtitle.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  alt: PropTypes.string,
};

HeroBannerWithTitleAndSubtitle.defaultProps = {
  image: "",
  title: "Title goes here",
  subtitle: "Subtitle goes here",
  alt: "Hero Background Image",
  _tag: "heading"
};
