import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todo-tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [];
  });

  const [newTask, setNewTask] = useState("");

  // local storage
  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  // delete
  function handleDelete(id) {
    const taskDeleted = tasks.filter((task) => task.id !== id);
    setTasks(taskDeleted);
  }

  // toggletask
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
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
            <li className="flex items-center gap-2 font-open" key={task.id}>
              <input
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                type="checkbox"
              />
              <span
                className={`${task.completed ? "line-through text-purple-400" : ""}  `}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleDelete(task.id)}
                className="px-2 py-1 bg-red-600 text-gray-200 rounded-md hover:bg-red-700 transition cursor-pointer font-inter ml-auto"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
