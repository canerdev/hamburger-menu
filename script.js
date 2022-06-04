const open = document.querySelector('#open')
const close = document.querySelector('#close')
const ulDOM = document.querySelector('ul')
const navDOM = document.querySelector('nav')

function funcOpen() {
    open.style.display = 'none'
    close.style.display = 'inline-block'

    navDOM.style.backgroundColor = 'black'

    ulDOM.style.display = 'block'
    ulDOM.style.width = '100%'
    ulDOM.style.display = 'flex'
    ulDOM.style.justifyContent = 'flex-start'
    ulDOM.style.alignItems = 'flex-start'
    ulDOM.style.flexDirection = 'column'
}

function funcClose() {
    open.style.color = 'black'
    ulDOM.style.display = 'none'
    open.style.display = 'inline-block'
    close.style.display = 'none'
}

open.addEventListener('click', funcOpen)
close.addEventListener('click', funcClose)


