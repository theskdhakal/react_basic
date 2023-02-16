import { useState } from "react";
export const chat = () => {
  const [form, setForm] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm(value);
  };
  return <input onChange={handleOnChange} type="text" name="fName" />;
};
