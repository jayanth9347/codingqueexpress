const express = require('express');
const app = express();
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3')
const path = require('path');
const dbpath = path.join(__dirname,"cricketTeam.db")

const { open } = require('sqlite')

app.get("/cricketTeam/", async (request,response)=>{
    const getBook = `
    SELECT 
      * 
    FROM 
      cricketTeam
    `
    const bookArray = await db.all(getBook);
    resopond.send(bookArray);
})

let bd = null;



let intilaziton = async () => {
    try{


        bd =  await open({
        filleName: dbpath,
        driver: sqlite3
      })


    } catch(e){
        console.log(`this is ${e.message}`);
        process.exit(1);
    }
  
}


app.listen(3000,()=>{
    console.log(`this is a https//:localhost3000:`);
})

intilaziton();