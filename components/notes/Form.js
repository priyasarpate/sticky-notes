import React from "react";
import styles from "@/styles/Navbar.module.scss";

const Form = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className={styles.input}
          placeholder="add my sticky note"
        />
        <button type="submit" className={styles.submit}>
          {editId ? "Edit" : "Go"}
        </button>
      </form>
    </>
  );
};

export default Form;
