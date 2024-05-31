import React from "react";
import Task from "./Task";
import Stats from "./Stats";

export default function TaskList({tasks, onFinishedTask, onDeleteTask}) {
    return (
        <div className="list">
        {
          <ul className="list-group">
            {tasks.map((task) => {
              return (
                <Task
                  task={task}
                  key={task.id}
                  onFinishedTask={onFinishedTask}
                  onDeleteTask={onDeleteTask}
                ></Task>
              );
            })}
            <li className="list-group-item"><Stats tasks={tasks}></Stats></li>
          </ul>

        }
      </div>
    )
}