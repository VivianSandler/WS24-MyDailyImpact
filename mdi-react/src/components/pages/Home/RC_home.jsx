import React from "react";
import ColoredContainers from "../../core/ColoredContainers/Colored-Containers";
import Button from "../../core/Button/Button";
import { Link } from "react-router-dom";
import styles from "./RC_home.module.scss";

export default function RC_Home() {
  return (
    <ColoredContainers
      h2Text="Get ready for your impact journey"
      h3Text="Every plant-based meal counts"
    >
      <div className={styles["home-text"]}>
        <h5>Did you know that:</h5>
        <ul className={styles["home-list"]}>
          <li>
            by switching out meat-based meals with plant-based ones, you can
            have a positive impact on the environment and animals’ lives?
          </li>
          <li>
            you don’t have to be fully plant-based or vegan to make a positive
            difference?
          </li>
          <li>every meal you eat counts?</li>
        </ul>
        <p>
          Join us at MyDailyImpact, where you can track how many animals’ lives
          and how much forest land, CO2 emission, and water you save by swapping
          out meat- for plant-based meals!
        </p>
      </div>
      <div className={styles["primary-button"]}>
        <Link to="/sign-up">
          <Button>Join us!</Button>
        </Link>
      </div>
    </ColoredContainers>
  );
}
