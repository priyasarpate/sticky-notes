import React from "react";
import styles from "@/styles/Sticky.module.scss";
import {FaEraser} from "react-icons/fa";
import {ImPencil2} from "react-icons/im";

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

          <div className={styles.icons}>
          <div onClick={() => handleEdit(t.id)}>
          <ImPencil2 />
          </div>
          <div onClick={() => handleDelete(t.id)}>
            <FaEraser />
          </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
