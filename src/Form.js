import { useState } from "react";

export const Form = () => {
  const [form, setForm] = useState("");
  const [submit, setSubmitDt] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmitDt(form);
  };
  return (
    <p>
      <div>{form}</div>
      <hr />

      <form action="" onSubmit={handleOnSubmit}>
        <p>
          <label htmlFor="">First Name</label>
          <input onChange={handleOnChange} type="text" name="fName" />
        </p>

        <button type="submit">Submit</button>
      </form>
    </p>
  );
};
