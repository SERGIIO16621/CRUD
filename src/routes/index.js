const router = require("express").Router();
const { json } = require("express");
const Products = require("../models/schema");
router.get("/",(req,res) =>{
    res.send("Pagina principal")
});

router.post("/add",(req,res) =>{
    const {name,description,price} = req.body;
    const checkData = new Promise(async(resolve,reject) =>{
        if (!name || !description || !price){
            reject("Ingresa por favor todos los datos");
        }else{
            const newProduct = new Products({name,description,price});
            await newProduct.save();
            resolve("ok");
        }
    });
    checkData.then(msg => res.send(msg))
    .catch(err => {
        console.log(err);
        res.end();
    });
});
router.get("/show", async(req,res) => {
    const products = await Products.find().lean();
    res.send(products);
});
router.put("/modify/:id", async(req,res) => {
    const {name,description,price} = req.body;
    await Products.findByIdAndUpdate(req.params.id,{name,description,price});
    res.send("actualizado Correctamente")

});
router.delete("/delete/:id", async(req,res) => {
    await Products.findByIdAndDelete(req.params.id);
    res.send("Eliminado correctamente");
});

module.exports = router;