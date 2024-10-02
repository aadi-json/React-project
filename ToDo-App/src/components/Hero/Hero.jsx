import React, { useEffect, useState } from "react";
import Button from "./Button";

function Hero() {
  const [isComplited, setIsComplted] = useState("");
  const [todos, setTodos] = useState([]);
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    const newTodo = {
      titel: titel,
      description: description,
    };
    let updateTodos = [...todos];
    updateTodos.push(newTodo);
    setTodos(updateTodos);
    localStorage.setItem("todolist", JSON.stringify(updateTodos));
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodo) {
      setTodos(savedTodo);
    }
  }, []);

  const handleRemove = (index) => {
    let updateTodos = [...todos];
    updateTodos.splice(index);
    setTodos(updateTodos);

    localStorage.setItem("todolist", JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  return (
    <div className="py-2">
      <div className="">
        <label className="text-white px-6">Titel</label>
        <input
          type="text"
          placeholder="Enter your todo"
          className=" w-1/4 h-7 rounded-sm outline-none text-center"
          value={titel}
          onChange={(e) => setTitel(e.target.value)}
        />
        <label className="text-white px-6">Discription</label>
        <input
          type="text"
          placeholder="Enter your discription"
          className=" w-1/4 h-7 rounded-sm outline-none text-center mr-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-red-100 px-6 py-1" onClick={handleClick}>
          Add
        </button>
        {todos.map((item, index) => {
          return (
            <div className="   gap-5 text-white my-6  text-wrap" key={index}>
              <div className="flex justify-between bg-gray-800">
                <h1 className="px-9 text-2xl">
                  {item.titel} <p className="text-xl">{item.description}</p>
                </h1>

                <div className=" flex justify-end px-3 gap-4">
                  <button
                    className="bg-yellow-400 px-6"
                    onClick={() => {
                      handleRemove(index);
                    }}
                  >
                    Delete
                  </button>
                  <button className="bg-slate-300 px-6">Edit</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
