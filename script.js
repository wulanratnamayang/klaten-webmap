// Layer Group Marking
var tempat = L.layerGroup();

//Candi plaosan
var marker = L.marker([-7.740611, 110.504645]).addTo(tempat)
.bindPopup("<h2>Candi Plaosan</h2> <p>Candi Plaosan dibangun pada abad ke-9 oleh Rakai Pikatan, raja Mataram Kuno dari Wangsa Sanjaya (840-856). Candi itu dibagi menjadi dua bagian Candi Plaosan Lor (utara) dan Candi Plaosan Kidul (selatan) yang hanya dipisahkan oleh jalan kecil 20m.</p> <img src='image/candi_plaosan.jpg' height='100px' width='100px'>");

//Museum Gula
var marker = L.marker([-7.721831, 110.560790]).addTo(tempat)
.bindPopup("<h2>Museum Gula Gondang Winangoen</h2> <p>Museum gula terbesar di Asia Tenggara, yang merupakan bangunan peninggalan Belanda. Di museum ini, terdapat replika alat-alat pembuat gula, foto-foto bersejarah, diorama pabrik gula dan perkebunan tebu, alat-alat komunikasi lama, lokomotif kereta tebu, dan perpustakaan gula.</p> <img src='image/museum_gula.jpg' height='100px' width='150px'>");

//Candi Merak
var marker = L.marker([-7.669498, 110.553498]).addTo(tempat)
.bindPopup("<h2>Candi Merak</h2> <p>Terletak di Desa Karangnongko, Candi Merak memiliki ukuran yang kecil serta ditemukan pada sekitar tahun 1925 di sebuah tempat yang merupakan sarang dari burung merak. Karena pernah menjadi sarang tersebut, itulah alasan kenapa candi ini diberi nama Candi Merak.</p> <img src='image/candi_merak.jpg' height='100px' width='100px'>");

//Pemandian Lumban Tirta
var marker = L.marker([-7.602801, 110.645654]).addTo(tempat)
.bindPopup("<h2>Pemandian Lumban Tirto</h2> <p>Terletak Desa Daleman, pemandian yang berjarak kurang lebih 17 kilometer dari pusat Kota Klaten ini memiliki kedalaman pemandian kurang lebih 1,5 meter. Selain berfungsi sebagai kolam renang, Pemandian Lumban Tirto juga adalah sumber air untuk minum Keraton Surakarta Hadiningrat yang diprakarsai oleh Paku Buwono X hingga saat ini.</p> <img src='image/lumban_tirta.jpg' height='100px' width='180px'>");

//Candi Sojiwan
var marker = L.marker([-7.760161, 110.496180]).addTo(tempat)
.bindPopup("<h2>Candi Sojiwan</h2> <p>Candi Sojiwan adalah candi Buddha yang berada tidak jauh dari Candi Prambanan. Di tempat ini, kita bisa menemukan banyak relief kaki candi yang menceritakan kisah-kisah Pancatantra dari India.</p> <img src='image/candi_sojiwan.jpg' height='100px' width='130px'>");

//Candi Sewu
var marker = L.marker([-7.743665, 110.492899]).addTo(tempat)
.bindPopup("<h2>Candi Sewu</h2> <p>Candi Sewu atau Manjusrighra adalah candi Buddha yang dibangun pada abad ke-8 Masehi yang berjarak hanya delapan ratus meter di sebelah utara Candi Prambanan. Candi Sewu merupakan kompleks candi Buddha terbesar kedua setelah Candi Borobudur di Jawa Tengah</p> <img src='image/candi_sewu.jpg' height='100px' width='150px'>");

//Museum Candi Prambanan
var marker = L.marker([-7.748555, 110.493836]).addTo(tempat)
.bindPopup("<h2>Museum Candi Prambanan</h2> <p>Tempat dengan nuansa joglo, berisikan sejarah mengenai candi prambanan serta didalamnya terdapat benda-benda prasejarah peninggalan manusia purba</p> <img src='image/museum_prambanan.jpg' height='100px' width='150px'>");

//Masjid Alit Jatinom
var marker = L.marker([-7.632376, 110.594288]).addTo(tempat)
.bindPopup("<h2>Masjid Alit Jatinom</h2> <p>Masjid peninggalaan Tokoh Agama Ki Ageng Gribig yang merupakan salah satu tokoh penyebar agama Islam. Disebelah masijid, terdapat area untuk melakukan tradisi sebaran apem pada bulan sapar yang kaya akan nilai tradisi dan filosofis.</p> <img src='image/masjid_alit.jpg' height='100px' width='100px'>");

//Hutan Kota Gergunung
var marker = L.marker([-7.679882, 110.603824]).addTo(tempat)
.bindPopup("<h2>Hutan Kota Gergunung</h2> <p>Terletak di Jalan Ki Ageng Gribig di daerah Klaten Utara, hutan kota ini merupakan salah satu area hijau yang asri di wilayah klaten kota.</p> <img src='image/gergunung.jpg' height='100px' width='200px'>");

//Makam Sunan Pandanaran
var marker = L.marker([-7.780628, 110.632606]).addTo(tempat)
.bindPopup("<h2>Makam Sunan Pandanaran</h2> <p>Terletak di puncak bukit Jabalkat Kecamatan Bayat. Sunan Pandanaran sendiri memiliki banyak nama, seperti Sunan Pandanaran Bayat, Sunan Bayat, Susuhunan Tembayat, Pangeran Mangkubumi, Sunan Pandanaran (II), dan Wahyu Widayat. Sunan Pandanaran merupakan tokoh dalam sejarah lisan sebagai salah satu orang yang menyebarkan agama Islam di tanah Jawa di luar jajaran Wali Songo. </p> <img src='image/sunan.jpg' height='100px' width='130px'>");

//Pengrajin Tanduk Kerbau Keprabon
var marker = L.marker([-7.606725, 110.668466]).addTo(tempat)
.bindPopup("<h2>Pengrajin Tanduk Kerbau Keprabon</h2> <p>Desa unik pengrajin tanduk kerbau ini terletak di Kecamatan Polanharjo, Kabupaten Klaten. Desa Wisata ini merupakan sebuah pusat kerajinan tanduk kerbau dan penyu.</p> <img src='image/keprabon.jpg' height='100px' width='200px'>");

// Layer Peta
	var osm = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});

	var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
 
// Basemap
var map = L.map('mapid', {
    center: [-7.705183, 110.612462],
    zoom: 12,
    layers: [osm,esri]
});

// Baselayer
var baseLayers = {
    "OpenStreetMap": osm,
    "ESRI Imagery": esri,
};

// Overlay Marking
var overlays = {
    "Tempat Bersejarah": tempat
};

// Menampilkan Semua Map
L.control.layers(baseLayers, overlays).addTo(map);

//Menampilkan Grid dan Skala
L.latlngGraticule({
    showLabel: true,
    zoomInterval: [{
            start: 2,
            end: 3,
            interval: 30
        },
        {
            start: 4,
            end: 4,
            interval: 10
        },
        {
            start: 5,
            end: 7,
            interval: 5
        },
        {
            start: 8,
            end: 8,
            interval: 1
        },
        {
            start: 9,
            end: 9,
            interval: 0.5
        },
        {
            start: 10,
            end: 13,
            interval: 0.25
        },
    ]
}).addTo(map);

L.control.scale({
    position: 'bottomleft',
    maxWidth: 100,
    metric: true,
    imperial: true,
    updateWhenIdle: true
}).addTo(map);
L.control.mousePosition().addTo(map);
L.control.locate().addTo(map);
setBounds();