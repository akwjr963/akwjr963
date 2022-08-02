const express = require("express")
const router = express.Router()
const DB = require("../database/homepage_database")
const crypto = require('crypto')
const secretkey = 'ganggang'
const algorithm = 'aes-256-cbc'
const key = "12345678901234567890123456789012"
const iv = "1234567812345678"
const multer = require("multer")
const fs = require("fs")
const iconv = require("iconv-lite")

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

//파일업로드
//fs.readdirSync('server/download_File')

// try {
// 	fs.readdirSync('server/download_File'); // 폴더 확인
// } catch(err) {
// 	console.error('uploads 폴더가 없습니다. 폴더를 생성합니다.');
//     fs.mkdirSync('server/download_File'); // 폴더 생성
// }

 
const upload = multer({
    storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
        destination(req, file, done) { // 저장 위치
            done(null, 'server/assets/attach_qa_ap/'); // uploads라는 폴더 안에 저장
        },
        filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지
            done(null, Date.now() + "--" + iconv.decode(file.originalname,"utf-8")); // 파일이름 + 날짜 + 확장자 이름으로 저장
        }
    }),
    //limits: { fileSize: 5 * 1024 * 1024 } // 5메가로 용량 제한
});

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'server/download_File') //경로 지정 콜백함수
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname + '-' + Date.now()) //파일명 지정 콜백함수
//     }
//   })
//   var upload = multer({ storage: storage });


// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, done) {
//             done(null,"server/download_File/")
//         },
//         filename(req, file, done) {
//             const ext = path.extname(file.originalname)
//             done(null, Date.now() + path.basename(file.originalname, ext) + ext)
//         }
//     })
// })

//문의 조회하기
router.get("/question", async (req, res) => {
    let sql = `select SEQ, QA_CATEGORY, QA_TITLE, QA_FILE_EXIST, QA_NAME, QA_REG_DATE, QA_COMPLETE
                FROM TBL_NIA_QA WHERE QA_DEL_YN = "N" 
                ORDER BY SEQ DESC`
    const [all_list] = await DB.query(sql)
    let rowNum = all_list.length
    all_list.map(i => {
        i.NUM = rowNum
        rowNum--
        i.QA_REG_DATE = i.QA_REG_DATE.toLocaleString('ja-JP')
    })

    res.status(200).send({
        all: all_list
    })
})

//검색하기
router.get("/question/search",async (req, res) => {
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
            result: details,
            seq: details[0].SEQ
    
    })
        }else {//패스워드가 올바르지 않은 경우
            res.status(400).json({
                errorMessage: "비밀번호가 일치하지 않습니다."
            })
            return;
        }

})                             
//문의 등록하기
router.post("/question/server/post",upload.array('file'), async (req, res) => {
    const { category, password, location, company, email, name, tel, fileEx ,file, fileName, title, contents, replyEx} = req.body
    console.log("여기오나"+password)
    // console.log("파일업로드시ㅣ작")
    // console.log(req.files)
    // console.log("파일업로드")
    let passwordCode = cipherCode(password)
    console.log(passwordCode)
        let seq = ''
        let sql = `insert into TBL_NIA_QA
                    (QA_CATEGORY,QA_LOCATION,QA_COMPANY,QA_NAME,QA_EMAIL,QA_TEL,QA_TITLE,
                        QA_CONTENTS,QA_PASSWORD,QA_FILE_EXIST,QA_COMPLETE)
                    values(?,?,?,?,?,?,?,?,?,?,?)`

        const list = [category, location, company, name, email, tel, title, contents, passwordCode, "N", "N"]

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
            values(?,?,?,?)`


            para = req.files
            console.log("파일이름: "+req.files[0].filename)
            //var hel = iconv.decode(para[0].originalname,"utf-8")
    
            for (i=0;i<para.length;i++){
             const list_file = [null,seq,iconv.decode(para[i].originalname,"utf-8"),para[i].destination]
             await DB.query(sql_file,list_file)
            }
           
            // const tempPath = Date.now()+'_'+ fileName
            // const filePath = `./server/assets/attach_qa_ap/${tempPath}`
            // req.upload(`./server/assets${filePath}`) // check!!!!!
            
            res.status(200).send({
                success: "success file post!!"
            })
            
        // 첨부파일 X    
        }else { 
            res.status(200).json({
                newPost: "Success post! and no file"
            })
        }

})
//문의 수정하기
// ** seq 사용 query로
router.put("/question/update/:seq",upload.array("file"), async (req, res) => {
    const { seq } = req.params
    const data = req.body
    const [existData] = await DB.query(`select *
    from TBL_NIA_QA as a left join TBL_NIA_QA_FILE as b
    on a.seq = b.qa_seq
    where a.seq = '${seq}' `)
    
    const sql = `update TBL_NIA_QA
                set QA_LOCATION = ?, QA_COMPANY = ?, QA_NAME = ?, QA_EMAIL = ?, QA_TEL = ?, QA_TITLE = ?, QA_CONTENTS = ?
                where seq = '${seq}' `

    const list_update = [data.location, data.company, data.name, data.email, data.tel, data.title, data.contents]
    await DB.query(sql, list_update)
    
    var f = req.files  
    console.log(f)   
    if (existData[0].QA_FILE_EXIST == 'N') { //수정전 게시글의 첨부파일이 없던 경우
        if (f == null) {
        res.status(201).json({
            success: " update success no file "
        })
    }
        else { //게시글에 첨부파일을 추가
            const s = ` update TBL_NIA_QA set QA_FILE_EXIST = 'Y' where seq = '${seq}' `
            //const sd = `delete from TBL_NIA_QA_FILE where QA_SEQ = '${seq}' `
            await DB.query(s)
       
            //await DB.query(sd)
            
            const update_sql = `insert into TBL_NIA_QA_FILE
            values(?, ?, ?, ?)`

            for (i=0;i<f.length;i++){

                const list_file = [null,seq,iconv.decode(f[i].originalname,"utf-8"),f[i].destination]
                await DB.query(update_sql,list_file)

               }

            res.status(201).json({
                success: "update success no file to yes file"
            })
        }
    }
    else { //수정전 게시글의 첨부파일이 존재한 경우
    
        if (f == null) { //게시글의 첨부파일을 삭제한 경우
            const s = `update TBL_NIA_QA set QA_FILE_EXIST = 'N' where seq = '${seq}' `
            const sd = `delete from TBL_NIA_QA_FILE where QA_SEQ = '${seq}' `
            await DB.query(s)
            await DB.query(sd)
            res.status(200).json({
                success: "update yes file to no file"
            })
        }
        else {

        const update_sql = `insert into TBL_NIA_QA_FILE
                            values(?, ?, ?, ?)`     

        for(i=0;i<existData.length;i++){
            const delete_sql = `delete from TBL_NIA_QA_FILE
                            where QA_SEQ = '${seq}' and  QA_FILE_NAME = "${existData[i].QA_FILE_NAME}"`
            await DB.query(delete_sql) 
            // await fs.unlink(`./server/assets/attach_qa_ap/${req.files[i].filename}` ,(err) => {
            //     console.log(err)
            // })
            // console.log(req.files[i].filename)
        }

        for (i=0;i<f.length;i++){
            const list_file = [null,seq,iconv.decode(f[i].originalname,"utf-8"),f[i].destination]
            await DB.query(update_sql,list_file)
           }
        
    
        res.status(201).json({
            success: "update success yes file "
        })                      
    }
    }

   
    
})
//문의 삭제하기
router.delete("/question/update/:seq/delete", async (req, res) => {
    const { seq } = req.params
    console.log("client delete page")
    let sql = `update TBL_NIA_QA
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
//유저 첨부파일 다운로드

module.exports = router