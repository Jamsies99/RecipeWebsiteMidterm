function EnterFood(){
  //change the picture
    fadeOutAndNavigate('food.html');
  }

function EnterDrink(){
  fadeOutAndNavigate('drink.html');
}

function EnterHome(){
  fadeOutAndNavigate('index.html');
}
function EnterCosmo(){
  fadeOutAndNavigate('cosmo.html');
}
function EnterNegroni(){
  fadeOutAndNavigate('negroni.html');
}
function EnterPhojito(){
  fadeOutAndNavigate('phojito.html');
}

function EnterPasta(){
  fadeOutAndNavigate('pasta.html');
}
function EnterChicken(){
  fadeOutAndNavigate('chicken.html');
}

function fadeOutAndNavigate(destinationURL) {
  /* NOTE:
   Passes url into function, fades, then navigates to new URL after 2000ms */

  var mainContainerElement = document.getElementById('mainContainer');
  console.log(mainContainerElement);
  mainContainerElement.style.opacity = 0.0;
  setTimeout(function(){
    location.href = destinationURL;
  }, 2000);

}
