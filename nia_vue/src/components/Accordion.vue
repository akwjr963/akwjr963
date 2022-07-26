<template>
    <div class="accordion-space">
        <Accordion_Item />
        <!--아코디언 코드, 현재는 개별 @click, v-if 배정-->
        <!--<ul class="mainMenu">
            <li :class="{active: isShow}"
            @click="isAccordionActive">1. 이전 / 철거 신청에 관하여 누구한테 비용을 물어봐야 하나요?(주무관님의 경우)</li>
            <li v-if="isShow" class="acc-answer">이전 / 철거 관련 비용은 KT영업대표님게 물어보시면 됩니다. 담당 영업대표님을 모르시는 경우, 공공와이파이통합관리센터로 연락주시기 바랍니다.</li>
            <li :class="{active: isShow2}"
            @click="isAccordionActive2">2.철거 이전 문의 접수 방법(주무관님의 경우)</li>
            <li v-if="isShow2">ABCDABCDABCD</li>
            <li :class="{active: isShow3}"
            @click="isAccordionActive3">3.철거 이전 신청 접수를 할 수 있는 대상은 누구인가요?</li>
            <li v-if="isShow3">ABCDABCDABCD</li>
            <li :class="{active: isShow4}"
            @click="isAccordionActive4">4.철거 이전 신청하려고 하는데 찾는 개소지가 목록에 없습니다</li>
            <li v-if="isShow4">ABCDABCDABCD</li>
            <li :class="{active: isShow5}"
            @click="isAccordionActive5">5.철거 이전 신청은 언제 해야 하나요?</li>
            <li v-if="isShow5">ABCDABCDABCD</li>
        </ul>-->
    </div>
</template>
<script>
import Accordion_Item from './Accordion_Item.vue';
export default {
    name: "app",
    data() {
        return {
            isShow: false,
            isShow2: false,
            isShow3: false,
            isShow4: false,
            isShow5: false,
        };
    },
    methods: {
        isAccordionActive() {
            this.isShow = !this.isShow;
        },
        isAccordionActive2() {
            this.isShow2 = !this.isShow2;
        },
        isAccordionActive3() {
            this.isShow3 = !this.isShow3;
        },
        isAccordionActive4() {
            this.isShow4 = !this.isShow4;
        },
        isAccordionActive5() {
            this.isShow5 = !this.isShow5;
        }
    },
    components: { Accordion_Item }
}
</script>
<style scoped>
.accordion-space{
    display: flex;
    flex-direction: column;
    border-top:3px solid black;
    width: 1200px;
    height: 400px;
    margin-top:30px;
}
ul{
    list-style-type: none;
}
li{
    border-bottom:1px solid lightgray;
    text-align: left;
    line-height: 40px;
    user-select: none;
}
.acc-answer{
    max-height: 60px;
    transition-property: height;
    transition-duration: 2s;
}
.acc-answer .acc-answer.isShow{
    transition: all 1s;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
}
.acc-answer.isShow:active{
    max-height: 60px;
    transition: max-height .7s ease-in;
}
.acc-answer-enter, .acc-leave-to{
    opacity: 0;
    transform: translateY(-100px);
    margin-bottom: -100px;
}
</style>