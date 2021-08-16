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
                  onClick = { () => {
                    setButtonClicked(true); 
                  } }
                >Add</button>
              </div>
              <div className="">
                <p className="text-center mt-5">Todo List</p>
                <ul className="list-unstyled d-grid w-85">
                  {/* sample on how it must look like */}
                  <div className="d-flex justify-content-between">
                    <li className="">list 1</li><button>remove</button>
                  </div>
                  <div className="d-flex justify-content-between">
                    <li className="">list 1</li><button>remove</button>
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
