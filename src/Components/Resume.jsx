import React, { Component } from 'react';
import Title from './Title.jsx';

class Resume extends Component {
  render() {
    return (
      <div>
        <Title
          title="My Resume"
          />

        <div className="container">
    <div className="row">
      <div className="col">
        <h4>Check out my resume</h4>
        <a href="JohnSadie.pdf"><button className="btn">View Full Resume</button></a>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default Resume;
