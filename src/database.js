const mongoose = require("mongoose");
mongoose.set("strictQuery",false);
mongoose.connect("mongodb://localhost:27017/Guarapo-db")
    .then(db => console.log("DB is Conected"))
    .catch(err => console.log(err));


