const imgMain = document.querySelector('.wrapper');
const nextImg = document.querySelector('.next');
const prevImg = document.querySelector('.prev');

const newCount = document.querySelector('.newCount');

var imgNew = 1;

newCount.innerText = imgNew;

nextImg.addEventListener('click', function (){

    imgNew++;
    if(imgNew === 4){
        imgNew = 1;
    }

    imgMain.style.background = 'url(../img/${imgNew}.jpg)';
    imgMain.style.backgroundSize = 'cover';
    imgMain.style.backgroundPosition = 'center';
    newCount.innerText = imgNew;

    
});

prevImg.addEventListener('click', function (){

    imgNew--;
    if(imgNew === 0){
        imgNew = 3;
    }

    imgMain.style.background = 'url(../img/${imgNew}.jpg)';
    imgMain.style.backgroundSize = 'cover';
    imgMain.style.backgroundPosition = 'center';
    newCount.innerText = imgNew;

    
});

