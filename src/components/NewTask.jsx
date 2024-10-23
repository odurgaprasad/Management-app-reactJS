import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");
  function onChangeValue(e) {
    setTask(e.target.value);
  }
  function handleClickButton() {
    if (task.trim() === "") {
      return;
    }
    onAdd(task);
    setTask("");
  }
  return (
    <section>
      <h2 className="text-xl text-stone-800 font-semibold py-2">New Task</h2>
      <input
        type="text"
        className="py-2 border rounded-md outline-none"
        onChange={onChangeValue}
        value={task}
      />
      <button
        onClick={handleClickButton}
        className="w-20 h-11 border bg-green-800 rounded-r-lg "
      >
        New task
      </button>
    </section>
  );
}
