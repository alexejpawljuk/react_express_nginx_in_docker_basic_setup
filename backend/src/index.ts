import express from "express"
import cors from "cors"
import {config} from "./config"

import {Database} from "./lib/database/Database"


const app = express()
app.use(cors())




const database = new Database(config.DATABASE)

database
    .connect()
    .then(() => console.log(`Database "${database.config.database}" connected on port:`, database.config.port))
    .catch(e => console.log("Database connection error",e))

// database.query("INSERT INTO users (firstname, lastname) VALUES ($1, $2)", ["Alexej", "Pawljuk"])
//     .then(result => {
//         console.log(result.rows)
//     })

// database.query<{lastname: string}>("SELECT * FROM users")
//     .then(result => {
//         console.log(result.rows[0].lastname)
//     })




app.get('/', async (req, res) => {
    console.log("Request root url")

    try {
        // const result = await database.query("SELECT * FROM users")
        res.json({data: "TEST"})
    } catch (e) {
        console.log(e)
    }
})

app.listen(config.SERVER.PORT, () => {
    console.log("Node version:", process.version)
    console.log("Server started on port:", config.SERVER.PORT)
})