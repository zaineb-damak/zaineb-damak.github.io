  /* const searchForm = document.querySelector('.search');
   const input = document.querySelector('.input');
   const newsList = document.querySelector('.news-list');

   const apiKey = 'e8e568478cb14de196cafcdb762c8bf6';

   let topic = input.value;
   console.log(topic);
   
   let url = 'https://newsapi.org/v2/everything?q=topic&apiKey=e8e568478cb14de196cafcdb762c8bf6';


   function onResponse(response) {
         return response.json();
        }

        function onTextReady(json) {
        articles = json.results; 
        for (let i = 0; i < articles.length; i++) {
  	     console.log(articles[i].title);

         para = document.createElement("P");
         node = document.createTextNode(articles[i].title);

         para.appendChild(node);
         document.body.appendChild(para);
        }
       }   
       fetch('url')
          .then(onResponse)
          .then(onTextReady);
*/
const searchForm = document.querySelector('.search');
      const input = document.querySelector('.input');
      const newsList = document.querySelector('.news-list');
   
      searchForm.addEventListener('submit', retrieve);
   
      function retrieve(e){
   
       if(input.value == ''){
         alert('input field is empty');
         return;
       }
   
       newsList.innerHTML="";
   
       e.preventDefault();
       
       const apiKey = 'e8e568478cb14de196cafcdb762c8bf6';

       let topic = input.value;
       console.log(topic);
   
       let url = 'https://newsapi.org/v2/everything?q='+topic+'&apiKey='+ apiKey;
       console.log(url);

   
       fetch(url).then((res)=>{
         return res.json()
         }).then((data)=>{
           console.log(data);
           data.articles.forEach(article =>{
             let li = document.createElement('li');
             let a = document.createElement('a');
             a.setAttribute('href', article.url);
             a.setAttribute('target', '_blank');
             a.textContent = article.title;
             li.appendChild(a);
             newsList.appendChild(li)
           })
         }).catch((error)=>{
           console.log(error);
         })

        
        }
       


       
