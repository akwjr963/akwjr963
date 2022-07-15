const express = require("express")
const router = express.Router()
const DB = require("../database/homepage_database")
const crypto = require('crypto')
const secretkey = 'ganggang'
const algorithm = 'aes-256-cbc'
const key = "12345678901234567890123456789012"
const iv = "1234567812345678"

//암호화
const cipherCode = (text)  => {
const cipher = crypto.createCipheriv(algorithm, key, iv)
let key_result = cipher.update(text,'utf-8','base64')
key_result += cipher.final('base64')
return key_result
}


//복호화
function decipherCode(key_result){
const decipher = crypto.createDecipheriv(algorithm, key, iv)
let textDecode = decipher.update(key_result,'base64','utf8')
textDecode += decipher.final('utf8')
return textDecode
}





//검색하기
router.get("/question",async (req, res) => {
    const { category, word } = { category: 1, word: '문의문의' }
    console.log(category, word)
    let sql = ``
    if (true) {
       if (word.existData) sql =  `and QA_TITLE = '${word}'`
    const [list] = await DB.query(`SELECT  * FROM TBL_NIA_QA where QA_CATEGORY = ${category} ${sql}  and QA_DEL_YN = 'N' `)
    //const [list] = await DB.query(`SELECT * from TBL_NIA_QA`)

    res.status(200).json({
        success: "검색하기 및 조회 성공!",
        reuslt: list
    })
    }
    
})
//문의 상세보기
router.post("/question/:seq", async (req, res) => {
    const  { seq }  = req.params
    console.log("seq: "+ seq)
    const { userPassword } = req.body

    const [details] = await DB.query(`select * 
    from TBL_NIA_QA as a left join TBL_NIA_QA_FILE as b on a.seq = b.QA_SEQ
    left join TBL_NIA_REPLY as c on a.seq = c.QA_SEQ
    where a.seq = "${seq}"
    `)
    
    
    let passwordDB = details[0].QA_PASSWORD.toString()
    let passwordDecode = decipherCode(passwordDB)
    console.log(passwordDecode)
 
    // const [details] = await DB.query(`select *
    // from TBL_NIA_QA
    // where seq = ${seq}`)

      if (userPassword == passwordDecode){ // 패스워드가 올바른 경우

        res.status(200).json({
            success: "문의 상세보기 성공!",
            result: details
    
    })
        }else {//패스워드가 올바르지 않은 경우
            res.status(400).json({
                errorMessage: "비밀번호가 일치하지 않습니다."
            })
            return;
        }

})                             
//문의 등록하기
router.post("/question/server/post", async (req, res) => {
    const { category, password, location, company, email, name, tel, fileEx ,file, fileName, title, contents, replyEx} = req.body
    console.log(password)
    let passwordCode = cipherCode(password)
    console.log(passwordCode)
        let seq = ''
        let sql = `insert into TBL_NIA_QA
                    (QA_CATEGORY,QA_LOCATION,QA_COMPANY,QA_NAME,QA_EMAIL,QA_TEL,QA_TITLE,
                        QA_CONTENTS,QA_PASSWORD,QA_FILE_EXIST,QA_COMPLETE)
                    values(?,?,?,?,?,?,?,?,?,?,?)`

        const list = [category, location, company, name, email, tel, title, contents, passwordCode, fileEx, replyEx]

        // const [a, b] = await DB.query(sql,list, (err, result,field) => {
        //     console.log(err)
        //     console.log(result)
        //     seq = result.insertId
        //     console.log(seq)
        //     console.log("field: " + field)
        // })

        await DB.query(sql,list).then(([rows,field]) => {
            seq = rows.insertId
            console.log(seq)
        }) 
        
        
        //첨부파일 O
        if (fileEx == 'Y') {

            let sql_file = `insert into TBL_NIA_QA_FILE
            (QA_SEQ,QA_FILE_NAME,QA_FILE_PATH)
            values(?,?,?)`

            const list_file = [seq,fileName,file]
            const tempPath = Date.now()+'_'+ fileName
            const filePath = `./server/assets/attach_qa_ap/${tempPath}`
            req.upload(`./server/assets${filePath}`) // check!!!!!!

            await DB.query(sql_file,list_file)

            res.status(201).send({
                success: "success file post!!"
            })
            
        // 첨부파일 X    
        }else { 
            res.status(201).json({
                newPost: "Success post! and no file"
            })
        }

})
//문의 수정하기
// ** seq 사용 query로
router.put("/question/update/:seq", async (req, res) => {
    const { seq } = req.params
    const data = req.body
    
    console.log(req.files)
    if (true) { //req.files != null
    const [existData] = await DB.query(`select *
                                         from TBL_NIA_QA as a left join TBL_NIA_QA_FILE as b
                                         on a.seq = b.qa_seq
                                         where a.seq = '${seq}'`)
    
    const sql = `update TBL_NIA_QA
                 set QA_LOCATION = ?, QA_COMPANY = ?, QA_NAME = ?, QA_EMAIL = ?, QA_TEL = ?, QA_TITLE = ?, QA_CONTENTS = ?
                where seq = '${seq}' `

    const list_update = [data.location, data.company, data.name, data.email, data.tel, data.title, data.contents]
    await DB.query(sql,list_update)

    console.log(list_update)
    if (data.password == existData.password) {
        
    }
    //console.log(existData)

    res.status(201).json({
        success: "update success yes file"
    })
    }else {

        res.status(201).json({
            success: "update success no file"
        })
    }
})
//문의 삭제하기
router.delete("/question/update/:seq/delete", async (req, res) => {
    const { seq } = req.params
    console.log("client delete page")
    let sql = `update TBL_NIA_QAd\
                set QA_DEL_YN = 'Y'
                where seq = '${seq}' `
    await DB.query(sql)

    res.status(200).send({
        success: "delete success"
    })
})

//신청서 다운로드
router.get("/download", async (req, res) => {  
    res.download('./server/download_File/ap_철거이전.jpg')
})


module.exports = router