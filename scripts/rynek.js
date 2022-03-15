
let RynekSliderImages = [ 
    "./img/Rynek/Rynek/Bensheimer_miasto.jpg",
    "./img/Rynek/Plac/Gorczyn_ratusz.jpg",
    "./img/Rynek/Rynek/4. Rynek, pocztówka.jpg",

];

let RynekSliderTitlesPL = [
   
    `<i>Oblężenie Jasnej Góry przez Szwedów w 1655 r.,</i> fragment przedstawiający<br>
    widok Częstochowy, sztych według miedziorytu Jana Bensheimera.<br>
    Muzeum Narodowe w Krakowie.<br> Pracownia Fotograficzna Muzeum Narodowego w Krakowie.`,
    `<i>Oblężenie Jasnej Góry przez Szwedów w 1655 r.,</i> fragment przedstawiający<br>
    widok Częstochowy, sztych według miedziorytu Jana Aleksandra Gorczyna.<br>
    Muzeum Narodowe w Krakowie.<br> Pracownia Fotograficzna Muzeum Narodowego w Krakowie.`,
    `Częstochowa, Stary Rynek, lata 20. XX wieku.<br>
    Pocztówka ze zbiorów Muzeum Częstochowskiego.`,
]
let RynekSliderTitlesEN = [
    "<i>The Swedish Siege of Jasna Góra of 1655,</i><br> a fragment depicting a view over Częstochowa, engraving after a copper-plate engraving by Jan Bensheimer.<br>National Museum in Krakow.<br>Photographic Studio of the National Museum in Krakow.",
    "Old Częstochowa, a fragment of an engraving after a copper-plate engraving by Jan Aleksander Gorczyn <i><br>The Swedish Siege of Jasna Góra of 1655. </i> National Museum in Krakow. Photographic Studio of the National Museum in Krakow.",
    "Old Market Square, 1920s. <br>Postcard, Częstochowa Museum."
]




var RynekSliderObject = new Slider("rynek", "slider-rynek", RynekSliderImages, RynekSliderTitlesPL,  RynekSliderTitlesEN);
Seting.sliders.push(RynekSliderObject); 


RynekSliderObject.init()

window.addEventListener("LanguageChange", function (params) {
   Seting.sliders.forEach(slider=> {
    slider.changeLanguage()
   });
   
  })



