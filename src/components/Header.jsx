import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink to="/" className="navbar-brand" href="#">Company Logo</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/foods" className="nav-link" href="#">Food</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/report" className="nav-link" href="#">Report</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header