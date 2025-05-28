var wms_layers = [];

/* Or if you want to fit the map to your feature:
map.getView().fit(extent, map.getSize());
*/


// MAP layers
        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,


            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_F4Map2D_1 = new ol.layer.Tile({
            'title': 'F4 Map - 2D',
            'opacity': 1.000000,


            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,


            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });


// addedd layers before var layersList = [lyr_EsriImagery_0,lyr_F4Map2D_1,lyr_GoogleSatelliteHybrid_2,lyr_AlexandrianGreeks_3, lyr_RowanMustafa];
// 1) attributes elements layer
var format_AlexandrianGreeks_3 = new ol.format.GeoJSON();
var features_AlexandrianGreeks_3 = format_AlexandrianGreeks_3.readFeatures(json_AlexandrianGreeks_3,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlexandrianGreeks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlexandrianGreeks_3.addFeatures(features_AlexandrianGreeks_3);
var lyr_AlexandrianGreeks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlexandrianGreeks_3,
                style: style_AlexandrianGreeks_3,
                popuplayertitle: "AlexandrianGreeks",
                interactive: true,
                title: 'AlexandrianGreeks'
            });

var format_RowanMustafa = new ol.format.GeoJSON();
var features_RowanMustafa = format_RowanMustafa.readFeatures(json_RowanMustafa,   //name in RowanMustafa.js  top var
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
console.log(features_RowanMustafa);  // Should log an array with 1 feature
var jsonSource_RowanMustafa = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RowanMustafa.addFeatures(features_RowanMustafa);

var lyr_RowanMustafa = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RowanMustafa,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'maroon',  // maroon stroke color
            width: 2
        }),
    fill: new ol.style.Fill({
        color: 'rgba(0, 0, 28, 0.83)'  // dark navy blue with 80% opacity
            })
}),
    popuplayertitle: "RowanMustafa",
    interactive: true,
    title: 'RowanMustafa'
});
lyr_RowanMustafa.setVisible(true);


lyr_EsriImagery_0.setVisible(true);lyr_F4Map2D_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_AlexandrianGreeks_3.setVisible(true);
// add newlayers root here
var layersList = [lyr_EsriImagery_0,lyr_F4Map2D_1,lyr_GoogleSatelliteHybrid_2,lyr_AlexandrianGreeks_3, lyr_RowanMustafa];
     // To show element properties variables by id n img the right way
lyr_AlexandrianGreeks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});


