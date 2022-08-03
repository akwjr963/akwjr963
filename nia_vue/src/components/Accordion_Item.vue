<template>

        <div class="list-menu">
            <div v-for="(question, name) in list" class="question-list">
                <a @click="question.open = !question.open" v-text="question.name">
                </a>
                <ul v-show="question.open">
                    <li v-for="item in question.items" v-text="item"></li>
                </ul>
            </div>
        </div>

</template>
<script>
export default {
    data() {
        return{
            list:[  
            {
                "name":"1. 이전 / 철거 신청에 관하여 누구한테 비용을 물어봐야 하나요?(주무관님의 경우)",
                "open":false,
                "items":["이전 / 철거 관련 비용은 KT영업대표님게 물어보시면 됩니다. 담당 영업대표님을 모르시는 경우, 공공와이파이통합관리센터로 연락주시기 바랍니다."]
            
            },
            {
                "name":"2.철거 이전 문의 접수 방법(주무관님의 경우)",
               "open":false,
                "items":["2번답2번답2번답"] 
            },
            {
                "name":"3.철거 이전 신청 접수를 할 수 있는 대상은 누구인가요?",
                "open":false,
                "items":["3번답3번답3번답"] 
            },
            {
                "name":"4.철거 이전 신청하려고 하는데 찾는 개소지가 목록에 없습니다",
                "open":false,
                "items":["4번답4번답4번답"] 
            },
            {
                "name":"5.철거 이전 신청은 언제 해야 하나요?",
                "open":false,
                "items":["5번답5번답5번답"] 
            },
            ],
        };
    },
}
</script>
<style scoped>
li{
    border-bottom:1px solid lightgray;
    text-align: left;
    padding-bottom:10px;
    user-select: none;
    list-style: none;
}
a{
    border-bottom:1px solid lightgray;
    display: block;
    width: inherit;
    height: 40px;
    align-items: center;
    padding-top:20px;
}
.question-list{
    list-style-type: none;
    text-align: left;
    user-select: none;
    padding-inline-start: 0;
    align-items: center;
    align-content: center;
    vertical-align: center;
}
ul{
    padding-inline-start: 0;
    align-items: center;
    align-content: center;
    vertical-align: center;
    line-height: 60px;
}
</style>