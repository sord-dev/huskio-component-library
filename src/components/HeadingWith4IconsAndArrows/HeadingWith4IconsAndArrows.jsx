import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import { FaArrowDown, FaArrowRight, FaDiamond } from "react-icons/fa6";

export default function HeadingWith4IconsAndArrows({
  title = "TITLE GOES HERE",
  icon = [
    {
      icon: null,
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque, officia rerum cum voluptatum asperiores quos! Dolor, ipsa ea eos laborum laboriosam doloribus voluptate quisquam sequi molestiae temporibus officia eveniet?",
    },
    {
      icon: null,
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque, officia rerum cum voluptatum asperiores quos! Dolor, ipsa ea eos laborum laboriosam doloribus voluptate quisquam sequi molestiae temporibus officia eveniet?",
    },
    {
      icon: null,
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque, officia rerum cum voluptatum asperiores quos! Dolor, ipsa ea eos laborum laboriosam doloribus voluptate quisquam sequi molestiae temporibus officia eveniet?",
    },
    {
      icon: null,
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque, officia rerum cum voluptatum asperiores quos! Dolor, ipsa ea eos laborum laboriosam doloribus voluptate quisquam sequi molestiae temporibus officia eveniet?",
    },
  ],
}) {
  return (
    <section className={styles["heading-with-4-icon-and-arrows"]}>
      <div className={styles["heading-with-4-icons-and-arrows-content"]}>
        <div className={styles["heading-with-4-icon-and-arrows-heading"]}>
          <h1>{title}</h1>
        </div>
      </div>
      <ul className={styles["heading-with-4-icon-and-arrows-list"]}>
        {icon.slice(0, -1).map((item, index) => (
          <li key={index}>
            <div className={styles["heading-with-4-icon-and-arrows-icons"]}>
              {item.icon != null ? (
                <img src={item.icon} alt="Icon Image" width={128} height={128} />
              ) : (
                <FaDiamond />
              )}
              <FaArrowRight
                className={styles["heading-with-4-icon-and-arrows-arrow-icon"]}
              />
            </div>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
            <FaArrowDown
              className={
                styles["heading-with-4-icon-and-arrows-arrow-icon-mobile"]
              }
            />
          </li>
        ))}
        <li>
          {icon[icon.length - 1].icon != null ? (
            <img src={icon[icon.length - 1].icon} alt="Icon Image" width={128} height={128} />
          ) : (
            <FaDiamond />
          )}
          <h5>{icon[icon.length - 1].title}</h5>
          <p>{icon[icon.length - 1].desc}</p>
        </li>
      </ul>
    </section>
  );
}

HeadingWith4IconsAndArrows.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
};