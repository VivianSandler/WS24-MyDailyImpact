import "./Content_LR.scss";

function Content_LR(props) {
  const leftComponent = props.LeftComponent;
  const rightComponent = props.RightComponent;

  return (
    <div className="lr-container">
      <div className="left-box">{leftComponent}</div>
      <div className="right-box">{rightComponent}</div>
    </div>
  );
}

export default Content_LR;
