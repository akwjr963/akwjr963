<template>
  <div class="secret-space">
    <div class="TopMain">
      <div class="TopMemo">문의 조회하기</div>
    </div>
    <div class="MainHeader">
      <div class="MainMemo">문의 조회하기</div>
    </div>
    <div class="main-space">
      <h3>비밀글 기능으로 보호되는 글입니다.</h3>
      <p>작성자와 관리자만 열람하실 수 있습니다.</p>
      <p>본인이라면 비밀번호를 입력하세요.</p>
      <form>
        비밀번호
        <input class="password" type="password" />
        <router-link to="list"
          ><button class="confirm">확인</button></router-link
        >
      </form>
    </div>
    <router-link to="/"><button class="return">돌아가기</button></router-link>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style scoped>
.secret-space {
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
  height: 50px;
}
.MainMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 25px;
  margin:20px 0;
  font-weight: bolder;
}
.main-space {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  height: 300px;
  margin: auto;
  border-top: 3px solid black;
  border-bottom: 1px solid lightgrey;
}
h3 {
  font-size: 16px;
}
p {
  font-size: 9px;
  font-weight: bolder;
}
form {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.password {
  height: 25px;
  border: 1px solid lightgrey;
  border-radius: 4px 0px 0px 4px;
}
.confirm {
  width: 60px;
  height: 29px;
  border: 1px solid lightgray;
  border-radius: 0px 4px 4px 0px;
  color: #ffffff;
  background-color: #f97272;
  cursor: pointer;
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
  margin-right: 270px;
  cursor: pointer;
  margin-bottom: 30px;
}
a {
  text-decoration: none;
}
</style>
