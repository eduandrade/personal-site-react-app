import React from 'react';
//import logo from './logo.svg';
import './App.css';

class PersonalWebsite extends React.Component {
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

class MainContent extends React.Component {
  render() {
    return (
      <main>

        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Hello, world!</h1>
            <p>This is my personal website. Enjoy!</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Messenger Beer BOT</h2>
              <p>Beer BOT provides information on beer for everyone — the craft beer rookies, for experts who search for inspiration, and for those who want to discover new tastes. To begin your interaction with Beer Bot, just click on Get Started.</p>
              <p><a className="btn btn-primary" href="https://m.me/messengerbeerbot/">View chatbot &raquo;</a></p>
            </div>

            <div className="col-md-4">
              <h2>Resume React App</h2>
              <p>Sample online resume/personal website using React, Apigee and Heroku (to be implemented).</p>
              <p><a className="btn btn-primary" href="https://github.com/eduandrade/resume-react-webapp">View details &raquo;</a></p>
            </div>
          </div>
        
          <hr/>
        </div>
      </main>    
    );
  }
}

class FooterContent extends React.Component {
  render() {
    return (
      <footer className="container">
        <p>&copy; Eduardo Andrade - {new Date().getFullYear()}</p>
      </footer>
    );
  }
}

class NavBar extends React.Component {
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

function App() {
  return <PersonalWebsite />
}

export default App;
