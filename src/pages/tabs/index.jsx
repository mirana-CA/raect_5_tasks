import React, { useState } from "react";
import "./index.scss";

const Tabs = () => {
  let arr = [
    {
      id: 1,
      text: "Tab 1",
      border: true,
    },
    {
      id: 2,
      text: "Tab 2",
      border: false,
    },
    {
      id: 3,
      text: "Tab 3",
      border: false,
    },
  ];
  const [myArr, setMyArr] = useState([...arr]);
  console.log(myArr);

  const changeValue = function name(item) {
    myArr.map((elem) => {
      console.log(elem);

      elem.id == item.id ? (elem.border = true) : (elem.border = false);
      setMyArr([...myArr]);
    });
  };
  return (
    <div className="tabs">
      <div className="tabs_heading">
        {myArr.map((item) => {
          return (
            <div
              key={item.id}
              className={`tabs_heading_item ${
                item.border ? "border_bottom" : ""
              }`}
              onClick={() => changeValue(item)}
            >
              Tab {item.id}
            </div>
          );
        })}
      </div>

      <p>
        {myArr.map((elem) => {
          return elem.border ? elem.text : "";
        })}
      </p>
    </div>
  );
};

export default Tabs;
