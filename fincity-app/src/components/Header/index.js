import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="nav-items-container">
      <Link to="/" className="nav-link">
        <h1 className="nav-item">Madelyn Torff</h1>
      </Link>
      <Link to="/about" className="about nav-link">
        <h1 className="nav-item">About</h1>
      </Link>
      <Link to="/projects" className="tab nav-link">
        <h1 className="nav-item">Projects</h1>
      </Link>
      <Link to="/contacts" className="tab nav-link">
        <h1 className="nav-item">Contact</h1>
      </Link>
    </div>
  </nav>
)

export default Header