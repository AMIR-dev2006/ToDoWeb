import checkmarkSvg from "../assets/checkmarksuper.svg";
import Pixstar from "../assets/Pixstar.jsx";
import PixX from "../assets/PixX.jsx";
import Options from "../assets/Options.jsx";
import Pixfolder from "./Pixfolder.jsx";
import ScalableStepsBar from "./ScalableStepsBar";
import { useState, useEffect } from "react";

const TodoList = ({ Taskmsng, setTaskmsng, catego }) => {
  const deleteTask = (id) => {
    setTaskmsng(Taskmsng.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTaskmsng(
      Taskmsng.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const toggleStar = (id) => {
    setTaskmsng(
      Taskmsng.map((t) => (t.id === id ? { ...t, starred: !t.starred } : t)),
    );
  };

  const [activeOptionsId, setActiveOptionsId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        activeOptionsId !== null &&
        !e.target.closest(".pixel-box.options-open")
      ) {
        setActiveOptionsId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeOptionsId]);

  const handleOptionsClick = (id) => {
    setActiveOptionsId((prev) => (prev === id ? null : id));
  };

  const [mySteps, setMySteps] = useState([false]);

  const ffTasks = () => {
    if (catego === "starred") {
      return Taskmsng.filter((t) => t.starred);
    } else if (catego !== "all") {
      return Taskmsng.filter((t) => t.category === catego);
    } else {
      return Taskmsng;
    }
  };
  const filteredTasks = ffTasks();

  useEffect(() => {
    if (filteredTasks.length === 0) {
      setMySteps([false]);
    } else {
      setMySteps(filteredTasks.map((t) => t.completed));
    }
  }, [catego, Taskmsng]);

  const emptyMessage =
    catego === "all"
      ? "No tasks yet. Add one above!"
      : `No tasks in "${catego}" yet.`;

  return (
    <div className="space-y-4">
      {filteredTasks.length === 0 ? (
        <div className="pixel-box">
          <div className="pixel-inner px-4 py-3 text-gray-400 text-center text-l">
            {emptyMessage}
          </div>
        </div>
      ) : (
        <>
          <ScalableStepsBar
            stepsStatus={mySteps}
            activeColor="#5e17eb"
            inactiveColor="#c4b5e3"
          />
          <div className="flex items-center" >
            <div className="font-bold text-my-purple uppercase">{catego}</div>
            <div className="flex-1 border-b-4 border-my-purple-light h-0 ml-4"></div>
             <Options
                    className="options-icon-small"
                    
                  />
          </div>
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`pixel-box ${task.completed ? "task-checked " : ""} ${activeOptionsId === task.id ? "options-open" : ""} ${catego === "starred" ? "star-theme" : ""}`}
            >
              <div
                className={`pixel-inner px-4 py-3 flex items-center gap-4 ${catego === "starred" ? "star-theme" : ""}`}
              >
                <label className="pixel-checkbox-wrapper flex items-center flex-grow">
                  <input
                    type="checkbox"
                    className="hidden-pixel-input"
                    name="checkbox"
                    value={task.id}
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span className="pixel-checkbox-display">
                    <img
                      src={checkmarkSvg}
                      alt="checkmark"
                      className="checkmark-icon"
                    />
                  </span>
                  <span className="task-text font-bold ml-3">{task.text}</span>
                </label>
                <button
                  onClick={() => handleOptionsClick(task.id)}
                  className="options-button"
                >
                  <Options
                    className="options-icon"
                    isinStar={catego === "starred"}
                  />
                </button>
              </div>

              <div className="task-actions">
                <button>
                  <Pixfolder />
                </button>

                <button
                  onClick={() => toggleStar(task.id)}
                  className="star-btn"
                >
                  <Pixstar isStarred={task.starred} />
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                >
                  <PixX />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TodoList;
