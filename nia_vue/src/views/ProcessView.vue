<template>
  <div class="Process">
    <div class="TopMain">
      <div class="TopMemo">처리프로세스</div>
    </div>
    <div class="MainHeader">
      <div class="MainMemo">처리프로세스</div>
    </div>
    <div class="MainPhoto"></div>
    <div class="Explain">
      <ol>
        <li class="Number">1. 이전 설치 필요 발생</li>
        <li>
          건물 이전, 리모델링, 버스승차대 교체, 버스승류장 이전 등의 상황이
          발생합니다.
        </li>
        <li>
          *공사업체나 현장담당자분들께서는 지자체 담당 주무관님과 협의해주시기
          바랍니다.
        </li>
      </ol>
      <ol>
        <li class="Number">2.접수 (to. 영업대표)</li>
        <li>
          지자체에서 이전 설치 필요 발생의 경우 KT영업대표에게 비용, 이전
          가능여부 확인해주시기 바랍니다.
        </li>
        <li>
          *담당 KT영업대표에 대한 정보는 공공와이파이통합관리센터로 문의 주시기
          바랍니다.
        </li>
      </ol>
      <ol>
        <li class="Number">3. 접수 확인(to. KT CM)</li>
        <li>
          KT영업대표님께서 KT CM측으로 회선 공사 가능 여부와 총 금액을
          확인해주시기 바랍니다
        </li>
      </ol>
      <ol>
        <li class="Number">4. 내용 전달(to. 주무관)</li>
        <li>
          KT영업대표님께서 KT CM측에서 확인한 회선 공사 가능 여부와 총 금액을
          주무관 측에 전달해 주시기 바랍니다.
        </li>
      </ol>
      <ol>
        <li class="Number">5. 접수(to. 센터)</li>
        <li>
          지자체에서는 KT영업대표님으로부터 전달받은 정보를 토대로
          공공와이파이통합관리센터 측에 이전/철거 양식을 모두 정확하게
          작성해주신 후 접수해주시기 바랍니다.
        </li>
        <li>
          *양식이 미비할 경우, 확인 후 진행해야 하기에 일정이 지연됩니다.
          빠짐없이 작성 후 신청해주여야 하는 점 알려드립니다.
        </li>
      </ol>
      <ol>
        <li class="Number">6. 처리</li>
        <li>
          지자체에서 작성해주신 NIA공공와이파이 변경신청처에 기재 되어 있는
          철거/이전 일자를 토대로 공공와이파이통합관리센터 측에서 공사업체로
          공사 시행을 요청드립니다.
        </li>
      </ol>
      <ol>
        <li class="Number">7. 결과 확인</li>
        <li>
          공공와이파이통합관리센터는 공사업체 측으로부터 이전/철거 공사 결과와
          보고서를 전달 받습니다.
        </li>
      </ol>
      <ol>
        <li class="Number">8. 보고서 전달</li>
        <li>
          공공와이파이통합관리센터에서 공사업체 측으로부터 전달받은 이전/철거
          보고서를 주무관과 영업대표에게 전달합니다.
        </li>
      </ol>
      <ol>
        <li class="Number">9. 이전 철거 확인</li>
        <li>지자체와 영업대표는 이전 내용을 확인해 주시기 바랍니다.</li>
      </ol>
      <ol>
        <li class="Number">10. 비용 정산 및 사후관리</li>
        <li>
          KT영업대표는 주무관측에 이전 설치된 비용을 청구합니다. 지자체에서는
          이전/철거 비용을 납부해 주시면 됩니다.
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style scoped>
.TopMain {
  background-image: url("../assets/images/sub_top_bg04.jpg");
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
  margin-top: 20px;
  margin-bottom: 20px;
}
.MainMemo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 25px;
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 30px;
}
.MainPhoto {
  background-image: url("../assets/images/process.jpg");
  display: flex;
  width: 900px;
  height: 1000px;
  background-position: center;
  background-size: cover;
  align-items: center;
  margin: auto;
}
.Explain {
  width: 900px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom:40px;
  align-items: flex-start;
}
ol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  line-height: 20px;
  padding-left: 0;
  font-size: 10px;
  font-weight: bolder;
}
li {
  padding-left: 0;
  margin: 0;
}
.Number {
  color: #4d8fe9;
  font-size: 14px;
}
</style>
