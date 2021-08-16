import Image from 'next/image'
import Layout from '../component/Layout'
import { useState } from "react";


export default function Home() {
  const [todoValue, setTodoValue] = useState("");

  function addButtonClicked () {
    /* 
    1. if button has been clicked, return a list jsx containing the conent of the todo list
    */
    console.log(`button has been clicked`);
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
                  onChange = { e => setTodoValue(e.target.value) }
                ></input>
                <button
                  onClick = {addButtonClicked()}
                >Add</button>
              </div>
              <div className="">
                <p className="text-center mt-5">Todo List</p>
                <ul className="list-unstyled d-grid w-85">
                  <div className="d-flex">
                  <li className="w-75">list 1</li><button className="">Remove</button>
                  </div>
                  <div className="d-flex">
                  <li className="w-75">list 2</li><button>Remove</button>
                  </div>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </div>
  )
}
