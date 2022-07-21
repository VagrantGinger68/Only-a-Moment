const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-items');
    const navLinks = document.querySelectorAll('.header-items a');
    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
    
    //animate links
    navLinks.forEach((link,index) => {
    if(link.style.animation){
        link.style.animation = ''
    } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .4}s`;
    }
    }) 
    //burger animation
    burger.classList.toggle('toggle');
    
    })
}

navSlide();

