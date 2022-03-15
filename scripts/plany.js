

let PlanySliderImages = [ 
    
    "./img/Rynek/Plany/Obrobione Plany/1. Plan szwedzki 1702.jpg",
    "./img/Rynek/Plany/Obrobione Plany/2. Frag. planu pruskiego z 1795, sekcja 5.jpg",
    "./img/Rynek/Plany/Obrobione Plany/2a. Frag. planu pruskiego z 1795, sekcja 1.jpg",
    "./img/Rynek/Plany/Obrobione Plany/3. Plan francuski 1809.jpg",
    "./img/Rynek/Plany/Obrobione Plany/4.-Plan-Częstochowy-Księstwo-Warszawskie.jpg",
    "./img/Rynek/Plany/Obrobione Plany/5. Plan rosyjski z 1812.jpg" 
];

let PlanySliderTitlesPL = [
   
    "Stara Częstochowa i okolice. Szwedzki plan wojskowy z 1702 r. Królewska Biblioteka w Sztokholmie. <br>Reprodukcja z mikrofilmu: Archiwum Główne Akt Dawnych w Warszawie.",
    "Ratusz w Starej Częstochowie na fragmencie planu pruskiego z ok. 1795 r.<br> Zbliżenie sekcji piątej <i>Situations Plan von der Vogtei Czenstochau nach dem reduc'iren Maas...</i> Archiwum Główne Akt Dawnych w Warszawie. <br>Wybór kartografii i konsultacja historyczna: Amadeusz Szklarz-Habrowski, IH PAN.",
    "Ratusz w Starej Częstochowie na fragmencie planu pruskiego z ok. 1795 r.<br> Zbliżenie sekcji pierwszej <i>Plan von einer in Ald Czenstochau belegenen Wustel Baustelle und einem Kruger. </i> Archiwum Główne Akt Dawnych w Warszawie. <br>Wybór kartografii i konsultacja historyczna: Amadeusz Szklarz-Habrowski, IH PAN.",
    "Stara Częstochowa i okolice. Plan francuski z 1809 r. <i>Plan de la defense du fort de Czenstochowa par les… </i><br> Archiwum Główne Akt Dawnych w Warszawie. <br>Wybór kartografii i konsultacja historyczna: Amadeusz Szklarz-Habrowski, IH PAN.",
    "Szkicowy plan rękopiśmienny Częstochowy i fortyfikacji Jasnej Góry z czasów Księstwa Warszawskiego (1807–1815). Biblioteka Śląska.",
    "Stara Częstochowa i okolice. Plan rosyjski z ok. 1812 r. <i>Kwartirmajsterskoj Czasti Sztabskapitan Fitingof...</i> <br>Archiwum Główne Akt Dawnych w Warszawie. Wybór kartografii i konsultacja historyczna: Amadeusz Szklarz-Habrowski, IH PAN."

]

let PlanySliderTitlesEN = [
   "Old Częstochowa and its surroundings, Swedish military map of 1702. National Library of Sweden. Microfilm reproduction: The Central Archives of Historical Records in Warsaw.",
   "Town Hall in Old Częstochowa on a fragment of a Prussian map from about 1795, close-up of section five,<br> <i>Situations Plan von der Vogtei Czenstochau nach dem reduc’iren Maas…</i> The Central Archives of Historical Records in Warsaw. <br> Selection of cartography and historical consultation: Amadeusz Szklarz-Habrowski, Institute of History at the Polish Academy of Sciences.",
   "Town Hall in Old Częstochowa on a fragment of a Prussian map from about 1795, close-up of section one, <i><br>Plan von einer in Ald Czenstochau belegenen Wustel Baustelle und einem Kruger.</i> The Central Archives of Historical Records in Warsaw. <br>Selection of cartography and historical consultation: Amadeusz Szklarz-Habrowski, Institute of History at the Polish Academy of Sciences.",
   "Old Częstochowa and its surroundings, French map from 1809, <i>Plan de la defense du fort de Czenstochowa par les... </i>The Central Archives of Historical Records in Warsaw. <br>Selection of cartography and historical consultation: Amadeusz Szklarz-Habrowski, Institute of History at the Polish Academy of Sciences.",
   "Hand-drawn map of Częstochowa and the fortifications of Jasna Góra from the period of the Duchy of Warsaw (1807–1815).<br> Silesian Library.",
   "Old Częstochowa and its surroundings, Russian map from about 1812, <i>Kwartirmajsterskoj Czasti Sztabskapitan Fitingof…</i> The Central Archives of Historical Records in Warsaw.<br>Selection of cartography and historical consultation: Amadeusz Szklarz-Habrowski, Institute of History at the Polish Academy of Sciences."
]


var Historia3SliderObject = new Slider("plany", "slider-plany", PlanySliderImages, PlanySliderTitlesPL, PlanySliderTitlesEN);
Seting.sliders.push(Historia3SliderObject); 
Historia3SliderObject.init()
