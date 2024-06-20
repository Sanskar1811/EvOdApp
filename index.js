const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/find" , (req  , res) => {
	let num = req.query.number ;
	let n = parseInt(num);
	let result = n % 2 == 0 ? "Even" : "Odd" ;
	res.json({"r" : result}) ;

});

app.listen(9000 , () => {console.log("Ready @ 9000"); });