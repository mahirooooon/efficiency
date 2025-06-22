// replaceNewlineTool.js
const newlineInput = document.getElementById('newlineInput')
const resetBtn = document.getElementById('resetBtn')
const newlineResult = document.getElementById('newlineResult')
const copyNewlineBtn = document.getElementById('copyNewlineBtn')

function replaceNewlineWithBr(text) {
  return text.replace(/\n/g, '<br>')
}

// テキストエリアが更新されたとき
newlineInput.addEventListener('input', () => {
  newlineResult.value = replaceNewlineWithBr(newlineInput.value)
})

// リセットボタン
resetBtn.addEventListener('click', () => {
  newlineInput.value = ''
  newlineResult.value = ''
})

// コピー
copyNewlineBtn.addEventListener('click', () => {
  if (!newlineResult.value) return alert('コピーするテキストがありません')
  newlineResult.select()
  document.execCommand('copy')
  alert('コピーしました！')
})
