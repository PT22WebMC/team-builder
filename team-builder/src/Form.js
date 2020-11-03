import React, { useState } from "react";

const Form = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addNewPerson(form);
    setForm({ ...form, ["name"]: "", ["email"]: "", ["role"]: "" });
  };
  return (
    <div>
      <form>
        <label>
          Name:
          <input
            name='name'
            type='text'
            value={form.name}
            onChange={changeHandler}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            name='email'
            type='email'
            value={form.email}
            onChange={changeHandler}
          />
        </label>
        <br />
        <label>
          Role:
          <input
            name='role'
            type='text'
            value={form.role}
            onChange={changeHandler}
          />
        </label>
      </form>
      <button onClick={submitForm}>Add New Note</button>
    </div>
  );
};

export default Form;
