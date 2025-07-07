import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
    const [data , setData ] = useState([])
       

  async function getData(){
  let res =  await axios.get("http://localhost:3000/products")
    console.log(res.data)
    setData(res.data)
  }
   console.log(data)
    useEffect(()=>{
       getData()
    },[])
   return (
    <div>
      <form action="" className="w-[400px] h-[400px] flex flex-col border justify-around"  >
        <label htmlFor="">
          Title :-
          <input className="border" type="text " placeholder="Enter a title" />
        </label>
        <label htmlFor="">
          Price :-
          <input  className="border" type="text" placeholder="Enter a price" />
        </label>
        <label htmlFor="">
          
          Company :-
          <input  className="border" type="text" placeholder="Enter a company Name" />
        </label>
        <label htmlFor="">
          category :-
          <input  className="border" type="text" placeholder="Enter a Category" />
        </label>
        <button   className="border w-[200px] h-[40px] rounded-[10px] ml-[90px] bg-black text-white">Submit</button>
      </form>
      {data.map((item)=>{
             <div key={item.title}>
                  <p>{item.id}</p>
                  console.log()
             </div> 
      })}
    </div>
  );
};

export default App;
