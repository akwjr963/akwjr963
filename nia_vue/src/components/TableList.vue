<template v-if="p">
    <div>
        <span class="result">총 {{ listArray.length }} 건</span>
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>첨부</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
            <tr v-for="p in paginatedData" :key="p.SEQ">
                <td>{{ p.SEQ }}</td>
                <td>
                    <button class="route-button"
                    @click="fetchViewPage(`${p.SEQ}`)"
                    >
                    {{ p.QA_TITLE }}
                    </button>
                </td>
                <!-- 첨부파일 유무 확인 -->
                <td>
                    <font-awesome-icon 
                    class="fileIcon"
                    icon="fa-solid fa-file-circle-check"
                    v-if="p.QA_FILE_EXIST === 'Y'"
                    />
                </td>
                <td>{{ p.QA_NAME }}</td>
                <td>{{ p.QA_REG_DATE }}</td>
            </tr>
        </table>
        <div class="btn-cover">
            <button :disabled="pageNum === 0" @click="recentPage" class="page-btn">
                 &lt;&lt;
            </button>
            <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
                 &lt;
            </button>
            <span 
            :class="{active: pageNum = pageNum}"
            class="page-count active">{{ pageNum + 1 }}</span>
            <!-- <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} Page</span> -->
            <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
                 &gt;
            </button>
            <button :disabled="pageNum >= pageCount - 1" @click="lastPage" class="page-btn">
                 &gt;&gt;
            </button>
        </div>
    </div>
</template>
<script>
import router from '@/router'
export default {
    name: 'TableList',
    data() {
        return {
            pageNum: 0,
        }
    },
    props: {
        listArray: {
            type: Array,
            required: true
        },
        pageSize: {
            type: Number,
            required: false,
            default: 5
        },
    },
    methods: {
        fetchViewPage(seq) {
            console.log(seq)
            router.push(`/secret/${seq}`)
        },
        nextPage () {
        this.pageNum += 1;
        },
        prevPage () {
        this.pageNum -= 1;
        },
        lastPage() {
        let listLeng = this.listArray.length,
            listSize = this.pageSize,
            page = Math.ceil(listLeng / listSize) -1
        console.log(page)
        this.pageNum = (page)
        },
        recentPage() {
        this.pageNum = 0;
        }
    },
    computed: {
        pageCount () {
        let listLeng = this.listArray.length,
            listSize = this.pageSize,
            page = Math.floor(listLeng / listSize);
            console.log(listLeng, listSize)
        if (listLeng % listSize > 0) page += 1;
        return page;
        },
        paginatedData () {
        const start = this.pageNum * this.pageSize,
                end = start + this.pageSize;
        return this.listArray.slice(start, end);
        }
    },
}
</script>
<style scoped>
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
    .fileIcon {
    font-size: 1.3rem;
    color: #a3a2a2;
    }
    .route-button {
    background: none;
    border: none;
    cursor: pointer;
    }
</style>