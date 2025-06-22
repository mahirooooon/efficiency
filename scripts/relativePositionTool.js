// relativePositionTool.js
const baseX = document.getElementById('baseX')
const baseY = document.getElementById('baseY')
const baseWidth = document.getElementById('baseWidth')
const baseHeight = document.getElementById('baseHeight')

const elemWidth = document.getElementById('elemWidth')
const elemHeight = document.getElementById('elemHeight')
const elemX = document.getElementById('elemX')
const elemY = document.getElementById('elemY')

const calcPosBtn = document.getElementById('calcPosBtn')
const relativeResult = document.getElementById('relativeResult')
const copyRelativeBtn = document.getElementById('copyRelativeBtn')

calcPosBtn.addEventListener('click', () => {
  // 数値化
  const bx = parseFloat(baseX.value)
  const by = parseFloat(baseY.value)
  const bW = parseFloat(baseWidth.value)
  const bH = parseFloat(baseHeight.value)

  const eW = parseFloat(elemWidth.value)
  const eH = parseFloat(elemHeight.value)
  const eX = parseFloat(elemX.value)
  const eY = parseFloat(elemY.value)

  if ([bx, by, bW, bH, eW, eH, eX, eY].some(isNaN)) {
    alert('数値が正しく入力されていません')
    return
  }

  const relativeLeft = ((eX - bx) / bW) * 100
  const relativeTop = ((eY - by) / bH) * 100
  const relativeW = (eW / bW) * 100
  const relativeH = (eH / bH) * 100

  const verticalKey = relativeTop <= 50 ? 'top' : 'bottom'
  const verticalVal = verticalKey === 'top' ? relativeTop : 100 - (relativeTop + relativeH)

  const horizontalKey = relativeLeft <= 50 ? 'left' : 'right'
  const horizontalVal = horizontalKey === 'left' ? relativeLeft : 100 - (relativeLeft + relativeW)

  const resultText = `${verticalKey}: ${verticalVal.toFixed(2)}%;\n${horizontalKey}: ${horizontalVal.toFixed(2)}%;`
  relativeResult.value = resultText
})

copyRelativeBtn.addEventListener('click', () => {
  if (!relativeResult.value) {
    return alert('コピーする内容がありません')
  }
  relativeResult.select()
  document.execCommand('copy')
  alert('コピーしました！')
})
