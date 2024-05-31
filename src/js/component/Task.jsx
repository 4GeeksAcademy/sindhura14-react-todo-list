import React from "react"


export default function Task({task ,onPackedItem, onDeleteTask}){
    return(
        <li className="list-group-item d-flex flex-row justify-content-between" key={task.id}>
          <label className="task">
          <input
          type="checkbox"
          value={task.finished}
          onChange={() => onPackedItem(task.id)}
        ></input>
        <span style={task.finished? { textDecoration: "line-through" } : {}}>
    {task.label}
        </span>
          </label>


        <button className ="hide" onClick={() => onDeleteTask(task.id)}><i className="fa-solid fa-trash-can"></i></button>
      </li>
    )
}