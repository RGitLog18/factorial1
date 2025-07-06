let express=require('express');
let cors=require("cors");

let app=express(); //creates instance of server

app.use(cors()); //to allow permission

app.get("/ping",function(request,response){response.send("Hello World")}); //get request to ping the server
app.get("/fact",
    (req,res)=>{
        let str=req.query.number; //get the number from the request
        let num=parseInt(str); //parse the number to integer
        let fact=1;
        for(let i=1;i<=num;i++)
        {
            fact=fact*i;
        }
        resp.send(`Factorial=${fact}`); //send the factorial as response
    })

app.listen(9000,()=>{console.log("Express is ready")}); //server listens on port 9000