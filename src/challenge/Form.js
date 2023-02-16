import { Chat } from "./Chat";
import React from "react";
import { useState } from "react";

export const Form = ({ setDdt }) => {
  const [frmDt, setFrmDt] = useState("test");
  //receive data from input field
  const getData = (e) => {
    const { value } = e.target;

    setFrmDt(value);
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDdt(frmDt);
  };

  return (
    <div>
      <div>
        <Chat frmDt={frmDt} />
      </div>

      <br />

      <form action="" onSubmit={handleFormOnSubmit}>
        <input onChange={getData} type="text" name="" id="" required></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
