import { forwardRef, useRef, useImperativeHandle } from "react";

import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="w-96 shadow-lg rounded-lg p-8 backdrop-blur-3xl backdrop-opacity-90"
    >
      {children}
      <form method="dialog" className="text-end">
        <button className="bg-stone-700 w-24 h-11 my-4 rounded-md text-white text-xl">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
