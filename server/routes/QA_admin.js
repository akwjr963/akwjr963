const express = require("express")
const router = express.Router()
const DB = require("../database/homepage_database")
const crypth = require("crypto")
const algorithm = 'aes-256-cbc'
const secretkey = 'ganggang'
const key = "12345678901234567890123456789012"
const iv = "1234567812345678"
                                                                                        

//관리자 문의 조회
router.get("/question", async (req, res) => {

    const [allData] = await DB.query(`select seq, QA_TITLE, QA_NAME, QA_FILE_EXIST, QA_REG_DATE
            from TBL_NIA_QA where QA_DEL_YN = "N" `)
    const {seq, QA_title, QA_name, QA_file_exist, QA_REG_date} = allData[0]
    console.log(seq, QA_title, QA_name, QA_file_exist, QA_REG_date)
    res.status(200).json({
        results: allData
    })

    
})

//관리자 문의 상세
router.get("/question/:seq", async (req, res) => {
    const { seq } = req.params 

    const [list] = await DB.query(`SELECT * FROM TBL_NIA_QA a left join TBL_NIA_QA_FILE b on a.seq = b.qa_seq
                                    left join TBL_NIA_REPLY c on a.seq = c.qa_seq where a.seq = ${seq}`)
    




    res.status(200).json({
        success:"agagag",
        result : list,
    })
    

})

//관리자 댓글 추가
router.post("/question/:seq/reply", async (req,res) => {
    const { seq } = req.params
    const { comment } = req.body
    await DB.query(`insert into TBL_NIA_REPLY values(${null}, ${seq}, "${comment}", ${null})`)
    await DB.query(`update TBL_NIA_QA set QA_COMPLETE = 'Y' where seq = '${seq}'`)
    res.status(201).json({
        success: " good "
    })
    
})

//관리자 댓글 수정
router.put("/question/:seq/post", async(req,res) => {
    const { seq } = req.params
    const { comment } = req.body
    console.log(comment)
    await DB.query(`update TBL_NIA_REPLY
            set REPLY_CONTENT = "${comment}"
            where QA_SEQ = ${seq}`)
    res.status(200).json({
        success: "success update!"
    })
    
})
//관리자 댓글 삭제
router.delete("/question/:seq/reply_delete", async(req,res) => {
    const { seq } = req.params
    const { comment } = req.body
    console.log(comment)
    await DB.query(`delete from TBL_NIA_REPLY
            where QA_SEQ = ${seq}`)
    res.status(200).json({
        success: "success reply_delete!"
    })
    
})

//관리자 문의 삭제
router.delete("/question/:seq/delete", async (req,res) => {
    const { seq } = req.params
    await DB.query(`update TBL_NIA_QA
            set QA_DEL_YN = 'Y'
            where SEQ = ${seq}`)
    
    res.status(200).json({
       success: "success delete!"
    })
})
//관리자 문의 삭제 복구
router.put("/question/:seq/put", async (req,res) => {
    const { seq } = req.params
    await DB.query(`update TBL_NIA_QA
            set QA_DEL_YN = 'N'
            where SEQ = ${seq}`)

    res.status(200).json({
       success: "success put!"
    })
})




module.exports = router