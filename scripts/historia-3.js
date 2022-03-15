

let Historia3SliderImages = [ 
    
    "./img/Historia/3/pieczec_miasto-1a.gif",
    "./img/Rynek/Rynek/2. Bodenehr.jpg",
    "./img/Historia/3/OgólnywidokCzęstochowy.jpg",

];

let Historia3SliderTitlesPL = [
   
    `Herb Częstochowy według gotyckiej pieczęci odciśniętej<br>
    na dokumencie z 1564 r.`,
    `<i>Oblężenie Jasnej Góry przez Szwedów w 1655 r.,</i><br>
    sztych według miedziorytu Gabriela Bodenehra Starszego.<br>
    Muzeum Częstochowskie.`,
    `<i>Ogólny widok Częstochowy od strony Złotej Góry,</i><br>
    rys. Władysław Dmochowski, ilustracja z albumu<br>
    <i>Widoki Częstochowy i Jasnej Góry z opisem,</i> Warszawa 1876.<br>
    Muzeum Częstochowskie.`

]

let Historia3SliderTitlesEN = [
    "The coat of arms of Częstochowa according to a gothic seal imprinted<br>on a document from 1564.",
    "<i>The Swedish Siege of Jasna Góra of 1655</i>, engraving after a copper-plate engraving by Gabriel Bodenehr the Elder,<br> Częstochowa Museum.", 
    "<i>General view of Częstochowa from the direction of Złota Góra</i>,<br> drawing by Władysław Dmochowski, illustration from the album, <i><br>Views of Częstochowa and Jasna Góra with descriptions</i>, Warsaw 1876,<br> Częstochowa Museum."
]


var Historia3SliderObject = new Slider("historia-3", "slider-historia-3", Historia3SliderImages, Historia3SliderTitlesPL, Historia3SliderTitlesEN);
Seting.sliders.push(Historia3SliderObject); 
Historia3SliderObject.init()
