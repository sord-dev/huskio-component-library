import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function ICOPRSLogos({ icon, prs, iconAlt, prsAlt }) {
  return (
    <div className={styles["logos"]}>
      <img src={icon} alt={iconAlt} />
      <img src={prs} alt={prsAlt} />
    </div>
  );
}

ICOPRSLogos.propTypes = {
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  prs: PropTypes.string,
  prsAlt: PropTypes.string,
};

ICOPRSLogos.defaultProps = {
  icon: "/",
  iconAlt: "Icon",
  prs: "/",
  prsAlt: "PRS",
  _tag: "heading"
};