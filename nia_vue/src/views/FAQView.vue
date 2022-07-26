<template>
  <div class="FAQ">
    <div class="TopMain">
      <div class="TopMemo">자주하는 질문</div>
    </div>
    <div class="MainHeader">
      <div class="MainMemo">자주하는 질문</div>
    </div>
    <div class="accordion">
     <Accordion />
    </div>
  </div>
</template>
<script>
import Accordion from "../components/Accordion.vue";

export default {
    name: "app",
    data() {
    },
    components: { 
      Accordion,
     }
};
</script>
<style scoped>
.FAQ {
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
  font-size: 30px;
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
  font-weight: bolder;
  margin: 20px 0;
}
.accordion{
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  line-height: 24px;
}
a {
  display: block;
  cursor: pointer;
}
</style>
