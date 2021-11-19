import React from "react";

import Task from "./Task";

export default function StatusLine(props) {
  const { status, tasks, addTask, deleteTask, addEmptyTask, moveTask, showaddbtn = false } = props;

  let taskList, tasksForStatus;

  function handleAddEmpty() {
    addEmptyTask(status);
  }

  if (tasks) {
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id) => deleteTask(id)}
          moveTask={(id, status) => moveTask(id, status)}
          key={task.id}
          task={task}
        />
      );
    });
  }

  return (
    <div className="statusLine col-md-4">
        <div className="d-flex  mb-5">
            <h3 className="h5 mb-0 mr-1">{status}</h3>
            {showaddbtn &&
            <span onClick={handleAddEmpty} className=" text-danger btn-sm">
                Add 
            </span>}
      </div>
      <div className="container">
      {taskList}
      </div>
      
    </div>
  );
}
