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

const newest = document.querySelector('.newest');
let newestClicked = false;
newest.addEventListener('click', function handleClicked() {
    newestClicked = true;
    console.log(newestClicked);
});

const oldest = document.querySelector('.oldest');
let oldestClicked = false;
oldest.addEventListener('click',function handleClicked(){
    oldestClicked = true;
    console.log(oldestClicked);
});

const name1 = document.querySelector('.name');
let nameClicked = false;
name1.addEventListener('click',function handleClicked(){
    nameClicked = true;
    console.log(nameClicked);
});


function handleClicked(clicked){
    clicked = true;
    console.log(clicked);
};

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
  /* if(newestClicked){
        function insertionSort(articles){
            //Start from the second element.
            for(let i = 1; i < articles.length;i++){
                //Go through the elements behind it.
                for(let j = i - 1; j > -1; j--){
                    //value comparison using ascending order.
                    if(articles.publishedAt[j + 1] < articles.publishedAt[j]){
                        //swap
                        [articles.publishedAt[j+1],articles.publishedAt[j]] = [articles[j].publishedAt,articles.publishedAt[j + 1]];

                    }
                }
            };  

        return articles;
        }
        data.articles.forEach(article =>{
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', article.url);
        a.setAttribute('target', '_blank');
        a.textContent = article.title;
        li.appendChild(a);
        newsList.appendChild(li)
    })

    }*/
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






       
