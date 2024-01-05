import {useContext} from 'react'
import ProjectsContext from '../../context'
import Header from '../Header'
import Project from '../Projects'
import './index.css'

const ProjectsPage = () => {
  const {projects} = useContext(ProjectsContext)

  return (
    <div className="projects-bg-container">
      <Header />
      <ul className="projects-ul">
        <h1 className="projects-heading">Projects</h1>
        {projects.map(each => (
          <Project key={each.id} projectDetails={each} />
        ))}
      </ul>
    </div>
  )
}

export default ProjectsPage