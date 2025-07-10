import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Create = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    title: "",
    company: "",
    category: "",
    price: "",
  });

  function handleAsc() {
    let res = data.sort((a, b) => a.price - b.price);
    setData([...res]);
  }
  function handleDes() {
    let res = data.sort((a, b) => b.price - a.price);
    setData([...res]);
  }

  function handleCategory(){
    
  }
  async function getData() {
    let res = await axios.get("http://localhost:3000/products");
    // console.log(res.data)
    setData(res.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3000/products", input);
  }
  async function handleDelete(id) {
    // await axios.delete("http://localhost:3000/products" +id)
    await axios.delete("http://localhost:3000/products/" + id);
    alert("data delete successfully");
    getData();
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="" style={{ background: "black", color: "white" }}>
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[400px] h-[400px] flex flex-col border justify-around"
      >
        <label htmlFor="">
          Title :-
          <input
            className="border"
            type="text "
            placeholder="Enter a title"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
        </label>
        <label htmlFor="">
          Price :-
          <input
            className="border"
            type="text"
            placeholder="Enter a price"
            value={input.price}
            onChange={(e) => setInput({ ...input, price: e.target.value })}
          />
        </label>
        <label htmlFor="">
          Company :-
          <input
            className="border"
            type="text"
            placeholder="Enter a company Name"
            value={input.company}
            onChange={(e) => setInput({ ...input, company: e.target.value })}
          />
        </label>
        <label htmlFor="">
          category :-
          <input
            className="border"
            type="text"
            placeholder="Enter a Category"
            value={input.category}
            onChange={(e) => setInput({ ...input, category: e.target.value })}
          />
        </label>
        <h1></h1>
        <button className="border w-[200px] h-[40px] rounded-[10px] ml-[90px] bg-black text-white">
          Submit
        </button>
      </form>
      <div className="flex flex-col w-[200px] h-[200px] mt-[30px] border justify-center items-center">
        <button className="border w-[100px] mt-[10px]" onClick={handleAsc}>
          Asending
        </button>
        <button className="border w-[100px] mt-[10px]" onClick={handleDes}>
          Desending
        </button>

        <select onChange={handleCategory} name="" id="">
          <option value="all">All</option>
           <option value="shoes">shoes</option>
           <option value="phone">phone</option>
           <option value="glosary" >glosary</option>
        </select>
      </div>

      <div className="w-[100vw] flex justify-around">
        {data &&
          data.map((item) => {
            return (
              <div
                className="border w-[200px] h-[200px] mt-[40px] ml-20 flex flex-col justify-center items-center"
                key={item.id}
              >
                <p>Title :- {item.title}</p>
                <p>category:- {item.category}</p>
                <p>company :- {item.company}</p>
                <p>Price :- {item.price}</p>
                <button
                  className="border"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
                <Link to={`/update/${item.id}`}>
                  {" "}
                  <button>Edit</button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Create;
