//hover effect on image in hero section
new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity:0.4,
    image1: "./image/profile.jpg",
    image2: "./image/profile.jpg",
    displacementImage: "./image/diss.png"
   });


   //animation on text in about section


   const text = document.querySelector('.slogan');
   const strText = text.textContent;
   const splitText = strText.split("");
   text.textContent = "";

   for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
   }


   let char = 0;
   let timer = setInterval(onTick, 50);

   function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
      complete();
      return;
    }
   }

   function complete(){
    clearInterval(timer);
    timer = null;
   }
