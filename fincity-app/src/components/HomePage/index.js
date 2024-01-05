import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import ProjectsContext from '../../context'
import Header from '../Header'

import './index.css'

const HomePage = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectLink: '',
    description: '',
  })
  
  const {onAddProjects} = useContext(ProjectsContext)
  const onsubmitForm = event => {
    event.preventDefault()
    onAddProjects(event)
    setFormData({
      projectName: '',
      projectLink: '',
      description: '',
    })
  }

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="Home-bg-container">
      <Header />
      <div className="home-container">
        <div className="details-container">
          <p className="ui-ux">UI/UX Designer</p>
          <h1 className="heading">Hello, my name is Madelyn Torff</h1>
          <p className="description">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="buttons-container">
            <Link to="/projects" className="nav-link">
              <button type="button" className="projects-button">
                Projects
              </button>
            </Link>
            <button type="button" className="linkedin-button">
              Linkedin
            </button>
          </div>
        </div>
        <form className="form-container" onSubmit={onsubmitForm}>
          <h1 className="from-heading">Add Project</h1>
          <div className="input-container">
            <label htmlFor="project-name" className="label">
              Project name
            </label>
            <input
              className="input"
              name="projectName"
              id="project-name"
              type="text"
              value={formData.projectName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="project-link" className="label">
              Project Link
            </label>
            <input
              className="input"
              name="projectLink"
              id="project-link"
              type="text"
              value={formData.projectLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="message" className="label">
              Description
            </label>
            <textarea
              id="message"
              name="description"
              rows="4"
              cols="50"
              value={formData.description}
              onChange={handleInputChange}
              className="description-input"
            >
              .
            </textarea>
          </div>
          <button type="submit" className="submit-button">
            add
          </button>
        </form>
      </div>
    </div>
  )
}

export default HomePage