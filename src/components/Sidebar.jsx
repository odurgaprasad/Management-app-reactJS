import Button from "./Buttons";

export default function Sidebar({
  onProjectState,
  projects,
  onSelectedProject,
  ProjectStateId,
}) {
  return (
    <aside className="w-1/3 my-8 bg-blue-950 text-stone-50 md:w-72 py-16 px-8 rounded-r-md uppercase">
      <h2 className="font-bold text-2xl text-stone-100 py-8">Your Project</h2>
      <div>
        <Button onClick={onProjectState}>+ Add Projects</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 text-xl font-mono uppercase text-center rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ";

          if (project.id === ProjectStateId) {
            cssClasses += "text-stone-400 bg-stone-100";
          } else {
            cssClasses += "text-stone-800 bg-stone-200";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectedProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
