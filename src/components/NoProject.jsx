import NoImage from "../assets/No-image.png";
import Button from "./Buttons.jsx";

export default function NoProject({ onProjectState }) {
  return (
    <div className="w-2/3 flex justify-center align-middle text-center">
      <div>
        <img src={NoImage} alt="No-Project" className="h-100 w-100" />
        <h2 className="text-2xl text-stone-500 font-medium px-16">
          No Projects Available
        </h2>
        <p className="text-stone-200 text-xl">
          Click the Button Add a new Project
        </p>
        <Button onClick={onProjectState}>Create New Project</Button>
      </div>
    </div>
  );
}
