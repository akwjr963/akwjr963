<template>
    <div class="Wrapper" v-if="!loading">
        <div class="subtop">
            <h1>
                문의 조회하기
            </h1>
        </div>
        <section class="main-content">
            <div class="title">
                <h4>문의 조회하기</h4>
            </div>
            <div class="table-wrapper">
                <!-- Table, pagination data -->
                <TableList class="table-box" :list-array="pageArray"  />
            </div>
        </section>
    </div>
</template>
<script>
import * as api from '@/api/api'
import TableList from '@/components/TableList.vue'
export default {
    name: 'List',
    components: {
        TableList,
    },
    data() {
        return {
            pageArray: [],
            loading: false,
        }
    },
    computed: {

    },
    created () {
        // list page 뿌리기
        this.loading = true;
        api.fetchProjectList().then((res) => {
            console.log(res);
            this.pageArray = res.data.all;
            this.loading = false;
            let pages = this.pageArray
            // date 연월일만 출력
            for( let i = 0; i <= pages.length; i++) {
                // Cannot read properties of 에러 해결 logic
                // pages[i]에 데이터가 있는지 확인 후 처리
                if(pages[i]?.QA_REG_DATE) {
                    let days = pages[i].QA_REG_DATE.substr(0, 9)
                    pages[i].QA_REG_DATE = days;
                }
            }
            return pages;
        })
    },
    methods: {
        
    },
}
</script>
<style scoped>
    *{ letter-spacing: -1px; }
    .Wrapper {
    max-width: 1920px; height: 100vh;
    }
    .subtop {
    width: 100%; height: 360px;
    text-align: center;
    display: flex; justify-content: center; align-items: center;
    background-image: url('../assets/images/sub_top_bg02.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    }
    .subtop h1 {
    vertical-align: middle;
    font-size: 2.9rem;
    font-weight: 700;
    color: #fff;
    position: relative;
    opacity: 1;
    letter-spacing: 5px;
    }
    .main-content {
    position: relative;
    max-width: 1400px; height: auto;
    margin: 40px auto;
    padding-bottom: 40px;
    }
    
    .title {
    margin: 50px 0 80px;
    text-align: center;
    }
    .title h4 {
    font-size: 2rem;
    }
    .table-wrapper {
    width: 100%;
    height: 400px;
    }
    table {
    width:100%; 
    border-collapse:collapse; 
    border-top: 3px solid #090909;
    border-bottom: 1px solid#ddd;
    }
    .result {
    display: block;
    padding-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    }
    table thead {
    background:#fff; 
    color:#090909;
    }
    table tr th {
    padding:1em; 
    border-top:1px solid #ddd;
    }
    table tr td {
    padding:1em; 
    text-align:center; 
    border-top:1px solid #ddd;
    }
    .active {
    background: #090909 !important;
    color: #fff !important;
    }
    .btn-cover {
    margin-top: 3.5rem;
    text-align: center;
    }
    .btn-cover .page-btn {
    width: 2rem;
    height: 2rem;
    letter-spacing: 0.5px;
    border: none;
    background: transparent;
    cursor: pointer;
    }
    .btn-cover .page-count {
    padding: 0.3rem 1rem;
    font-size: 0.95rem;
    }
    .table-box {
    padding-bottom: 3rem;
    }
</style>