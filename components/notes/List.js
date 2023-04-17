import React from "react";
import styles from "@/styles/Sticky.module.scss";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className={styles.list_body}>
      {todos.map((t) => (
        <div className={styles.paper} key={t.id}>
          <div className={styles.pin}>
            <div className={styles.shadow}></div>
            <div className={styles.metal}></div>
            <div className={styles.bottom_circle}></div>
          </div>
          <p>{t.todo}</p>
          {/* <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button> */}
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
