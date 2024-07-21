import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

export default function FullTitleBanner({ title }) {
  return (
    <section className={styles["full-title-banner"]}>
      <h1>{title}</h1>
    </section>
  );
}

FullTitleBanner.propTypes = {
  title: PropTypes.string,
};

FullTitleBanner.defaultProps = {
  title: "Title goes here",
  _tag: "heading"
};
