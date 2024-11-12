"use client";
import { Input } from "postcss";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function Home() {
  const [todos, setTodos] = useState([
    { Chaptre: "Plants and Animals", id: 1 },
    { Chapter: "Living things & Non Living Things", id: 2 },
  ]);

  const [inputVal, setInput] = useState("");
  const [id, setId] = useState(0);

  const addItem = () => {

    let obj: any = todos.find((item) => item.id == id);

    if (obj) {
      let newArray = todos.filter ((item) => item.id !== id)
      setTodos([...newArray, { Chapter: inputVal, id: id }]);
    setInput("");
    setId(0);
    return
    }

    setTodos([...todos, { Chapter: inputVal, id: id }]);
    setInput("");
    setId(0);
  };

  const editItem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setInput(obj.Chapter);
    setId(obj.id);
  };

  const delItem = (id:any)=> {
    let newArray = todos.filter ((item) => item.id !== id)
      setTodos([...newArray]);

  }


  return (
    <div className="max-w4xl mx-auto p-5">
      <h1 className="text-center text-[400x]"> Science Topic Todo App</h1>
      <div className="flex justify-between gap-4 mt-5">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInput(e.target.value)}
          className="w-[60%] p-2 ml-2 text-lg border-b focus:outline-none"
          placeholder="Write Topic Name"
        />
        <input
          type="number"
          value={id}
          onChange={(e: any) => setId(e.target.value)}
          className="w-[20%] p-2 ml-2 text-lg border-b focus:outline-none"
          placeholder="Id"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-300 w-[20%] text-white p-2 rounded"
        >
          Add Topic
        </button>
      </div>

      <h1 className="text-center text-[40px] underline mt-5"> Chapter List</h1>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {todos.map((item: any, i: any) => {
          return (
            <div className="shadow p-4" key={i}>
              <div className="flex justify-between text-lg">
                <span className="shadow rounded-full h-8 w-8 text-center my-auto ">
                  {i + 1}
                </span>
                <span onClick={()=>delItem(item.id)}  className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer text-red-700">
                  x
                </span>
              </div>
              <div className="mt-5 text -[30px] text-grey-700">
                {item.Chapter}
              </div>
              <div>
                <h2
                  onClick={() => editItem(item.id)}
                  className="text-right cursor-pointer"
                >
                  Edit
                </h2>
              
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
