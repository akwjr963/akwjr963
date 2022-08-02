<template>
  <div class="myquestion-space">
    <div class="TopMain">
      <div class="TopMemo">문의하기</div>
    </div>
    <div class="MainHeader">
      <div class="MainMemo">문의하기</div>
    </div>
    <div class="main-space">
      <span class="main-button">
        <button>AP 철거/이전 신청</button>
        <button>문의/요청</button>
        <button>장애 신고</button>
      </span>
      <span class="text-header"> AP 철거/이전 문의 </span>
      <div class="main-bar"></div>
      <span class="text-header">AP 검색</span>
      <!--시도 선택, 시군구 선택-->
      <!--backend와 연동예정, vue만으로는 v-for, v-if로 구문제어-->
      <span class="select-space">
        <select class="city-list" @click="ItemChange()">
          <option key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}
          </option>
        </select>
        <select class="office-list">
          <option key="i" :value="d.v" v-for="(d,i) in seoul">{{d.t}}
          </option>
        </select>
      </span>
      <span class="text-header">소속</span>
      <input type="text" v-model="company"/>
      <span class="text-header">이메일</span>
      <input type="text" v-model="email"/>
      <span class="text-header">이름</span>
      <input type="text" v-model="name"/>
      <span class="text-header">연락처</span>
      <input type="text" v-model="tel"/>
      <span class="text-header">파일첨부</span>
      <span class="add-file">
        <button id="file-add-button" @click.prevent="ButtonClickMethod" name="file">파일첨부</button>
        <input type="file" style="display:none" 
        name="file"
        ref="file"
        @change="datainputmethod"
        multiple>
      </span>
      <span class="text-header">제목</span>
      <input type="text" v-model="title"/>
      <span class="text-header">내용</span>
      <textarea v-model="contents"></textarea>
      <span class="text-header">비밀번호</span>
      <input type="password" v-model="password"/>
      <span class="text-header">test</span>
      <input type="text" v-model="complete"/>
      <div><h4>{{file}}</h4></div>
      <div class="main-bar"></div>
      <span class="bottom-button">
        <button class="cancle-button">취소</button>
        <button class="online-button" @click="onSubmit">온라인 문의</button>
      </span>
    </div>
  </div>
</template>
<script>
import * as api from'@/api/api'
export default {
  name: "app",
  data(){
    return {
      file:[],
      options: [
        {v:"none", t:"시도 선택"},
        {v:"se", t:"서울"},
        {v:"bu", t:"부산"},
        {v:"in", t:"인천"},
      ],
      seoul:[
        {v:"none", t:"시군구 선택"},
        {v:"yongsan", t:"용산구"},
        {v:"gwanak", t:"관악구"},
        {v:"guro", t:"구로구"},
        {v:"seocho", t:"서초구"},
        {v:"gangseo", t:"강서구"},
        {v:"yangcheon", t:"양천구"},
        {v:"geumcheon",t:"금천구"},
        {v:"dongjak",t:"동작구"},
        {v:"yeongdeungpo",t:"영등포구"},
        {v:"mapo",t:"마포구"},
        {v:"seodaemun",t:"서대문구"},
        {v:"eunpyeong",t:"은평구"},
        {v:"jongno",t:"종로구"},
        {v:"jung",t:"중구"},
        {v:"gangnam",t:"강남구"},
        {v:"songpa",t:"송파구"},
        {v:"gangdong",t:"강동구"},
        {v:"gwangjin",t:"광진구"},
        {v:"seongdong",t:"성동구"},
        {v:"donddaemun",t:"동대문구"},
        {v:"jungnang",t:"중랑구"},
        {v:"seongbuk",t:"성북구"},
        {v:"gangbuk",t:"강북구"},
        {v:"dobong",t:"도봉구"},
        {v:"nowon",t:"노원구"}
      ],
      busan:[
        {v:"none", t:"시군구 선택"},
        {v:"sasang", t:"사상구"},
        {v:"saha", t:"사하구"},
        {v:"buk", t:"북구"},
        {v:"nam", t:"남구"},
        {v:"dong", t:"동구"},
        {v:"jung", t:"중구"},
        {v:"yungdo", t:"영도구"},
        {v:"gangseo", t:"강서구"},
        {v:"busanjin", t:"부산진구"},
        {v:"gijang",t:"기장군"},
        {v:"suyeong",t:"수영구"},
        {v:"gumjung", t:"금정구"},
        {v:"donglae",t:"동래구"},
        {v:"yeonjae",t:"연제구"},
        {v:"seo",t:"서구"},
        {v:"haeundae",t:"해운대구"}
      ],
      category: '',
      password: '',
      location: '',
      company: '',
      email: '',
      name: '',
      tel: '',
      title: '',
      contents: '',
      complete: '',
    }
  },
  methods:{
      ItemChange(){
        if(options.v === "se")
          office = seoul;
        else if(options.v === "bu")
          office = busan;
      },
      onSubmit(){
        // const formData = {
        //   'category': this.category,
        //   'password': this.password,
        //   'location': this.location,
        //   'company': this.company,
        //   'email': this.email,
        //   'name': this.name,
        //   'tel': this.tel,
        //   'title': this.title,
        //   'contents': this.contents,
        //   'complete': this.complete
        // }
        let fData = new FormData();
        this.file.forEach((f) => {
              fData.append('file', f)
            });
        fData.append('category', this.category)
        fData.append('password', this.password)
        fData.append('location', this.location)
        fData.append('company', this.company)
        fData.append('email', this.email)
        fData.append('name', this.name)
        fData.append('tel', this.tel)
        fData.append('title', this.title,)
        fData.append('contents', this.contents,)
        fData.append('complete', this.complete)


        api.PostQuestionList(fData)
        .then(res => console.log(res))
          // location.reload()
        .catch(error => console.log(error))
      },
      ButtonClickMethod(){
        this.$refs.file.click();
      },
      datainputmethod(event){
        let files = event.target.files
        if(!files) return;
        ([...files]).forEach(f => {
            this.file.push(f)
        })
      }
    },
};
</script>
<style scoped>
.myquestion-space {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.TopMain {
  background-image: url("../assets/images/sub_top_bg01.jpg");
}
.TopMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 20px;
  font-weight: bolder;
}
.MainHeader {
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.MainMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 25px;
  font-weight: bolder;
}
.main-space {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
}
.select-space {
  text-align: left;
}
.main-bar {
  width: 800px;
  background-color: black;
  border: 1px solid black;
}
.text-header {
  text-align: left;
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 5px;
}
input {
  width: 800px;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
}
input[type="password"] {
  width: 300px;
  margin-bottom: 10px;
}
textarea {
  width: 800px;
  height: 100px;
  border: 1px solid lightgray;
  border-radius: 4px;
  resize: none;
}
.add-file {
  text-align: right;
}
button {
  width: 200px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  border: 1px solid lightgray;
  background-color: white;
  font-weight: bolder;
}
.bottom-button {
  text-align: right;
  margin-bottom:40px;
}
select {
  width: 130px;
  height: 25px;
}
.addfile-button {
  width: 120px;
  height: 50px;
  background-color: #4d8fe9;
  color: #ffffff;
  font-size: 15px;
}
.cancle-button {
  width: 150px;
  height: 50px;
  font-size: 15px;
}
.online-button {
  width: 150px;
  height: 50px;
  background-color: #4d8fe9;
  color: #ffffff;
  font-size: 15px;
}

</style>
