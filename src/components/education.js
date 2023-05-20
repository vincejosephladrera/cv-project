//experience.js

import React, { Component } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

export default class experience extends Component {
  render() {
    return (
      <>
        <h1 className="w-[75%] mx-auto font-semibold uppercase">Education</h1>
        <form className="flex flex-col gap-[10px] items-center">
          <div className="w-[75%]">
            <Input
              color="amber"
              type="text"
              id="universityName"
              label="University Name"
              className="w-[100%]"
            />
          </div>
          <div className="w-[75%]">
            <Input color="amber" type="text" id="degree" label="Degree" className="w-[100%]" />
          </div>
          <div className="w-[75%]">
            <Input
              color="amber"
              type="text"
              id="schoolLocation"
              label="Location"
              className="w-[100%]"
            />
          </div>
          <div className="w-[75%]">
            <Input
              color="amber"
              type="text"
              id="dateStart"
              label="Date Start"
              className="w-[100%]"
            />
          </div>
          <div className="w-[75%]">
            <Input color="amber" type="text" id="dateEnd" label="Date End" className="w-[100%]" />
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
          <div className="flex gap-[20px]">
            <Button variant="outlined" color="green">
              Add
            </Button>
            <Button variant="outlined" color="red">
              Remove
            </Button>
          </div>
        </form>
      </>
    );
  }
}
