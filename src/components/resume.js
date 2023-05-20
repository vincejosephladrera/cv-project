/* resume.js */
import React, { Component } from "react";

export default class resume extends Component {
  render() {
    return (
      <div>
        <div className="w-[45vw] mx-[5vw] bg-gray-500">
          <div className="w-[100%] min-h-[120px] bg-light-blue-800">
            <h1 className="text-white font-bold uppercase text-[2.5vw] pl-[20px]">A</h1>
            <h1 className="text-white font-bold uppercase text-[1.25vw] pl-[20px]">
              Front End Developer
            </h1>
          </div>
          <div className="text-white min-h-fit pl-[20px] pt-[20px]">
            <h2 className="uppercase font-bold">Description</h2>
          </div>
        </div>
      </div>
    );
  }
}
