import React, { Component } from 'react'
import MainContent from './MainContent2'

class PersonalWebsite extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainContent />
        <FooterContent />
      </div>
    );
  }
}

class FooterContent extends Component {
  render() {
    return (
      <footer className="footer bg-dark">
        <div className="container">
          <span className="text-muted">&copy; Eduardo Andrade - {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">EDUARDO ANDRADE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="projects" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://m.me/messengerbeerbot/">Beer BOT</a>
                <a className="dropdown-item" href="https://github.com/eduandrade/resume-react-webapp">Resume React App</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default PersonalWebsite