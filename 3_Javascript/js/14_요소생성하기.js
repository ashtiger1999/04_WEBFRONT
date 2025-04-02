const createBox = document.querySelector("#createBox");
const container = document.querySelector(".container");

// createBox 버튼 클릭 시 div.box 요소를 생성하여
// container에 마지막 자식으로 추가

createBox.addEventListener("click",()=>{
    
    // 1. div 요소 생성
    const box = document.createElement('div'); // <div></dv<

    // 2. 만들어진 div 요소 "box" 클래스 추가
    box.classList.add('box'); // <div class="box"></div>

    // 3. container의 마지막 자식으로 div 요소 추가
    container.append(box);

    // 4. input 요소 생성
    const input = document.createElement('input');
    input.type = 'text'; // <input type = "text">

    // 5. 생성된 input을 박스의 마지막 자식으로 추가하기
    box.append(input);
})

/* 
    요소.classList : 요소의 클래스 목록
    -> 클래스 존재 여부, 추가, 제거 등을 할 수 있음

    * 요소.classList
    -> 요소 클래스 목록이 배열 형식으로 반환

    * 요소.classList.contains("클래스명")
    -> 요소에 해당 클래스가 있우면 true, 없으면 false

    * 요소.classList.add("클래스명")
    -> 클래스 추가

    * 요소.classList.remove("클래스명")
    -> 클래스 제거
*/

// innerHTML로 요소 추가하기
const innerHTMLBox = document.querySelector('#innerHTMLBox');

innerHTMLBox.addEventListener('click',()=>{
    container.innerHTML += "<div class='box'><input type='text'></box>";
})