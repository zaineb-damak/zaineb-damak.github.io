const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');

const closeNavBtn = document.querySelector('#nav-content .close-btn');

const navLinks = document.querySelectorAll('#nav-content nav ul li a');

const scrollButton = document.querySelector(".scroll-top");

const cursor = document.querySelector('.cursor');


hamburgerMenu.addEventListener('click', ()=>{
    navContent.classList.add('show');
    document.body.style.overflow="hidden";
})

closeNavBtn.addEventListener('click', ()=>{
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
})

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        navContent.classList.remove('show');
        document.body.style.overflow="initial";
    })
})

if(scrollButton){
    window.addEventListener('scroll', ()=> {
      if(pageYOffset > (window.innerHeight * 1.2)){
        scrollButton.style.display="flex";
      }else{
        scrollButton.style.display="none";
      }
    });
    scrollButton.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }

  document.addEventListener('mousemove', e =>{
    cursor.setAttribute("style", "top: " +(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;");
  })
