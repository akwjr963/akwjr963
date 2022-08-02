<template>
  <div class="search-space">
    <div class="TopMain">
      <div class="TopMemo">문의 조회하기</div>
    </div>
    <div class="MainHeader">
      <div class="MainMemo">내 문의내역</div>
    </div>
    <div class="table-space">
      <table class="list-table" v-for="data in list" :key="data">
        <colgroup>
          <col width="10%" />
          <col width="*" />
          <col width="10%" />
          <col width="25%" />
        </colgroup>
        <tr>
          <td class="table-header">등록일</td>
          <td>{{data.QA_REG_DATE.slice(0,10)}}</td>
          <td class="table-header">처리상태</td>
          <td>답변 대기중</td>
        </tr>
        <tr>
          <td class="table-header">이름</td>
          <td>{{data.QA_NAME}}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="table-header">AP 검색</td>
          <td>부산시 강서구 강서구청1</td>
          <td class="table-header">소속</td>
          <td>{{data.QA_CATEGORY}}</td>
        </tr>
        <tr>
          <td class="table-header">연락처</td>
          <td>{{data.QA_TEL}}</td>
          <td class="table-header">이메일</td>
          <td>{{data.QA_EMAIL}}</td>
        </tr>
        <tr>
          <td class="table-header">제목</td>
          <td>{{data.QA_TITLE}}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="table-header">내용</td>
          <td colspan="2">
            {{data.QA_CONTENTS}}
          </td>
          <td></td>
        </tr>
        <tr class="table-bottom">
          <td class="table-header">첨부파일</td>
          <td class="flex">abcdef.png abcdefg.xlsx</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="table-header">답변</td>
          <td style="white-space: pre-line">
            문의 내용을 정확하게 확인한 후 빠른 시일 내에 답변 드리겠습니다.
            문의량이 증가하거나 확인절차가 길어지는 경우에는 답변이 지연될 수
            있으니 양해 부탁드립니다.
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <router-link to="/list"
        ><button class="return">돌아가기</button></router-link
      >
    </div>
  </div>
</template>
<script>
import * as api from'@/api/api'
export default {
  name: "app",
  data() {
    return {
      listArray: [],
    }
  },
  created() {
    //seq, password created
    console.log(this.$route.params)
    this.ListSeq = this.$route.params.seq;
    this.password = this.$route.params.password
    this.GetClientQuestion();
  },
  methods: {
    GetClientQuestion(){
      api.GetClientQuestion(this.ListSeq, this.password).then((res) => {
        this.listArray = res.data.all;
        let list = this.listArray;
        console.log(list)
      })
      .catch((e) => {
        console.log(e)
        alert('잘못된 접근입니다.')
        history.back();
      })
    }
    
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  width: inherit;
  width: 100px;
}
.search-space {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.TopMain {
  background-image: url("../assets/images/sub_top_bg02.jpg");
}
.TopMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 120px;
  font-size: 20px;
  font-weight: bolder;
}
.MainHeader {
  height: 150px;
}
.MainMemo {
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-weight: bolder;
}
.table-space {
  display: flex;
  flex-direction: column;
  width: 1500px;
  align-items: center;
  justify-content: flex-start;
}
.list-table {
  width: 1000px;
  align-items: center;
  border-top: 3px solid black;
  border-collapse: collapse;
}
.table-bottom {
  border-bottom: 3px solid black;
}
th,
td {
  height: 40px;
  padding: 10px 10px;
  border-bottom: 1px solid lightgray;
  vertical-align: middle;
  text-align: left;
}
.table-header {
  font-weight: bold;
}
span {
  display: flex;
  margin: 0;
}
a {
  text-decoration: none;
}
.return {
  width: 200px;
  height: 50px;
  color: #ffffff;
  background-color: #090909;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  margin-top: 10px;
  margin-left: 800px;
  margin-bottom: 20px;
}
</style>
