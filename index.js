const body = document.querySelector('body')
const siderBar = body.querySelector('nav')
const toggle = body.querySelector('.toggle')
const searchBtn = body.querySelector('.search-box')
const modeSwitch = body.querySelector('.toggle-switch')
const modeText = body.querySelector('.mode-text')

toggle.addEventListener('click', () => {
    siderBar.classList.toggle('close')
})
searchBtn.addEventListener('click', () => {
    siderBar.classList.remove('close')
})
modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        modeText.innerText = "Light mode"
    } else {
        modeText.innerText = "Dark mode"
    }
})
/*-------------------------页面切换---------------------------*/
const menuLinks = body.querySelector('.menu-links')
const lis = menuLinks.querySelectorAll('li')
const show = body.querySelectorAll('.screenShow')
for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i)
    lis[i].onclick = function () {
        const index = this.getAttribute('index')
        for (let i = 0; i < lis.length; i++) {
            show[i].style.display = 'none'
        }
        show[index].style.display = 'block'
    }
}
/*--------------------------------背景换肤效果------------------------------------*/
const img = body.querySelector('.screenShow').querySelectorAll('img')
const bgShift = body.querySelector('.home')
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        bgShift.style.backgroundImage = 'url(' + this.src + ')'
    }
}