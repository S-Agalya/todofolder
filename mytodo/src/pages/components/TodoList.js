// TodoList.js

import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Task To Be Completed</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.TaskToBeAdded}</td>
                <td>
                  <button onClick={() => onDeleteTask(task.id)}>
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
