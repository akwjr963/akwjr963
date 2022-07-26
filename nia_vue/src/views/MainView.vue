<template>
  <div class="hello">
    <transition name="fade">
      <Modal v-if="isActive" @close-modal="isActive = false"></Modal>
    </transition>
    <div class="head">
      <span>
        <img
          v-if="!isActive"
          src="../assets/images/logo_w.png"
          alt="공공와이파이 운영관리센터"
        />
        <img v-if="isActive" src="../assets/images/logo_o.png" alt="" />
      </span>
      <nav>
        <div class="buttonbox">
          <router-link to="/secret">
            <button>조회하기</button>
          </router-link>
          <router-link to="/question">
            <button>문의하기</button>
          </router-link>
        </div>

        <div
          class="burgermenu"
          :class="{ active: isActive }"
          @click="isToggleActive"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </nav>
    </div>
    <hr />
    <ul>
      <router-link to="/deleteAP">
        <li>
          <div>
            <div class="li_top">공공와이파이 AP 철거이전</div>
            <div class="li_bar"></div>
            <div class="li_main1">공공와이파이AP철거이전</div>
            <div class="li_bottom">
              <font-awesome-icon icon="fa-solid fa-circle-check" />
            </div>
          </div>
        </li>
      </router-link>
      <router-link to="/complain">
        <li>
          <div>
            <div class="li_top">장애신고 프로세스</div>
            <div class="li_bar"></div>
            <div class="li_main2">장애신고프로세스</div>
            <div class="li_bottom">
              <font-awesome-icon icon="fa-solid fa-circle-check" />
            </div>
          </div>
        </li>
      </router-link>
      <router-link to="/faq">
        <li>
          <div>
            <div class="li_top">FAQ</div>
            <div class="li_bar"></div>
            <div class="li_main2">자주하는질문</div>
            <div class="li_bottom">
              <font-awesome-icon icon="fa-solid fa-circle-check" />
            </div>
          </div>
        </li>
      </router-link>
    </ul>
    <div class="foot">Copyright © WithnetworksCo.Ltd 2021</div>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
export default {
  name: "HelloWorld",
  components: {
    Modal,
  },
  return: {
    showModal: false,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    isToggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  height: 100%;
  overflow: hidden;
}
.head {
  position: relative;
  display: flex;
}
img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: 10px;
  z-index: 2000;
}
nav {
  display: flex;
  margin-left: auto;
  align-content: right;
  justify-content: flex-end;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.buttonbox {
  display: flex;
  margin-right: 100px;
  cursor: pointer;
}
.burgermenu {
  position: absolute;
  left: 93%;
  display: inline-flex;
  flex-direction: column;
  width: 50px;
  height: 40px;
  margin-left: auto;
  justify-content: flex-end;
  cursor: pointer;
  z-index: 2000;
}
.line {
  width: 40px;
  height: 2px;
  background-color: white;
  margin: 5px 0;
  transition: all 1s;
}
.burgermenu.active .line:nth-child(1) {
  transform: translateY(12.5px) rotate(44deg);
  background-color: black;
}
.burgermenu.active .line:nth-child(2) {
  opacity: 0;
}
.burgermenu.active .line:nth-child(3) {
  transform: translateY(-12.5px) rotate(-44deg);
  background-color: black;
}
button {
  width: 130px;
  height: 44px;
  color: white;
  background-color: black;
  margin: 0 30px;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
  font-weight: bolder;
}
.hello {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/main_bg.jpg");
  background-size: cover;
  overflow: hidden;
}
ul {
  list-style-type: none;
  padding-bottom: 150px;
  margin-top: -6.5em;
}
li {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
  width: 420px;
  height: 280px;
  color: white;
}
li:hover {
  background: #4d8fe9;
}
a {
  text-decoration: none;
}
hr {
  z-index: 0;
  margin-top: 15em;
  position: center;
  color: white;
  opacity: 30%;
}
.li_top {
  font-size: 8px;
  margin-bottom: 1em;
  font-weight: bold;
}
.li_main1 {
  width: 120px;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  word-break: break-all;
  word-wrap: break-word;
  margin-bottom: 2em;
  padding-top: 10px;
}
.li_main2 {
  width: 80px;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  word-break: break-all;
  word-wrap: break-word;
  margin-bottom: 2em;
  padding-top: 10px;
}
.li_bar {
  width: 130px;
  height: 2px;
  margin-left: 0.3em;
  background-color: white;
}
.foot {
  position: relative;
  color: white;
  float: left;
  padding-left: 20px;
  overflow: hidden;
}
</style>
