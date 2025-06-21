import { useState } from "react";
import img from "../assets/dropdown.png";
import "./Dropdown.css";

function Dropdown({options}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(null)
//   const options = ['React', 'Vue', 'Angular']

  function onClickHandler(option) {
    setSelected(option)
    setIsActive(prev => !prev)
  }

  return (
    <>
      <div className="dropDown">
        <div className="dropDownButton" onClick={() => setIsActive(prev => !prev)}>
          <div className="dropDownText" >{selected ? selected : 'Choose one'}</div>
          <div className="dropDownIcon">
            <img src={img} alt="" />
          </div>
        </div>
        {isActive && (
          <div className="dropDownContent">
            {options.map((option) => {
                return <div className="dropDownItem" onClick={() => onClickHandler(option)}>{option}</div>
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
