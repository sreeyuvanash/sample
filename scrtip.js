window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text1.style.marginRight = value * -2 + 'px'
    text2.style.marginLeft = value * -2+ 'px'
    Earth.style.marginTop = value * -0.5+ 'px'
})