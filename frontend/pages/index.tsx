import Image from 'next/image'
import Layout from '../component-for-all/Layout'
import { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {
  const [todoValue, setTodoValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  // fetch post api request that lets us add to the database
  const onAddButtonClicked = async () => {

    // fetch the post api, send the todoValue which contains the content of the input field
    const response = await fetch(`http://localhost:4000/api/item-list`,{
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        todoItem: todoValue 
      })
    });
    
    // print if post api was a success
    console.log(response); // return the response which is a console log

    // change the value of state so useEffect would work thus updating the displayList
    setButtonClicked(!buttonClicked);
  }

  // fetch delete api request that lets us delete a data to the database
  const onRemoveButtonClicked = () => {

    // fetch the delete api
  
    // change the value of state so useEffect would work thus updating the displayList
    setButtonClicked(!buttonClicked);
  }

  return (
    <div className="">
      <Layout>
        <div>
          <main className="bg-primary vh-100 ">
            <div className="container pt-5">
              <div className="d-flex justify-content-center">
                <input
                  placeholder ="Enter to do"
                  value = {todoValue}
                  onChange = { e => {
                    setTodoValue(e.target.value); 
                  }}
                ></input>
                <button
                  className ="btn btn-dark ms-2"
                  onClick = { () => {
                    onAddButtonClicked() 
                  } }
                >Add</button>
              </div>
              <div className="">
                <p className="text-center mt-5">Todo List</p>
                <ul className="list-unstyled d-grid w-85">
                  {/* sample on how it must look like */}
                  <div className="bg-light d-flex justify-content-between align-items-center mb-3">
                    <li className="ms-2">list 1</li><button className ="btn btn-dark">remove</button>
                  </div>
                  <div className="bg-light d-flex justify-content-between align-items-center mb-3">
                    <li className="ms-2">list 1</li><button className ="btn btn-dark">remove</button>
                  </div>
                  {/* 
                  displayTodoItems();
                  */}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </div>
  )
}
