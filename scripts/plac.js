

let PlacSliderImages = [ 
    "./img/Rynek/Plac/Gorczyn_ratusz.jpg",
    "./img/Rynek/Plac/5. Kościół św. Zygmunta 1 Szerner.jpg",
    "./img/Rynek/Plac/6. Kosciół św. Zygmunta 2 Dmochowski, 1876.jpg"
    
];

let PlacSliderTitlesPL = [
    `<i>Oblężenie Jasnej Góry przez Szwedów w 1655 r.,</i> fragment przedstawiający<br>
    widok Częstochowy, sztych według miedziorytu Jana Aleksandra Gorczyna.<br>
    Muzeum Narodowe w Krakowie.<br> Pracownia Fotograficzna Muzeum Narodowego w Krakowie.`,
    `<i>Kościół św. Zygmunta w Starej Częstochowie</i>, 1862 r.,<br>
    rys. Władysław Szerner. Muzeum Częstochowskie.`,
    `<i>Kościół św. Zygmunta w Starej Częstochowie,</i> rys. Władysław Dmochowski,<br>
    ilustracja z albumu <i>Widoki Częstochowy i Jasnej Góry z opisem,</i> <br>Warszawa 1876.
    Muzeum Częstochowskie.`

]

let PlacSliderTitlesEN = [
    "Old Częstochowa, a fragment of an engraving after a copper-plate engraving by Jan Aleksander Gorczyn, <br>The Swedish Siege of Jasna Góra of 1655. National Museum in Krakow, Photographic Studio of the National Museum in Krakow.",
    "<i>Saint Sigismund’s Church in Old Częstochowa, 1862</i>, drawing by Władysław Szerner. Częstochowa Museum.",
    "<i>Saint Sigismund’s Church in Old Częstochowa</i>,<br> drawing by Władysław Dmochowski, illustration from the album <i>Views of Częstochowa and Jasna Góra with Description,</i> Warsaw 1876.<br> Częstochowa Museum."
]


var PlacSliderObject = new Slider("plac-koscielny", "slider-plac", PlacSliderImages, PlacSliderTitlesPL, PlacSliderTitlesEN);
Seting.sliders.push(PlacSliderObject); 
PlacSliderObject.init()
