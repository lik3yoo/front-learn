const onResize = () => {
  let width = window.innerWidth
  if (width < 1920) {
    const designWidth = 1920
    const scale = width / designWidth
    
    let wrap = document.querySelector('.wrap')
    wrap.style.transform = `scale(${scale})`
  }else{
    let wrap = document.querySelector('.wrap')
    wrap.style.transform = `scale(1)`
  }
}
window.addEventListener('resize', onResize)
