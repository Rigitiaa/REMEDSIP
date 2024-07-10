var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });
var lyr_SLOPESOLO1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SLOPE SOLO1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SLOPESOLO1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12330676.196170, -847992.363329, 12341896.196170, -839760.836799]
                            })
                        });
var lyr_NDVISOLO1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI SOLO1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVISOLO1_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12330660.000000, -848007.403929, 12341910.000000, -839745.614444]
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
var lyr_LAHANEROSI1_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "LAHAN EROSI1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LAHANEROSI1_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12330676.196170, -847992.363329, 12342219.849254, -839482.697622]
                            })
                        });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_SLOPESOLO1_1.setVisible(true);lyr_NDVISOLO1_2.setVisible(true);lyr_IDW_CH1_3.setVisible(true);lyr_LAHANEROSI1_4.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_SLOPESOLO1_1,lyr_NDVISOLO1_2,lyr_IDW_CH1_3,lyr_LAHANEROSI1_4];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'inline label - visible with data', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});