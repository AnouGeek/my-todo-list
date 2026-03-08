function App() {
  return (
    <div className="min-h-screen bg-gray-400 flex justify-center items-center">
      <div className="max-w-4xl bg-gray-50 rounded-lg shadow-md p-8 flex flex-col gap-4">
        <h1 className="text-center font-nunito font-bold">My Todo List</h1>

        <div className="flex">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors mr-2"
            placeholder="Add your task"
            type="text"
          />
          <button className="px-4 py-2 bg-blue-600 text-gray-200 rounded-md hover:bg-blue-700 transition cursor-pointer font-inter">
            Add
          </button>
        </div>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <input type="checkbox" />
            Do the shopping
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" />
            Learn React
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;
