<template>
<div class="list-space">
    <div class="TopMain">
        <div class="TopMemo">
            문의 조회하기
        </div>
    </div>
    <div class="MainHeader">
        <div class="MainMemo">
            문의 조회하기
        </div>
    </div>
    <div class="table-space">
        <table class="list-table">
            <caption>
                총 7건
            </caption>
            <colgroup>
                <col width="6%" />
                <col width="*" />
                <col width="10%" />
                <col width="15%" />
                <col width="15%" />
            </colgroup>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>첨부</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
            <tr>
                <td>7</td>
                <td>NIA 공공와이파이 철거 문의 드립니다.</td>
                <td></td>
                <td>홍길동</td>
                <td>2021.07.12</td>
            </tr>
            <tr>
                <td>6</td>
                <td>NIA 공공와이파이 철거 문의 드립니다.</td>
                <td></td>
                <td>홍길동</td>
                <td>2021.07.12</td>
            </tr>
            <tr>
                <td>5</td>
                <td>NIA 공공와이파이 철거 문의 드립니다.</td>
                <td></td>
                <td>홍길동</td>
                <td>2021.07.12</td>
            </tr>
            <tr>
                <td>4</td>
                <td>NIA 공공와이파이 철거 문의 드립니다.</td>
                <td></td>
                <td>홍길동</td>
                <td>2021.07.12</td>
            </tr>
            <tr>
                <td>3</td>
                <td>NIA 공공와이파이 철거 문의 드립니다.</td>
                <td></td>
                <td>홍길동</td>
                <td>2021.07.12</td>
            </tr>
            <tr>
                <td>2</td>
                <td>NIA 공공와이파이 철거 문의 드립니다.</td>
                <td></td>
                <td>홍길동</td>
                <td>2021.07.12</td>
            </tr>
            <tr>
                <td>1</td>
                <td><router-link to="search">NIA 공공와이파이 철거 문의 드립니다.</router-link></td>
                <td></td>
                <td>홍길동</td>
                <td>2021.07.12</td>
            </tr>
        </table>
    </div>
</div>
</template>
<script>
import http from '@/api/http'

export default{
  name:"app",
   data() {
    return {
      list:[]
    }
  },
  created() {
    http
        .get("client/question")
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        });
  },
  methods: {
    
  },
}
</script>
<style scoped>
.list-space{
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex:1;
}
.TopMain{
  background-image: url("../assets/images/sub_top_bg02.jpg");
}
.TopMemo{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 120px;
  font-size: 20px;
  font-weight: bolder;
}
.MainHeader{
  height: 50px;
}
.MainMemo{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 25px;
  margin: 20px 0;
  font-weight: bolder;
}
caption{
    padding:10px;
    caption-side: top;
    text-align: left;
}
.table-space{
    display: flex;
    flex-direction: column;
    width: 1500px;
    align-items: center;
    justify-content: center;
    margin-bottom:50px;
}
.list-table{
    width: 1000px;
    margin:auto;
    align-items: center;
    justify-content: center;
    border-top: 3px solid black;
    border-collapse: collapse;
}
th,td{
    height: 40px;
    padding-top:5px;
    padding-bottom:5px;
    border-bottom: 1px solid lightgray;
}
span{
    display: flex;
    margin:0;
}
a{
    text-decoration: none;
    color: #2c3e50;
}
</style>