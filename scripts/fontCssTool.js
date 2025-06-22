const fontSelect = document.getElementById('fontSelect')
const customFontInput = document.getElementById('customFontInput')
const fontSizeInput = document.getElementById('fontSize')
const fontWeightInput = document.getElementById('fontWeight')
const lineHeightInput = document.getElementById('lineHeight')
const cssOutput = document.getElementById('cssOutput')
const copyCssBtn = document.getElementById('copyCssBtn')

function updateCss() {
  let family = fontSelect.value
  if (family === 'custom') {
    family = customFontInput.value.trim()
    if (family && !/^['"].*['"]$/.test(family)) {
      // クォーテーションがなければ付ける
      family = `'${family}'`
    }
  }
  const size = fontSizeInput.value.trim()
  const weight = fontWeightInput.value.trim()
  const lineHeight = lineHeightInput.value.trim()

  if (!family && !size && !weight && !lineHeight) {
    cssOutput.value = ''
    return
  }

  let cssText = ''
  if (family) cssText += `font-family: ${family};\n`
  if (size) cssText += `font-size: ${size}px;\n`
  if (weight) cssText += `font-weight: ${weight};\n`
  if (lineHeight) cssText += `line-height: ${lineHeight};\n`

  cssOutput.value = cssText
}

fontSelect.addEventListener('change', () => {
  if (fontSelect.value === 'custom') {
    customFontInput.style.display = 'block'
  } else {
    customFontInput.style.display = 'none'
    customFontInput.value = ''
  }
  updateCss()
})

customFontInput.addEventListener('input', updateCss)
fontSizeInput.addEventListener('input', updateCss)
fontWeightInput.addEventListener('input', updateCss)
lineHeightInput.addEventListener('input', updateCss)

copyCssBtn.addEventListener('click', () => {
  if (!cssOutput.value) return alert('コピーするCSSがありません')
  cssOutput.select()
  document.execCommand('copy')
  alert('CSSをコピーしました！')
})

// 初期状態でCSS更新
updateCss()

