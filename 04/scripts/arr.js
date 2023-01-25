/* 배열 선언 */
// let 아니면 const 로 선언
    let arr = [];
    let arr2 = new Array;

/* 배열 추가 삭제 :뒤에서 */
    arr.push('🍟'); 
    arr.push('🍔');
    arr.push('🍖');
    console.log(arr);

/* 배열 추가 삭제 :앞에서 */

    // 추가
    arr.unshift('😁')
    arr.unshift('👨‍🦱')
    console.log(arr);

    // 삭제
    arr.shift();
    console.log(arr);


/* 배열 순회 */
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

/* 배열 순회2 */
    for(let i of arr){
        console.log(i);
    }

/* 배열의 length 속성*/ // length 크기 변경으로 배열을 비울 수 있음
    console.log(arr)
    console.log(arr.length);
    arr.length = 1;
    console.log(arr);


// 배열 비우기
    arr.length = 0;
    console.log(arr);


/* 배열을 문자열로 반환*/
    arr = ['🍕','🍔','🍗','🍜',] ; // 맨 뒤에 쉼포를 찍는 것은 배열에 더 들어갈 수도 있기 때문에
    console.log(arr);

    let s = String(arr); // 문자열로 반환
    console.log(s);

/* 문자열 split하면 배열반환*/
    let sarr = s.split(',')
    console.log(sarr);

 
/* 배열 정렬 */
    let num = [1,3,5,2,4];
    num.sort();
    console.log(num);   // 오름차순 정렬
 
    num.sort((a,b) => { return b-a } );  // 내림차순 정렬 // a-b로 바꾸면 오름차순
    console.log(num);  
 

/* 배열 섞기*/
    num.sort(()=> Math.random() - 0.5)
    console.log(num);

 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 

/* 실습 : 합집합, 교집합, 차집합 */
    let setA = [1,2,3,4,5];
    let setB = [4,5,6,7,8];

//합집합
    let union =  [... setA, ...setB, ...arr]; // 이런게 됨
    console.log(union);

//교집합 // filter, map 차이? 콜백 함수로 들어감
    let intersection = setA.filter ((item) => setB.includes(item)) 
    console.log(intersection);

    let setA2 = setA.map ((item)=> item*2)
    console.log(setA2);

//차집합
    let difference = setA.filter((item) => !setB.includes(item))
    console.log(difference);

// 합집합 수정
    union = [...difference, ...setB];
    console.log(union);


