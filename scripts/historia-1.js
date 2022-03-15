
let Historia1SliderImages = [ 
    "./img/Historia/1/1. Kazimierz Wielki-2.gif",
    "./img/Historia/1/Dokument  Kaziemierza Wielkiego.gif"
];

let Historia1SliderTitlesPL = [
    "<i>Figura króla Kazimierza III Wielkiego z jego nagrobka,</i><br> rys. Aleksander Lesser. Muzeum Narodowe w Warszawie.",
    `Dokument króla Kazimierza III Wielkiego z 24 sierpnia 1356 r. przyznający<br>
    przywilej na lokację dwóch wsi, „jednej zwanej Częstochową<br>
    i drugiej nad rzeką w dąbrowie tegoż dziedzictwa Częstochowy”.<br>
    Archiwum Jasnogórskie.`
]
let Historia1SliderTitlesEN = [
   "<i>A figure of King Casimir the Great from his tombstone</i>, <br>drawing by Aleksander Lesser. National Museum in Warsaw.",
   "The document of King Casimir the Great of August 24, 1356 granting<br> the privilege to settle two villages, “one called Częstochowa and the other by the river in dąbrowa of the same Częstochowa heritage”.<br> Archive of Jasna Góra.",
]




var Historia1SliderObject = new Slider("historia-1", "slider-historia-1", Historia1SliderImages, Historia1SliderTitlesPL, Historia1SliderTitlesEN);
Seting.sliders.push(Historia1SliderObject); 
Historia1SliderObject.init()




