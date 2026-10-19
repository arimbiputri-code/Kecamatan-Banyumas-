var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KecamatanBanyumas_1 = new ol.format.GeoJSON();
var features_KecamatanBanyumas_1 = format_KecamatanBanyumas_1.readFeatures(json_KecamatanBanyumas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanBanyumas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanBanyumas_1.addFeatures(features_KecamatanBanyumas_1);
var lyr_KecamatanBanyumas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanBanyumas_1, 
                style: style_KecamatanBanyumas_1,
                popuplayertitle: 'Kecamatan Banyumas',
                interactive: true,
    title: 'Kecamatan Banyumas<br />\
    <img src="styles/legend/KecamatanBanyumas_1_0.png" /> Ajibarang<br />\
    <img src="styles/legend/KecamatanBanyumas_1_1.png" /> Banyumas<br />\
    <img src="styles/legend/KecamatanBanyumas_1_2.png" /> Baturraden<br />\
    <img src="styles/legend/KecamatanBanyumas_1_3.png" /> Cilongok<br />\
    <img src="styles/legend/KecamatanBanyumas_1_4.png" /> Gumelar<br />\
    <img src="styles/legend/KecamatanBanyumas_1_5.png" /> Jatilawang<br />\
    <img src="styles/legend/KecamatanBanyumas_1_6.png" /> Kalibagor<br />\
    <img src="styles/legend/KecamatanBanyumas_1_7.png" /> Karanglewas<br />\
    <img src="styles/legend/KecamatanBanyumas_1_8.png" /> Kebasen<br />\
    <img src="styles/legend/KecamatanBanyumas_1_9.png" /> Kedungbanteng<br />\
    <img src="styles/legend/KecamatanBanyumas_1_10.png" /> Kembaran<br />\
    <img src="styles/legend/KecamatanBanyumas_1_11.png" /> Kemranjen<br />\
    <img src="styles/legend/KecamatanBanyumas_1_12.png" /> Lumbir<br />\
    <img src="styles/legend/KecamatanBanyumas_1_13.png" /> Patikraja<br />\
    <img src="styles/legend/KecamatanBanyumas_1_14.png" /> Pekuncen<br />\
    <img src="styles/legend/KecamatanBanyumas_1_15.png" /> Purwojati<br />\
    <img src="styles/legend/KecamatanBanyumas_1_16.png" /> Purwokerto Barat<br />\
    <img src="styles/legend/KecamatanBanyumas_1_17.png" /> Purwokerto Selatan<br />\
    <img src="styles/legend/KecamatanBanyumas_1_18.png" /> Purwokerto Timur<br />\
    <img src="styles/legend/KecamatanBanyumas_1_19.png" /> Purwokerto Utara<br />\
    <img src="styles/legend/KecamatanBanyumas_1_20.png" /> Rawalo<br />\
    <img src="styles/legend/KecamatanBanyumas_1_21.png" /> Sokaraja<br />\
    <img src="styles/legend/KecamatanBanyumas_1_22.png" /> Somagede<br />\
    <img src="styles/legend/KecamatanBanyumas_1_23.png" /> Sumbang<br />\
    <img src="styles/legend/KecamatanBanyumas_1_24.png" /> Sumpiuh<br />\
    <img src="styles/legend/KecamatanBanyumas_1_25.png" /> Tambak<br />\
    <img src="styles/legend/KecamatanBanyumas_1_26.png" /> Wangon<br />\
    <img src="styles/legend/KecamatanBanyumas_1_27.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_KecamatanBanyumas_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KecamatanBanyumas_1];
lyr_KecamatanBanyumas_1.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Luas': 'Luas', 'foto': 'foto', });
lyr_KecamatanBanyumas_1.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'Luas': 'TextEdit', 'foto': 'ExternalResource', });
lyr_KecamatanBanyumas_1.set('fieldLabels', {'KABUPATEN': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'DESA': 'no label', 'SUMBER': 'hidden field', 'Luas': 'inline label - always visible', 'foto': 'inline label - always visible', });
lyr_KecamatanBanyumas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});