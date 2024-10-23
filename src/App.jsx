import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProjects from "./components/NewProjects";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: id,
      };
    });
  }

  function handleAddNewProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectStateId: null,
      };
    });
  }

  function handleCancel() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectStateId: undefined,
      };
    });
  }

  function handleDeleteButton() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.projectStateId
        ),
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevProject) => {
      const newProject = {
        ...projectData,
        id: Date.now(),
      };

      return {
        ...prevProject,
        projectStateId: undefined,
        projects: [...prevProject.projects, newProject],
      };
    });
  }

  const selectProject = projectState.projects.find(
    (project) => project.id === projectState.projectStateId
  );

  let content = (
    <SelectedProject
      projects={selectProject}
      onDelete={handleDeleteButton}
      onAdd={handleAddTask}
      onClear={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.projectStateId === null) {
    content = <NewProjects onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.projectStateId === undefined) {
    content = <NoProject onProjectState={handleAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onProjectState={handleAddNewProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
        projectStateId={projectState.projectStateId}
      />
      {content}
    </main>
  );
}

export default App;
