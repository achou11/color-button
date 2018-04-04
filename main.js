const colorInput = document.getElementById('color-input')
const colorButton = document.getElementById('color-btn')
const resetButton = document.getElementById('reset-btn')
const sourceUrl= document.getElementById('source-url')

function changeByKey(event) {
  // 13 = enter key
  // 27 = esc key
  if (event.keyCode === 13) {
    changeColor(event)
  } else if (event.keyCode === 27) {
    resetColor(event)
  }
}

function changeColor(e) {
  e.preventDefault()
  resetButton.style.borderColor = colorInput.value
  colorButton.style.backgroundColor = colorInput.value
}

function resetColor(e) {
  e.preventDefault()
  colorInput.value = ""
  colorButton.style.backgroundColor = "#ffffff"
  resetButton.style.borderColor = "#000000"
}

function createSourceLink() {
  const isDat = window.DatArchive && window.location.origin.startsWith('dat:')
  const url = isDat
    ? `beaker://library/${window.location}`
    : 'https://github.com/achou11/color-button'

  sourceUrl.href = url
}

window.addEventListener('keydown', changeByKey)
colorButton.addEventListener('click', changeColor)
resetButton.addEventListener('click', resetColor)
document.addEventListener('DOMContentLoaded', createSourceLink)

