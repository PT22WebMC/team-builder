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
    console.log(addNewPerson);
    setForm([form, newPerson]);
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
