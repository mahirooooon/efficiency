const fontSizeInput = document.getElementById('fontSizeInput')
const lineSpacingInput = document.getElementById('lineSpacingInput')
const lineHeightOutput = document.getElementById('lineHeightOutput')
const copyLineHeightBtn = document.getElementById('copyLineHeightBtn')

function updateLineHeight() {
  const fontSize = parseFloat(fontSizeInput.value)
  const lineSpacing = parseFloat(lineSpacingInput.value)
  if (!isNaN(fontSize) && fontSize > 0 && !isNaN(lineSpacing) && lineSpacing > 0) {
    const lineHeight = lineSpacing / fontSize
    lineHeightOutput.value = `line-height: ${lineHeight.toFixed(2)};`
  } else {
    lineHeightOutput.value = ''
  }
}

copyLineHeightBtn.addEventListener('click', () => {
  if (!lineHeightOutput.value) return alert('コピーする値がありません')
  lineHeightOutput.select()
  document.execCommand('copy')
  alert('コピーしました！')
})

fontSizeInput.addEventListener('input', updateLineHeight)
lineSpacingInput.addEventListener('input', updateLineHeight)

updateLineHeight()

