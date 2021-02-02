import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Search.scss";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    position: "",
    location: "",
  };
  componentDidUpdate(){
    
}
  onChangeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () =>
      {console.log(this.state[e.target.id])
      this.props.position(this.state.position)
    this.props.location(this.state.location)}
    );
    
  };



  render() {
    return (
      <div className="wrap-search">
        <input
          className="input"
          id="position"
          value={this.state.position}
          onClick={() => {
            this.setState({ position: "" });
          }}
          placeholder='job position'
          onChange={(e) => this.onChangeHandler(e)}
        />
        <input
          className="input"
          id="location"
          value={this.state.location}
          onClick={() => {
            this.setState({ location: "" });
          }}
          placeholder='location'
          onChange={(e) => this.onChangeHandler(e)}
        />
        <Link to='/jobs'>
          {" "}
          <div className="search-btn">
            <FiSearch className="search-icon" />
          </div>
        </Link>
      </div>
    );
  }
}
export default Search;
