// 문자열.toLowerCase() : 영어를 모두 소문자로 변경
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경

const key = document.querySelectorAll(".key");
/* 
document.addEventListener("keydown",function(e){

    let idx;
    switch(e.key.toLowerCase()){
        case 'q' : idx=0; break;
        case 'w' : idx=1; break;
        case 'e' : idx=2; break;
        case 'r' : idx=3; break;
        default: return;
    }

    key[idx].style.backgroundColor = "pink";
})

document.addEventListener("keyup",function(e){
    if(e.key.toLowerCase() == 'q') {
        key[0].style.backgroundColor = "white";
    }
    
    if(e.key.toLowerCase() == 'w') {
        key[1].style.backgroundColor = "white";
    }
    
    if(e.key.toLowerCase() == 'e') {
        key[2].style.backgroundColor = "white";
    }
    
    if(e.key.toLowerCase() == 'r') {
        key[3].style.backgroundColor = "white";
    }
})
*/

/* 최종 코드 */

// 키보드가 눌리고 떼지는 모든 이벤트의 핸들러 함수
function changeKeyColor(e, color) {
    // e : 이벤트 종류 객체
    // color : 색상

    // 맵처럼 생긴 js 객체 생성
    const keyMap = {'q':0, 'w':1, 'e':2, 'r':3};

    const idx = keyMap[e.key.toLowerCase()];
    // key 맵에 없는 값을 입력받았을 경우, idx는 undefined가 된다.
    if(idx != undefined) {
        key[idx].style.backgroundColor = color;
    }
}

// 키가 눌렸을 때 실행
document.addEventListener("keydown",(e)=>changeKeyColor(e, "deepPink"));
/*  위 코드는 다음 코드의 약식이다.
    document.addEventListener("keydown",function(){
        changeKeyColor();
    });
*/

document.addEventListener("keyup", (e)=>changeKeyColor(e,"white"));