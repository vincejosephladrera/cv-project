//personal.js

import React, { Component } from "react";
import { Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

export class Personal extends Component {
  render() {
    return (
      <div>
        <h1 className="w-[75%] mx-auto uppercase font-semibold"> Personal Info</h1>
        <form className="flex flex-col gap-[10px] items-center">
          <div className="w-[75%]">
            <Input
              color="amber"
              type="text"
              id="firstName"
              label="First Name"
              className="w-[100%]"
              onChange={this.props.getFirstName}
            />
          </div>
          <div className="w-[75%]">
            <Input
              color="amber"
              type="text"
              id="lastName"
              label="Last Name"
              className="w-[100%]"
              onChange={this.props.getLastName}
            />
          </div>
          <div className="w-[75%]">
            <Input
              color="amber"
              type="text"
              id="jobTitle"
              label="Job Title"
              className="w-[100%]"
              onChange={this.props.getJobTitle}
            />
          </div>
          <div className="w-[75%]">
            <Input
              color="amber"
              type="text"
              id="address"
              label="Address"
              className="w-[100%]"
              onChange={this.props.getAddress}
            />
          </div>
          <div className="w-[75%]">
            <Input
              color="amber"
              type="text"
              id="contactNumber"
              label="Contact Number "
              className="w-[100%]"
              onChange={this.props.getContactNumber}
            />
          </div>
          <div className="w-[75%]">
            <Input
              color="amber"
              type="email"
              id="email"
              label="Email"
              className="w-[100%]"
              onChange={this.props.getEmail}
            />
          </div>
          <div className="w-[75%]">
            <Textarea
              color="amber"
              rows={10}
              cols={100}
              label="Description"
              className="placeholder:font-bold w-[100%]"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Personal;
