import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const TaskList = (props) => {
  return (
      <div className="bg-amber-100 border border-amber-900 shadow-md shadow-amber-900 p-4 mb-4 flex flex-col justify-between w-full h-full">
        <div className="content-card">
          <label className="text-sm text-amber-900 ">Task</label>
          {props.completeTask === true ? (
            <div className="">
              <p className="font-bold text-amber-900 text-3xl line-through break-words">
                {props.taskName}
              </p>
              <p className="font-normal text-amber-900 text-md line-through mt-3 break-words">
                {props.deskripsi}
              </p>
            </div>
          ) : (
            <div  className="">
              <p className="font-bold text-amber-900 text-3xl underline break-words">
                {props.taskName}
              </p>
              <p className="font-normal text-amber-900 text-md mt-3 break-words">
                {props.deskripsi}
              </p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            className="flex items-center justify-center w-full border border-amber-600 text-amber-50 text-md font-semibold text-semibold bg-amber-900 hover:bg-amber-600 hover:border-amber-900 hover: shadow-sm shadow-amber-600 mt-5 py-1"
            onClick={() => props.deleteTask(props.id)}
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            <p>Delete</p>
          </button>
          <button
            className="flex items-center justify-center w-full border border-amber-900 text-amber-50 text-md font-semibold text-semibold bg-amber-600 hover:bg-amber-900 hover:border-amber-600 shadow-sm shadow-amber-900 mt-5 py-1"
            onClick={() => props.complete(props.id)}
          >
            <FontAwesomeIcon icon={faSquareCheck} className="mr-2" />
            <p>Done</p>
          </button>
        </div>
      </div>
  );
};

export default TaskList;
