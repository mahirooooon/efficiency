// main.js
const buttons = document.querySelectorAll('nav button')
const main = document.querySelector('main')

// デフォルトは画像タグ生成
loadTool('imageTool')
document.querySelector('nav button[data-target="fontCssTool"]').classList.add('active')

buttons.forEach(button => {
  button.addEventListener('click', async () => {
    buttons.forEach(b => b.classList.remove('active'))
    button.classList.add('active')
    loadTool(button.dataset.target)
  })
})

async function loadTool(target) {
    // 古いツール用scriptを削除
    const oldScript = document.getElementById('tool-script')
    if (oldScript) oldScript.remove()
  
    // HTML読み込み
    const resp = await fetch(`tools/${target}.html`)
    const html = await resp.text()
    main.innerHTML = html
  
    // JS読み込み
    const script = document.createElement('script')
    script.src = `scripts/${target}.js`
    script.id = 'tool-script'  // このIDで次回消せる
    document.body.appendChild(script)
  }
  
