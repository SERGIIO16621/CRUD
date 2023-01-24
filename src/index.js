const express = require("express");
const app = express();
require("./database");

// Settings 
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(express.json());

// Routes
app.use(require("./routes/index"));

// Server is Listening 
app.listen(app.get("port"),()=>{
    console.log(`http://localhost:${app.get("port")}`);
});