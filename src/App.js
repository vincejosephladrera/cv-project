// app.js

import React, { Component } from "react";

import Experience from "./components/experience";
import Education from "./components/education";
import Personal from "./components/personal";
import "./css/app.css";

export class app extends Component {
  constructor(props) {
    super(props);
    this.getFirstName = this.getFirstName.bind(this);
    this.getLastName = this.getLastName.bind(this);
    this.getJobTitle = this.getJobTitle.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.getContactNumber = this.getContactNumber.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      jobTitle: "",
      address: "",
      contactNumber: "",
      email: "",
    };
  }
  getFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  getLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  getJobTitle(e) {
    this.setState({
      jobTitle: e.target.value,
    });
  }
  getAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  getContactNumber(e) {
    this.setState({
      contactNumber: e.target.value,
    });
  }
  getEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="flex">
          <div className="flex flex-col justify-center bg-blue-gray-100 w-[45vw] ml-[5vw]">
            <h1 className="text-[4vw] font-extrabold text-center"> CV Creator</h1>
            <Personal
              getFirstName={this.getFirstName}
              getLastName={this.getLastName}
              getJobTitle={this.getJobTitle}
              getAddress={this.getAddress}
              getContactNumber={this.getContactNumber}
              getEmail={this.getEmail}
            />
            <Experience />
            <Education />
          </div>
          <div className="w-[45vw] mx-[5vw] bg-gray-500">
            <div className="w-[100%] min-h-[200px] bg-light-blue-800 py-[20px]">
              <h1 className="text-white font-bold uppercase text-[2.5vw] pl-[20px]">
                {this.state.firstName} {this.state.lastName}
              </h1>
              <h2 className="text-white font-bold uppercase text-[1.25vw] pl-[20px]">
                {this.state.jobTitle}
              </h2>
              <h3 className="text-white text-[1vw] pl-[20px]">{this.state.address}</h3>
              <h3 className="text-white text-[1vw] pl-[20px]">{this.state.contactNumber}</h3>
              <h3 className="text-white text-[1vw] pl-[20px]">{this.state.email}</h3>
            </div>
            <div className="text-white min-h-fit px-[20px] pt-[20px]">
              <h2 className="uppercase font-bold py-[10px]">Description</h2>
              <hr />
              <h2 className="uppercase font-bold py-[10px]">Experience</h2>
              <hr />
              <h2 className="uppercase font-bold py-[10px]">Education</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default app;
