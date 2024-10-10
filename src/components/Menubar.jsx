import { useState } from "react";
import Chevron from "./icon/chevron";
import Doc from "./icon/doc";
import Suitcase from "./icon/suitcase";
import Users from "./icon/users";
import Chartpie from "./icon/chartpie";
import Plusr from "./icon/plusr";
import Cash from "./icon/cash";
import CookieIcon from "./icon/cookie";
import Arrow from "./icon/arrowIcon";
import Setting from "./icon/setting";
import MenubarItem from "./MenubarItem";
import { Calendar, Button ,ConfigProvider } from "antd";
import dayjs from "dayjs";
import ruRU from "antd/lib/locale/ru_RU";
import "dayjs/locale/ru";
import dayLocaleData from "dayjs/plugin/localeData";
import logo from "../assets/logo.png";

dayjs.extend(dayLocaleData);
dayjs.locale("ru"); // Set locale to Russian

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const Menubar = () => {
  const [selected, setSelected] = useState(-1);
  const [showAnalitik, setShowAnalitik] = useState(false);
  const [value, setValue] = useState(dayjs()); // Set initial value to current date using dayjs

  const toggleShowAnalitik = () => {
    setShowAnalitik(!showAnalitik);
  };

  const changeSelected = (i) => {
    console.log("Changing selected from:", selected, "to:", i); // Debug log
    setSelected(i === selected ? -1 : i);
  };

  // Handler for calendar date change
  const onDateChange = (date) => {
    setValue(date);
    console.log("Selected date:", date.format("DD-MM-YYYY")); // Debug log with formatted date
  };

  return (
    <ConfigProvider locale={ruRU}>
      <div className="menubar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <Button>
            <Chevron />
          </Button>
        </div>
        <p className="panel">
          Панель инструментов {selected === 1 ? "active" : "s1"}
        </p>
        <div className="menubar_contents">
          <div className="scroll_menu">
            <MenubarItem
              title="Учет записей"
              selected={selected === 1}
              onActive={() => changeSelected(1)}
            >
              <Doc />
              {selected === 1 && (
                <div>
                  <Calendar
                    value={value}
                    fullscreen={false}
                    onChange={onDateChange} // Handle date changes
                    headerRender={({ value: current }) => (
                      <div className="month">
                        <span className="line_bg">
                          {monthNames[(current.month() + 11) % 12]}
                        </span>
                        <span>{monthNames[current.month()]}</span>
                        <span className="line_bg">
                          {monthNames[(current.month() + 1) % 12]}
                        </span>
                      </div>
                    )}
                  />
                  <Button type="primary">Оформить продажу</Button>
                  <Button onClick={toggleShowAnalitik}>
                    <div className={showAnalitik ? "active" : ""}>
                      Оформить продажу {showAnalitik ? "скрыть" : "показать"}
                      <Arrow className="icon" />
                    </div>
                  </Button>
                  {showAnalitik && (
                    <div className="analitik_content">
                      {[
                        "Общий заработок",
                        "Оказано услуг",
                        "Продано товаров",
                        "Наличными",
                        "Безналичными",
                      ].map((item, index) => (
                        <div key={index} className="analitik_item">
                          <span>{item}</span>
                          <div>
                            <span>0</span> ₽
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </MenubarItem>
            <MenubarItem
              title="Сотрудники"
              onClick={() => changeSelected(2)}
              active={selected === 2}
            >
              <Suitcase />
            </MenubarItem>
            <MenubarItem
              title="Клиенты"
              onClick={() => changeSelected(3)}
              active={selected === 3}
            >
              <Users />
            </MenubarItem>
            <MenubarItem
              title="Аналитика"
              onClick={() => changeSelected(4)}
              active={selected === 4}
            >
              <Chartpie />
            </MenubarItem>
            <MenubarItem
              title="Онлайн запись"
              onClick={() => changeSelected(5)}
              active={selected === 5}
            >
              <Plusr />
            </MenubarItem>
            <MenubarItem
              title="Финансы"
              onClick={() => changeSelected(6)}
              active={selected === 6}
            >
              <Cash />
            </MenubarItem>
            <MenubarItem
              title="Услуги"
              onClick={() => changeSelected(7)}
              active={selected === 7}
            >
              <CookieIcon />
            </MenubarItem>
          </div>
          <div className="adding_menu">
            <span className="title_add">Дополнительное</span>
            <MenubarItem
              title="Настройки"
              onClick={() => changeSelected(8)}
              active={selected === 8}
            >
              <Setting />
            </MenubarItem>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Menubar;
