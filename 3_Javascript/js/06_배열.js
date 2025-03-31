// 배열 선언 및 기초 사용법
function check1() {

    // 배열 선언 방법 확인
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과","바나나","딸기"];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열명.length : 배열의 길이
    // (배열에 있는 칸 수 또는 저장된 데이터 수)
    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length);
    console.log(arr4.length);

    // 배열의 index
    // 배열명[index]
    // -> 배열의 해당 인덱스에 존재하는 데이터를 반환
    console.log("arr4[0] : ", arr4[0]);

    // 배열명[index] = 값;
    // -> 해당 인덱스에 지정된 값 대입
    arr2[0] = 100;
    arr2[1] = "점심은 서브웨이지";
    arr2[2] = true;
    arr2[3] = arr4;

    console.log(arr2);
    // JS 배열의 특징 : 인덱스별로 자료형을 다르게 지정할 수 있다.

    // 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
    arr1[0] = "가";
    arr1[1] = "나";
    arr1[2] = "다";

    arr1[4] = "마";

    console.log(arr1);
}

// 배열과 for문
function check2() {

    // for문을 이용해서 배열 요소 초기화 하기

    const arr = [];

    for(let i = 0; i<4; i++) {
        arr[i] = i*10;
    }

    console.log(arr);
}

// 점심 메뉴 뽑기
function check3() {

    // 결과 출력 span
    const menuResult = document.getElementById("menuResult");

    // 점심 메뉴로 초기화된 배열 생성
    const menu = ["서브웨이","짜장면","제육볶음","돈까스","라면","볶음밥","김밥","떡볶이","마라탕"];

    menuResult.innerText = menu[Math.floor(Math.random()*menu.length)];
}