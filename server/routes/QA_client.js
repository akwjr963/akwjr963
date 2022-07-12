const express = require("express")
const router = express.Router()
const DB = require("")

// router.get("/client/question?category=??&word=??",async (req, res) => {
//     const { category, title } = req.query
//     const list = DB.find({ 
//         category,
//         title: word
//     })

//     res.json({
//         list
//     })
// })