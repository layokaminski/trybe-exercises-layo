window.onload = function() {
    function inicio () {
        let backgroundColor = localStorage.getItem("backgroundColor")

        let fontColor = localStorage.getItem("fontColor")

        let lineHeight = localStorage.getItem("lineHeight")

        let fontFamily = localStorage.getItem("fontFamily")
    }
    inicio()
    
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
}