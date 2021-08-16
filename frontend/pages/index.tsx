import Image from 'next/image'
import Layout from '../component-for-all/Layout'
import { useState } from "react";


export default function Home() {
  const [todoValue, setTodoValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  

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
                    setButtonClicked(true); 
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
                  show list of items here 
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
