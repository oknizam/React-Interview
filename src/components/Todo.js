import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNew, markDone } from "../redux/todoSlice";
import Button from "./UI/Button";
import InputBox from "./UI/InputBox";

const Todo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo)

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleClick(e) {
    dispatch(addNew({
      name: task
    }));
    setTask("");
  }

  function handleDone(id) {
    dispatch(markDone({
      id
    }));
  }

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Todo App with redux</h3>
      <div style={{ display: "grid", gridTemplateRows: "50% %50", justifyContent: "center", gap: "20px" }}>
        <div>
          <InputBox label="Enter task Name" value={task} onChange={handleChange} />
          <Button buttonLabel="Create" onClick={handleClick} />
        </div>
        <div>
          {todoList?.map((item) => <div key={item.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <span>{item.name}</span>
            <input type={"checkbox"} onChange={() => handleDone(item.id)} />
          </div>)}
        </div>
      </div>
    </>
  )

};

export default Todo;