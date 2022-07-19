import express from "express"
import cors from "cors"
import {engine} from "express-handlebars"

let app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine(".hbs", engine({extname: ".hbs"}))
app.engine("view engine", ".hbs")
app.engine("views", "./views")

app.listen(8080, ()=> {
    console.log("Server is running")
})