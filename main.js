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

  

//paper-plane in contact2 page
gsap.registerPlugin(MotionPathPlugin)

const tl = gsap.timeline();
tl.to('.paper-plane', {
    duration: 5,
    ease: "power1.inOut",
    motionPath: {
        autoRotate: true,
        curviness: 2,
        path: [
            { x: 100, y: -20 },
            { x: 300, y: 10 }, 
            { x: 500, y: 100 },
            { x: 750, y: -100 },
            { x: 350, y: -50 },
            { x: 600, y: 100 },
            { x: 800, y: 0 },
            { x: window.innerWidth, y: -250 }
        ]}
})

// scroll magic
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 1000,
    triggerHook: 0,
})
   .setTween(tl)
   .addIndicators()
   .setPin('.animation')
   .addTo(controller)


   //text animation
   