import TodoList from "./components/TodoList";
import AddBar from "./components/AddBar";
import FilterTabs from "./components/FilterTabs";
import StatusBanner from "./components/StatusBanner";

import Wedologo from "./components/Wedologo";

import { useState, useEffect } from "react";

function App() {
  const [Taskmsng, setTaskmsng] = useState([]);
  const [filter, setFilter] = useState("all");
  const [apiError, setApiError] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("tasks");
      if (stored) {
        setTaskmsng(JSON.parse(stored));
      }
    } catch (error) {
      setApiError(error.message);
    }
  }, []);

  const syncTasks = (next) => {
    setTaskmsng(next);
    localStorage.setItem("tasks", JSON.stringify(next));
  };

  return (
    < >
    <div className="min-h-screen bg-[#EFE6F7] py-0 px-4">
      <div className="max-w-1xl mx-auto space-y-6">
        <div className="flex justify-center">
          <Wedologo className="w-[250px] h-[150px]" />
        </div>

        <StatusBanner apiError={apiError} isVisible={isVisible} isExiting={isExiting} />

        <AddBar setTaskmsng={syncTasks} Taskmsng={Taskmsng} filter={filter} />

        <FilterTabs filter={filter} setFilter={setFilter} />

        <TodoList
          Taskmsng={Taskmsng}
          setTaskmsng={syncTasks}
          filter={filter}
        />
      </div>
    </div>
           
</>
  );
}

export default App;
