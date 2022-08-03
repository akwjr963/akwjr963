<template>
    <div class="acc-wrap">
        <!--accordion wrap-->
        <ul class="wrap">
            <!--accordion-->
            <li v-for="(item,idx) in accordion" :key="idx">
            <!--화살표-->
            <font-awesome-icon icon="fa-solid fa-chevron-down" 
            class="icon"
            :class="{'open':item.open}"/>
            <!--main accordion-->
            <div class="title"
            @click="item.open = !item.open">
                <span class="ques">Q&nbsp;&nbsp;&nbsp;</span>
                {{item.question}}
            </div>
            <!--참조할 component 이름 :list이름='item'-->
            <Accordion_Item :accordion='item' />
            </li>
        </ul>
    </div>
</template>
<script>
import Accordion_Item from './Accordion_Item.vue';
export default {
    name: "app",
    components: { Accordion_Item },
    data(){
        return{
            accordion:[
                {
                    question:"1. 이전 / 철거 신청에 관하여 누구한테 비용을 물어봐야 하나요?(주무관님의 경우)",
                    open:false,
                    answer:["이전 / 철거 관련 비용은 KT영업대표님게 물어보시면 됩니다. 담당 영업대표님을 모르시는 경우, 공공와이파이통합관리센터로 연락주시기 바랍니다."]
                },
                {
                    question:"2. 철거 이전 문의 접수 방법(주무관님의 경우)",
                    open:false,
                    answer:["공공와이파이통합관리센터로 연락주시기 바랍니다."] 
                },
                {
                    question:"3. 철거 이전 신청 접수를 할 수 있는 대상은 누구인가요?",
                    open:false,
                    answer:["공공와이파이통합관리센터로 연락주시기 바랍니다."]
                },
                {
                    question:"4. 철거 이전 신청하려고 하는데 찾는 개소지가 목록에 없습니다",
                    open:false,
                    answer:["공공와이파이통합관리센터로 연락주시기 바랍니다."]
                },
                {
                    question:"5. 철거 이전 신청은 언제 해야 하나요?",
                    open:false,
                    answer:["공공와이파이통합관리센터로 연락주시기 바랍니다."]
                },
            ]
        }
    }
}
</script>
<style scoped>
.acc-wrap{
    border-top:3px solid black;
    width: 1000px;
}
.wrap{
    list-style: none;
    background-color: #fefefe;
    overflow: hidden;
    padding-inline-start: 0;
    text-align: left;
    user-select: none;
}
li{
    cursor: pointer;
    position: relative;
    border-bottom: 1px solid #dedede;
}
.title{
    padding:10px 0;
    font-weight: bold;
}
.icon{
    position: absolute;
    top:15px;
    right: 10px;
    transition: transform 1s ease;
}
.open{
    transform: rotateZ(90deg);
}
.ques{
    color:blue;
    font-weight: 400;
}
</style>