import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Do the shopping", completed: false },
    { id: 2, text: "Learn React", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newTask.trim() === "") return
    setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}])
    setNewTask("")
  };    

  return (
    <div className="min-h-screen bg-gray-400 flex justify-center items-center">
      <div className="max-w-4xl bg-gray-50 rounded-lg shadow-md p-8 flex flex-col gap-4">
        <h1 className="text-center font-nunito font-bold">My Todo List</h1>

        <form onSubmit={handleSubmit} className="flex">
          <input
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors mr-2"
            placeholder="Add your task"
            type="text"
          />
          <button className="px-4 py-2 bg-blue-600 text-gray-200 rounded-md hover:bg-blue-700 transition cursor-pointer font-inter">
            Add
          </button>
        </form>
        <ul className="flex flex-col gap-3">
          {tasks.map((task) => (
            <li className="flex items-center gap-2" key={task.id}>
              <input type="checkbox" />
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
