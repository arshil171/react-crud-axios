import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Update = () => {
    const [input , setInput] = useState({title : "" , price :"" ,  company :"" , category :"" })
      let {id } = useParams()

   async function getData() {
    let res = await axios.get(`http://localhost:3000/products/${id} ` );
    // console.log(res.data)
    setInput(res.data);
  }
      
  async  function handleUpdate(e){
    e.preventDefault()
      await axios.put(`http://localhost:3000/products/${id}` ,input )
      alert("update succesfully")
    }
    useEffect(()=>{
       getData()
    },[])
  return (
    <div>
         <form
        onSubmit={handleUpdate}
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
          update
        </button>
      </form>
    </div>
  )
}

export default Update