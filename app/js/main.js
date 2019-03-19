//LOG IN
$(document).ready(function(){
    var myUser = {};
    myUser.name = "Andrii";
    myUser.surname = "Vivchar";
    myUser.username = "andrii_vivchar";
    myUser.password = "vivchar00";
        $("#submit-login").on("click", function () {
            let user = JSON.stringify(myUser);
            localStorage.setItem("user", user);
            let userN = $("#exampleInputEmail1").val();
            let pasw = $("#exampleInputPassword1").val();
            if (userN === myUser.username && pasw === myUser.password) {
                window.location.replace("adminPanel.html");
            }
        });

//////


const imgMain = document.querySelector('.wrapper');
const nextImg = document.querySelector('.next');
const prevImg = document.querySelector('.prev');
const actInd = document.querySelector('.act');
const newCount = document.querySelector('.newCount');

var imgNew = 1;

newCount.innerText = imgNew;

nextImg.addEventListener('click', function (){

    imgNew++;
    if(imgNew === 4){
        imgNew = 1;
    }

    imgMain.style.background = 'url(img/'+ imgNew + '.jpg)';
    imgMain.style.backgroundSize = 'cover';
    imgMain.style.backgroundPosition = 'center';
    imgMain.style.transition = '.5s';
    newCount.innerText = imgNew;
    
    
});

prevImg.addEventListener('click', function (){

    imgNew--;
    if(imgNew === 0){
        imgNew = 3;
    }

    imgMain.style.background = 'url(img/'+ imgNew + '.jpg)';
    imgMain.style.backgroundSize = 'cover';
    imgMain.style.backgroundPosition = 'center';
    imgMain.style.transition = '.5s';
    newCount.innerText = imgNew;

    
});
//////////////////////////////////////////////////////
/////////////////FORM__HEADER////////////////////////
/////////////////////////////////////////////////////
var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

$( window ).scroll(function() {
    $("#modal-wrapper").hide();
});

//////////////////////////////////////////////////////
/////////////////LOGIN_POPUP/////////////////////////
/////////////////////////////////////////////////////
var modLogIn = document.getElementById('modal-login');
window.onclick = function(event) {
    if (event.target == modLogIn) {
        modLogIn.style.display = "none";
    }
};

$( window ).scroll(function() {
    $("#modal-login").hide();
});

});








