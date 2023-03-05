import { createContext, useReducer } from "react";

export const ProjectContext = createContext();

const initialState = { darkMode: false };

const ProjectReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ProjectProvider = (props) => {
  const [state, dispatch] = useReducer(ProjectReducer, initialState);
  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
export default ProjectContext;
