const submitBtn = document.querySelector(".con1 button");

submitBtn.addEventListener("click", ()=>{
    const e = document.querySelector("[name='title']")
    insert(e);
    e.innerText="";
})

const insert = (e)=>{
    const tbody = document.querySelector(".con2 tbody")
    const tr = document.createElement("tr");

    const noBox = document.createElement("td");
    noBox.classList.add("noBox");
    noBox.innerText='10';

    const titleBox = document.createElement("td");
    titleBox.classList.add("titleBox");
    titleBox.innerText = e.value;

    const btnBox = document.createElement("td");
    btnBox.classList.add("btnBox");

    const btn = document.createElement("button");
    btn.setAttribute("type","button");
    btn.innerText = "바로가기";

    btnBox.append(btn);

    const idBox = document.createElement("td");
    idBox.classList.add("idBox");
    idBox.innerText ="test01";

    const dateBox = document.createElement("td");
    dateBox.classList.add("dateBox");

    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    if(month<10) {
        month = '0' + month;
    }
    if(day<10) {
        day = '0' + day;
    }

    const nowDate = year +'-'+ month +'-'+ day;

    dateBox.innerText = nowDate;

    const viewBox = document.createElement("td");
    viewBox.classList.add("viewBox");
    viewBox.innerText='0';

    tr.append(noBox, titleBox, btnBox, idBox, dateBox, viewBox);
    tbody.prepend(tr);
}