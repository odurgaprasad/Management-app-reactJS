export default function Button({ children, ...props }) {
  return (
    <button
      className="text-xl rounded-md bg-stone-600 text-stone-400 hover:bg-stone-400 hover:text-stone-100 py-3 px-8"
      {...props}
    >
      {children}
    </button>
  );
}
