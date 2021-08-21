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

// to be able to use cors at every http request, meaning allowing all urls to fetch our api
app.use(
    cors({
        origin: "*"
    })
)

// this api grabs all of the item list
app.get("/api/item-list", (req,res) => {
    connectDB( async (db) => {

        // find the data in the database
        const itemInfo = await db.collection("itemList").findOne({});

        // send back all of the content(array) of todo item
        res.status(200).json(itemInfo.item); 

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
app.delete("/api/item-list/:key", (req,res) => {

    // find the index element number
    const key = req.params.key; 

    connectDB( async (db) => {

        // delete a to do item in an array with its index - there is no way to do this in mongodb so we're gonna do some hack in here
        // grab the updated list of array in database and store it in a variable
        const itemInfo = await db.collection("itemList").findOne({});
        const item = itemInfo.item; 

        // slice thru the array that you wanted to remove by index
        item.splice(key,1);

        // insert the updated array with deleted item 
        await db.collection("itemList").updateOne({}, { 
            $set : { 
                "item": item,
            }
        })

        // return a 200 response saying it's all good bro
        res.status(200).json(`todo item deleted ${key}`); // send back this json info

    }, res);
});

