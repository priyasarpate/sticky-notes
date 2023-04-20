import React from "react";
import styles from "@/styles/Sticky.module.scss";
import { FaEraser } from "react-icons/fa";
import { ImPencil2 } from "react-icons/im";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className={styles.list_body}>
   
        <div className={styles.paper} >
          <div className={styles.pin}>
            <div className={styles.shadow}></div>
            <div className={styles.metal}></div>
            <div className={styles.bottom_circle}></div>
          </div>
          <p>we can edit text or delete it using this side icons.</p>
          {todos.map((t) => (
          <div className={styles.icons} key={t.id}>
            <div onClick={() => handleEdit(t.id)}>
              <ImPencil2 />
            </div>
            <div onClick={() => handleDelete(t.id)}>
              <FaEraser />
            </div>
          </div>
          ))}
        </div>
   
    </ul>
  );
};

export default TodoList;