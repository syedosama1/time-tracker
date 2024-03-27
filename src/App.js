import React, { useState } from "react";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import Card from "./components/Card";
import { calculateTotalTimeSpent } from "./utils/calculate";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const totalTimeSpent = calculateTotalTimeSpent();


  return (
    <div>
<Header totalTimeSpent={totalTimeSpent} />
      <AddButton onAddTask={handleAddTask} />
      <div className="card-container">
        {tasks.map((task, index) => (
          <Card
            key={index}
            task={task}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
