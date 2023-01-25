
// 폭탄이 있는 위치를 나타내는 배열
// DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];

// 박스를 선택한 순서를 기록하는 배열
let selNum = [];


// 박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

// 폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

// 메세지 표시함수
const showMsg = (m) => {
    document.querySelector("#msg").innerHTML = m;
}

// 보드 내용 지우기 함수
const boardInit = () => {
    const board = document.querySelectorAll(".boardBox")
    for(let item of board) {
        item.innerHTML = ''
    }
    console.log(board);
    selNum.length = 0;
    cnt = 0;

}

// 보드 전체 하트 만들기
const showAll = () => {
    // const board = document.querySelectorAll("")
/*
    let idx = num.indexOf(1) + 1;
    document.querySelector("#box"+idx).innerHTML = `<img src = "./images/hart.png" />`;
    console.log(idx);
    */
}

// 보드 숫자 누른 후 보여주기 함수
const show = (n) => {
    if(!shuffleFlag){
        showMsg('폭탄을 섞어주세요.');
        // boxShuffle();
        return; // 함수를 빠져 나갈 때
    }
    console.log(n);

    // 같은 곳을 여러번 눌렀을 때
    if(selNum.indexOf(n) != -1) {
        
    }
    if(cnt == 8) {
        showAll();
        shuffleFlag = false;
        showMsg('게임 성공!')
        return;
    }

    cnt++; // 누른 횟수
    selNum.push(n); // 눌러진 정보 저장
    console.log(selNum);

    

    let img ;
    if(num[n-1] == 0) img = 'hart';
    else {
        img = 'boom';
        shuffleFlag = false;
        showMsg('게임 종료.');
    }
    document.querySelector("#box"+n).innerHTML = `<img src = "./images/${img}.png" />`;


}

// 폭탄 섞기 함수
const boxShuffle = () => {
    if (shuffleFlag) {
        showMsg('폭탄위치를 결정했습니다. 게임을 진행해 주세요');
        return; // 함수를 빠져 나갈 때
    }

    num.sort(() => Math.random() - 0.5)
    console.log(num);
    shuffleFlag = true;
    boardInit();
    
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
    // shufflecheck();
    // boxShuffle();
});