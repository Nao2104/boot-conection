const express = require("express");
//npm i cors
const cors = require("cors")//cors

const app = express()
const port = 5000

//middelwares
require("./database")
app.use(cors())
app.use(express.json())

//rutas
app.get("/api", (req, res) => {
    res.status(200).json({msg: "Bit-shop API v1.0.0"})
})
//app.use(/activadorDeRutas, importacion de las rutas que se pueden usar con esta ruta)
app.use("/product", require("./routes/product"))
//user routes
app.use("/user", require("./routes/user"))


app.listen(port, () => {console.log("Api corriendo en el puerto", port)})