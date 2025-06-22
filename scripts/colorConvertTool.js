// colorConvertTool.js
const hexInput = document.getElementById('hexInput')
const opacityInput = document.getElementById('opacityInput')
const rgbaOutput = document.getElementById('rgbaOutput')
const copyRgbaBtn = document.getElementById('copyRgbaBtn')

// HEX -> rgba に変換する関数
function hexToRgba(hex, opacityPercent) {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return null
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  const opacity = opacityPercent / 100
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// 入力が変わるたびに計算
function updateRgba() {
  const opacityPercent = parseFloat(opacityInput.value)
  const result = hexToRgba(hexInput.value, opacityPercent)
  rgbaOutput.value = result || (hexInput.value ? '無効なHEXカラーです' : '')
}

// コピー
copyRgbaBtn.addEventListener('click', () => {
  if (!rgbaOutput.value || rgbaOutput.value === '無効なHEXカラーです') {
    return alert('コピーできる内容がありません')
  }
  rgbaOutput.select()
  document.execCommand('copy')
  alert('コピーしました！')
})

hexInput.addEventListener('input', updateRgba)
opacityInput.addEventListener('input', updateRgba)

// 初期状態
updateRgba()
