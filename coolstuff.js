const btns = [...document.querySelectorAll('button.btn-click-count')],
    btnsClicksCountArr = new Array(btns.length);

btns.forEach((el, i) => {
    btnsClicksCountArr[i] = 0;
    el.addEventListener('click', () => el.textContent = ++btnsClicksCountArr[i]);
});