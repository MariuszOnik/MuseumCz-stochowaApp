

var historia1Id = "h-m-historia-1-a";
var historia2Id = "h-m-historia-2-a";
var historia3Id = "h-m-historia-3-a";

var triger2 = 0; 
var howManyCombination2 = 3

function AnimateMenuImage2(){
    //console.log(historia1Id);
    animateCSS(historia1Id, rotateIn);
    animateCSS(historia2Id, rotateIn);
    animateCSS(historia3Id, rotateIn);

}




function Combination1H(){
    setTimeout(() => {
        animateCSS(historia1Id, rotateIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(historia2Id, rotateIn);
    }, 2000);
    setTimeout(() => {
        animateCSS(historia3Id, rotateIn);
    }, 3000);
}

function Combination2H(){
    setTimeout(() => {
        animateCSS(historia1Id, bounceIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(historia2Id, bounceIn);
    }, 1500);
    setTimeout(() => {
        animateCSS(historia3Id, bounceIn);
    }, 2000);
}

function Combination3H(){
    setTimeout(() => {
        animateCSS(historia1Id, zoomIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(historia2Id, zoomIn);
    }, 1000);
    setTimeout(() => {
        animateCSS(historia3Id, zoomIn);
    }, 1000);
}


var menuInterval2 = setInterval(() => {

    //console.log(triger2); 
    switch (triger2) {
        case 0:
            Combination1H() 
            break;
        case 1:
            Combination2H(); 
            break
        case 2:
            Combination3H(); 
            break
        default:
            break;
    }

    triger2 = (triger2 + 1) % howManyCombination2; 
  
   
}, 7000);