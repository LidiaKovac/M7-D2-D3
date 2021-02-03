import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Job.scss";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaHeartBroken } from "react-icons/fa";
import { connect } from "react-redux";
import PlaceHolder from "../assets/PH.png";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFav: (job) =>
    dispatch({
      type: "ADD_JOB_TO_FAV",
      payload: job,
    }),
  removeFromFav: (job) =>
    dispatch({
      type: "REMOVE_JOB_FROM_FAV",
      payload: job,
    }),
});

class Job extends React.Component {
  state = {
    favs: [],
  };
  render() {
    return (
      <div className="job-wrap">
        <div className="logo-title">
          <img
            src={
              this.props.job.company_logo
                ? this.props.job.company_logo
                : PlaceHolder
            }
            className="logo"
          />
          <div className="info-job">
            <div className="title">{this.props.job.title}</div>

            <div className="loc-company">
              <div className="company">{this.props.job.company}</div>
              <div className="location">{this.props.job.location}</div>
            </div>
          </div>
        </div>
        {this.props.showHeart === true ? (
          this.state[this.props.job.id] == true
        ? <div 
            className="like-icon" 
            onClick={() => {this.props.removeFromFav(this.props.job); this.setState({[this.props.job.id]: false})}}>
              <IoIosHeart className="heart"/>
          </div> 
        : <div 
            className="like-icon" 
            onClick={() => {this.props.addToFav(this.props.job); this.setState({[this.props.job.id]: true})}}>
              <IoIosHeartEmpty className="heart" />
          </div> 
          
        ) : <FaHeartBroken className='heart' onClick={() => {this.props.removeFromFav(this.props.job); this.setState({[this.props.job.id]: false})}}/>
      }
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Job);
