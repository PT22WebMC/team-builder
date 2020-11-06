import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import Note from "./Note";

function App() {
  const [form, setForm] = useState([]);

  const addNewPerson = (formData) => {
    const newPerson = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
    };

    setForm([form, newPerson]);
    console.log(addNewPerson);
    console.log(form);
  };
  return (
    <div className='App'>
      <h1> Team Builder </h1>
      <Form addNewPerson={addNewPerson} />
      <Note lists={form} />
    </div>
  );
}

export default App;
