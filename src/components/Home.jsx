import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Home.scss";
import Search from "./Search";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
    
  componentDidMount = async () => {
    console.log(this.props);

    
  };
  componentDidUpdate() {
    this?.props?.position(this.state?.position);
    this?.props?.locate(this.state?.location);
  }
  getPosition = (pos) => {
    this.setState({ position: pos });
  };
  getLocation = (loc) => {
    this.setState({ location: loc });
  };
  render() {
    return (
      <div className="home-wrap">
        <div className="call-wrap">
          <div className="call-to-action">Find your dream job today.</div>
          <Search position={this.getPosition} location={this.getLocation} />
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
