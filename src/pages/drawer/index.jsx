import React, { useState } from "react";
import "./index.scss";

const Drawer = () => {
  const [istrue, setIsTrue] = useState(false);

  return (
    <div className="drawer">
      <button onClick={() => setIsTrue(!istrue)}>Click Me!</button>
      <div className={`${istrue ? "sidebar_active" : "sidebar"}`}></div>
    </div>
  );
};

export default Drawer;
