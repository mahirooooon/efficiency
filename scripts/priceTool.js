// priceTool.js
const priceInput = document.getElementById('priceInput')
const priceResult = document.getElementById('priceResult')
const copyPriceBtn = document.getElementById('copyPriceBtn')

// 価格タグに変換する関数
function convertPrice(input) {
  if (!input.includes('円 (税込)')) return ''
  const numeric = input.replace('円 (税込)', '').trim().replace(/,/g, '')
  return /^[0-9]+$/.test(numeric)
    ? `<p class="_price">${numeric}<span>円 (税込)</span></p>`
    : null
}

// 結果更新
priceInput.addEventListener('input', () => {
  const result = convertPrice(priceInput.value)
  priceResult.value = result !== null ? result : (priceInput.value ? '無効な入力です' : '')
})

// コピー
copyPriceBtn.addEventListener('click', () => {
  if (!priceResult.value || priceResult.value === '無効な入力です') {
    return alert('コピーできるテキストがありません')
  }
  priceResult.select()
  document.execCommand('copy')
  alert('コピーしました！')
})
