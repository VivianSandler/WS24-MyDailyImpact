import Content_LR from "../Content_LR";
import LC_bigImage from "../LC_bigImage";
import Community from "./Community";

export default function Home() {
  return (
    <Content_LR
      LeftComponent={
        <LC_bigImage rotationOn={false} overflowText="My Daily Impact" />
      }
      RightComponent={<Community />}
    />
  );
}
