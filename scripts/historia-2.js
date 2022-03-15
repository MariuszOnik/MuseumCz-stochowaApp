

let Historia2SliderImages = [ 
    "./img/Historia/2/nowe/3. Dokument  Władysława Opolczyka.gif",
    "./img/Historia/2/Opolczyk-miniatura.jpg",
    "./img/Historia/2/nowe/5. Pieczęć Majestatyczna Opolczyka.gif",
    "./img/Historia/2/nowe/6. Pieczęć Konna Opolczyka.gif",

];

let Historia2SliderTitlesPL   = [
    `Dokument księcia Władysława II Opolczyka z 3 maja 1377 r.,<br>
    w którym Częstochowę nazwano po raz pierwszy miastem.<br>
    Archiwum Jasnogórskie.`,
    `<i>Władysław II Opolczyk,</i> rys. Jan Matejko.<br>
    Muzeum Narodowe w Krakowie.`,
    `Pieczęć majestatyczna Władysława II Opolczyka.<br>
    Biblioteka Kórnicka PAN.`,
    `Pieczęć konna Władysława II Opolczyka.<br>
    Biblioteka Kórnicka PAN.`

]
let Historia2SliderTitlesEN = [
    "A document of Prince Władysław II Opolczyk from May 3, 1377, in which Częstochowa was first named a city.<br> Archive of Jasna Góra.",
    "<i>Władysław II Opolczyk,</i> drawing by Jan Matejko.<br> National Museum in Krakow.",
    "The majestic seal of Władysław II Opolczyk.<br>Kórnik Library of the Polish Academy of Sciences.",
    "Horse seal of Władysław II Opolczyk.<br>Kórnik Library of the Polish Academy of Sciences.",
   

]



var Historia2SliderObject = new Slider("historia-2", "slider-historia-2", Historia2SliderImages, Historia2SliderTitlesPL, Historia2SliderTitlesEN);
Seting.sliders.push(Historia2SliderObject); 
Historia2SliderObject.init()