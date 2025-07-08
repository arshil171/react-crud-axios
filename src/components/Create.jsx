import React, { useState } from "react";

const Create = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    title: "",
    company: "",
    category: "",
    price: "",
  });

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
    <div style={{ background: "black", color: "white" }}>
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
      <div></div>
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
              <button>Edit</button>
            </div>
          );
        })}
    </div>
  );
};

export default Create;
