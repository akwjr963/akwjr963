const express = require('express');
const app = express();
const QA_client = require("./routes/QA_client")
const QA_admin = require("./routes/QA_admin")

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./server/swagger/output.yaml')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/client', QA_client)
app.use('/admin', QA_admin)

app.listen(3000, () => {
    console.log('3000포트로 서버가 켜졌습니다.')
})