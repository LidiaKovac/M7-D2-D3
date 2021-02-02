import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Job.scss";

class Job extends React.Component {
  render() {
    return (
      <div className="job-wrap" >
        <div className="logo-title">
          <img src={this.props.img} className="logo" />
          <div className="info-job">
            <div className="title">{this.props.title}</div>

            <div className="loc-company">
              <div className="company">{this.props.company}</div> ||{" "}
              <div className="location">{this.props.location}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Job;