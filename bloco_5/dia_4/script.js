window.onload = function() {
    function createItens () {
        let backgroundColor = localStorage.getItem('backgroundColor');
        if (backgroundColor) changeBackgroundColor(backgroundColor);

        let fontColor = localStorage.getItem('fontColor');
        if (fontColor) changeTextColor(fontColor);

        let fontSize = localStorage.getItem('fontSize');
        if (fontSize) changeSizeText(fontSize);

        let lineHeight = localStorage.getItem('lineHeight');
        if (lineHeight) changeLineHeight(lineHeight);

        let fontFamily = localStorage.getItem('fontFamily');
        if (fontFamily) changeFontFamily(fontFamily);
    }
    createItens();

    function changeBackgroundColor(color) {
        let content = document.getElementById('text');
        content.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }

    let buttonBackGround = document.querySelectorAll('#background-color > button')
    for (let index = 0; index < buttonBackGround.length; index += 1) {
        buttonBackGround[index].addEventListener('click', function(event) {
            changeBackgroundColor(event.target.innerHTML)
        });
    }

    function changeTextColor(color) {
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

    function changeSizeText(size) {
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

    function changeLineHeight(height) {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.lineHeight = height
        }
        localStorage.setItem("lineHeight", height)
      }

    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
      lineHeightButtons[index].addEventListener("click", function(event) {
        setLineHeight(event.target.innerHTML)
      })
    }

    function changeFontFamily(family) {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.fontFamily = family
        }
        localStorage.setItem("fontFamily", family);
    }

    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
      fontFamilyButtons[index].addEventListener("click", function(event) {
        setFontFamily(event.target.innerHTML)
      })
    }
}