
import React, { useState, useEffect } from "react";
import "./Cards.css";
import { activityHistory } from "../utils/calculate";

const Card = ({ task, onDelete }) => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTotalTime((prevTotalTime) => prevTotalTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleStartStopTimer = () => {
    if (timerRunning) {
      setTimerRunning(false);
      const endTime = new Date();
      const duration = Math.floor((endTime - startTime) / 1000);
      activityHistory.push({
        taskName: task.taskName,
        startTime,
        stopTime: endTime,
        duration,
      });
    } else {
      setTimerRunning(true);
      setStartTime(new Date());
    }
  };

  const renderActivityHistory = () => {
    if (!timerRunning && activityHistory.length === 0) {
      return (
        <p>No History Found. Click on the start button to track the timer.</p>
      );
    } else {
      return (
        <div className="active-history">
          <h3> History</h3>
          <ul>
            {activityHistory.map((activity, index) => (
              <li key={index}>
                {activity.stopTime
                  ? `Started the timer at ${activity.startTime} & Stopped at ${activity.stopTime}`
                  : `Started the timer at ${activity.startTime} (Active)`}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  const formatTime = (timeInSeconds) => {
    const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(timeInSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="card">
      <div className="task-section">
        <div className="task-name">{task.taskName}</div>
        <div className="timer">{formatTime(totalTime)}</div>
        <div className="button-section">
          <button
            className={`start-stop-button ${timerRunning ? "stop" : "start"}`}
            onClick={handleStartStopTimer}
          >
            {timerRunning ? "Stop" : "Start"}
          </button>
          <button className="button-cross" onClick={onDelete}>
            X
          </button>
        </div>
      </div>
      {timerRunning && (
        <div className="history-section">{renderActivityHistory()}</div>
      )}
    </div>
  );
};

export default Card;
