import React, { useState } from 'react';
import './AddButton.css';

function AddButton({ onAddTask }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [taskName, setTaskName] = useState('');

  const handleAddButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSaveClick = () => {
    if (taskName.trim() !== '') {
      // Create a task object with the input value
      const newTask = { taskName };
      // Call the onAddTask function from the parent component and pass the task object
      onAddTask(newTask);
      // Clear the input and hide the popup
      setTaskName('');
      setIsPopupVisible(false);
    }
  };

  return (
    <div className="add-button-container">
      {isPopupVisible && (
        <div className="popup">
          <label htmlFor="taskNameInput">Enter the task name:</label>
          <input
            id="taskNameInput"
            type="text"
            value={taskName}
            onChange={handleInputChange}
            placeholder="Task name..."
            className="task-name-input"
          />
          <button onClick={handleSaveClick} className="save-button">Save</button>
        </div>
      )}
      <button className="add-button" onClick={handleAddButtonClick}>+</button>
    </div>
  );
}

export default AddButton;
