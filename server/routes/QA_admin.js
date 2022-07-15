const express = require("express")
const router = express.Router()
const DB = require("../database/homepage_database")

//관리자 문의 조회
router.get("/question?category=?&word=?", async (req, res) => {

})

//관리자 문의 상세
router.get("/question/:seq", async (req, res) => {
    const { seq } = req.params 
    
    const [list] = await DB.query(`SELECT * FROM TBL_NIA_QA where seq = ${seq}`)
    


    res.status(200).json({
        success:"agagag",
        result : list,
    })
    

})

//관리자 댓글 추가
router.post("/question/:seq/reply", (req,res) => {
    const { seq } = req.params
    const { comment } = req.body
    DB.query(`insert into TBL_NIA_REPLY values(${null}, ${seq}, "${comment}", ${null})`)
    DB.query(`update TBL_NIA_QA set QA_COMPLETE = 'Y' where seq = '${seq}'`)
    res.status(201).json({
        success: " good "
    })
    
})

//관리자 댓글 수정
router.put("/question/:seq/post", (req,res) => {
    const { seq } = req.params
    const { comment } = req.body
    DB.query(`update from TBL_NIA_REPLY
            set REPLY_CONTENT = "${comment}"
            where QA_SEQ = ${seq}`)
})


module.exports = router