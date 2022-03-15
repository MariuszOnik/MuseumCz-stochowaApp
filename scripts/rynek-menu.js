

var rynekMenuID = "rynek-img";
var placMenuID = "plac-img";
var muryMenuID = "mury-img";

var triger3 = 0; 
var howManyCombination3 = 3

function AnimateMenuImage3(){
    //console.log(rynekMenuID);
    animateCSS(rynekMenuID, rotateIn);
    animateCSS(placMenuID, rotateIn);
    animateCSS(muryMenuID, rotateIn);

}




function Combination1R(){
    setTimeout(() => {
        animateCSS(rynekMenuID, rotateIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(placMenuID, rotateIn);
    }, 2000);
    setTimeout(() => {
        animateCSS(muryMenuID, rotateIn);
    }, 3000);
}

function Combination2R(){
    setTimeout(() => {
        animateCSS(rynekMenuID, bounceIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(placMenuID, bounceIn);
    }, 1500);
    setTimeout(() => {
        animateCSS(muryMenuID, bounceIn);
    }, 2000);
}

function Combination3R(){
    setTimeout(() => {
        animateCSS(rynekMenuID, zoomIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(placMenuID, zoomIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(muryMenuID, zoomIn);
    }, 1000);
}


var menuInterval3 = setInterval(() => {

    //console.log(triger3); 
    switch (triger3) {
        case 0:
            Combination1R() 
            break;
        case 1:
            Combination2R(); 
            break
        case 2:
            Combination3R(); 
            break
        default:
            break;
    }

    triger3 = (triger3 + 1) % howManyCombination3; 
  
   
}, 7000);