import React, {useEffect, useState} from 'react'

function ItemList({buttonClicked,setButtonClicked}) {

    // store grabbed data from the get api into this variable
    const [itemList,setItemList] = useState([]);

    // fetch delete api request that lets us delete a data to the database
    const onRemoveButtonClicked = async () => {

    // fetch the delete api
    const res = await fetch(`http://localhost:4000/api/item-list`);
    const data = await res.json(); // grab the response of the api

    // change the value of state so useEffect would work thus updating the displayList
    setButtonClicked(!buttonClicked);
  }

    useEffect( () => {// cannot make the callback function of useEffect as async so we create a function inside it
        
        // fetch the api that returns the list items array
        const fetchData = async () => {
        const response = await fetch(`http://localhost:4000/api/item-list`)
        const data = await response.json();

        // after fetching store this grabbed data now
        setItemList(data);
        }
    }, [buttonClicked]);

    // check if array has no content - if no content return this
    if (itemList.length === 0){
        return (
            <div className="d-flex align-items-center justify-content-center">
                <h3>Add a todo item</h3>
            </div>
        )
    }

    // now that you have reached this level it means the array has content
    // map the array and return an array containing each of these jsx elements
    itemList.map( (x,key) => (
        <div className="bg-light d-flex justify-content-between align-items-center mb-3" key={key}>
            <li className="ms-2">{x}</li>
            <button 
                className ="btn btn-dark"
                onClick = {() => { onRemoveButtonClicked() }}
            >remove</button>
        </div>
    ) );
}

export default ItemList
