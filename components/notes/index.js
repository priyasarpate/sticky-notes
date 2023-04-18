import React, { useState } from "react";
import styles from "@/styles/Navbar.module.scss";
import TodoForm from "./Form";
import TodoList from "./List";
import logo from "../../public/logo.png";
import Image from "next/image";
import FirstNote from "./FirstNote";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div>
      <div>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Image src={logo} alt="" width={30} height={30} />
            <h1>Sticky Notes</h1>
          </div>

          <TodoForm
            handleSubmit={handleSubmit}
            todo={todo}
            editId={editId}
            setTodo={setTodo}
          />
        </div>
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          className={styles.sticky_notes}
        />
      </div>
    </div>
  );
};

export default Index;
