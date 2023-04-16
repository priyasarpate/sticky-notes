import React from "react";

const Form = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit"> {editId ? "Edit" : "Go"}</button>{" "}
      </form>
    </>
  );
};

export default Form;
