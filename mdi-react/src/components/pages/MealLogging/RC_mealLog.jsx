import ColoredContainers from "../../core/ColoredContainers/Colored-Containers";
import Button from "../../core/Button/Button";
import DefaultExample from "../../core/Dropdown/Dropdown";
import styles from "./RC_mealLog.module.scss";
import form from "../../../styles/forms.module.scss";

export default function RC_MealLog() {
  return (
    <>
      <ColoredContainers
        h2Text="What are you eating today?"
        h3Text="Choose the right input and save."
      >
        <div className={form["formpage-grid"]}>
          <section className={form.formSection}>
            <div className={form.inputSection}>
              <label>Meal name</label>
              <input className={form.input}></input>
            </div>
            <div className={form.inputSection}>
              <label>Meal of the day</label>
              <select className={form.input}>
                <option className={form.option} value="breakfast">
                  Breakfast
                </option>
                <option className={form.option} value="lunch">
                  Lunch
                </option>
                <option className={form.option} value="dinner">
                  Dinner
                </option>
              </select>
            </div>
            <div className={form.inputSection}>
              <label>Comment</label>
              <input className={form.input}></input>
            </div>
            <div className={form.inputSection}>
              <label>Comment</label>
              <DefaultExample></DefaultExample>
            </div>
          </section>
          <section className={form.buttonSection}>
            <Button>Save</Button>
          </section>
        </div>
      </ColoredContainers>
    </>
  );
}
