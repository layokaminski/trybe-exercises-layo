window.onload = function() {
    function createItens () {
        let backgroundColor = localStorage.getItem('backgroundColor')

        let fontColor = localStorage.getItem('fontColor')

        let fontSize = localStorage.getItem('fontSize')

        let lineHeight = localStorage.getItem('lineHeight')

        let fontFamily = localStorage.getItem('fontFamily')
    }
    createItens()
    
    function changeBackgroundColor (color) {
        let content = document.getElementById('text')
        content.style.backgroundColor = color
        localStorage.setItem('backgroundColor', color)
    }
    let buttonBackGround = document.querySelectorAll('#background-color > button')
    for (let index = 0; index < buttonBackGround.length; index += 1) {
        buttonBackGround[index].addEventListener('click', function(event) {
            changeBackgroundColor(event.target.innerHTML)
        })
    }
    function changeTextColor (color) {
        let content = document.querySelectorAll('.paragraph');
        for (let index = 0; index < content.length; index += 1) {
        content[index].style.color = color
        }
        localStorage.setItem('fontColor', color)
    }
    let buttonFontColor = document.querySelectorAll('#font-color > button')
    for (let index = 0; index < buttonFontColor.length; index += 1) {
        buttonFontColor[index].addEventListener('click', function(event) {
            changeTextColor(event.target.innerHTML)
        })
    }
    function changeSizeText (size) {
        let sizeContent = document.querySelectorAll('.paragraph')
        for(let index = 0; index < sizeContent.length; index += 1) {
            sizeContent[index].style.fontSize = size
        }
        localStorage.setItem('fontSize', size)
    }
    let buttonFontSize = document.querySelectorAll('#font-size > button')
    for (let index = 0; index < buttonFontSize.length; index += 1)
    buttonFontSize[index].addEventListener('click', function(event) {
        changeSizeText(event.target.innerHTML)
    })
}