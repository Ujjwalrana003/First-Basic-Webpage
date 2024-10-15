const express= require("express");
const app = express();
const path= require("path");
const ejsMate= require("ejs-mate");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);

app.get("/",(req,res)=>{
    res.render("./include/Header.ejs");
})

app.get("/working",(req,res)=>{
    res.send("Sorry but this is not complete website");
})

app.get("/country",(req,res)=>{
    // const data= "India";
    res.render("./include/CountryForm.ejs");
})

app.post("/country",(req,res)=>{
    
    const {data}= req.body;
    global.data= data;
    // console.log(data);
    res.render("./include/Header.ejs",{dta:data});
})
app.listen(8080,()=>{
    console.log("Server listening");
})