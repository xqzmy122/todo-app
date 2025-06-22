import { useState } from "react";
import img from "../assets/dropdown.png";
import "./Dropdown.css";

function Dropdown({ options, setNewTodo, metaName }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(null);

  function onClickHandler(option) {
    setSelected(option);
    setIsActive((prev) => !prev);
    setNewTodo((prev) => ({ ...prev, [metaName]: option }));
  }

  return (
    <>
      <div className="dropDown">
        <div
          className="dropDownButton"
          onClick={() => setIsActive((prev) => !prev)}
        >
          <div className="dropDownText">
            {selected ? selected : `${metaName}`}
          </div>
          <div className="dropDownIcon">
            <img src={img} alt="" />
          </div>
        </div>
        {isActive && (
          <div className="dropDownContent">
            {options.map((option, index) => {
              return (
                <div
                  className="dropDownItem"
                  onClick={() => onClickHandler(option)}
                  key={index}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
