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
      <!--backend와 연동예정-->
      <span class="select-space">
        <select class="city-list"
        @change="ChangeOffice()"
        v-model="location">
          <option v-for="(data,index) in items" :key="index"
          >{{data.value}}
          </option>
        </select>
        <select class="office-list"
        @change="ChangePlace()"
        v-model="location"><!--v-model-->
          <!--v-for 시도 선택에서 받은 office를 for문으로 다시 출력-->
          <option v-for="(data,idx) in offices" :key="idx">
            {{data}}
          </option>
        </select>
        <select class="place-list"
        >
          <option v-for="(data, i) in places" :key="i">
            {{data}}
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
      office:'',
      place:'',
      file:[],
      offices:[],//시군구 선택 배열
      places:[],//장소선택 배열
      items: [
                { location:'시도 선택 ', value: '시도선택' },
                { location: '강원도', value: '강원도' },
                { location: '경기도', value: '경기도' },
                { location: '경상남도', value: '경상남도' },
                { location: '경상북도', value: '경상북도' },
                { location: '광주광역시', value: '광주광역시' },
                { location: '대구광역시', value: '대구광역시' },
                { location: '대전광역시', value: '대전광역시' },
                { location: '부산광역시', value: '부산광역시' },
                { location: '서울특별시', value: '서울특별시' },
                { location: '세종특별자치시', value: '세종특별자치시' },
                { location: '울산광역시', value: '울산광역시' },
                { location: '인천광역시', value: '인천광역시' },
                { location: '전라남도', value: '전라남도' },
                { location: '전라북도', value: '전라북도' },
                { location: '충청남도', value: '충청남도' },
                { location: '충청북도', value: '충청북도' },
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
      onSubmit(){
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
      },
      ChangeOffice(){
      //반복문 사용
      //시도 선택에 따른 시군구 선택 값 변화
      let location = this.location;
      api.GetCityAddress(location)
      .then((res)=>{
        
        let result = res.data.result;
        this.offices = [];
        let offices = this.offices;
        for(let i=0;i<result.length;i++)
        {
          offices.push(result[i]); 
          
        }
        
        console.log(res.data)
        console.log(offices)
      })
      
      .catch(error => console.log(error))
    },
     ChangePlace(){
      let location = this.location;
      //시군구 선택 값에 따른 각 장소 선택
      api.GetOfficeAddress(location)
      .then((res)=>{
        let result = res.data.result;
        this.places=[];
        let places = this.places;
        
        for(let j=0;j<result.length;j++)
        {
          places.push(result[j]);
        }
        console.log(res.data)
        console.log(places)
      })
      .catch(error => console.log(error))
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
  height: 250px;
  font-size: 30px;
  font-weight: bolder;
}
.MainHeader {
  height: 50px;
  margin-top: 30px;
  margin-bottom: 50px;
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
#file-add-button{
  background-color: #4d8fe9;
  color: #ffffff;
}

</style>
