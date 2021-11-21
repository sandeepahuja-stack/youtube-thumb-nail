
import { useState } from "react";

export default function Task(props) {
  const { addTask, deleteTask, moveTask, task } = props;

  const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function setUrgency(event) {
    setUrgencyLevel(event.target.attributes.urgency.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formAction === "save") {
      if (collapsed) {
        setCollapsed(false);
      } else {
        let newTask = {
          id: task.id,
          title: event.target.elements.title.value,
          description: event.target.elements.description.value,
          urgency: urgencyLevel,
          status: task.status,
          isCollapsed: true
        };

        addTask(newTask);
        setCollapsed(true);
      }
    }

    if (formAction === "delete") {
      deleteTask(task.id);
    }
  }

  function handleMoveLeft() {
    let newStatus = "";

    if (task.status === "In Progress") {
      newStatus = "Backlog";
    } else if (task.status === "Completed") {
      newStatus = "In Progress";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  function handleMoveRight() {
    let newStatus = "";

    if (task.status === "Backlog") {
      newStatus = "In Progress";
    } else if (task.status === "In Progress") {
      newStatus = "Completed";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  return (
      <>
    <div className={` ${collapsed ? "collapsedTask" : ""} row align-items-end mb-3 text-center`}>
      <button onClick={handleMoveLeft} className={`btn btn-dark btn-sm `} >
        &#171;
      </button>
      <form onSubmit={handleSubmit} className={`form ${collapsed ? "collapsed" : ""} mx-3`}>
        <input
          type="text"
          className="title input form-control mb-1"
          name="title"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <textarea
          rows="2"
          className={`"  form-control mb-1 ${collapsed ? 'd-none' : ''}`}
          name="description"
          placeholder="Enter Description"
          defaultValue={task.description}
        />
        <div className={`form-check  justify-content-between mb-1 ${collapsed ? 'd-none' : 'd-flex'}`}>
          <label className={`low form-check-label ${urgencyLevel === "low" ? "selected" : ""}`}>
            <input
              urgency="low"
              onChange={setUrgency}
              type="radio"
              name="urgency"
              className=" form-check-input"
            />
            Low
          </label>
          <label
            className={`medium form-check-label ${urgencyLevel === "medium" ? "selected" : ""}`}
          >
            <input
              urgency="medium"
              onChange={setUrgency}
              type="radio"
              name="urgency"
              className=" form-check-input"
            />
            Medium
          </label>
          <label
            className={`high form-check-label ${urgencyLevel === "high" ? "selected" : ""}`}
          >
            <input
              urgency="high"
              onChange={setUrgency}
              type="radio"
              name="urgency"
              className=" form-check-input"
            />
            High
          </label>
        </div>
        <button
        
          onClick={() => {
            setFormAction("save");
          }}
          className="btn btn-danger btn-sm "
        >
          {collapsed ? "Edit" : "Save"}
        </button>
        {collapsed && (
          <button
          
            onClick={() => {
              setFormAction("delete");
            }}
            className="btn btn-danger btn-sm  ml-3"
          >
            Delete
          </button>
        )}
      </form>
      <button onClick={handleMoveRight} className="btn btn-dark btn-sm">
        &#187;
      </button>
    </div>
    <hr/>
    
    </>
  );
}
