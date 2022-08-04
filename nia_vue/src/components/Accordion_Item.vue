<template>
      <div>
        <!--answer transtition-->
        <transition
        name="transition-height"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave">
            <!--answer-->
            <ul v-show="accordion.open" class="acc-list">
            <!--각 question에 대한 answer 출력-->
                <li class="answer-list"
                v-for="(item, idx) in accordion.answer" :key="idx">
                <span class="ans">A&nbsp;&nbsp;&nbsp;</span>
                    {{item}}
                </li>
            </ul>
        </transition>
      </div>
</template>
<script>
export default {
    name:'answerList',
    props:[
        'accordion'
    ],
    methods:{
        enter(e) {
            //누르면 height auto(block)
            e.style.height = 'auto'
            //getcomputedstyle로 height css값을 받아와 계산
            const height = getComputedStyle(e).height;
            e.style.height=0;
            setTimeout(()=>{
                e.style.height= height;
            })
        },
        afterEnter(e){
            e.style.height='auto'
        },
        leave(e){
            e.style.height  = getComputedStyle(e).height;
            setTimeout(()=>{
                e.style.height=0;
            })
        }
    }
}
</script>
<style scoped>
.acc-list{
    list-style:none;
    padding-inline-start: 0;
}
.ans{
    color:hotpink;
}
.answer-list{
    padding: 20px 10px;
    color: #090909;
    border-top: 1px solid lightgray;
}
.transition-height-enter-active, .transition-height-leave-active{
    transition: height 1s ease;
    overflow: hidden;
}
</style>