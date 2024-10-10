import { useState } from "react";
import Arrow from "./icon/arrowIcon";
import ArrowL from "./icon/arrowL";
import User from "./icon/user";
import Candle from "./icon/candle";
import { Switch } from "antd"; // Assuming Ant Design for the switch component
import userImage from "../assets/user.png"; // Adjust the image import path accordingly

const MainContent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="main_content">
      <div className="top_content">
        <div className="days">
          <div className="day_wrapper">
            <div className="border-r">Сегодня</div>
            <div>Неделя</div>
          </div>
          <div className="date_wrapper">
            <div className="btn border-r ">
              <ArrowL />
            </div>
            <div className="border-r">16 Сентябрь</div>
            <div className="btn">
              <Arrow />
            </div>
          </div>
        </div>
        <div className="btns_wrapper">
          <Switch checked={checked} onChange={setChecked} />
          <div className="rounded_btn">
            <User />
          </div>
          <div className="rounded_btn">
            <Candle />
          </div>
          <img src={userImage} alt="User Avatar" className="avatar" />
        </div>
      </div>
      <div className="time_lines">
        {Array.from({ length: 14 }, (_, i) => (
          <div key={i} className="time_line">
            <div className={`main_time_line ${i === 0 ? "border_pink" : ""}`}>
              <span>{i + 8}:00</span>
              <span>{i + 8}:00</span>
            </div>
            <div>15</div>
            <div>30</div>
            <div>45</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
