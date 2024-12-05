import React, { useState } from "react";
import "./index.scss";

const Collapse = () => {
  const [collpaseVisible, setCollpaseVisible] = useState(false);
  return (
    <div className="collapse">
      <div className="collapse_elem">
        <div
          className="collapse_heading"
          onClick={() => setCollpaseVisible(!collpaseVisible)}
        >
          Hello
        </div>

        <div
          className={`${
            collpaseVisible ? "collapse_text" : "collapse_text text_unvisible "
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
// text_unvisible
