var wms_layers = [];


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

lyr_EsriImagery_0.setVisible(true);lyr_F4Map2D_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_AlexandrianGreeks_3.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_F4Map2D_1,lyr_GoogleSatelliteHybrid_2,lyr_AlexandrianGreeks_3];
lyr_AlexandrianGreeks_3.set('fieldAliases', {'id': 'id', 'AlexandrianGreeks — Form responses 1_Field2': 'AlexandrianGreeks — Form responses 1_Field2', 'AlexandrianGreeks — Form responses 1_Field3': 'AlexandrianGreeks — Form responses 1_Field3', 'AlexandrianGreeks — Form responses 1_Field4': 'AlexandrianGreeks — Form responses 1_Field4', 'AlexandrianGreeks — Form responses 1_Field5': 'AlexandrianGreeks — Form responses 1_Field5', 'AlexandrianGreeks — Form responses 1_Field6': 'AlexandrianGreeks — Form responses 1_Field6', 'AlexandrianGreeks — Form responses 1_Field7': 'AlexandrianGreeks — Form responses 1_Field7', 'AlexandrianGreeks — Form responses 1_Field8': 'AlexandrianGreeks — Form responses 1_Field8', 'AlexandrianGreeks — Form responses 1_Field9': 'AlexandrianGreeks — Form responses 1_Field9', 'AlexandrianGreeks — Form responses 1_Field10': 'AlexandrianGreeks — Form responses 1_Field10', 'AlexandrianGreeks — Form responses 1_Field11': 'AlexandrianGreeks — Form responses 1_Field11', 'AlexandrianGreeks — Form responses 1_Field12': 'AlexandrianGreeks — Form responses 1_Field12', });
lyr_AlexandrianGreeks_3.set('fieldImages', {'id': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field2': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field3': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field4': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field5': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field6': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field7': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field8': 'ExternalResource', 'AlexandrianGreeks — Form responses 1_Field9': 'ExternalResource', 'AlexandrianGreeks — Form responses 1_Field10': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field11': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field12': 'TextEdit', });
lyr_AlexandrianGreeks_3.set('fieldLabels', {'id': 'no label', 'AlexandrianGreeks — Form responses 1_Field2': 'no label', 'AlexandrianGreeks — Form responses 1_Field3': 'no label', 'AlexandrianGreeks — Form responses 1_Field4': 'no label', 'AlexandrianGreeks — Form responses 1_Field5': 'no label', 'AlexandrianGreeks — Form responses 1_Field6': 'no label', 'AlexandrianGreeks — Form responses 1_Field7': 'no label', 'AlexandrianGreeks — Form responses 1_Field8': 'no label', 'AlexandrianGreeks — Form responses 1_Field9': 'no label', 'AlexandrianGreeks — Form responses 1_Field10': 'no label', 'AlexandrianGreeks — Form responses 1_Field11': 'no label', 'AlexandrianGreeks — Form responses 1_Field12': 'no label', });
lyr_AlexandrianGreeks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});