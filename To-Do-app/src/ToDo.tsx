import { useState } from "react";
import "./todo.css";
import List from "./List";

const ToDo = () => {
    const [toDOListArray, setToDoListArray] = useState<string[]>([]);
    const [inputValue,setInputValue] = useState('');
    const appendIntoArray = () => {
      setToDoListArray((prev) => [...prev, inputValue]);
      setInputValue("");
    };

    const deleteFromArray = (indexEle:number) => {
        setToDoListArray((prev)=>(prev.filter((_,index)=>index!==indexEle)))
    }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-700">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-lg">
          <h1 className="text-2xl font-bold text-center mb-2">Todo List App</h1>
          <p className="text-center text-gray-500 mb-4">
            Create your task(s) and get organized today.
          </p>
          <div className="inputField border border-gray-300 rounded-2xl h-12 px-4 flex justify-between items-center space-x-2 bg-white shadow-sm">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter task"
              className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            <button
              className="bg-blue-800 hover:bg-blue-400 text-white font-light px-4 py-1 rounded-lg transition"
              onClick={appendIntoArray}
            >
              Add task
            </button>
          </div>
          <div>
            {toDOListArray.length > 0 &&
              toDOListArray.map((item, index) => (
                <List key={index} item={item} onDelete={deleteFromArray} index={index} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
