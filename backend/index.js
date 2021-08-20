/* setting up a server 
- install then import express
- connect to port 
*/
const express = require("express");
import { connectDB } from "./config/db.mjs";

const app = express(); // express is an object that has multiple methods
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening to port:${PORT}`);
});

// this api grabs all of the item list
app.get("/api/item-list", (req,res) => {
    connectDB( async (db) => {

        //  db.itemList.find({},{"item":1,"_id":0}) - this means look for all document, only show the item hide the id
        const itemInfo = await db.collection("itemList").find({},{"item":1,"_id":0});
        res.status(200).json(itemInfo); // send back this jsoned info

    }, res);
});

// this api inserts a todo list into the database
app.post("/api/item-list", (req,res) => {
    // destructure the content then insert this content into the database
    const { todoItem } = req.body; // req.body is the one they're sending, or the one we're adding in the fetch

    connectDB( async (db) => {

        // insert to do item in an array 
        const insertItemInfo = await db.collection("itemList").updateOne({}, 
            { $push: 
                { "item":todoItem } 
            });

        // query for the updated todo list then return it
        const itemInfo = await db.collection("itemList").find({},{"item":1, "_id":0 });
        res.status(200).json(itemInfo); // send back this json info

    }, res);
});

// this api deletes a certain item after the button has been clicked
app.delete("/api/item-list", (req,res) => {
    /*
    - if button has been clicked delete this specific type 
    - match content of delete todo item to the content in database
    - delete matched data
    - return update list
    */


    connectDB( async (db) => {

        // delete a to do item in an array 
        const insertItemInfo = await db.collection("itemList").updateOne({}, 
            { $push: 
                { "item":todoItem } 
            });

        // query for the updated todo list then return it
        const itemInfo = await db.collection("itemList").find({},{"item":1, "_id":0 });
        res.status(200).json(itemInfo); // send back this json info

    }, res);
});

