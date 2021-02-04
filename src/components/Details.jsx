import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import "../styling/Details.scss";
import Job from "./Job";
import noJob from "../assets/robot.png";
import PlaceHolder from "../assets/PH.png";
import { ImLocation2 } from "react-icons/im";
import notFound from "../assets/404.png";
import parse from "html-react-parser";
import Favorites from "./Favorites";
import { Button } from "react-bootstrap";
import Loader from "./Loader";

const mapDispatchToProps = (dispatch) => ({
  getDataAsync: (pos, loc) => dispatch(async () => {
    console.log("starting")
    await this.setState({
      location: this.props.location,
      position: this.props.position,
    });
    this.setState({ loading: true });
    let response = await fetch(
      `https://cors-anywhere-lk.herokuapp.com/https://jobs.github.com/positions.json?description=${pos}&full_time=true&location=${loc}`
    );
    let jobs = await response.json();
    this.setState({ loading: false });
    this.setState({ jobs: jobs });
    dispatch({
      type: "ADD_DATA",
      payload: jobs,
    });
  }),
});


class Details extends React.Component {
  state = {
    show: false,
    position: "",
    location: "",
  };
  componentDidMount = async () => {
    console.log(this.props, this.props.position);
    this.props.getDataAsync(this.props.position, this.props.location);
  };

  changeJob = (e) => {
    console.log("OK");
  };
  handleModal = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="res-wrap">
        <div className="header"></div>
        <div className="job-list">
          {this.state.loading === true ? (
            <Loader />
          ) : this.state.jobs && this.state.jobs.length > 0 ? (
            this.state.jobs.map((job, index) => {
              return (
                <div
                  key={`${index}D`}
                  onClick={() => this.setState({ selected: job })}
                >
                  {" "}
                  <Job job={job} showHeart={true} />{" "}
                </div>
              );
            })
          ) : (
            <div className="no-jobs-found">
              <div className="c404">
                <img alt="not_found" src={notFound} /> 404{" "}
              </div>
              There are no jobs available in this area!
            </div>
          )}
        </div>
        <div className="job-details">
          {this.state.selected ? (
            <div className="selected-job">
              <div className="row-title-logo">
                <img
                  alt="company_logo"
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
                      <a
                        href={this.state.selected.company_url}
                        target="blank"
                        className="link-det"
                      >
                        {" "}
                        {this.state.selected.company}{" "}
                      </a>
                    </div>
                    <div className="location-desc">
                      <ImLocation2 /> {this.state.selected.location}{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="apply-btn">
                APPLY INFO: {parse(this.state.selected.how_to_apply)}
              </div>
              <div className="description-det">
                {parse(this.state.selected.description)}
              </div>
            </div>
          ) : (
            <div className="oh-no">
              {" "}
              <img
                alt="no_job_selected"
                src={noJob}
                className="no-job"
              ></img>{" "}
              Oh no! Seems like you did not select a job yet!{" "}
            </div>
          )}
        </div>
        <Button
          className="show-fav rounded-pill"
          onClick={() => this.handleModal()}
        >
          SHOW FAV
        </Button>
        <Favorites show={this.state.show} handleModal={this.handleModal} />
      </div>
    );
  }
}
export default connect(mapDispatchToProps)(Details);
