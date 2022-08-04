<template>
  <div class="deleteAP">
    <div class="TopMain">
      <div class="TopMemo">AP 철거 / 이전</div>
    </div>
    <div class="MainHeader">
      <div class="MainMemo">AP 철거 / 이전</div>
    </div>
    <div class="wrapper">
      <div class="MainFrame">
        <button class="Ministry"></button>
        <button class="KT"></button>
      </div>
      <div class="Text">
        <ul>
          <li>- 철거 / 이전 견적서 금액 확인</li>
          <li>- KT 영업대표에게 철거 및 이전에 대한 대상지 AP 상세정보 전달</li>
          <li>- KT 영업대표를 통해 선로구축 필요 유무 확인과 견적금액 협의</li>
          <li>- 홈페이지를 통한 신청서 접수</li>
          <li>- NIA공공와이파이 운영센터를 통한 작업 완료 여부 확인</li>
          <li>- 정산 진행</li>
        </ul>
      </div>
    </div>
    <div class="Bottom">
      <button class="Download">AP 철거/이전 신청서 다운로드</button>
      <router-link to="process">
        <button class="Detail">AP 철거/이전 상세 프로세스</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",

};
</script>
<style scoped>
.deleteAP {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.TopMain {
  background-image: url("../assets/images/sub_top_bg03.jpg");
}
.TopMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 250px;
  font-size: 30px;
  font-weight: bolder;
}
.MainHeader {
  height: 50px;
  font-size: 24px;
  margin-top:30px;
  margin-bottom: 50px;
}
.MainMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: bolder;
}
button {
  width: 150px;
  height: 50px;
  border: none;
}
.wrapper{
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-left: 500px;
  margin: auto;
}
.MainFrame{
  margin: auto;
  display: flex;
  margin-left:0px;
}
.Ministry {
  width: 150px;
  height: 55px;
  background-image: url("../assets/images/Ministry.png");
  background-position: center;
  background-size: 40px;
  background-repeat: no-repeat;
  border: 1px solid lightgray;
  background-color: white;
}
.KT {
  width: 150px;
  height: 55px;
  background-image: url("../assets/images/KT.jpg");
  background-position: center;
  background-size: 170px;
  background-repeat: no-repeat;
  border: 1px solid lightgray;
  background-color: white;
}
.Text {
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 800px;
  height: 300px;
  border: 1px solid;
  margin-bottom: 20px;
  margin-top: 0;
  border: 1px solid lightgray;
  overflow: hidden;
}
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: flex-start;
  line-height: 40px;
  padding-left: 10px;
}
.Download {
  width: 220px;
  height: 40px;
  background-color: #4d8fe9;
  color: white;
  border: none;
  border-radius: 8px;
  margin-right: 30px;
  margin-bottom: 70px;
}
.Detail {
  width: 220px;
  height: 40px;
  background-color: #f97272;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
