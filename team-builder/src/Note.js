import React from "react";

const Note = (props) => {
  return (
    <div>
      {props.lists.map((listItem, i) => (
        <div className='note' key={i}>
          <h2>{listItem.name}</h2>
          <p>{listItem.email}</p>
          <p>{listItem.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
