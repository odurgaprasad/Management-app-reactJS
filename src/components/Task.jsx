import NewTask from "./NewTask";
import React from "react";

export default function Task({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-500 font-semibold">
          The Task list is not added yet.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span className="text-3xl font-semibold">{task.text}</span>
                <button
                  onClick={() => onDelete(task.id)}
                  className="bg-stone-800 px-5 py-2 rounded-lg text-2xl text-stone-300"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
