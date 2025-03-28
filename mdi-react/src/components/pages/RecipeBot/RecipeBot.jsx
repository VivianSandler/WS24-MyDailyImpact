import Content_LR from "../../core/ContentLR/Content_LR.jsx";
// import LC_Planty from "../../core/LC/LC_planty.jsx";
import LC_bigImage from "../../core/LC/LC_bigImage.jsx";
import RC_recipeBot from "./RC_recipeBot.jsx";
import "./RecipeBot.module.scss";

export default function RecipeBot() {
  return (
    <Content_LR
      LeftComponent={
        <LC_bigImage rotationOn={false} overflowText="Planty the Recipe Bot" />
      }
      RightComponent={<RC_recipeBot />}
    />
  );
}
