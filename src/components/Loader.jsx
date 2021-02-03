import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Loader.scss";

class Loader extends React.Component {
  render() {
    return (
      <div className="loader-wrap">
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
export default Loader;
