console.clear();

var baseUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/logo-";

var logos = [];
var names = [
  "google",
  "intel",
  "aol",
  "amazon",
  "ford",
  "cocacola",
  "mcdonalds",
  "samsung",
  "microsoft",
  "youtube",
  "nike",
  "fox",
  "motorola",
  "ea",
  "adobe"
];

var companies = $(".company-logo__item").toArray().map(createCompany);
var current;

var interval = TweenLite.delayedCall(1.5, function() {
  swapLogo();
  interval.restart(true);
});

function createCompany(element) {
  
  var company = {
    animate: animate,
    element: element,
    logo: getLogo()    
  };
  
  var leave, enter = getImage(company);
  
  function animate() {
    
    leave = enter;
    enter = getImage(company);
    
    TweenLite.from(enter, 0.75, { autoAlpha: 0, delay: 0.25 });
    TweenLite.to(leave, 0.75, { autoAlpha: 0, onComplete: removeImage });
  }
  
  function removeImage() {
    element.removeChild(leave);
  }
  
  return company;
}

function swapLogo() {
  var last = current;
  current = sample(companies.filter(function(company) {
    return company !== last;
  }));
  
  current.logo = getLogo(current);
  current.animate();  
}

function getImage(company) {
  var image = new Image();
  image.src = baseUrl + company.logo + ".png";
  company.element.appendChild(image);
  return image;
}

function getLogo(company) {
  if (!logos.length) logos = shuffle(names.splice(0));
  if (company) names.push(company.logo);
  return logos.shift();
}

function sample(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}