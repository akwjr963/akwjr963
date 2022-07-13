const express = require("express")
const { enable } = require("../../../withnetworks/server")
const router = express.Router()
const DB = require("../database/homepage_database")

//검색하기
router.get("/question",async (req, res) => {
    const { category, word } = { category: 1, word: null }
    
    let sql = ""
    if (category || word) {
       sql =  `and QA_title = ${word}`
    //const [list] = await DB.query(`SELECT seq, QA_category, QA_title, QA_file_exist, QA_name, QA_reg_date, QA_complete FROM TBL_NIA_QA where QA_category = ${category} ${sql}`)
    const [list] = await DB.query(`SELECT * from TBL_NIA_QA`)

    res.status(200).json({
        success: "검색하기 및 조회 성공!",
        reuslt: list
    })
    }
    
})
//문의 상세보기
router.post("/question/:seq", async (req, res) => {
    const  { seq }  = req.params
    console.log(seq)
    const password = req.body //check
    console.log(password)
      if (password){
        const [details] = await DB.query(`SELECT QA_reg_date, QA_complete, QA_name, QA_location, QA_company, QA_tel,
        QA_email, QA_title, QA_contents, QA_file_exist, REPLY_content
        FROM TBL_NIA_QA as a join TBL_NIA_QA_FILE as b on a.seq = b.QA_seq join TBL_NIA_REPLY as c on a.seq = c.QA_seq`)
        console.log(details)

        res.status(200).json({
            success: "문의 상세보기 성공!",
            result: details
    
    })
        }else {
            res.status(400).json({
                errorMessage: "비밀번호가 일치하지 않습니다."
            })
            return;
        }

})                             
//문의 등록하기
router.post("/question/post", async(req, res) => {
    // const { passward, location, company, email, name, tel, file, fileName, title, contents} = req.body
    try {
        const data = req.body
        
        let sql = `INSERT INTO TBL_NIA_QA
                    () VALUES()`
        //첨부파일 O
        if (req.files == null) {
            

        // 첨부파일 X    
        }else { 
            
        }
    } catch (error) {
        res.status(404)
    }


    await DB.query()
    res.status(201).json({
        newPost: createPost
    })
})
//문의 수정하기
// ** seq 사용 query로
router.put("/question/update/:seq", async (req, res) => {
    const { seq } = req.params
    const { passward } = req.body
    
    const existData = await DB.query()
    
    DB.updateOne({ seq: Number(seq)}, { $set: { modify }})

    res.status(201).json({
        success: "update success"
    })
})
//문의 삭제하기
router.delete("/question/delete", async (req, res) => {
    const { seq } = req.body
    console.log("client delete page")
    const existPost = await DB.find({ seq: Number(seq)})
    if (existPost.length > 0) {
        await DB.deleteOne({ seq: Number(seq)})
    }

    res.status(200).send({
        success: "delete success"
    })
})

//신청서 다운로드
router.get("/download", async (req, res) => {
    const download_data = "~~~~~~~~~~~~~~~"

    res.send({
        success: "success download!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    })
})


module.exports = router