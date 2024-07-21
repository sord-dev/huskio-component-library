import React from "react";
import styles from "./index.module.css";
import { FaDiamond } from "react-icons/fa6";
import PropTypes from "prop-types";

const HeadingWith6Icons = ({ topic, title, description, icon })=> {

  return (
    <div className={styles["heading-with-6-icons"]}>
      <div className={styles["heading-with-6-icons-content"]}>
        <div className={styles["heading-with-6-icons-heading"]}>
          <h5>{topic}</h5>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles["heading-with-6-icon-divider"]}>
          <div className={styles["heading-with-6-icon-line"]}></div>
          <FaDiamond />
          <div className={styles["heading-with-6-icon-line"]}></div>
        </div>
      </div>
      <ul className={styles["heading-with-6-icon-list"]}>
        {icon.map((i, _i) => (
          <li key={_i}>
            {i.icon != null ? (
              <img src={i.icon} alt="Icon Image" width={96} height={96} />
            ) : (
              <FaDiamond />
            )}
            <h5>{i.title}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeadingWith6Icons.propTypes = {
  topic: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.array,
};

HeadingWith6Icons.defaultProps = {
  topic: "TOPIC GOES HERE",
  title: "TITLE GOES HERE",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum impedit accusantium corporis quae. Ullam fuga molestias voluptatum iure atque similique tempora aut beatae, recusandae, voluptatibus asperiores saepe eos, reiciendis maiores? Laborum ut adipisci itaque aut quidem optio, nihil commodi? Officiis repellat id corrupti iste ad nemo est sit hic quas! Expedita fuga iste reprehenderit harum! Recusandae delectus similique necessitatibus inventore!",
  icon: [
    { icon: null, title: "Title goes here" },
    { icon: null, title: "Title goes here" },
    { icon: null, title: "Title goes here" },
    { icon: null, title: "Title goes here" },
    { icon: null, title: "Title goes here" },
    { icon: null, title: "Title goes here" },
  ],
  _tag: "heading"
};

export default HeadingWith6Icons;
