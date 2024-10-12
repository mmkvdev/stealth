/**
 * user enters a messsage in the text field, then clicks on add button, a new entry to be inserted in the list
 * after clicking on add button, input field shoild be cleared
 * items are sorted from most recent one, to the oldest
 * when user clicks on an item of the list, that item must be marked as checked by crossing it using text-decoration: line-through
 * when user clicks agaoin on a checked item on the list, that item must be unmarked as checked
 */

// solution
import React, { useState } from "react";

function ToDoList() {
  const [todoListItems, setTodoListItems] = useState([]);
  const [toDoItem, setToDoItem] = useState("");

  const addTask = () => {
    setTodoListItems([
      { inputValue: toDoItem, isChecked: false },
      ...todoListItems,
    ]);
    setToDoItem("");
  };

  const checkToDoItem = (index) => {
    const newToDoListItem = todoListItems.map((item, i) => {
      if (i === index) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setTodoListItems(newToDoListItem);
  };

  const handleToDoItemChange = (event) => {
    const { value } = event.target;
    setToDoItem(value);
  };

  return (
    <div>
      <h1>My To Do List</h1>
      <input
        type="text"
        placeholder="Enter Item"
        value={toDoItem}
        onChange={(e) => handleToDoItemChange(e)}
      />
      <button onClick={addTask}>ADD</button>

      <ul>
        {todoListItems.map((item, index) => (
          <li
            key={index}
            onClick={() => checkToDoItem(index)}
            style={{
              textDecoration: item.isChecked ? "line-through" : "none",
            }}
          >
            {item.inputValue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
