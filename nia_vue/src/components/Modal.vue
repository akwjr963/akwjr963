<template>
  <!-- 컴포넌트를 감싸는부모-->
  <div class="modal-page" @click="$emit('close-modal')">
    <!--"컴포넌트 영역과 같은 크기를 가진 배경-->
    <div class="overlay-page" @click="$emit('close-modal')"></div>
    <!--내용이 보이는 영역-->
    <div class="modal-card">
      <div class="introduction-box">
        <h2>Introduction</h2>
        <router-link to="/process">
          <p>처리 프로세스</p>
        </router-link>
        <router-link to="/deleteAP">
          <p>AP 철거/이전</p>
        </router-link>
      </div>
      <div class="Community-box">
        <h2>Community</h2>
        <router-link to="faq">
          <p>자주하는 질문</p>
        </router-link>
        <router-link to="complain">
          <p>장애 신고</p>
        </router-link>
        <router-link to="secret">
          <p>조회하기</p>
        </router-link>
        <router-link to="question">
          <p>문의하기</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.overlay-page,
.modal-page {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  background-color: #ffffff;
  z-index: 100;
}
.overlay-page {
  margin-top: -400px;
  transition: all 1s;
}
.modal-card {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 150px 0;
  z-index: 200;
}
.introduction-box {
  margin-bottom: 30px;
}
h2 {
  height: 50px;
  font-size: 35px;
}
a {
  display: flex;
  flex-direction: column;
  margin: auto;
  text-decoration: none;
  color: #2c3e50;
  cursor: pointer;
  width: 150px;
}
p {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 30px;
  margin: auto;
  margin-bottom: 15px;
}
</style>
