import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  fab,
  faCheckSquare,
  faEnvelope
)

class MainContent extends Component {

  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/eduandrade/repos`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {

    return (
      <main className="text-dark">

        <div className="d-flex p-1 bg-warning justify-content-center">
          <div>
            <div className="display-3 text-center">Hello, world!</div>
            <p>I'm Eduardo Andrade, a software developer for more than 15 years and this is my personal website, created using <span className="badge badge-info">React</span>, <span className="badge badge-info">Bootstrap 4</span> and <span className="badge badge-info">GitHub API</span>.</p>
            <p>Check my GitHub repositories below :)</p>
            <p>Enjoy!</p>

            <div className="text-center">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="https://github.com/eduandrade"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/eduandrade/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid p-3">

          <div className="row mt-5 justify-content-center">
            {this.state.data.map(el => (

              <div className="card card-custom mx-2 mb-3" style={{ width: "18rem" }}>
                <div className="card-header"><strong>{el.name}</strong></div>
                <div className="card-body">
                  <p className="card-text">{el.description}</p>  
                  <a className="btn btn-primary btn-sm" href={el.html_url}>View details &raquo;</a>
                </div>
                
              </div>

            ))}
          </div>

        </div>

      </main>
    );
  }
}

export default MainContent