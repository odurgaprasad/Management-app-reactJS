import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes = "rounded-md w-full p-4 outline-none border-2";

  return (
    <p className="flex flex-col my-4">
      <label className="uppercase w-full font-bold py-1">{label}</label>
      {textarea ? (
        <textarea
          className="w-full py-3 rounded-md border-2 outline-none"
          ref={ref}
          {...props}
        />
      ) : (
        <input className={`w-full py-4 ${classes}`} ref={ref} {...props} />
      )}
    </p>
  );
});
export default Input;
