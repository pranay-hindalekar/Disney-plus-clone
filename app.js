
const carousel=document.querySelector(".carousel");
let sliders=[]

let slideIndex=Math.floor(Math.random()*movies.length);
console.log(slideIndex);

function createSlide(){
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    let slide=document.createElement('div');
    let imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    //attaching all elements
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up image
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements classname
    slide.className='slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';

    sliders.push(slide);

}
for (let i = 0; i < 3; i++) {
    createSlide();   
}


//video cards
const videoCards=[...document.querySelectorAll('.video-card')];
videoCards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})