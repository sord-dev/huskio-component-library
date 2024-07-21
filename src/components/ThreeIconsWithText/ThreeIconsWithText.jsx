import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import { FaDiamond } from "react-icons/fa6";


export default function ThreeIconsWithText({
  icons,
}) {
  return (
    <section className={styles["three-icons-with-text"]}>
      <ul className={styles['three-icons-with-text-list']}>
        {icons.map((i, _i) => (
          <li key={_i}>
            <div className={styles["three-icons-with-text-points"]}>
              {i.icon ? (
                <img src={i.icon} alt="Icon Image" width={128} height={128} />
              ) : (
                <FaDiamond />
              )}
            </div>
            <p>{i.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

ThreeIconsWithText.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ),
};

ThreeIconsWithText.defaultProps = {
  icons: [
    {
      icon: null,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, quam impedit. Libero delectus incidunt, debitis aut ratione laboriosam cupiditate modi quia vitae necessitatibus! Molestiae, modi? Asperiores quod in temporibus fuga.",
    },
    {
      icon: null,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, quam impedit. Libero delectus incidunt, debitis aut ratione laboriosam cupiditate modi quia vitae necessitatibus! Molestiae, modi? Asperiores quod in temporibus fuga.",
    },
    {
      icon: null,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, quam impedit. Libero delectus incidunt, debitis aut ratione laboriosam cupiditate modi quia vitae necessitatibus! Molestiae, modi? Asperiores quod in temporibus fuga.",
    },
  ],
  _tag: "content-text"
};
