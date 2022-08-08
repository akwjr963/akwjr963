<template>
  <div class="Complain">
    <div class="TopMain">
      <div class="TopMemo">장애 신고</div>
    </div>
    <div class="MainHeader">
      <div class="MainMemo">장애 신고</div>
    </div>
    <div class="MainBody">
      <div class="icons">
        <font-awesome-icon icon="fa-solid fa-phone" />
      </div>
      <div class="MainText">
        <ul>
          <li>CUSTOMER CENTER</li>
          <li class="BigSize">1588-7103</li>
        </ul>
        <div class="v-line"></div>
        <ul class="UseTime">
          <li>평일 AM 09:00 - PM 06:00</li>
          <li>점심 PM 12:00 - PM 01:00</li>
          <li class="RedLine">(토, 일요일 및 공휴일은 휴무입니다)</li>
        </ul>
      </div>
      <div class="MainBottom">
        <div class="BottomText">장애 신고 방법</div>
        <div class="BottomList">
          <ol>
            <li>
              1. 대표번호로 전화하여 문의접수를 진행한다.
            </li>
            <li>
              2. 상단 문의하기 버튼을 클릭 후 장애신고 탭 메뉴에서 신고 내용을
              작성 및 접수 한다.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style scoped>
.Complain {
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
  height: 250px;
  font-size: 30px;
  font-weight: bolder;
}
.MainHeader {
  height: 50px;
  margin: 30px 0 20px 0;
}
.MainMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 25px;
  font-weight: bolder;
}
.icons {
  font-size: 80px;
  margin: 20px 0;
}
.MainText {
  display: flex;
  width: 700px;
  height: 150px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  justify-items: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-left: -20px;
  line-height: 20px;
}
li {
  padding-left: 0;
  margin: 0;
}
.UseTime {
  line-height: 25px;
  font-weight: bolder;
}
.BigSize {
  font-size: 30px;
  line-height: 60px;
  font-weight: bolder;
}
.RedLine {
  font-size: 10px;
  color: #f97272;
}
.v-line {
  border-left: 1px solid lightgrey;
  height: 130px;
  align-items: center;
  margin-top: 5px;
}
ol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  line-height: 20px;
  padding-left: 0;
  font-size: 10px;
  font-weight: bolder;
}
.BottomText {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  font-size: 13px;
  font-weight: bolder;
  margin-bottom:10px;
}
.BottomList {
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom:50px;
}
</style>
