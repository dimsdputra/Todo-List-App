import React from "react";

const Form = (props) => {
  return (
    <div className="grid place-items-center">
      <div className="mt-10 w-full px-8 sm:px-10">
        <h1 className="bg-amber-900 border border-amber-600 shadow-lg p-4 text-center text-3xl sm:text-5xl font-bold text-amber-50 shadow-amber-600 mb-12">
          ToDo List App
        </h1>
      </div>
      <div className="w-full max-w-md px-8 sm:px-0">
        <div className="bg-amber-100 border border-amber-900 px-8 pt-6 pb-8 mb-4 shadow-md shadow-amber-900">
          <div className="">
            <div>
              <label className="block text-lg font-medium text-amber-900">
                Add Title
              </label>
              <input
                type="text"
                className="border p-1 pl-3 focus:outline-none text-md border-amber-900 text-amber-900 w-full shadow-sm"
                placeholder="Add Title"
                onChange={(e) => props.setNewTask(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <label className="block text-lg font-medium text-amber-900">
                Add Description
              </label>
              <textarea
                type="text"
                className="border p-1 pl-3 focus:outline-none text-md border-amber-900 text-amber-900 w-full min-h-[150px] shadow-sm"
                onChange={(e) => props.setDeskripsi(e.target.value)}
              />
            </div>
            <div className="flex flex-row-reverse mt-6">
              <button
                className="border border-amber-900 text-amber-50 text-md font-semibold text-semibold hover:bg-amber-900 hover:text-amber-50 hover:border-amber-600 hover:shadow-amber-600 shadow-sm shadow-amber-900 bg-amber-600 py-1 w-36"
                onClick={props.addTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
