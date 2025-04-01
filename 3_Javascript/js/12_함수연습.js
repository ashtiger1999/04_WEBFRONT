// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오.
function fn1(name) {
    console.log(`Hello, ${name}!`);
}
fn1('홍길동');

// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오.
function fn2(num1, num2) {
    console.log(`${num1} + ${num2} = `,num1+num2);
}
fn2(3,4);

// 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성
const fn3 = (num1, num2) => {
    console.log(`${num1} X ${num2} = `,num1*num2);
}
fn3(5,7);

// 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고,
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn4(num1,num2) {
    console.log(num1, num2)
    if(num1>num2) console.log('첫번째 숫자가 더 큽니다.')
    else console.log("두번째 숫자가 더 크거나 같습니다.")
}
fn4(10,12);

// 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn5(str) {
    console.log(`${str}의 글자 수 : `,str.length);
}
fn5("안녕하세요");

// 문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오
function fn6(str, num) {
    for(let i=0; i<num; i++) {
        console.log(i+1+'번째 출력; '+str);
    }
}
fn6("집에 가고 싶다.",5);

// 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오
function fn7(num) {
    console.log(num);
    let boolean;
    if(Number(num)%2==0) boolean = true;
    else boolean = false;
    console.log(boolean,typeof boolean);

    return boolean;
}
fn7(8);

// 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오
function fn8(num1, num2, num3) {
    console.log(num1, num2, num3);
    if(num1>=num2&&num1>=num2) {
        console.log(num1);
    } else if (num2>=num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
    //
    let max = num1;
    if(max<num2) max = num2;
    if(max<num3) max = num3;
    return max;
    // return Math.max(num1,num2,num3);
}
fn8(5,9,7);
console.log(fn8(1,3,5))

// 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const fn9 = (arr) => {
    console.log(arr[0]);
    return arr[0]
}
fn9(["귤","사과","바나나"]);

// 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오
function fn10(arr) {
    let sum=0;
    for(let i = 0; i<arr.length; i++) {
        sum+=arr[i];
    }
    sum = arr.reduce((acc,curr)=>{return acc + curr});
    // 배열.reduce(callback함수) : JS 배열의 메서드로(함수), 배열의 모든 요소를 순회하면서 하나의 결과 값을 누적하여 반환
    // acc(accumulator) : 이전 콜백 호출에서 반환된 값
    // curr(currentValue) : 현재 값
    const avg = Math.floor(sum/arr.length);
    console.log(sum,avg);
    return {"sum":sum, "avg":avg};
}
fn10([1,3,5,7,9]);

// 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오
const plusFn = (num1,num2)=>{
    return num1+num2;
};
function fn11(num1,num2,fn) {
    console.log(`${num1} + ${num2} =`,fn(num1,num2))
}
fn11(7,9,plusFn);

// 사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오
const helloFn = (name) => {
    console.log(`${name}님, 환영합니다.`);
}
function fn12(name,fn) {
    fn(name);
}
fn12("홍길동",helloFn);