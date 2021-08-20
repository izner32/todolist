/* setting up a server 
- install then import express
- connect to port 
*/
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express(); // express is an object that has multiple methods
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`listening to port:${PORT}`);
});

// to be able to send in thunder client/postman 
app.use(express.json());

// to be able to use cors at every http request
app.use(
    cors({
        origin: "*"
    })
)

// this api grabs all of the item list
app.get("/api/item-list", (req,res) => {
    connectDB( async (db) => {

        //  db.itemList.find({},{"item":1,"_id":0}) - this means look for all document, only show the item hide the id
        const itemInfo = await db.collection("itemList").findOne({});
        // const itemInfo = await db.collection("itemList").find({},{"item":1,"_id":0});
        res.status(200).json(itemInfo.item); // send back this jsoned info, only return the item property, exclude the id

    }, res);
});

// this api inserts a todo list into the database
app.post("/api/item-list", (req,res) => {
    // destructure the content then insert this content into the database
    const { todoItem } = req.body; // req.body is the one they're sending, or the one we're adding in the fetch

    connectDB( async (db) => {

        // insert to do item in an array 
        const insertItemInfo = await db.collection("itemList").updateOne({}, //{} means on all object 
            { $push: // adding this item into the array
                { "item":todoItem } // item is the name of the array, append todoItem into that array
            });
        
        // return response
        res.status(200).json(`todo item inserted`); 
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

