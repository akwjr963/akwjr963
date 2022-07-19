<template>
  <div class="myquestion-space">
    <div class="TopMain">
      <div class="TopMemo">문의하기</div>
    </div>
    <div class="MainHeader">
      <div class="MainMemo">문의하기</div>
    </div>
    <div class="main-space">
      <span class="main-button">
        <button>AP 철거/이전 신청</button>
        <button>문의/요청</button>
        <button>장애 신고</button>
      </span>
      <span class="text-header"> AP 철거/이전 문의 </span>
      <div class="main-bar"></div>
      <span class="text-header">AP 검색</span>
      <span class="select-space"
        ><select v-model="onePick">
          <option v-for="City in CityList" :value="City.value" key="value">
            {{ City.text }}
          </option>
        </select></span
      >
      <span class="text-header">소속</span>
      <input type="text" />
      <span class="text-header">이메일</span>
      <input type="text" />
      <span class="text-header">이름</span>
      <input type="text" />
      <span class="text-header">연락처</span>
      <input type="text" />
      <span class="text-header">파일첨부</span>
      <input
        type="text"
        placeholder="파일을 드래그하여 첨부하실 수 있습니다."
        readonly
      />
      <span class="add-file">
        <button class="addfile-button">파일첨부</button>
      </span>
      <span class="text-header">제목</span>
      <input type="text" />
      <span class="text-header">내용</span>
      <textarea></textarea>
      <span class="text-header">비밀번호</span>
      <input type="password" />
      <div class="main-bar"></div>
      <span class="bottom-button">
        <button class="cancle-button">취소</button>
        <button class="online-button">온라인 문의</button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      CityList: [
        {
          text: "시도 선택",
          value: "0",
        },
        {
          text: "서울",
          value: "1",
        },
        {
          text: "부산",
          value: "2",
        },
        {
          text: "인천",
          value: "3",
        },
        {
          text: "대구",
          value: "4",
        },
        {
          text: "대전",
          value: "5",
        },
        {
          text: "광주",
          value: "6",
        },
        {
          text: "울산",
          value: "7",
        },
        {
          text: "세종",
          value: "8",
        },
        {
          text: "제주",
          value: "9",
        },
      ],
      onePick: "0",
    };
  },
};
</script>
<style scoped>
.myquestion-space {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.TopMain {
  background-image: url("../assets/images/sub_top_bg01.jpg");
}
.TopMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 20px;
  font-weight: bolder;
}
.MainHeader {
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.MainMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 25px;
  font-weight: bolder;
}
.main-space {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
}
.select-space {
  text-align: left;
}
.main-bar {
  width: 800px;
  background-color: black;
  border: 1px solid black;
}
.text-header {
  text-align: left;
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 5px;
}
input {
  width: 800px;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
}
input[type="password"] {
  width: 300px;
  margin-bottom: 10px;
}
textarea {
  width: 800px;
  height: 100px;
  border: 1px solid lightgray;
  border-radius: 4px;
  resize: none;
}
.add-file {
  text-align: right;
}
button {
  width: 200px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  border: 1px solid lightgray;
  background-color: white;
  font-weight: bolder;
}
.bottom-button {
  text-align: right;
}
select {
  width: 130px;
  height: 25px;
}
.addfile-button {
  width: 120px;
  height: 50px;
  background-color: #4d8fe9;
  color: #ffffff;
  font-size: 15px;
}
.cancle-button {
  width: 150px;
  height: 50px;
  font-size: 15px;
}
.online-button {
  width: 150px;
  height: 50px;
  background-color: #4d8fe9;
  color: #ffffff;
  font-size: 15px;
}
</style>
