import express from "express"
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();


app.use(bodyParser.urlencoded({ extended: false }))


app.get("/",(req,res)=>{
    var date = new Date().getDay();
    res.render(__dirname+"/views/index.ejs",{day:date})
})

app.listen(3000,()=>{
    console.log(`Listening on port 3000`);
})