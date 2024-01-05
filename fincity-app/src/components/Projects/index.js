import './index.css'

const Project = props => {
  const {projectDetails} = props
  const {description, projectName} = projectDetails
  return (
    <li className="project-container">
      <div className="project-details-container">
        <h1 className="name">{projectName}</h1>
        <p className="pro-description">{description}</p>
        <button type="button" className="project-button">
          View Project
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
        alt={projectName}
        className="project-image"
      />
    </li>
  )
}
export default Project