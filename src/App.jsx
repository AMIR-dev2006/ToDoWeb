import TodoList from "./components/TodoList";
import AddBar from "./components/AddBar";
import FilterTabs from "./components/FilterTabs";
import StatusBanner from "./components/StatusBanner";

import Wedologo from "./components/Wedologo";

import { useState, useEffect } from "react";

function App() {
  const [Taskmsng, setTaskmsng] = useState([]);
  const [catego, setCatego] = useState("all");
  const [categomsng, setCategomsng] = useState([]);
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
      const storedT = localStorage.getItem("tasks");
      const storedC = localStorage.getItem("categos");
      
      if (storedT) {
        setTaskmsng(JSON.parse(storedT));
      }
      
      if (storedC) {
        setCategomsng(Array.isArray(JSON.parse(storedC)) ? JSON.parse(storedC) : []);
      }
    } catch (error) {
      setApiError(error.message);
    }
  }, []);

  const syncTasks = (next) => {
    setTaskmsng(next);
    localStorage.setItem("tasks", JSON.stringify(next));
  };
  const syncC = (next) => {
    setCategomsng(next);
    localStorage.setItem("categos", JSON.stringify(next));
  };

  return (
    < >
    <div className="min-h-screen bg-[#EFE6F7] py-0 px-4">
      <div className="max-w-1xl mx-auto space-y-6">
        <div className="flex justify-center">
          <Wedologo className="w-[250px] h-[150px]" />
        </div>

        <StatusBanner apiError={apiError} isVisible={isVisible} isExiting={isExiting} />

        <AddBar setTaskmsng={syncTasks} Taskmsng={Taskmsng} catego={catego} />

        <FilterTabs catego={catego} setCatego={setCatego} categomsng={categomsng} setCategomsng={syncC} />

        <TodoList
          Taskmsng={Taskmsng}
          setTaskmsng={syncTasks}
          catego={catego}
        />
      </div>
    </div>
           
</>
  );
}

export default App;
