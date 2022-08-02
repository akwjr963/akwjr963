<template>
    <div class="accordion-space">
        <Accordion_Item />
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