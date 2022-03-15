

let MurySliderImages = [ 
    "./img/Rynek/Mury/Gorczyn_miasto.jpg"
    
];

let MurySliderTitlesPL = [
    `<i>Oblężenie Jasnej Góry przez Szwedów w 1655 r.,</i> fragment przedstawiający<br>
    widok Częstochowy, sztych według miedziorytu Jana Aleksandra Gorczyna.
    Muzeum Narodowe w Krakowie.<br> Pracownia Fotograficzna Muzeum Narodowego w Krakowie.`


]

let MurySliderTitlesEN = [
   "Old Częstochowa, a fragment of an engraving after a copper-plate engraving by Jan Aleksander Gorczyn <i><br>The Swedish Siege of Jasna Góra of 1655.</i> National Museum in Krakow.<br> Photographic Studio of the National Museum in Krakow."
]


var MurySliderObject = new Slider("mury", "slider-mury", MurySliderImages, MurySliderTitlesPL, MurySliderTitlesEN);
Seting.sliders.push(MurySliderObject); 
MurySliderObject.init()
