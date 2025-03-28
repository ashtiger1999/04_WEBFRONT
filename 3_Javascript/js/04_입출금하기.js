// prompt 사용 연습

function test() {
    const password = prompt("비밀번호를 입력하세요.");
    console.log(password);
    // 확인 -> 입력한 값이 문자열로 저장
    // 취소 -> null

    if(password==null){
        alert("취소되었습니다.");
    }else{
        if(password=='1234'){
            alert("비밀번호가 일치합니다.");
        }else{
            alert("비밀번호가 일치하지 않습니다.");
        }
    }
}

// ---------------------------------------------------------------

const output = document.getElementById("output");
const amount = document.getElementById("amount");

let balance = 10000;
const pw = '1234';

output.innerText = balance;

function deposit() {
    if(amount.value.length==0){
        alert("금액을 입력해주세요");
    }else{
        balance += Number(amount.value);
        output.innerText = balance;
        amount.value = '';
    }
}

function withdrawal() {
    if(amount.value.length==0){
        alert("금액을 입력해주세요");
    }else{
        const password = prompt("비밀번호를 입력하세요.");
        if(password==null){
            alert("취소되었습니다.")
        }else if(password==pw){
            if(balance>=Number(amount.value)){
                balance -= Number(amount.value)
                // alert(amount.value+"원이 출금되었습니다. 잔액 :"+balance)
                alert(`${amount.value}원이 출금되었습니다. 남은 잔액 : ${balance}`)
                output.innerText = balance;
            }else{
                alert("잔액이 부족합니다.")
            }
        }else{
            alert("비밀번호가 일치하지 않습니다.")
        }
        amount.value = '';
    }
}