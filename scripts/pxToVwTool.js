// pxToVwTool.js
const pxInput = document.getElementById('pxInput')
const viewportInput = document.getElementById('viewportInput')
const vwActualOutput = document.getElementById('vwActualOutput')
const vwRoundedOutput = document.getElementById('vwRoundedOutput')
const copyVwBtn = document.getElementById('copyVwBtn')

function updateVw() {
  const px = parseFloat(pxInput.value)
  const viewport = parseFloat(viewportInput.value)
  if (!isNaN(px) && !isNaN(viewport) && viewport > 0) {
    const vw = (px / viewport) * 100
    vwActualOutput.value = `${vw}vw`
    vwRoundedOutput.value = `${vw.toFixed(2)}vw`
  } else {
    vwActualOutput.value = ''
    vwRoundedOutput.value = ''
  }
}

copyVwBtn.addEventListener('click', () => {
  if (!vwRoundedOutput.value) return alert('コピーできる値がありません')
  vwRoundedOutput.select()
  document.execCommand('copy')
  alert('コピーしました！')
})

pxInput.addEventListener('input', updateVw)
viewportInput.addEventListener('input', updateVw)

updateVw()

