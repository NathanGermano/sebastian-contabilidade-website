async function loadComponents(selector, file) {
    const element = document.querySelector(selector)
    if(!element) return 
    try{
        const res = await fetch(file)
        if(!res) throw new Error(`Erro ao carregar ${file}`)
        const html = await res.text()
        element.innerHTML = html
    }catch(err){
        console.error(err)
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    loadComponents('header', './assets/components/header.html')
    loadComponents('footer', './assets/components/footer.html')
})

