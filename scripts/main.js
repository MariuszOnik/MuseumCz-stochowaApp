
TouchEmulator();

const PL = "pl";
const EN = "en";
const ACTIVE_PAGE = "active-page"

var Seting ={
  
}
Seting.curentLanguage = null;
Seting.curentPage = "menu"
Seting.curentFontSize = null;
Seting.maxFontSize = 4;
Seting.minFontSize = 1; 
Seting.mainColor= "antiquewhite";
Seting.columnTextColor = "rgba(34, 33, 33, 0.658)";
Seting.contrastEnable = false; 
Seting.intervals = [];
Seting.newURLsetAlredy = false; 
Seting.sliders = []; 
Seting.curentSlider = null; 


const LanguageEvent = new Event('LanguageChange'); 

SetLanguage(PL); 

function SetLanguage(language){
  
  if(language == PL){
    Seting.curentLanguage = PL
    dispatchEvent(LanguageEvent)
   
    let selectorON = "."+PL;
    let selectorOFF =  "."+EN;
    $(selectorOFF).hide();
    $(selectorON).show();
  }
  if(language == EN){
    Seting.curentLanguage = EN
    dispatchEvent(LanguageEvent)
   
    let selectorON = "."+EN;
    let selectorOFF =  "."+PL;
    $(selectorOFF).hide();
    $(selectorON).show();
  }
}

function Slider(_pageID, sliderId, imagesTable, imagesTitleTablePL, imagesTitleTableEN){

  var o = {}
  o.page = _pageID
  o.slider = $("#"+_pageID+">.first-column>.slider");
  o.licznik = 0;
  o.transitionIsDone = true; 
  o.imgs = imagesTable;
  o.titlesPL = imagesTitleTablePL;
  o.titlesEN = imagesTitleTableEN;
  //o.ramka = $(".active-page>.first-column>.slider>span")

  o.imgA = $("#"+_pageID+">.first-column>.slider>span>img")
 
  o.spanA = $(".active-page>.first-column>.slider >span>.image-slider-a")
  o.spanB = $(".active-page>.first-column>.slider > span>.image-slider-b")
  o.curentTitle = $("#"+_pageID+">.first-column >.image-in-slider-title")
  o.info = $("#"+_pageID+">.first-column >.info")
  o.buttonNext = $("#"+_pageID+">.first-column > .left-ster")
  o.buttonPrev = $("#"+_pageID+">.first-column > .right-ster")
  o.timeOutHandler = null; 
  o.curentLanguage = null;
  o.duration = 1000; 
  o.fullImageTitle = $("#full-image-title"); 


  o.corectImgSize = function name(params) {
    let imgAW = parseFloat(o.imgA.css("width"));
      let imgAH = parseFloat(o.imgA.css("height"));

      if(imgAW > imgAH){
        o.imgA.css({
            "width":"70%",
            "height":"auto"
        })
      }
      if(imgAW < imgAH){
        o.imgA.css({
            "width":"auto",
            "height":"70%"
        })
      }

      console.log("ImgAW " + imgAW + " ImgAH "+ imgAH);
  }

  o.init = function () {

      o.info.text((o.licznik+1) + " / " + o.imgs.length)
     
      o.curentLanguage = Seting.curentLanguage; 

     

      if(o.curentLanguage == "pl"){
          //o.curentTitle.text(o.titlesPL[o.licznik]);
          o.curentTitle[0].innerHTML = o.titlesPL[o.licznik];
      }
      if(o.curentLanguage == "en"){
         // o.curentTitle.text(o.titlesEN[o.licznik]);
         o.curentTitle[0].innerHTML = o.titlesEN[o.licznik];
      }

      
  }

  o.slider.on("click", function (params) {

    $("#full-screen-panel").addClass("full-screen-panel-active")
    $("#fuul-screen-panel-image")[0].src = o.imgA[0].src;
   
    //o.fullImageTitle.text(o.curentTitle.text())
    //o.fullImageTitle[0].innerHTML(o.curentTitle.text())

    Seting.curentZoom = $("#fuul-screen-panel-image")[0];
      Seting.zoom = new Zoom(Seting.curentZoom,{
          rotate: false
      })

    $("#fuul-screen-panel-image")[0].onload = function name(params) {
      if(o.curentLanguage == "pl"){
        //o.curentTitle.text(o.titlesPL[o.licznik]);
        o.fullImageTitle[0].innerHTML = o.titlesPL[o.licznik];
      }
      if(o.curentLanguage == "en"){
        //o.curentTitle.text(o.titlesEN[o.licznik]);
        o.fullImageTitle[0].innerHTML = o.titlesEN[o.licznik];
      }
      
     
      let ImgW = parseInt($("#fuul-screen-panel-image").css("width"));
      
      let ImgH = parseInt($("#fuul-screen-panel-image").css("height"));
    
      if(ImgW>ImgH){
       
        $("#fuul-screen-panel-image").css({
          "width": "65%",
          "height" : "auto"
  
        })
      }
  
      if(ImgH>ImgW){
       
        $("#fuul-screen-panel-image").css({
          "height": "65%",
          "width": "auto"
  
        })
      }
  
      if(ImgW==ImgH){
        
        $("#fuul-screen-panel-image").css({
          "width": "70%",
          "height" : "auto"
  
        })
      }
      
      ImgW = parseInt($("#fuul-screen-panel-image").css("width"));
      ImgH = parseInt($("#fuul-screen-panel-image").css("height"));
  
      let pp
      let hh
  
      let panelWidth = parseInt($("#full-screen-panel").css("width"));
      let panelHeight = parseInt($("#full-screen-panel").css("height"));
  
      if (ImgW > ImgH) {
        pp = (panelHeight - ImgH) * 0.5;
        hh = (panelWidth - ImgW) * 0.5;

      }
      if (ImgH > ImgW) {

        pp = (panelHeight - ImgH) * 0.5;
        hh = (panelWidth - ImgW) * 0.5;


      }
      if (ImgH == ImgW) {
        pp = (panelHeight - ImgH) * 0.5;
        hh = (panelWidth - ImgW) * 0.5;

      }


      Seting.zoom.activeZoom.b = [hh, pp];
      Seting.zoom.repaint()


     
      
  
      $(".zoom-exit").addClass("zoom-exit-active");
    }
    
})

      o.buttonNext.on("click", function (params) {
        if(o.transitionIsDone == true){
          o.next()
        }
          
      })
      o.buttonPrev.on("click", function (params) {
        if(o.transitionIsDone == true){
          o.prev()
        
        }
    })

  o.changeLanguage = function (params) {
      o.curentLanguage = Seting.curentLanguage; 
      
      if(o.curentLanguage == "pl"){
          //o.curentTitle.text(o.titlesPL[o.licznik]);
          o.curentTitle[0].innerHTML = o.titlesPL[o.licznik];
      }

      if(o.curentLanguage == "en"){
          
         // o.curentTitle.text(o.titlesEN[o.licznik]);
         o.curentTitle[0].innerHTML = o.titlesEN[o.licznik];
      }

  }

  o.next = function (params) {
      o.transitionIsDone = false;
      o.curentTitle.text("...");
      o.licznik = o.licznik + 1;
      if(o.licznik>= o.imgs.length){
          o.licznik = 0;
      }
      //o.imgB[0].src = o.imgs[o.licznik];
      o.imgA[0].src =o.imgs[o.licznik]
      //o.spanB.addClass('active');
      o.info.text((o.licznik+1) + " / " + o.imgs.length);
      if(o.curentLanguage == "pl"){
        //o.curentTitle.text(o.titlesPL[o.licznik]);
        o.curentTitle[0].innerHTML = o.titlesPL[o.licznik];
      }
      if(o.curentLanguage == "en"){
        //o.curentTitle.text(o.titlesEN[o.licznik]);
        o.curentTitle[0].innerHTML = o.titlesEN[o.licznik];
      }
      
      o.transitionIsDone = true; 

  }
  o.prev = function (params) {
    o.curentTitle.text("...");
      o.transitionIsDone = false;
      o.licznik = o.licznik - 1;
      if(o.licznik < 0){
          o.licznik = o.imgs.length-1
      }
      o.imgA[0].src =o.imgs[o.licznik]
      //o.spanB.addClass('active');
      o.info.text((o.licznik+1) + " / " + o.imgs.length);
      if(o.curentLanguage == "pl"){
        //o.curentTitle.text(o.titlesPL[o.licznik]);
        o.curentTitle[0].innerHTML = o.titlesPL[o.licznik];
      }
      if(o.curentLanguage == "en"){
        //o.curentTitle.text(o.titlesEN[o.licznik]);
        o.curentTitle[0].innerHTML = o.titlesEN[o.licznik];
      }
      o.transitionIsDone = true; 
   
  }

  return o; 

}



$(".zoom-exit").on("click", function name(params) {
  Seting.zoom.reset()
  Seting.zoom = null; 
  $(".zoom-exit").removeClass("zoom-exit-active");
  $("#full-screen-panel").removeClass("full-screen-panel-active")
  $("#fuul-screen-panel-image")[0].src = null;
  
})

function BlockedNavigation(){
  $(".navigation-button").off("click")
  //console.log("Blokuje navigacje")
}

function UnBlockedNavigation(){
  $(".navigation-button").on("click", function name(params) {
        
        navigate($(this))  
  })
}



function navigate($this){
  
  var url = $this.data("url");
  var animationData = $this.data("animation");
  var defaultAnimation = bounceIn; 
  var animation = null; 

    if(animationData != null && animationData != undefined){
      animation = animationData
    }else{
      animation = defaultAnimation; 
    }

    animateCSSbyClassName($this[0],animation).then((mes)=>{
    
      Seting.newURLsetAlredy = false; 
     
      $("#"+Seting.curentPage).removeClass(ACTIVE_PAGE);

      let newActivePage = $("#"+url);
     
      newActivePage.addClass(ACTIVE_PAGE);
      
      Seting.curentPage= newActivePage[0].id; 

      if($this.hasClass("l-s-PL")){
        SetLanguage(PL)
      }
      if($this.hasClass("l-s-EN")){
        SetLanguage(EN)
      }
      Seting.sliders.forEach(slider => {

        if(slider.licznik===0){

        }else{
          slider.licznik = 0;
          slider.info.text((slider.licznik+1) + " / " + slider.imgs.length);
          slider.imgA[0].src = slider.imgs[slider.licznik]
          if(slider.curentLanguage == "pl"){
            //o.curentTitle.text(o.titlesPL[o.licznik]);
            slider.curentTitle[0].innerHTML = slider.titlesPL[slider.licznik];
          }
          if(slider.curentLanguage == "en"){
            //o.curentTitle.text(o.titlesEN[o.licznik]);
            slider.curentTitle[0].innerHTML = slider.titlesEN[slider.licznik];
          }
        }
        
      });
      Seting.curentFontSize = Seting.minFontSize;
      var root =document.querySelector(':root');
      root.style.setProperty('--p-font-size', Seting.minFontSize+'vw');

  }).catch(error => console.error(error.message));
}


$(".pl-button.en").on( "click", function() {
 
  //console.log("pl-button.en")
  if(Seting.newURLsetAlredy == false){
   
    Seting.newURLsetAlredy = true; 
    //animateCSS(Seting.curentPage, zanikanie).then((mesage)  =>  {
      
    animateCSSbyClassName($(this)[0], bounceIn).then((mesage)  =>  {
        SetLanguage(PL);
        Seting.newURLsetAlredy = false; 
    })
     //}) 
  }else{
    //console.log("ZAJETE !!!!!!!!!!!!!!!"); 
    return; 
  }  

});
$(".en-button.pl").on( "click", function() {
  //console.log("en-button.pl")
  if(Seting.newURLsetAlredy == false){
   
    Seting.newURLsetAlredy = true; 
    //animateCSS(Seting.curentPage, zanikanie).then((mesage)  =>  {
      
    animateCSSbyClassName($(this)[0], bounceIn).then((mesage)  =>  {
        SetLanguage(EN);
        Seting.newURLsetAlredy = false; 
    })
     //}) 
  }else{
    //console.log("ZAJETE !!!!!!!!!!!!!!!"); 
    return; 
  }  

});

$(".font-plus").on("click", function name(e) {

    var root =document.querySelector(':root');
    let syleOfRoot = getComputedStyle(root);
    var curentfontsize = parseInt(syleOfRoot.getPropertyValue('--p-font-size'))

    if((curentfontsize + 1)<=Seting.maxFontSize){
        curentfontsize = curentfontsize+1; 
        root.style.setProperty('--p-font-size', curentfontsize+'vw');
    }
 
})
$(".font-minus").on("click", function name(e) {

  var root =document.querySelector(':root');
  let syleOfRoot = getComputedStyle(root);
  var curentfontsize = parseInt(syleOfRoot.getPropertyValue('--p-font-size'))

  if((curentfontsize - 1)>=Seting.minFontSize){
      curentfontsize = curentfontsize-1; 
      root.style.setProperty('--p-font-size', curentfontsize+'vw');
  }

})

$(".navigation-button").on("click", function name(e) {

    if(Seting.newURLsetAlredy == false){
      //console.log("WOLNE !!!!!!!!!!!!!!!"); 
      Seting.newURLsetAlredy = true; 
      navigate($(this))
    }else{
     // console.log("ZAJETE !!!!!!!!!!!!!!!"); 
      return; 
    }  
})



$(".contrast-button").on("click",function name(params) {
  //console.log("CONTRAST")
  if(Seting.contrastEnable == false){
      EnableContrast();
      Seting.contrastEnable = true; 
      return; 
  }
  if(Seting.contrastEnable == true){
      DisableContrast(); 
      Seting.contrastEnable = false;
      return; 
  }
})

function EnableContrast(){
  $("p, h1,h2,h3,h4,h5,h6").css("color", "yellow"); 
  $(".first-column, .second-column").css("background-color", "black")
}

function DisableContrast(){
  $("p, h1,h2,h3,h4,h5,h6").css("color", Seting.mainColor); 
  $(".first-column, .second-column").css("background-color", Seting.columnTextColor); 
}

function FindCurentSlider(){
  Seting.sliders.forEach(element => {

    if(Seting.curentPage == element.page){
      Seting.curentSlider = element;
       
    }
  })
  
}

$(".lupa").on("click", function name(params) {
  FindCurentSlider();

  let o = Seting.curentSlider; 

  $("#full-screen-panel").addClass("full-screen-panel-active")
    $("#fuul-screen-panel-image")[0].src = o.imgA[0].src;

    Seting.curentZoom = $("#fuul-screen-panel-image")[0];
    Seting.zoom = new Zoom(Seting.curentZoom,{
        rotate: false
    })

    $("#fuul-screen-panel-image")[0].onload = function name(params) {
        //o.fullImageTitle.text(o.curentTitle.text())
    //o.fullImageTitle[0].innerHTML(o.curentTitle.text())
    if(o.curentLanguage == "pl"){
      //o.curentTitle.text(o.titlesPL[o.licznik]);
      o.fullImageTitle[0].innerHTML = o.titlesPL[o.licznik];
    }
    if(o.curentLanguage == "en"){
      //o.curentTitle.text(o.titlesEN[o.licznik]);
      o.fullImageTitle[0].innerHTML = o.titlesEN[o.licznik];
    }
    
   
    let ImgW = parseInt($("#fuul-screen-panel-image").css("width"));
    
    let ImgH = parseInt($("#fuul-screen-panel-image").css("height"));
  
    if(ImgW>ImgH){
     
      $("#fuul-screen-panel-image").css({
        "width": "65%",
        "height" : "auto"

      })
    }

    if(ImgH>ImgW){
     
      $("#fuul-screen-panel-image").css({
        "height": "65%",
        "width": "auto"

      })
    }

    if(ImgW==ImgH){
      
      $("#fuul-screen-panel-image").css({
        "width": "70%",
        "height" : "auto"

      })
    }
    
    ImgW = parseInt($("#fuul-screen-panel-image").css("width"));
    ImgH = parseInt($("#fuul-screen-panel-image").css("height"));

    let pp
    let hh

    let panelWidth = parseInt($("#full-screen-panel").css("width"));
    let panelHeight = parseInt($("#full-screen-panel").css("height"));

    if (ImgW > ImgH) {
      pp = (panelHeight - ImgH) * 0.5;
      hh = (panelWidth - ImgW) * 0.5;

    }
    if (ImgH > ImgW) {

      pp = (panelHeight - ImgH) * 0.5;
      hh = (panelWidth - ImgW) * 0.5;


    }
    if (ImgH == ImgW) {
      pp = (panelHeight - ImgH) * 0.5;
      hh = (panelWidth - ImgW) * 0.5;

    }


    Seting.zoom.activeZoom.b = [hh, pp];
    Seting.zoom.repaint()

   

    $(".zoom-exit").addClass("zoom-exit-active");
    }
   
    

})




  