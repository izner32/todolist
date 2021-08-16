/* setting up a server 
- install then import express
- connect to port 
*/
import express from "express";
import connectDB from "./config/db";

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
        res.status(200).json(itemInfo); // parse this json into js object then return

    }, res);
});

// this api inserts a todo list into the database
// app.post("/api/item-list", (req,res) => {
//     connectDB( async (db) => {

//         // insert to do list in an array 
//     }
// }