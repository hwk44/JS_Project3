/* 문자열 순회 */
let s = "토마토123";
let st = "";

/* 실습 : 회문인지 판별 */
 for(let c of s){
    console.log(c);
 }

 // 거꾸로 순회
 for(let i = s.length-1; i >= 0; i--){ // 맨 뒤 인덱스 부터 순회
    st = st + s[i]
 }
 console.log("st = " + st);

 if(s == st) console.log("회문");
 else  console.log("비회문");

 // 거꾸로 쓰기
 st = s.split("").reverse().join("");
 console.log(st)
 console.log("st = " + st);

/* 실습 : 문자열에 포함된 숫자의 합구하기*/
    let sum = 0;
    st = s.split("");
    for(let n of st) {
        if(!isNaN(n)) sum = sum + parseInt(n);//console.log(n); // isNaN 문자열중에 숫자면 false
    }
    console.log(sum);




/* 여러줄 문자열 저장 */
s = `Ecma International의 프로토타입 기반의 프로그래밍 언어로, 스크립트 언어에 해당된다.
특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. 
오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다.
HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 
JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.
웹 페이지를 자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관, 
JavaScript는 자동차의 동력이라고 볼 수 있다.`

console.log(s);  // 문자열 s 출력

 
/*실습 : 위의 문자열에서 HTML은 몇번 사용되었는지 확인*/
// let pos = s.indexOf("HTML", 135); 인덱스가 135인 부분부터 확인
// indexOf : 문자열의 위치 값을 반환. 없다면 -1 반환

    let pos = 0;
    let cnt = 0;

     while(true) {
        pos = s.indexOf("웹", pos);
        
        if (pos == -1){break;}
        pos= pos + 1;
        cnt++;
    }
    console.log(cnt);

    console.log(pos);


    /* 문자열 슬라이싱*/

    let w = s.substring(0, 4); // 0부터 4까지 잘라내라
    console.log(w);

    
    w = s.substring(4, 8); // 0부터 4까지 잘라내라
    console.log(w);

    w = s.slice(5,10);
    console.log(w);

    w = s.slice(-4);
    console.log(w);

    w = s.slice(4);
    console.log(w);


