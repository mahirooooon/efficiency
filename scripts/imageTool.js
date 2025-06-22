// imageTool.js
const imgNameInput = document.getElementById('imgName')
const extRadios = document.getElementsByName('ext')
const resultArea = document.getElementById('result')
const copyBtn = document.getElementById('copyBtn')

// 拡張子を取得
function getSelectedExtension() {
  for (const radio of extRadios) {
    if (radio.checked) return radio.value
  }
  return 'png'
}

// <img>タグ生成
function generateImgTag(name, ext) {
  return `<img src="./images/${name}.${ext}" srcset="./images/${name}.${ext} 1x, ./images/${name}@2x.${ext} 2x" alt="">`
}

// 結果更新
function updateResult() {
  const name = imgNameInput.value.trim()
  const ext = getSelectedExtension()
  resultArea.value = name ? generateImgTag(name, ext) : ''
}

// クリックでコピー
copyBtn.addEventListener('click', () => {
  if (!resultArea.value) return alert('画像名を入力してください')
  resultArea.select()
  document.execCommand('copy')
  alert('コピーしました！')
})

imgNameInput.addEventListener('input', updateResult)
extRadios.forEach(radio => radio.addEventListener('change', updateResult))

// 初期表示
updateResult()
