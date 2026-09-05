import { useState, useRef, useEffect } from "react";
import Pixstar from "../assets/Pixstar";

import Ww from "./Pixfolder";

const FilterTabs = (props) => {
  const [buttons, setButtons] = useState([]);
  const inputRef = useRef(null);

  // Auto-focus the input box as soon as it appears
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [buttons]);

  // 1. Add a temporary object to state
  const generateNew = () => {
    setButtons([...buttons, { id: Date.now(), name: "", isEditing: true }]);
  };

  // 2. Save text and turn it into a button when user hits Enter
  const saveName = (id, text) => {
    setButtons(
      buttons.map((b) =>
        b.id === id ? { ...b, name: text, isEditing: false } : b,
      ),
    );
  };
  return (
    <div className="filter-tabs  overflow-hidden ">
      <div className="filter-tabs   overflow-x-auto whitespace-nowrap  ">
        <button
          className={`filter-tab  ${props.filter === "all" ? "filter-tab-active" : ""} `}
          onClick={() => props.setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-tab ${props.filter === "starred" ? "filter-tab-active" : ""} `}
          onClick={() => props.setFilter("starred")}
        >
          <Pixstar isStarred={1} />
        </button>

        <div className="filter-tabs">
          {buttons.map((b) => (
            <div className="filter-tab    " key={b.id}>
              {b.isEditing ? (
                <input
                  className="filter-tab outline-none  w-40 "
                  ref={inputRef}
                  placeholder="Name me..."
                  onKeyDown={(e) =>
                    e.key === "Enter" && saveName(b.id, e.target.value)
                  }
                />
              ) : (
                <button
                  className={`filter-tab ${props.filter === b.name ? "filter-tab-active" : ""} `}
                  onClick={() => props.setFilter(b.name)}
                >
                  {b.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <button onClick={generateNew}>
        <Ww />
      </button>
    </div>
  );
};
export default FilterTabs;
