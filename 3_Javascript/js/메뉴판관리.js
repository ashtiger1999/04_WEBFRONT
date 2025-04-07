const resName = document.querySelector('#resName');
const resNameInput = document.querySelector('#resNameInput');

resName.addEventListener('click', (e) => {
    resNameInput.classList.remove('res-name-hidden');
    e.target.classList.add('res-name-hidden');
    resNameInput.focus();
})

resNameInput.addEventListener('blur', (e) => {
    e.target.classList.add('res-name-hidden');
    resName.classList.remove('res-name-hidden');

    if (resNameInput.value.length != 0) {
        resName.innerText = resNameInput.value;
        e.target.placeholder = resNameInput.value;
    }
})

const normalCon = document.querySelector('.normal-container');
const editCon = document.querySelector('.edit-container');

const updateBtn = document.querySelector('#updateBtn');
const addMenu = document.querySelector('#addMenu');
const deleteMenu = document.querySelector('#deleteMenu');
const exitBtn = document.querySelector('#exitBtn');

updateBtn.addEventListener('click', () => {
    editCon.classList.remove('b-hidden');
    editCon.classList.add('b-show');

    normalCon.classList.add('b-hidden');
    normalCon.classList.remove('b-show');

    const regExp = /\d+/;
    const menus = document.querySelectorAll('.menu');
    const names = document.querySelectorAll('.menu-name');
    const prices = document.querySelectorAll('.menu-price');

    for (let i = 0; i < menus.length; i++) {
        const menuNameInput = document.createElement('input');
        menuNameInput.classList.add('menu-name-input');
        menuNameInput.setAttribute('type', 'text');
        menuNameInput.setAttribute('placeholder', '메뉴명');

        if(names[i].innerText == '미입력') {
            menuNameInput.value = '';
        } else {
            menuNameInput.value = names[i].innerText;
        }
        names[i].classList.add('b-hidden');
        names[i].classList.remove('b-show');

        const menuPriceInput = document.createElement('input');
        menuPriceInput.classList.add('menu-price-input');
        menuPriceInput.setAttribute('type', 'number');
        menuPriceInput.setAttribute('placeholder', '가격');

        if(prices[i].innerText == '0원') {
            menuPriceInput.value = '';
        } else {
            menuPriceInput.value = regExp.exec(prices[i].innerText);
        }
        prices[i].classList.add('b-hidden');
        prices[i].classList.remove('b-show');

        menus[i].append(menuNameInput, menuPriceInput);

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkbox');
        menus[i].prepend(checkbox);
    }
})

exitBtn.addEventListener('click', () => {
    editCon.classList.add('b-hidden');
    editCon.classList.remove('b-show');

    normalCon.classList.remove('b-hidden');
    normalCon.classList.add('b-show');

    const menus = document.querySelectorAll('.menu');
    const names = document.querySelectorAll('.menu-name');
    const prices = document.querySelectorAll('.menu-price');

    const nameInput = document.querySelectorAll('.menu-name-input');
    const priceInput = document.querySelectorAll('.menu-price-input');

    for (let i = 0; i < menus.length; i++) {
        if (nameInput[i].value.length == 0) {
            names[i].innerText = '미입력';
        } else {
            names[i].innerText = nameInput[i].value;
        }
        names[i].classList.remove('b-hidden');
        names[i].classList.add('b-show');

        if (priceInput[i].value.length == 0) {
            prices[i].innerText = '0원';
        } else {
            prices[i].innerText = priceInput[i].value + '원';
        }
        prices[i].classList.remove('b-hidden');
        prices[i].classList.add('b-show');

        nameInput[i].remove();
        priceInput[i].remove();

        menus[i].firstElementChild.remove();
    }
})

deleteMenu.addEventListener('click', () => {
    const checkbox = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checkbox[i].parentElement.remove();
        }
    }
})

addMenu.addEventListener('click', () => {

    const li = document.createElement('li');
    li.classList.add('menu');

    const name = document.createElement('span');
    name.classList.add('menu-name', 'b-hidden');

    const price = document.createElement('span');
    price.classList.add('menu-price', 'b-hidden');

    const menuNameInput = document.createElement('input');
    menuNameInput.classList.add('menu-name-input');
    menuNameInput.setAttribute('type', 'text');
    menuNameInput.placeholder = '메뉴명';

    const menuPriceInput = document.createElement('input');
    menuPriceInput.classList.add('menu-price-input');
    menuPriceInput.setAttribute('type', 'number');
    menuPriceInput.placeholder = '가격';

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');

    li.append(checkbox, name, price, menuNameInput, menuPriceInput);
    document.querySelector('.menu-container').append(li);
})
