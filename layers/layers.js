var wms_layers = [];

var format_Export_Output_4_0 = new ol.format.GeoJSON();
var features_Export_Output_4_0 = format_Export_Output_4_0.readFeatures(json_Export_Output_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_4_0.addFeatures(features_Export_Output_4_0);
var lyr_Export_Output_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_4_0, 
                style: style_Export_Output_4_0,
                popuplayertitle: "Export_Output_4",
                interactive: true,
                title: '<img src="styles/legend/Export_Output_4_0.png" /> Export_Output_4'
            });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var lyr_LAHANEROSI1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "LAHAN EROSI1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LAHANEROSI1_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12330676.196170, -847992.363329, 12342219.849254, -839482.697622]
                            })
                        });
var lyr_IDW_CH1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "IDW_CH1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IDW_CH1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12212294.251180, -873457.832687, 12467142.592344, -761099.638969]
                            })
                        });
var lyr_SLOPESOLO1_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "SLOPE SOLO1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SLOPESOLO1_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12330676.196170, -847992.363329, 12341896.196170, -839760.836799]
                            })
                        });
var lyr_NDVISOLO1_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI SOLO1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVISOLO1_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12330660.000000, -848007.403929, 12341910.000000, -839745.614444]
                            })
                        });

lyr_Export_Output_4_0.setVisible(false);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_LAHANEROSI1_2.setVisible(true);lyr_IDW_CH1_3.setVisible(true);lyr_SLOPESOLO1_4.setVisible(true);lyr_NDVISOLO1_5.setVisible(true);
var layersList = [lyr_Export_Output_4_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_LAHANEROSI1_2,lyr_IDW_CH1_3,lyr_SLOPESOLO1_4,lyr_NDVISOLO1_5];
lyr_Export_Output_4_0.set('fieldAliases', {'STASIUN': 'STASIUN', 'Provinsi': 'Provinsi', 'Lintang__Y': 'Lintang__Y', 'Bujur__X_': 'Bujur__X_', 'Curah_Huja': 'Curah_Huja', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Foto': 'Foto', });
lyr_Export_Output_4_0.set('fieldImages', {'STASIUN': '', 'Provinsi': '', 'Lintang__Y': '', 'Bujur__X_': '', 'Curah_Huja': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Export_Output_4_0.set('fieldLabels', {'STASIUN': 'no label', 'Provinsi': 'no label', 'Lintang__Y': 'no label', 'Bujur__X_': 'no label', 'Curah_Huja': 'header label - always visible', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'inline label - always visible', 'WIADKC': 'no label', 'WADMKK': 'inline label - always visible', 'WIADKK': 'no label', 'WADMPR': 'inline label - always visible', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Foto': 'inline label - visible with data', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});