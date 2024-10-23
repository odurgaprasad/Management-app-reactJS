import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProjects({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl text-center py-4">No Projects Available</h2>
        <p className="text-md text-center py-2">
          You forget the input value Please Enter valid values
        </p>
      </Modal>
      <div className="flex justify-center items-center content-center">
        <div className="w-[35rem] mt-16 bg-orange-300 p-8 shadow-md rounded-lg h-2/4">
          <main className="flex justify-end items-center list-none gap-4">
            <li>
              <button
                onClick={onCancel}
                className="text-xl rounded-md text-stone-800 bg-transparent hover:text-stone-950"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={handleSave}
                className="text-xl text-stone-300 bg-stone-800 hover:bg-stone-950 py-2 px-6 rounded-md"
              >
                Save
              </button>
            </li>
          </main>

          <Input type="text" ref={titleRef} label="title" />
          <Input ref={descriptionRef} label="description" textarea />
          <Input type="date" ref={dueDateRef} label="due date" />
        </div>
      </div>
    </>
  );
}
