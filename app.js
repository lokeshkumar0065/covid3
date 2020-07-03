const express = require("express");
  const fetch = require("node-fetch");
  const ejs = require("ejs");
     const app = express();
     app.use(express.static("primary"));
     app.set('view engine' , 'ejs');
     let x ="";
     let y = " ";
   app.get("/" , function(req,res)
  {
      
      //returning api country wide data
      const url =  " https://api.covid19india.org/data.json ";
      fetch(url)
      .then((response)=> response.json())
      .then((data)=>{
          y = data.statewise[29].confirmed ; 
         
       })
       .catch((error)=>{
          console.log(error);
       });

       //returning api statewise api data
       const url1="https://api.covid19india.org/state_district_wise.json";
       fetch(url1)
       .then((resp)=> resp.json())
       .then((data)=>{
            x = data.Puducherry.districtData.Karaikal.confirmed.toString(); 
          
       })
       .catch((error)=>{
           console.log(error);
       });

       res.render('app' , {send : x , xxx:y} );
       

 });



 app.listen(3000 , ()=>{
     console.log("the server is running fine");
     
 }); 