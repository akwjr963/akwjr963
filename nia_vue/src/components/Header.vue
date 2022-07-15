<template>
<div class="header-space">
    <Modal v-if="isActive" @close-modal="isActive = false"></Modal>
    <router-link to="/">
        <span class="logo-place">
        </span>
    </router-link>
    <div class="button-space">
        <router-link to="/secret">
            <button>조회하기</button>
        </router-link>
        <router-link to="/question">
            <button>문의하기</button>
        </router-link>
        </div>
    <div class="burgermenu-box"
    :class="{active: isActive}"
    @click="isToggleActive">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>    
</div>
</template>
<script>
import Modal from "../components/Modal.vue";
export default{
    name: "Header",
    components: {
        Modal,
    },
    return: {
        showModal: false,
    },
    props: {
        msg: String,
    },
    data(){
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
<style scoped>
.header-space{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo-place{
    background-image: url("../assets/images/logo_o.png");
    width: 360px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.button-space{
    display: flex;
    flex-direction: row;
    margin-right: 100px;
    margin-left: 400px;
}
.burgermenu-box{
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 40px;
    margin-left: 95%;
    justify-content: flex-end;
    cursor: pointer;
    z-index: 2000;
}
.line {
  width: 40px;
  height: 2px;
  background-color: black;
  margin: 5px 0;
  transition: all 1s;
}
.burgermenu-box.active .line:nth-child(1){
    transform: translateY(12.5px) rotate(44deg);
    background-color: black;
}
.burgermenu-box.active .line:nth-child(2){
    opacity: 0;
}
.burgermenu-box.active .line:nth-child(3){
    transform: translateY(-12.5px) rotate(-44deg);
}
button{
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
</style>