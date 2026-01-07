var wms_layers = [];
var format_LapakGIS_Batas_Kecamatan_2024_0 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kecamatan_2024_0 = format_LapakGIS_Batas_Kecamatan_2024_0.readFeatures(json_LapakGIS_Batas_Kecamatan_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kecamatan_2024_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIS_Batas_Kecamatan_2024_0.addFeatures(features_LapakGIS_Batas_Kecamatan_2024_0);var lyr_LapakGIS_Batas_Kecamatan_2024_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIS_Batas_Kecamatan_2024_0, 
                style: style_LapakGIS_Batas_Kecamatan_2024_0,
    title: 'LapakGIS_Batas_Kecamatan_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_0.png" />  16 - 55 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_1.png" />  55 - 94 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_2.png" />  94 - 134 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_3.png" />  134 - 173 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_4.png" />  173 - 212 <br />'
        });

lyr_LapakGIS_Batas_Kecamatan_2024_0.setVisible(true);
var layersList = [lyr_LapakGIS_Batas_Kecamatan_2024_0];
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'masjid': 'masjid', 'mushola': 'mushola', 'pura': 'pura', 'vihara': 'vihara', 'g katholik': 'g katholik', 'g protesta': 'g protesta', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'masjid': 'TextEdit', 'mushola': 'TextEdit', 'pura': 'TextEdit', 'vihara': 'TextEdit', 'g katholik': 'TextEdit', 'g protesta': 'TextEdit', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'masjid': 'no label', 'mushola': 'no label', 'pura': 'no label', 'vihara': 'no label', 'g katholik': 'no label', 'g protesta': 'no label', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});