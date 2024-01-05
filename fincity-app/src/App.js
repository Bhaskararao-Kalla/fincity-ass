
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'


import ProjectsContext from './context'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ProjectsPage from './components/ProjectsPage'

import './App.css'

const projectsList = [
  {
    id: 1,
    projectName: 'Project Name',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
  },
  {
    id: 2,
    projectName: 'Project Name',
    description:
      'What was your role, your deliverables, if the project was personal, freelancing.',
  },
]

const App = () => {
  const [projects, setProjects] = useState(projectsList)

  const onAddProjects = event => {
    const data = new FormData(event.target)
    const formDetails = Object.fromEntries(data)
    formDetails.id = uuidv4()
    // console.log(formDetails)

    setProjects(prev => [...prev, formDetails])
  }
  console.log(projects)

  return (
    <ProjectsContext.Provider value={{projects, onAddProjects}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/contacts" element={<ContactPage/>} />
          <Route exact path="/projects" element={<ProjectsPage/>} />
          <Route component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ProjectsContext.Provider>
  )
}

export default App
