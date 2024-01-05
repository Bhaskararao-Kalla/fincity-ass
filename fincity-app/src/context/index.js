import {createContext} from 'react'

const ProjectsContext = createContext({
  projects: [],
  onAddProjects: () => {},
})

export default ProjectsContext