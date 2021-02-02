import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Details.scss";
import Job from "./Job";
import noJob from "../assets/robot.png";
import PlaceHolder from "../assets/PH.png";
import { ImLocation2 } from "react-icons/im";
import notFound from '../assets/404.png'
import parse from 'html-react-parser';

class Details extends React.Component {
  state = {
    position: "",
    location: "",
  };
  componentDidMount = async () => {
    console.log(this.props.location, this.props.position);
    await this.setState({
      location: this.props.location,
      position: this.props.position,
    }); //vs code keeps lying about this, is it a bug?
    let response = await fetch(
      `https://cors-anywhere-lk.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.position}&full_time=true&location=${this.state.location}`
    );
    let jobs = await response.json();
    console.log(jobs);
    this.setState({ jobs: jobs });
  };
  changeJob = (e) => {
    console.log("OK");
  };
  render() {
    return (
      <div className="res-wrap">
        <div className="header"></div>
        <div className="job-list">
          {this.state.jobs && this.state.jobs.length > 0 ?
            this.state.jobs.map((job, index) => {
              return (
                <div onClick={() => this.setState({ selected: job })}>
                  {" "}
                  <Job
                    key={index}
                    title={job.title}
                    img={job.company_logo ? job.company_logo : PlaceHolder}
                    company={job.company}
                    location={job.location}
                  />{" "}
                </div>
              );
            }) : <div className='no-jobs-found'><div className='c404'><img src={notFound}/> 404 </div>
            There are no jobs available in this area!</div>}
        </div>
        <div className="job-details">
          {this.state.selected ? (
            <div className="selected-job">
              <div className="row-title-logo">
                <img
                  src={
                    this.state.selected.company_logo
                      ? this.state.selected.company_logo
                      : PlaceHolder
                  }
                  className="logo-det"
                />
                <div className="wrap-main-det">
                  <div className="title-details">
                    {this.state.selected.title}
                  </div>
                  <div className="company-location-det">
                    <div className="company-desc">
                    <a href={this.state.selected.company_url} target='blank' className='link-det'>  {this.state.selected.company} </a>
                    </div>
                    <div className="location-desc">
                      <ImLocation2 /> {this.state.selected.location}{" "}
                    </div>
                  </div>
                  
                </div>
                
              </div>
              <div className='apply-btn'>
                      APPLY INFO: {parse(this.state.selected.how_to_apply)}
                      </div>
              <div className='description-det' >
              {parse(this.state.selected.description)}
              
                </div>
            </div>
          ) : (
            <div className="oh-no">
              {" "}
              <img src={noJob} className="no-job"></img> Oh no! Seems like you
              did not select a job yet!{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Details;