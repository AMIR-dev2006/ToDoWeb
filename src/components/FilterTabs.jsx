import { useState, useRef, useEffect } from "react";
import Pixstar from "../assets/Pixstar";

import Ww from "./Pixfolder";

const FilterTabs = (props) => {
  const { catego, setCatego, categomsng, setCategomsng } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [categomsng]);

  const generateNew = () => {
    setCategomsng([...categomsng, { id: Date.now(), name: "", isEditing: true }]);
  };

  const saveName = (id, text) => {
    setCategomsng(
      categomsng.map((b) =>
        b.id === id ? { ...b, name: text, isEditing: false } : b,
      ),
    );
  };

  return (
    <div className="filter-tabs  overflow-hidden ">
      <div className="filter-tabs   overflow-x-auto whitespace-nowrap  ">
        <button
          className={`filter-tab  ${props.catego === "all" ? "filter-tab-active" : ""} `}
          onClick={() => props.setCatego("all")}
        >
          All
        </button>
        <button
          className={`filter-tab ${props.catego === "starred" ? "filter-tab-active" : ""} `}
          onClick={() => props.setCatego("starred")}
        >
          <Pixstar isStarred={1} />
        </button>

        <div className="filter-tabs">
          {(Array.isArray(categomsng) ? categomsng : []).map((b) => (
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
                  className={`filter-tab ${props.catego === b.name ? "filter-tab-active" : ""} `}
                  onClick={() => props.setCatego(b.name)}
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
