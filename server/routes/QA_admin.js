const express = require("express")
const router = express.Router()
const DB = require("../database/homepage_database")

//관리자 문의 조회
router.get("/question?category=?&word=?", async (req, res) => {

})

//관리자 문의 상세
router.get("/question/:seq", async (req, res) => {
    console.log('여기')
    // const { seq } = req.params
    // const {date, complete, name, location, company, tel, email, title, contents, fileName, filePath, reply } = DB.find({})
    const a = await DB.query('SELECT * FROM TBL_NIA_QA')
    console.log(a)

})


module.exports = router