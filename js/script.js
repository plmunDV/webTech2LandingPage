let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('nav ul a')

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY
    let offset = sec.offsetTop
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active')
            document.querySelector('nav ul a[href*='+ id +']').classList.add('active');
        })
    }
    })
}