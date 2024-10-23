import Task from "./Task";

export default function SelectedProject({
  projects,
  onDelete,
  onClear,
  onAdd,
  tasks,
}) {
  if (!projects) {
    return <p className="text-red-500 text-xl">No project selected.</p>;
  }

  const formattedDate = new Date(projects.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="h-full w-2/3 my-16 p-6 border-gray-300 rounded-lg bg-white max-w-3xl mx-auto">
      <div className="border-b-2 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold text-gray-900">
            {projects.title}
          </h2>
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Delete
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4 italic">{formattedDate}</p>
        <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
          {projects.description}
        </p>
      </div>
      <Task onAdd={onAdd} onDelete={onClear} tasks={tasks} />
    </header>
  );
}
