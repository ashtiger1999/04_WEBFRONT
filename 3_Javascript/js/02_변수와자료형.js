/* 
    console.log(값)
    브라우저 콘솔에 괄호() 내부의 값을 출력(기록)
*/
console.log(1234)
console.log("문자열")

// -----------------------------------------------------------

/* 
    변수의 선언 :
    메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것

    [작성법]
    변수종류 변수명;
*/
var number1;

/* 
    변수의 초기화 :
    변수에 처음 값을 할당하는 과정

    [작성법]
    변수명 = 값;
*/
number1 = 10;

console.log(number1);

var number2 = 20;
console.log(20);

console.log(number1 + number2);

// 변수에 대입한 값을 변경하기 : 재할당
number1 = 300;
number2 = 400;

// 1) 문자열 + 문자열/숫자/변수 == 이어쓰기
console.log("number1의 값 : " + number1);
console.log("number2의 값 : " + number2);
console.log(number1 + " + " + number2 + " = " + (number1 + number2));

// 2) 괄호 내에 콤마를 이용하여 나열하기
console.log("number1의 값 :", number1);
console.log("number2의 값 :", number2);
console.log(number1, "+", number2, "=", number1 + number2);

// -----------------------------------------------------------

// var, let, const의 차이점

// 1. var (변수, 변수 선언시 중복되는 변수명으로 선언 가능)
// -> 먼저 선언된 변수에 나중에 선언된 변수가 덮어씌워짐

var menu = "삼겹살";
console.log("menu : " + menu);

var menu = "초밥";
console.log("menu : " + menu);
// 변수명이 중복되어 값이 덮어쓰기 되면
// 이전에 선언해놓은 변수를 쓸 수 없게되는 문제가 발생함

// -----------------------------------------------------------

// 2. let (변수, var의 변수명 중복 문제 해결)

let number3 = 25;

// let number3 = 500;
// Cannot redeclare block-scoped variable 'number3'
// -> 변수명 중복 불가

number3 = 500; // 재할당 가능

console.log("number3 : ",number3);

// -----------------------------------------------------------

// 3. const (상수, constant)
// 한 번 값이 대입되면 새로운 값 대입할 수 없음

const PI = 3.141592;

// const TEST;
// 'const' declarations must be initialized
// -> 상수는 선언과 동시에 초기화해야함

// PI = 123;
// TypeError: Assignment to constant variable.
// -> 상수는 재할당 불가능
// => 상수에는 새로운 값을 대입할 수 없는데, 재대입을 하고 있어 오류가 발생함(콘솔 오류)

/* 코드에서 붉은줄 오류와, 콘솔창에서 나타나는 오류의 오류명은 각각 무엇인가 */

// -----------------------------------------------------------

// 블록 레벨 scope / 함수 레벨 scope

// 블록 레벨 scope (let, const)
// let과  const로 선언된 변수는 변수가 선언된 블록(중괄호 {}) 내부에서만 유효하다는 것을 의미
// 즉, 코드 블록 내부에서 선언한 변수(let, const)는 해당 불록 외부에서는 접근할 수 없다.

let foo1 = 123; // 전역 변수
const FOO2 = 456; // 전역 변수

{ // 블록 레벨
    let num1 = 789; // 지역 변수
    const NUM2 = 0; // 지역 변수
}

console.log(foo1); // 전역 변수이기 때문에 (블록과 관계없음) 접근 가능
console.log(FOO2); // 전역 변수이기 때문에 (블록과 관계없음) 접근 가능
// console.log(num1); // ReferenceError: num1 is not defined
// console.log(NUM2); // ReferenceError: num1 is not defined
// num1에서 오류가 발생하여, NUM2의 오류는 출력되지 않음
// -> 둘 다 블록 레벨 스코프이기 때문에 블록 밖에서 접근할 수 없음

// -----------------------------------------------------------

// 함수 레벨 스코프 (var)
// var 키워드로 선언된 변수는 함수 내 어디서든 접근할 수 있음
// if, for 등의 일반 블록은 무시하고, var로 선언된 변수가 있는 함수 전체에서 유효함

var test1 = 123;
{
    var test2 = 456;
}

console.log(test1);
console.log(test2);
// -> test2도 접근 가능
// => 함스 레벨 스코프인 var는 일반 블록을 무시하기 때문이다.

// 함수 안에서 함수 레벨 스코프 테스트
function example() { // 함수 형태로 만들어진 코드 블록 : 함수 레벨 scope
    var test3 = '함수 레벨 var 테스트';
    console.log(test3);
}

// console.log(test3);
// ReferenceError: test3 is not defined
// -> var는 일반 블록 레벨만 무시할 뿐, 함수 레벨 블록은 무시하지 못함
// 즉, 함수 블록 안에서 선언된 var 변수는 함수 안에서만 사용 가능함

example();

function example2() {
    if(true) { 
        // 블록문(if, for, while 등) 내에서 선언된 var 변수는 일반 블록을 무시한다
        var x = 10;
        // x는 블록 내부에서 선언되었지만 함수 레벨 스코프를 가진 var 변수이다. 
    }
    console.log(x); // 블록 밖에서 변수에 접근
}

example2();

// -----------------------------------------------------------

// 1. var의 호이스팅
// : var로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅됨
// 초기화는 원래 코드 위치에서 수행된다.

// 에러가 발생하지 않고 undefined가 찍힌다.
// -> 호이스팅 되어 var a; 선언부는 최상단으로 올라감
// -> 선언은 되었으나 a에 값이 대입되진 않았기 때문에 undefined를 반환
console.log(a); // undefined

// 변수의 선언과 초기화
var a = 10;

// 2. let/const의 호이스팅
// : let/const로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅됨
// var와 달리, let/const로 선언된 변수는 초기화가 이루어지기 전에는 사용될 수 없음

// TDZ (Temporal Dead Zone)
// 시간적으로 죽은 구역
// 코드 실행 과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미함
// Javascript에서 let/const 키워드로 선언된 변수가 초기화되기 전까지 접근할 수 없는 구간을 말함

// let x; (내부적으로 선언은 끌어올려진 상태)
// -> x 선언이 호이스팅됨
//    그러나 TDZ에 놓여 초기화 전까지 접근 불가
// -> 초기화가 이루어지기 전까지 해당 변수는 TDZ에 놓이며,
// 이 기간 동안은 변수에 접근하려고 하면
// Cannot access 'x' before initialization 라는 에러 발생

// console.log(x);
//ReferenceError: Cannot access 'x' before initialization

let x = 50;
console.log(x); // 50 출력

// console.log(N);
// ReferenceError: Cannot access 'N' before initialization

const N = 100;
console.log(N);

// -> 이러한 특성으로 인해
// let/const는 var보다 개발자가 예측할 수 있는 코드를 작성할 수 있기 때문에 사용이 권장되고 있다.

// -----------------------------------------------------------

// JS 자료형 확인하기

// typeof 연산자 : 변수/값의 자료형을 출력하는 연산자

// undefined : 정의되지 않은 변수 / 값이 아직 대입되지 않음
let undef; // 변수의 선언
console.log("undef : ",undef,typeof undef);

// string(문자열) : "" 또는 ''로 작성된 값
const USERNAME = "홍길동";
console.log("USERNAME : ",USERNAME,typeof USERNAME);

const PHONE = "01012341234";
console.log("PHONE : ",PHONE,typeof PHONE);

const GENDER = "M";
console.log("GENDER : ",GENDER,typeof GENDER);

const EMPTY = "";
console.log("EMPTY : ",EMPTY,typeof EMPTY);

// number : 정수, 실수, 양수, 음수, 0 등의 모든 숫자
const AGE = 25;
const HEIGHT = 160.5;
const SIGHT_LEV = -5;

console.log("AGE : ",AGE,typeof AGE);
console.log("HEIGHT : ",HEIGHT,typeof HEIGHT);
console.log("SIGHT_LEV : ",SIGHT_LEV,typeof SIGHT_LEV);

//boolean 논리값 true/ false
const isTrue = true;
const isFalse = false;

console.log("isTrue:", isTrue,typeof isTrue);
console.log("isFalse:",isFalse,typeof isFalse);

//object (객체)
//값을 여러개 저장 할 수 있는 형태

//1. 배열 (array) : 여러값이 나열되어 있는 것의 묶음
const numbers = [10, 20, 30];
console.log("numbers :", numbers,typeof numbers);

console.log("numbers 배열 값 중 0번째 :",numbers[0], typeof numbers[0]);
console.log("numbers 배열 값 중 1번째 :",numbers[1], typeof numbers[1]);
console.log("numbers 배열 값 중 2번째 :",numbers[2], typeof numbers[2]);
console.log("numbers 배열 값 중 0번째 :",numbers[3], typeof numbers[3]);

// javascript에서의 배열은 값 추가 및 삭제 가능
// 크기가 고정되지 않고 필요에 따라 자동으로 늘어나거나 줄어듦

// 2.js객체
//값을 k:v (map)형식으로 여러개 저장하는 형태
//-> {K :V ,K:V ,K:V ....}

//Key : 값을 구분하는 이름 (변수명 비슷)
//V(Value) : K에 대응되는 값 ( 변수에 대입되는 값 비슷)

const user = {id:"user01",pw : "pass01",userName:"홍길동"};

console.log("user:",user,typeof user);

 // 객체에 존재하는 값 하나씩 얻어오기

 // 방법 1: 변수명['key']
 console.log(user['id']);

 // 방법 2 : 변수명.key
console.log(user.id);

// 함수 (function)

// 작성법
// const 변수명 = function() {};
// 변수명 == 함수명

const fn = function(a,b) {return a+b};
console.log(fn, typeof fn);
console.log(fn(1,2), typeof fn(1,2));

// null
console.log(null, typeof null);