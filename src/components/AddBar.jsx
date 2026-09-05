import { useState } from "react";

const AddBar = ({ setTaskmsng, Taskmsng, filter }) => {
  const [Task, setTask] = useState("");

  const handleClick = () => {
    if (Task.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      text: Task.trim(),
      completed: false,
      starred: false,
      category: filter
    };

    setTaskmsng([...Taskmsng, newTask]);
    setTask("");
  };

  const enterClicked = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="flex items-stretch gap-3">
      <div className="pixel-box flex-grow">
        <div className="pixel-inner px-4 py-3">
          <input
            type="text"
            name="task"
            value={Task}
            placeholder="add a task!"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={enterClicked}
            className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 text-xl font-bold"
          />
        </div>
      </div>
      <div className="pixel-box btn-add">
        <div className="pixel-inner px-6 py-3">
          <button
            onClick={handleClick}
            className="text-xl uppercase tracking-widest outline-none"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBar;
