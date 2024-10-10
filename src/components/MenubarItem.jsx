import Arrow from "./icon/arrowIcon";
import React from "react";
const MenubarItem = ({
  title,
  iconShow = true,
  selected = false,
  onActive,
  children,
}) => {
  const handleClick = () => {
    if (onActive) {
      onActive();
    }
  };

  // Convert children to an array to access them individually
  const childrenArray = React.Children.toArray(children);
  const icon = childrenArray[0]; // First child is the icon
  const content = childrenArray.slice(1); // Remaining children are content

  return (
    <div className={`menubar_content ${selected ? "active" : ""}`}>
      <div className="header" onClick={handleClick}>
        <div>
          {icon} {/* Render the icon */}
          <span>{title}</span>
          <span className="bottom_line"></span>
        </div>
        <span className="icon">{iconShow && <Arrow />}</span>
      </div>
      <div className="content">{content}</div> {/* Render the content */}
    </div>
  );
};

export default MenubarItem;
