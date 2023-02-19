import React, { useState } from "react";
import Form from "./Components/Form";
import TaskList from "./Components/TaskList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      deskripsi: deskripsi,
      complete: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const complete = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          if (task.complete === true) {
            return { ...task, complete: false };
          }
          if (task.complete === false) {
            return { ...task, complete: true };
          }
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="h-full w-full">
      <div className="">
        <Form
          setNewTask={setNewTask}
          setDeskripsi={setDeskripsi}
          addTask={addTask}
        />
      </div>
      <div className="mt-8 grid place-items-center w-full px-8 sm:px-10 mb-10">
        <h2 className="w-full bg-amber-600 border border-amber-900 shadow-md p-4 text-center text-2xl sm:text-4xl font-bold text-amber-50 shadow-amber-900 mb-12">
          Task List
        </h2>
        {todoList.length === 0 ? (
          <div className="">
            <div className="mt-5 mb-5">
              <h1 className="text-left text-xl font-bold text-amber-900">
                No Task List
              </h1>
            </div>
          </div>
        ) : (
          <div className="list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
            {todoList.map((task) => {
              return (
                <div key={task.id}>
                  <TaskList
                    completeTask={task.complete}
                    taskName={task.taskName}
                    deskripsi={task.deskripsi}
                    deleteTask={deleteTask}
                    id={task.id}
                    complete={complete}

                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
