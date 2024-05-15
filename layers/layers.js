ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([121.305320, 6.895349, 124.611913, 8.831321]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriTopoWorld_2 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_4 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Isabela_5 = new ol.format.GeoJSON();
var features_Isabela_5 = format_Isabela_5.readFeatures(json_Isabela_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Isabela_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isabela_5.addFeatures(features_Isabela_5);
var lyr_Isabela_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isabela_5, 
                style: style_Isabela_5,
                popuplayertitle: "Isabela",
                interactive: true,
                title: '<img src="styles/legend/Isabela_5.png" /> Isabela'
            });
var format_ZamboangadelSur_6 = new ol.format.GeoJSON();
var features_ZamboangadelSur_6 = format_ZamboangadelSur_6.readFeatures(json_ZamboangadelSur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZamboangadelSur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZamboangadelSur_6.addFeatures(features_ZamboangadelSur_6);
var lyr_ZamboangadelSur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZamboangadelSur_6, 
                style: style_ZamboangadelSur_6,
                popuplayertitle: "Zamboanga del Sur",
                interactive: true,
                title: '<img src="styles/legend/ZamboangadelSur_6.png" /> Zamboanga del Sur'
            });
var format_ZamboangaSibugay_7 = new ol.format.GeoJSON();
var features_ZamboangaSibugay_7 = format_ZamboangaSibugay_7.readFeatures(json_ZamboangaSibugay_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZamboangaSibugay_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZamboangaSibugay_7.addFeatures(features_ZamboangaSibugay_7);
var lyr_ZamboangaSibugay_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZamboangaSibugay_7, 
                style: style_ZamboangaSibugay_7,
                popuplayertitle: "Zamboanga Sibugay",
                interactive: true,
                title: '<img src="styles/legend/ZamboangaSibugay_7.png" /> Zamboanga Sibugay'
            });
var format_ZamboangadelNorte_8 = new ol.format.GeoJSON();
var features_ZamboangadelNorte_8 = format_ZamboangadelNorte_8.readFeatures(json_ZamboangadelNorte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZamboangadelNorte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZamboangadelNorte_8.addFeatures(features_ZamboangadelNorte_8);
var lyr_ZamboangadelNorte_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZamboangadelNorte_8, 
                style: style_ZamboangadelNorte_8,
                popuplayertitle: "Zamboanga del Norte",
                interactive: true,
                title: '<img src="styles/legend/ZamboangadelNorte_8.png" /> Zamboanga del Norte'
            });
var format_EMBIXLaboratory_9 = new ol.format.GeoJSON();
var features_EMBIXLaboratory_9 = format_EMBIXLaboratory_9.readFeatures(json_EMBIXLaboratory_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EMBIXLaboratory_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMBIXLaboratory_9.addFeatures(features_EMBIXLaboratory_9);
var lyr_EMBIXLaboratory_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMBIXLaboratory_9, 
                style: style_EMBIXLaboratory_9,
                popuplayertitle: "EMB IX Laboratory",
                interactive: true,
                title: '<img src="styles/legend/EMBIXLaboratory_9.png" /> EMB IX Laboratory'
            });
var format_EMBIXOffices_10 = new ol.format.GeoJSON();
var features_EMBIXOffices_10 = format_EMBIXOffices_10.readFeatures(json_EMBIXOffices_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EMBIXOffices_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMBIXOffices_10.addFeatures(features_EMBIXOffices_10);
var lyr_EMBIXOffices_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMBIXOffices_10, 
                style: style_EMBIXOffices_10,
                popuplayertitle: "EMB IX Offices",
                interactive: true,
                title: '<img src="styles/legend/EMBIXOffices_10.png" /> EMB IX Offices'
            });
var format_SolidWasteGeneration2022_11 = new ol.format.GeoJSON();
var features_SolidWasteGeneration2022_11 = format_SolidWasteGeneration2022_11.readFeatures(json_SolidWasteGeneration2022_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SolidWasteGeneration2022_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolidWasteGeneration2022_11.addFeatures(features_SolidWasteGeneration2022_11);
var lyr_SolidWasteGeneration2022_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolidWasteGeneration2022_11, 
                style: style_SolidWasteGeneration2022_11,
                popuplayertitle: "Solid Waste Generation (2022)",
                interactive: true,
    title: 'Solid Waste Generation (2022)<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_0.png" /> 1012 - 1687<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_1.png" /> 1687 - 2993<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_2.png" /> 2993 - 4083<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_3.png" /> 4083 - 5556<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_4.png" /> 5556 - 7014<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_5.png" /> 7014 - 9453<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_6.png" /> 9453 - 15222<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_7.png" /> 15222 - 23144<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_8.png" /> 23144 - 55478<br />\
    <img src="styles/legend/SolidWasteGeneration2022_11_9.png" /> 55478 - 259619<br />'
        });
var format_SanitaryLandfill_12 = new ol.format.GeoJSON();
var features_SanitaryLandfill_12 = format_SanitaryLandfill_12.readFeatures(json_SanitaryLandfill_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SanitaryLandfill_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanitaryLandfill_12.addFeatures(features_SanitaryLandfill_12);
var lyr_SanitaryLandfill_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanitaryLandfill_12, 
                style: style_SanitaryLandfill_12,
                popuplayertitle: "Sanitary Landfill",
                interactive: true,
                title: '<img src="styles/legend/SanitaryLandfill_12.png" /> Sanitary Landfill'
            });
var format_MRFLGUInitiated_13 = new ol.format.GeoJSON();
var features_MRFLGUInitiated_13 = format_MRFLGUInitiated_13.readFeatures(json_MRFLGUInitiated_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MRFLGUInitiated_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MRFLGUInitiated_13.addFeatures(features_MRFLGUInitiated_13);
var lyr_MRFLGUInitiated_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MRFLGUInitiated_13, 
                style: style_MRFLGUInitiated_13,
                popuplayertitle: "MRF (LGU Initiated)",
                interactive: true,
                title: '<img src="styles/legend/MRFLGUInitiated_13.png" /> MRF (LGU Initiated)'
            });
var format_MRFEMBFunded_14 = new ol.format.GeoJSON();
var features_MRFEMBFunded_14 = format_MRFEMBFunded_14.readFeatures(json_MRFEMBFunded_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MRFEMBFunded_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MRFEMBFunded_14.addFeatures(features_MRFEMBFunded_14);
var lyr_MRFEMBFunded_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MRFEMBFunded_14, 
                style: style_MRFEMBFunded_14,
                popuplayertitle: "MRF (EMB Funded)",
                interactive: true,
                title: '<img src="styles/legend/MRFEMBFunded_14.png" /> MRF (EMB Funded)'
            });
var format_DisposalFacility_15 = new ol.format.GeoJSON();
var features_DisposalFacility_15 = format_DisposalFacility_15.readFeatures(json_DisposalFacility_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DisposalFacility_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisposalFacility_15.addFeatures(features_DisposalFacility_15);
var lyr_DisposalFacility_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisposalFacility_15, 
                style: style_DisposalFacility_15,
                popuplayertitle: "Disposal Facility",
                interactive: true,
                title: '<img src="styles/legend/DisposalFacility_15.png" /> Disposal Facility'
            });
var format_WQMAStretch_16 = new ol.format.GeoJSON();
var features_WQMAStretch_16 = format_WQMAStretch_16.readFeatures(json_WQMAStretch_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WQMAStretch_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQMAStretch_16.addFeatures(features_WQMAStretch_16);
var lyr_WQMAStretch_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQMAStretch_16, 
                style: style_WQMAStretch_16,
                popuplayertitle: "WQMA Stretch",
                interactive: true,
                title: '<img src="styles/legend/WQMAStretch_16.png" /> WQMA Stretch'
            });
var format_WaterbodyRiverLakeEsteroBayMarine_17 = new ol.format.GeoJSON();
var features_WaterbodyRiverLakeEsteroBayMarine_17 = format_WaterbodyRiverLakeEsteroBayMarine_17.readFeatures(json_WaterbodyRiverLakeEsteroBayMarine_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WaterbodyRiverLakeEsteroBayMarine_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterbodyRiverLakeEsteroBayMarine_17.addFeatures(features_WaterbodyRiverLakeEsteroBayMarine_17);
var lyr_WaterbodyRiverLakeEsteroBayMarine_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterbodyRiverLakeEsteroBayMarine_17, 
                style: style_WaterbodyRiverLakeEsteroBayMarine_17,
                popuplayertitle: "Waterbody (River-Lake-Estero-Bay-Marine)",
                interactive: true,
                title: '<img src="styles/legend/WaterbodyRiverLakeEsteroBayMarine_17.png" /> Waterbody (River-Lake-Estero-Bay-Marine)'
            });
var format_WaterQualityManagementArea_18 = new ol.format.GeoJSON();
var features_WaterQualityManagementArea_18 = format_WaterQualityManagementArea_18.readFeatures(json_WaterQualityManagementArea_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WaterQualityManagementArea_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterQualityManagementArea_18.addFeatures(features_WaterQualityManagementArea_18);
var lyr_WaterQualityManagementArea_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterQualityManagementArea_18, 
                style: style_WaterQualityManagementArea_18,
                popuplayertitle: "Water Quality Management Area",
                interactive: true,
                title: '<img src="styles/legend/WaterQualityManagementArea_18.png" /> Water Quality Management Area'
            });
var format_RegularMonitoringStretch_19 = new ol.format.GeoJSON();
var features_RegularMonitoringStretch_19 = format_RegularMonitoringStretch_19.readFeatures(json_RegularMonitoringStretch_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RegularMonitoringStretch_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegularMonitoringStretch_19.addFeatures(features_RegularMonitoringStretch_19);
var lyr_RegularMonitoringStretch_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegularMonitoringStretch_19, 
                style: style_RegularMonitoringStretch_19,
                popuplayertitle: "Regular Monitoring Stretch",
                interactive: true,
                title: '<img src="styles/legend/RegularMonitoringStretch_19.png" /> Regular Monitoring Stretch'
            });
var format_RecreationalWatersStretch_20 = new ol.format.GeoJSON();
var features_RecreationalWatersStretch_20 = format_RecreationalWatersStretch_20.readFeatures(json_RecreationalWatersStretch_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RecreationalWatersStretch_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecreationalWatersStretch_20.addFeatures(features_RecreationalWatersStretch_20);
var lyr_RecreationalWatersStretch_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecreationalWatersStretch_20, 
                style: style_RecreationalWatersStretch_20,
                popuplayertitle: "Recreational Waters Stretch",
                interactive: true,
                title: '<img src="styles/legend/RecreationalWatersStretch_20.png" /> Recreational Waters Stretch'
            });
var format_PriorityRiverStretch_21 = new ol.format.GeoJSON();
var features_PriorityRiverStretch_21 = format_PriorityRiverStretch_21.readFeatures(json_PriorityRiverStretch_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRiverStretch_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRiverStretch_21.addFeatures(features_PriorityRiverStretch_21);
var lyr_PriorityRiverStretch_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRiverStretch_21, 
                style: style_PriorityRiverStretch_21,
                popuplayertitle: "Priority River Stretch",
                interactive: true,
                title: '<img src="styles/legend/PriorityRiverStretch_21.png" /> Priority River Stretch'
            });
var format_PriorityRecreationalStretch_22 = new ol.format.GeoJSON();
var features_PriorityRecreationalStretch_22 = format_PriorityRecreationalStretch_22.readFeatures(json_PriorityRecreationalStretch_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRecreationalStretch_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRecreationalStretch_22.addFeatures(features_PriorityRecreationalStretch_22);
var lyr_PriorityRecreationalStretch_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRecreationalStretch_22, 
                style: style_PriorityRecreationalStretch_22,
                popuplayertitle: "Priority Recreational Stretch",
                interactive: true,
                title: '<img src="styles/legend/PriorityRecreationalStretch_22.png" /> Priority Recreational Stretch'
            });
var format_ModelWaterbodyStetch_23 = new ol.format.GeoJSON();
var features_ModelWaterbodyStetch_23 = format_ModelWaterbodyStetch_23.readFeatures(json_ModelWaterbodyStetch_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModelWaterbodyStetch_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModelWaterbodyStetch_23.addFeatures(features_ModelWaterbodyStetch_23);
var lyr_ModelWaterbodyStetch_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModelWaterbodyStetch_23, 
                style: style_ModelWaterbodyStetch_23,
                popuplayertitle: "Model Waterbody Stetch",
                interactive: true,
                title: '<img src="styles/legend/ModelWaterbodyStetch_23.png" /> Model Waterbody Stetch'
            });
var format_MercuryMonitoringStretch_24 = new ol.format.GeoJSON();
var features_MercuryMonitoringStretch_24 = format_MercuryMonitoringStretch_24.readFeatures(json_MercuryMonitoringStretch_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MercuryMonitoringStretch_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MercuryMonitoringStretch_24.addFeatures(features_MercuryMonitoringStretch_24);
var lyr_MercuryMonitoringStretch_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MercuryMonitoringStretch_24, 
                style: style_MercuryMonitoringStretch_24,
                popuplayertitle: "Mercury Monitoring Stretch",
                interactive: true,
                title: '<img src="styles/legend/MercuryMonitoringStretch_24.png" /> Mercury Monitoring Stretch'
            });
var format_ClassifiedWaterbodiesStretch_25 = new ol.format.GeoJSON();
var features_ClassifiedWaterbodiesStretch_25 = format_ClassifiedWaterbodiesStretch_25.readFeatures(json_ClassifiedWaterbodiesStretch_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClassifiedWaterbodiesStretch_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassifiedWaterbodiesStretch_25.addFeatures(features_ClassifiedWaterbodiesStretch_25);
var lyr_ClassifiedWaterbodiesStretch_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassifiedWaterbodiesStretch_25, 
                style: style_ClassifiedWaterbodiesStretch_25,
                popuplayertitle: "Classified Waterbodies Stretch",
                interactive: true,
                title: '<img src="styles/legend/ClassifiedWaterbodiesStretch_25.png" /> Classified Waterbodies Stretch'
            });
var format_AdoptanEsteroStretch_26 = new ol.format.GeoJSON();
var features_AdoptanEsteroStretch_26 = format_AdoptanEsteroStretch_26.readFeatures(json_AdoptanEsteroStretch_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdoptanEsteroStretch_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoptanEsteroStretch_26.addFeatures(features_AdoptanEsteroStretch_26);
var lyr_AdoptanEsteroStretch_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoptanEsteroStretch_26, 
                style: style_AdoptanEsteroStretch_26,
                popuplayertitle: "Adopt-an-Estero Stretch",
                interactive: true,
                title: '<img src="styles/legend/AdoptanEsteroStretch_26.png" /> Adopt-an-Estero Stretch'
            });
var format_WQMAClassification_27 = new ol.format.GeoJSON();
var features_WQMAClassification_27 = format_WQMAClassification_27.readFeatures(json_WQMAClassification_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WQMAClassification_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQMAClassification_27.addFeatures(features_WQMAClassification_27);
var lyr_WQMAClassification_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQMAClassification_27, 
                style: style_WQMAClassification_27,
                popuplayertitle: "WQMA Classification",
                interactive: true,
                title: '<img src="styles/legend/WQMAClassification_27.png" /> WQMA Classification'
            });
var format_RegularMonitoringClassification_28 = new ol.format.GeoJSON();
var features_RegularMonitoringClassification_28 = format_RegularMonitoringClassification_28.readFeatures(json_RegularMonitoringClassification_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RegularMonitoringClassification_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegularMonitoringClassification_28.addFeatures(features_RegularMonitoringClassification_28);
var lyr_RegularMonitoringClassification_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegularMonitoringClassification_28, 
                style: style_RegularMonitoringClassification_28,
                popuplayertitle: "Regular Monitoring Classification",
                interactive: true,
                title: '<img src="styles/legend/RegularMonitoringClassification_28.png" /> Regular Monitoring Classification'
            });
var format_RecreationalWatersClassification_29 = new ol.format.GeoJSON();
var features_RecreationalWatersClassification_29 = format_RecreationalWatersClassification_29.readFeatures(json_RecreationalWatersClassification_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RecreationalWatersClassification_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecreationalWatersClassification_29.addFeatures(features_RecreationalWatersClassification_29);
var lyr_RecreationalWatersClassification_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecreationalWatersClassification_29, 
                style: style_RecreationalWatersClassification_29,
                popuplayertitle: "Recreational Waters Classification",
                interactive: true,
                title: '<img src="styles/legend/RecreationalWatersClassification_29.png" /> Recreational Waters Classification'
            });
var format_PriorityRiverClassification_30 = new ol.format.GeoJSON();
var features_PriorityRiverClassification_30 = format_PriorityRiverClassification_30.readFeatures(json_PriorityRiverClassification_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRiverClassification_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRiverClassification_30.addFeatures(features_PriorityRiverClassification_30);
var lyr_PriorityRiverClassification_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRiverClassification_30, 
                style: style_PriorityRiverClassification_30,
                popuplayertitle: "Priority River Classification",
                interactive: true,
                title: '<img src="styles/legend/PriorityRiverClassification_30.png" /> Priority River Classification'
            });
var format_PriorityRecreationalWatersClassification_31 = new ol.format.GeoJSON();
var features_PriorityRecreationalWatersClassification_31 = format_PriorityRecreationalWatersClassification_31.readFeatures(json_PriorityRecreationalWatersClassification_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRecreationalWatersClassification_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRecreationalWatersClassification_31.addFeatures(features_PriorityRecreationalWatersClassification_31);
var lyr_PriorityRecreationalWatersClassification_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRecreationalWatersClassification_31, 
                style: style_PriorityRecreationalWatersClassification_31,
                popuplayertitle: "Priority Recreational Waters Classification",
                interactive: true,
                title: '<img src="styles/legend/PriorityRecreationalWatersClassification_31.png" /> Priority Recreational Waters Classification'
            });
var format_ModelWaterbodyClassification_32 = new ol.format.GeoJSON();
var features_ModelWaterbodyClassification_32 = format_ModelWaterbodyClassification_32.readFeatures(json_ModelWaterbodyClassification_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModelWaterbodyClassification_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModelWaterbodyClassification_32.addFeatures(features_ModelWaterbodyClassification_32);
var lyr_ModelWaterbodyClassification_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModelWaterbodyClassification_32, 
                style: style_ModelWaterbodyClassification_32,
                popuplayertitle: "Model Waterbody Classification",
                interactive: true,
                title: '<img src="styles/legend/ModelWaterbodyClassification_32.png" /> Model Waterbody Classification'
            });
var format_MercuryMonitoringClassification_33 = new ol.format.GeoJSON();
var features_MercuryMonitoringClassification_33 = format_MercuryMonitoringClassification_33.readFeatures(json_MercuryMonitoringClassification_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MercuryMonitoringClassification_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MercuryMonitoringClassification_33.addFeatures(features_MercuryMonitoringClassification_33);
var lyr_MercuryMonitoringClassification_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MercuryMonitoringClassification_33, 
                style: style_MercuryMonitoringClassification_33,
                popuplayertitle: "Mercury Monitoring Classification",
                interactive: true,
                title: '<img src="styles/legend/MercuryMonitoringClassification_33.png" /> Mercury Monitoring Classification'
            });
var format_ClassifiedWaterbodiesClassification_34 = new ol.format.GeoJSON();
var features_ClassifiedWaterbodiesClassification_34 = format_ClassifiedWaterbodiesClassification_34.readFeatures(json_ClassifiedWaterbodiesClassification_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClassifiedWaterbodiesClassification_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassifiedWaterbodiesClassification_34.addFeatures(features_ClassifiedWaterbodiesClassification_34);
var lyr_ClassifiedWaterbodiesClassification_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassifiedWaterbodiesClassification_34, 
                style: style_ClassifiedWaterbodiesClassification_34,
                popuplayertitle: "Classified Waterbodies Classification",
                interactive: true,
                title: '<img src="styles/legend/ClassifiedWaterbodiesClassification_34.png" /> Classified Waterbodies Classification'
            });
var format_AdoptanEsteroClassification_35 = new ol.format.GeoJSON();
var features_AdoptanEsteroClassification_35 = format_AdoptanEsteroClassification_35.readFeatures(json_AdoptanEsteroClassification_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdoptanEsteroClassification_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoptanEsteroClassification_35.addFeatures(features_AdoptanEsteroClassification_35);
var lyr_AdoptanEsteroClassification_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoptanEsteroClassification_35, 
                style: style_AdoptanEsteroClassification_35,
                popuplayertitle: "Adopt-an-Estero Classification",
                interactive: true,
                title: '<img src="styles/legend/AdoptanEsteroClassification_35.png" /> Adopt-an-Estero Classification'
            });
var format_WQMASamplingStations_36 = new ol.format.GeoJSON();
var features_WQMASamplingStations_36 = format_WQMASamplingStations_36.readFeatures(json_WQMASamplingStations_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WQMASamplingStations_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQMASamplingStations_36.addFeatures(features_WQMASamplingStations_36);
var lyr_WQMASamplingStations_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQMASamplingStations_36, 
                style: style_WQMASamplingStations_36,
                popuplayertitle: "WQMA Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/WQMASamplingStations_36.png" /> WQMA Sampling Stations'
            });
var format_RegularMonitoringSamplingStations_37 = new ol.format.GeoJSON();
var features_RegularMonitoringSamplingStations_37 = format_RegularMonitoringSamplingStations_37.readFeatures(json_RegularMonitoringSamplingStations_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RegularMonitoringSamplingStations_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegularMonitoringSamplingStations_37.addFeatures(features_RegularMonitoringSamplingStations_37);
var lyr_RegularMonitoringSamplingStations_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegularMonitoringSamplingStations_37, 
                style: style_RegularMonitoringSamplingStations_37,
                popuplayertitle: "Regular Monitoring Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/RegularMonitoringSamplingStations_37.png" /> Regular Monitoring Sampling Stations'
            });
var format_RecreationalWatersSamplingStations_38 = new ol.format.GeoJSON();
var features_RecreationalWatersSamplingStations_38 = format_RecreationalWatersSamplingStations_38.readFeatures(json_RecreationalWatersSamplingStations_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RecreationalWatersSamplingStations_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecreationalWatersSamplingStations_38.addFeatures(features_RecreationalWatersSamplingStations_38);
var lyr_RecreationalWatersSamplingStations_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecreationalWatersSamplingStations_38, 
                style: style_RecreationalWatersSamplingStations_38,
                popuplayertitle: "Recreational Waters Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/RecreationalWatersSamplingStations_38.png" /> Recreational Waters Sampling Stations'
            });
var format_PriorityRiverSamplingStations_39 = new ol.format.GeoJSON();
var features_PriorityRiverSamplingStations_39 = format_PriorityRiverSamplingStations_39.readFeatures(json_PriorityRiverSamplingStations_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRiverSamplingStations_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRiverSamplingStations_39.addFeatures(features_PriorityRiverSamplingStations_39);
var lyr_PriorityRiverSamplingStations_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRiverSamplingStations_39, 
                style: style_PriorityRiverSamplingStations_39,
                popuplayertitle: "Priority River Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/PriorityRiverSamplingStations_39.png" /> Priority River Sampling Stations'
            });
var format_ModelWaterbodySamplingStations_40 = new ol.format.GeoJSON();
var features_ModelWaterbodySamplingStations_40 = format_ModelWaterbodySamplingStations_40.readFeatures(json_ModelWaterbodySamplingStations_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModelWaterbodySamplingStations_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModelWaterbodySamplingStations_40.addFeatures(features_ModelWaterbodySamplingStations_40);
var lyr_ModelWaterbodySamplingStations_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModelWaterbodySamplingStations_40, 
                style: style_ModelWaterbodySamplingStations_40,
                popuplayertitle: "Model Waterbody Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/ModelWaterbodySamplingStations_40.png" /> Model Waterbody Sampling Stations'
            });
var format_PriorityRecreationalWatersSamplingStations_41 = new ol.format.GeoJSON();
var features_PriorityRecreationalWatersSamplingStations_41 = format_PriorityRecreationalWatersSamplingStations_41.readFeatures(json_PriorityRecreationalWatersSamplingStations_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PriorityRecreationalWatersSamplingStations_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriorityRecreationalWatersSamplingStations_41.addFeatures(features_PriorityRecreationalWatersSamplingStations_41);
var lyr_PriorityRecreationalWatersSamplingStations_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PriorityRecreationalWatersSamplingStations_41, 
                style: style_PriorityRecreationalWatersSamplingStations_41,
                popuplayertitle: "Priority Recreational Waters Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/PriorityRecreationalWatersSamplingStations_41.png" /> Priority Recreational Waters Sampling Stations'
            });
var format_MercuryMonitoringSamplingStations_42 = new ol.format.GeoJSON();
var features_MercuryMonitoringSamplingStations_42 = format_MercuryMonitoringSamplingStations_42.readFeatures(json_MercuryMonitoringSamplingStations_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MercuryMonitoringSamplingStations_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MercuryMonitoringSamplingStations_42.addFeatures(features_MercuryMonitoringSamplingStations_42);
var lyr_MercuryMonitoringSamplingStations_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MercuryMonitoringSamplingStations_42, 
                style: style_MercuryMonitoringSamplingStations_42,
                popuplayertitle: "Mercury Monitoring Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/MercuryMonitoringSamplingStations_42.png" /> Mercury Monitoring Sampling Stations'
            });
var format_ClassifiedWaterbodySamplingStations_43 = new ol.format.GeoJSON();
var features_ClassifiedWaterbodySamplingStations_43 = format_ClassifiedWaterbodySamplingStations_43.readFeatures(json_ClassifiedWaterbodySamplingStations_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClassifiedWaterbodySamplingStations_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassifiedWaterbodySamplingStations_43.addFeatures(features_ClassifiedWaterbodySamplingStations_43);
var lyr_ClassifiedWaterbodySamplingStations_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassifiedWaterbodySamplingStations_43, 
                style: style_ClassifiedWaterbodySamplingStations_43,
                popuplayertitle: "Classified Waterbody Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/ClassifiedWaterbodySamplingStations_43.png" /> Classified Waterbody Sampling Stations'
            });
var format_AdoptanEsteroSamplingStations_44 = new ol.format.GeoJSON();
var features_AdoptanEsteroSamplingStations_44 = format_AdoptanEsteroSamplingStations_44.readFeatures(json_AdoptanEsteroSamplingStations_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdoptanEsteroSamplingStations_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoptanEsteroSamplingStations_44.addFeatures(features_AdoptanEsteroSamplingStations_44);
var lyr_AdoptanEsteroSamplingStations_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoptanEsteroSamplingStations_44, 
                style: style_AdoptanEsteroSamplingStations_44,
                popuplayertitle: "Adopt-an-Estero Sampling Stations",
                interactive: true,
                title: '<img src="styles/legend/AdoptanEsteroSamplingStations_44.png" /> Adopt-an-Estero Sampling Stations'
            });
var format_Airshed_45 = new ol.format.GeoJSON();
var features_Airshed_45 = format_Airshed_45.readFeatures(json_Airshed_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Airshed_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airshed_45.addFeatures(features_Airshed_45);
var lyr_Airshed_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airshed_45, 
                style: style_Airshed_45,
                popuplayertitle: "Airshed",
                interactive: true,
                title: '<img src="styles/legend/Airshed_45.png" /> Airshed'
            });
var format_PrivateEmissionTestingCenter_46 = new ol.format.GeoJSON();
var features_PrivateEmissionTestingCenter_46 = format_PrivateEmissionTestingCenter_46.readFeatures(json_PrivateEmissionTestingCenter_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PrivateEmissionTestingCenter_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateEmissionTestingCenter_46.addFeatures(features_PrivateEmissionTestingCenter_46);
var lyr_PrivateEmissionTestingCenter_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrivateEmissionTestingCenter_46, 
                style: style_PrivateEmissionTestingCenter_46,
                popuplayertitle: "Private Emission Testing Center",
                interactive: true,
                title: '<img src="styles/legend/PrivateEmissionTestingCenter_46.png" /> Private Emission Testing Center'
            });
var format_AirQualityMonitoringStation_47 = new ol.format.GeoJSON();
var features_AirQualityMonitoringStation_47 = format_AirQualityMonitoringStation_47.readFeatures(json_AirQualityMonitoringStation_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AirQualityMonitoringStation_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirQualityMonitoringStation_47.addFeatures(features_AirQualityMonitoringStation_47);
var lyr_AirQualityMonitoringStation_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirQualityMonitoringStation_47, 
                style: style_AirQualityMonitoringStation_47,
                popuplayertitle: "Air Quality Monitoring Station",
                interactive: true,
                title: '<img src="styles/legend/AirQualityMonitoringStation_47.png" /> Air Quality Monitoring Station'
            });
var format_ECC2022Pointnoduplicates_48 = new ol.format.GeoJSON();
var features_ECC2022Pointnoduplicates_48 = format_ECC2022Pointnoduplicates_48.readFeatures(json_ECC2022Pointnoduplicates_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2022Pointnoduplicates_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2022Pointnoduplicates_48.addFeatures(features_ECC2022Pointnoduplicates_48);
var lyr_ECC2022Pointnoduplicates_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2022Pointnoduplicates_48, 
                style: style_ECC2022Pointnoduplicates_48,
                popuplayertitle: "ECC2022(Point)noduplicates)",
                interactive: true,
                title: '<img src="styles/legend/ECC2022Pointnoduplicates_48.png" /> ECC2022(Point)noduplicates)'
            });
var format_ECC2021Pointnoduplicates_49 = new ol.format.GeoJSON();
var features_ECC2021Pointnoduplicates_49 = format_ECC2021Pointnoduplicates_49.readFeatures(json_ECC2021Pointnoduplicates_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2021Pointnoduplicates_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2021Pointnoduplicates_49.addFeatures(features_ECC2021Pointnoduplicates_49);
var lyr_ECC2021Pointnoduplicates_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2021Pointnoduplicates_49, 
                style: style_ECC2021Pointnoduplicates_49,
                popuplayertitle: "ECC2021(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2021Pointnoduplicates_49.png" /> ECC2021(Point)noduplicates'
            });
var format_ECC2020Pointnoduplicates_50 = new ol.format.GeoJSON();
var features_ECC2020Pointnoduplicates_50 = format_ECC2020Pointnoduplicates_50.readFeatures(json_ECC2020Pointnoduplicates_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2020Pointnoduplicates_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2020Pointnoduplicates_50.addFeatures(features_ECC2020Pointnoduplicates_50);
var lyr_ECC2020Pointnoduplicates_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2020Pointnoduplicates_50, 
                style: style_ECC2020Pointnoduplicates_50,
                popuplayertitle: "ECC2020(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2020Pointnoduplicates_50.png" /> ECC2020(Point)noduplicates'
            });
var format_ECC2019Pointnoduplicates_51 = new ol.format.GeoJSON();
var features_ECC2019Pointnoduplicates_51 = format_ECC2019Pointnoduplicates_51.readFeatures(json_ECC2019Pointnoduplicates_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2019Pointnoduplicates_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2019Pointnoduplicates_51.addFeatures(features_ECC2019Pointnoduplicates_51);
var lyr_ECC2019Pointnoduplicates_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2019Pointnoduplicates_51, 
                style: style_ECC2019Pointnoduplicates_51,
                popuplayertitle: "ECC2019(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2019Pointnoduplicates_51.png" /> ECC2019(Point)noduplicates'
            });
var format_ECC2018Pointnoduplicates_52 = new ol.format.GeoJSON();
var features_ECC2018Pointnoduplicates_52 = format_ECC2018Pointnoduplicates_52.readFeatures(json_ECC2018Pointnoduplicates_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2018Pointnoduplicates_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2018Pointnoduplicates_52.addFeatures(features_ECC2018Pointnoduplicates_52);
var lyr_ECC2018Pointnoduplicates_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2018Pointnoduplicates_52, 
                style: style_ECC2018Pointnoduplicates_52,
                popuplayertitle: "ECC2018(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2018Pointnoduplicates_52.png" /> ECC2018(Point)noduplicates'
            });
var format_ECC2017Pointnoduplicates_53 = new ol.format.GeoJSON();
var features_ECC2017Pointnoduplicates_53 = format_ECC2017Pointnoduplicates_53.readFeatures(json_ECC2017Pointnoduplicates_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2017Pointnoduplicates_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2017Pointnoduplicates_53.addFeatures(features_ECC2017Pointnoduplicates_53);
var lyr_ECC2017Pointnoduplicates_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2017Pointnoduplicates_53, 
                style: style_ECC2017Pointnoduplicates_53,
                popuplayertitle: "ECC2017(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2017Pointnoduplicates_53.png" /> ECC2017(Point)noduplicates'
            });
var format_ECC2016Pointnoduplicates_54 = new ol.format.GeoJSON();
var features_ECC2016Pointnoduplicates_54 = format_ECC2016Pointnoduplicates_54.readFeatures(json_ECC2016Pointnoduplicates_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2016Pointnoduplicates_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2016Pointnoduplicates_54.addFeatures(features_ECC2016Pointnoduplicates_54);
var lyr_ECC2016Pointnoduplicates_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2016Pointnoduplicates_54, 
                style: style_ECC2016Pointnoduplicates_54,
                popuplayertitle: "ECC2016(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2016Pointnoduplicates_54.png" /> ECC2016(Point)noduplicates'
            });
var format_ECC2015Pointnoduplicates_55 = new ol.format.GeoJSON();
var features_ECC2015Pointnoduplicates_55 = format_ECC2015Pointnoduplicates_55.readFeatures(json_ECC2015Pointnoduplicates_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ECC2015Pointnoduplicates_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECC2015Pointnoduplicates_55.addFeatures(features_ECC2015Pointnoduplicates_55);
var lyr_ECC2015Pointnoduplicates_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECC2015Pointnoduplicates_55, 
                style: style_ECC2015Pointnoduplicates_55,
                popuplayertitle: "ECC2015(Point)noduplicates",
                interactive: true,
                title: '<img src="styles/legend/ECC2015Pointnoduplicates_55.png" /> ECC2015(Point)noduplicates'
            });
var group_ECC = new ol.layer.Group({
                                layers: [lyr_ECC2022Pointnoduplicates_48,lyr_ECC2021Pointnoduplicates_49,lyr_ECC2020Pointnoduplicates_50,lyr_ECC2019Pointnoduplicates_51,lyr_ECC2018Pointnoduplicates_52,lyr_ECC2017Pointnoduplicates_53,lyr_ECC2016Pointnoduplicates_54,lyr_ECC2015Pointnoduplicates_55,],
                                fold: "open",
                                title: "ECC"});
var group_AQMAirQualityManagement = new ol.layer.Group({
                                layers: [lyr_Airshed_45,lyr_PrivateEmissionTestingCenter_46,lyr_AirQualityMonitoringStation_47,],
                                fold: "open",
                                title: "AQM (Air Quality Management)"});
var group_WaterQualitySamplingStations = new ol.layer.Group({
                                layers: [lyr_WQMASamplingStations_36,lyr_RegularMonitoringSamplingStations_37,lyr_RecreationalWatersSamplingStations_38,lyr_PriorityRiverSamplingStations_39,lyr_ModelWaterbodySamplingStations_40,lyr_PriorityRecreationalWatersSamplingStations_41,lyr_MercuryMonitoringSamplingStations_42,lyr_ClassifiedWaterbodySamplingStations_43,lyr_AdoptanEsteroSamplingStations_44,],
                                fold: "open",
                                title: "Water Quality Sampling Stations"});
var group_WaterbodyClassificationBestUsage = new ol.layer.Group({
                                layers: [lyr_WQMAClassification_27,lyr_RegularMonitoringClassification_28,lyr_RecreationalWatersClassification_29,lyr_PriorityRiverClassification_30,lyr_PriorityRecreationalWatersClassification_31,lyr_ModelWaterbodyClassification_32,lyr_MercuryMonitoringClassification_33,lyr_ClassifiedWaterbodiesClassification_34,lyr_AdoptanEsteroClassification_35,],
                                fold: "open",
                                title: "Waterbody Classification (Best Usage)"});
var group_WaterbodyStretch = new ol.layer.Group({
                                layers: [lyr_WQMAStretch_16,lyr_WaterbodyRiverLakeEsteroBayMarine_17,lyr_WaterQualityManagementArea_18,lyr_RegularMonitoringStretch_19,lyr_RecreationalWatersStretch_20,lyr_PriorityRiverStretch_21,lyr_PriorityRecreationalStretch_22,lyr_ModelWaterbodyStetch_23,lyr_MercuryMonitoringStretch_24,lyr_ClassifiedWaterbodiesStretch_25,lyr_AdoptanEsteroStretch_26,],
                                fold: "open",
                                title: "Waterbody (Stretch)"});
var group_ESWMEcologicalSolidWasteManagement = new ol.layer.Group({
                                layers: [lyr_SolidWasteGeneration2022_11,lyr_SanitaryLandfill_12,lyr_MRFLGUInitiated_13,lyr_MRFEMBFunded_14,lyr_DisposalFacility_15,],
                                fold: "open",
                                title: "ESWM (Ecological Solid Waste Management)"});
var group_PROVINCIALBASEMAP = new ol.layer.Group({
                                layers: [lyr_Isabela_5,lyr_ZamboangadelSur_6,lyr_ZamboangaSibugay_7,lyr_ZamboangadelNorte_8,],
                                fold: "open",
                                title: "PROVINCIAL BASEMAP"});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_EsriTopoWorld_2.setVisible(false);lyr_OpenTopoMap_3.setVisible(false);lyr_OSMStandard_4.setVisible(true);lyr_Isabela_5.setVisible(false);lyr_ZamboangadelSur_6.setVisible(false);lyr_ZamboangaSibugay_7.setVisible(false);lyr_ZamboangadelNorte_8.setVisible(false);lyr_EMBIXLaboratory_9.setVisible(false);lyr_EMBIXOffices_10.setVisible(true);lyr_SolidWasteGeneration2022_11.setVisible(false);lyr_SanitaryLandfill_12.setVisible(false);lyr_MRFLGUInitiated_13.setVisible(false);lyr_MRFEMBFunded_14.setVisible(false);lyr_DisposalFacility_15.setVisible(false);lyr_WQMAStretch_16.setVisible(false);lyr_WaterbodyRiverLakeEsteroBayMarine_17.setVisible(false);lyr_WaterQualityManagementArea_18.setVisible(false);lyr_RegularMonitoringStretch_19.setVisible(false);lyr_RecreationalWatersStretch_20.setVisible(false);lyr_PriorityRiverStretch_21.setVisible(false);lyr_PriorityRecreationalStretch_22.setVisible(false);lyr_ModelWaterbodyStetch_23.setVisible(false);lyr_MercuryMonitoringStretch_24.setVisible(false);lyr_ClassifiedWaterbodiesStretch_25.setVisible(false);lyr_AdoptanEsteroStretch_26.setVisible(false);lyr_WQMAClassification_27.setVisible(false);lyr_RegularMonitoringClassification_28.setVisible(false);lyr_RecreationalWatersClassification_29.setVisible(false);lyr_PriorityRiverClassification_30.setVisible(false);lyr_PriorityRecreationalWatersClassification_31.setVisible(false);lyr_ModelWaterbodyClassification_32.setVisible(false);lyr_MercuryMonitoringClassification_33.setVisible(false);lyr_ClassifiedWaterbodiesClassification_34.setVisible(false);lyr_AdoptanEsteroClassification_35.setVisible(false);lyr_WQMASamplingStations_36.setVisible(false);lyr_RegularMonitoringSamplingStations_37.setVisible(false);lyr_RecreationalWatersSamplingStations_38.setVisible(false);lyr_PriorityRiverSamplingStations_39.setVisible(false);lyr_ModelWaterbodySamplingStations_40.setVisible(false);lyr_PriorityRecreationalWatersSamplingStations_41.setVisible(false);lyr_MercuryMonitoringSamplingStations_42.setVisible(false);lyr_ClassifiedWaterbodySamplingStations_43.setVisible(false);lyr_AdoptanEsteroSamplingStations_44.setVisible(false);lyr_Airshed_45.setVisible(false);lyr_PrivateEmissionTestingCenter_46.setVisible(false);lyr_AirQualityMonitoringStation_47.setVisible(false);lyr_ECC2022Pointnoduplicates_48.setVisible(false);lyr_ECC2021Pointnoduplicates_49.setVisible(false);lyr_ECC2020Pointnoduplicates_50.setVisible(false);lyr_ECC2019Pointnoduplicates_51.setVisible(false);lyr_ECC2018Pointnoduplicates_52.setVisible(false);lyr_ECC2017Pointnoduplicates_53.setVisible(false);lyr_ECC2016Pointnoduplicates_54.setVisible(false);lyr_ECC2015Pointnoduplicates_55.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_EsriTopoWorld_2,lyr_OpenTopoMap_3,lyr_OSMStandard_4,group_PROVINCIALBASEMAP,lyr_EMBIXLaboratory_9,lyr_EMBIXOffices_10,group_ESWMEcologicalSolidWasteManagement,group_WaterbodyStretch,group_WaterbodyClassificationBestUsage,group_WaterQualitySamplingStations,group_AQMAirQualityManagement,group_ECC];
lyr_Isabela_5.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_ZamboangadelSur_6.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_ZamboangaSibugay_7.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_ZamboangadelNorte_8.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_EMBIXLaboratory_9.set('fieldAliases', {'Name': 'Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_EMBIXOffices_10.set('fieldAliases', {'Name': 'Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_SolidWasteGeneration2022_11.set('fieldAliases', {'MUNCITY': 'MUNCITY', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', 'SWG2022': 'SWG2022', });
lyr_SanitaryLandfill_12.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'Status': 'Status', 'Category': 'Category', 'LifeExp(yr': 'LifeExp(yr', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_MRFLGUInitiated_13.set('fieldAliases', {'City/Muni': 'City/Muni', 'Region': 'Region', 'Province': 'Province', 'Barangay': 'Barangay', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'OprStatus': 'OprStatus', });
lyr_MRFEMBFunded_14.set('fieldAliases', {'City/Muni': 'City/Muni', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'Barangay': 'Barangay', 'OprStatus': 'OprStatus', 'FundStatus': 'FundStatus', 'Coverage': 'Coverage', });
lyr_DisposalFacility_15.set('fieldAliases', {'City/Muni': 'City/Muni', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'Barangay': 'Barangay', 'SCRP': 'SCRP', 'Status': 'Status', });
lyr_WQMAStretch_16.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_WaterbodyRiverLakeEsteroBayMarine_17.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Length(m)': 'Length(m)', 'Region': 'Region', });
lyr_WaterQualityManagementArea_18.set('fieldAliases', {'WQMAName': 'WQMAName', 'Region': 'Region', 'Policy': 'Policy', 'Area(hec)': 'Area(hec)', });
lyr_RegularMonitoringStretch_19.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Length(m)': 'Length(m)', 'Region': 'Region', });
lyr_RecreationalWatersStretch_20.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_PriorityRiverStretch_21.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Length(m)': 'Length(m)', 'Region': 'Region', });
lyr_PriorityRecreationalStretch_22.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Length(m)': 'Length(m)', 'Region': 'Region', });
lyr_ModelWaterbodyStetch_23.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_MercuryMonitoringStretch_24.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_ClassifiedWaterbodiesStretch_25.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_AdoptanEsteroStretch_26.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Length(m)': 'Length(m)', });
lyr_WQMAClassification_27.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_RegularMonitoringClassification_28.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_RecreationalWatersClassification_29.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_PriorityRiverClassification_30.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_PriorityRecreationalWatersClassification_31.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_ModelWaterbodyClassification_32.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_MercuryMonitoringClassification_33.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_ClassifiedWaterbodiesClassification_34.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_AdoptanEsteroClassification_35.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'WtrbdyType': 'WtrbdyType', 'Class': 'Class', 'Region': 'Region', 'Station': 'Station', 'Length(m)': 'Length(m)', });
lyr_WQMASamplingStations_36.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_RegularMonitoringSamplingStations_37.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbyType': 'WtrbyType', 'Station': 'Station', 'Class': 'Class', });
lyr_RecreationalWatersSamplingStations_38.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_PriorityRiverSamplingStations_39.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', });
lyr_ModelWaterbodySamplingStations_40.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_PriorityRecreationalWatersSamplingStations_41.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', });
lyr_MercuryMonitoringSamplingStations_42.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_ClassifiedWaterbodySamplingStations_43.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'Station': 'Station', 'Class': 'Class', 'WtrbdyType': 'WtrbdyType', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_AdoptanEsteroSamplingStations_44.set('fieldAliases', {'WtrbdyName': 'WtrbdyName', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'WtrbdyType': 'WtrbdyType', 'Station': 'Station', 'Class': 'Class', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Airshed_45.set('fieldAliases', {'Region': 'Region', 'Airshed': 'Airshed', 'Type': 'Type', 'Policy': 'Policy', 'Category': 'Category', });
lyr_PrivateEmissionTestingCenter_46.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'Province': 'Province', 'City/Muni': 'City/Muni', 'Barangay': 'Barangay', 'Status': 'Status', 'Opacimeter': 'Opacimeter', 'GasAnlysr': 'GasAnlysr', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_AirQualityMonitoringStation_47.set('fieldAliases', {'StnName': 'StnName', 'Region': 'Region', 'AreaType': 'AreaType', 'StnStype': 'StnStype', 'StnAddress': 'StnAddress', 'OprStatus': 'OprStatus', 'CalStatus': 'CalStatus', 'TSP': 'TSP', 'PM10': 'PM10', 'PM2.5': 'PM2.5', 'SO2': 'SO2', 'NO2': 'NO2', 'O3': 'O3', 'CO': 'CO', 'HG': 'HG', 'MET': 'MET', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_ECC2022Pointnoduplicates_48.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2021Pointnoduplicates_49.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2020Pointnoduplicates_50.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2019Pointnoduplicates_51.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2018Pointnoduplicates_52.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2017Pointnoduplicates_53.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2016Pointnoduplicates_54.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_ECC2015Pointnoduplicates_55.set('fieldAliases', {'ECCNo': 'ECCNo', 'ProjGUID': 'ProjGUID', 'Region': 'Region', 'ProjType': 'ProjType', 'ProjSubTyp': 'ProjSubTyp', 'ProjSpecTy': 'ProjSpecTy', 'ProjSpecSu': 'ProjSpecSu', 'ProjName': 'ProjName', 'MailAdd': 'MailAdd', 'Rep': 'Rep', 'Email': 'Email', 'ZoneClass': 'ZoneClass', 'Mun': 'Mun', 'Province': 'Province', 'LandArea': 'LandArea', 'Descript': 'Descript', 'ProjSize': 'ProjSize', 'NoEmployee': 'NoEmployee', 'ProjCost': 'ProjCost', 'AreaType': 'AreaType', 'Area': 'Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_Isabela_5.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_ZamboangadelSur_6.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_ZamboangaSibugay_7.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_ZamboangadelNorte_8.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_EMBIXLaboratory_9.set('fieldImages', {'Name': '', 'Longitude': '', 'Latitude': '', });
lyr_EMBIXOffices_10.set('fieldImages', {'Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_SolidWasteGeneration2022_11.set('fieldImages', {'MUNCITY': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', 'SWG2022': 'TextEdit', });
lyr_SanitaryLandfill_12.set('fieldImages', {'Name': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'Status': '', 'Category': '', 'LifeExp(yr': '', 'Longitude': '', 'Latitude': '', });
lyr_MRFLGUInitiated_13.set('fieldImages', {'City/Muni': '', 'Region': '', 'Province': '', 'Barangay': '', 'Longitude': '', 'Latitude': '', 'OprStatus': '', });
lyr_MRFEMBFunded_14.set('fieldImages', {'City/Muni': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'Barangay': '', 'OprStatus': '', 'FundStatus': '', 'Coverage': '', });
lyr_DisposalFacility_15.set('fieldImages', {'City/Muni': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'Barangay': '', 'SCRP': '', 'Status': '', });
lyr_WQMAStretch_16.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_WaterbodyRiverLakeEsteroBayMarine_17.set('fieldImages', {'WtrbdyName': '', 'Length(m)': '', 'Region': '', });
lyr_WaterQualityManagementArea_18.set('fieldImages', {'WQMAName': 'TextEdit', 'Region': 'Range', 'Policy': 'TextEdit', 'Area(hec)': 'TextEdit', });
lyr_RegularMonitoringStretch_19.set('fieldImages', {'WtrbdyName': '', 'Length(m)': '', 'Region': '', });
lyr_RecreationalWatersStretch_20.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_PriorityRiverStretch_21.set('fieldImages', {'WtrbdyName': '', 'Length(m)': '', 'Region': '', });
lyr_PriorityRecreationalStretch_22.set('fieldImages', {'WtrbdyName': '', 'Length(m)': '', 'Region': '', });
lyr_ModelWaterbodyStetch_23.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_MercuryMonitoringStretch_24.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_ClassifiedWaterbodiesStretch_25.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_AdoptanEsteroStretch_26.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Length(m)': '', });
lyr_WQMAClassification_27.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_RegularMonitoringClassification_28.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_RecreationalWatersClassification_29.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'WtrbdyType': '', 'Class': '', 'Station': '', 'Length(m)': '', });
lyr_PriorityRiverClassification_30.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'WtrbdyType': '', 'Class': '', 'Station': '', 'Length(m)': '', });
lyr_PriorityRecreationalWatersClassification_31.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'WtrbdyType': '', 'Class': '', 'Station': '', 'Length(m)': '', });
lyr_ModelWaterbodyClassification_32.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_MercuryMonitoringClassification_33.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'WtrbdyType': '', 'Class': '', 'Station': '', 'Length(m)': '', });
lyr_ClassifiedWaterbodiesClassification_34.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_AdoptanEsteroClassification_35.set('fieldImages', {'WtrbdyName': '', 'WtrbdyType': '', 'Class': '', 'Region': '', 'Station': '', 'Length(m)': '', });
lyr_WQMASamplingStations_36.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_RegularMonitoringSamplingStations_37.set('fieldImages', {'WtrbdyName': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbyType': '', 'Station': '', 'Class': '', });
lyr_RecreationalWatersSamplingStations_38.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_PriorityRiverSamplingStations_39.set('fieldImages', {'WtrbdyName': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', });
lyr_ModelWaterbodySamplingStations_40.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_PriorityRecreationalWatersSamplingStations_41.set('fieldImages', {'WtrbdyName': '', 'Longitude': '', 'Latitude': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', });
lyr_MercuryMonitoringSamplingStations_42.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_ClassifiedWaterbodySamplingStations_43.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'Station': '', 'Class': '', 'WtrbdyType': '', 'Longitude': '', 'Latitude': '', });
lyr_AdoptanEsteroSamplingStations_44.set('fieldImages', {'WtrbdyName': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'WtrbdyType': '', 'Station': '', 'Class': '', 'Longitude': '', 'Latitude': '', });
lyr_Airshed_45.set('fieldImages', {'Region': 'Range', 'Airshed': 'TextEdit', 'Type': 'TextEdit', 'Policy': 'TextEdit', 'Category': 'TextEdit', });
lyr_PrivateEmissionTestingCenter_46.set('fieldImages', {'Name': '', 'Region': '', 'Province': '', 'City/Muni': '', 'Barangay': '', 'Status': '', 'Opacimeter': '', 'GasAnlysr': '', 'Longitude': '', 'Latitude': '', });
lyr_AirQualityMonitoringStation_47.set('fieldImages', {'StnName': '', 'Region': '', 'AreaType': '', 'StnStype': '', 'StnAddress': '', 'OprStatus': '', 'CalStatus': '', 'TSP': '', 'PM10': '', 'PM2.5': '', 'SO2': '', 'NO2': '', 'O3': '', 'CO': '', 'HG': '', 'MET': '', 'Longitude': '', 'Latitude': '', });
lyr_ECC2022Pointnoduplicates_48.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2021Pointnoduplicates_49.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2020Pointnoduplicates_50.set('fieldImages', {'ECCNo': 'TextEdit', 'ProjGUID': 'TextEdit', 'Region': 'TextEdit', 'ProjType': 'TextEdit', 'ProjSubTyp': 'TextEdit', 'ProjSpecTy': 'TextEdit', 'ProjSpecSu': 'TextEdit', 'ProjName': 'TextEdit', 'MailAdd': 'TextEdit', 'Rep': 'TextEdit', 'Email': 'TextEdit', 'ZoneClass': 'TextEdit', 'Mun': 'TextEdit', 'Province': 'TextEdit', 'LandArea': 'TextEdit', 'Descript': 'TextEdit', 'ProjSize': 'TextEdit', 'NoEmployee': 'TextEdit', 'ProjCost': 'TextEdit', 'AreaType': 'TextEdit', 'Area': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', });
lyr_ECC2019Pointnoduplicates_51.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2018Pointnoduplicates_52.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2017Pointnoduplicates_53.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2016Pointnoduplicates_54.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_ECC2015Pointnoduplicates_55.set('fieldImages', {'ECCNo': '', 'ProjGUID': '', 'Region': '', 'ProjType': '', 'ProjSubTyp': '', 'ProjSpecTy': '', 'ProjSpecSu': '', 'ProjName': '', 'MailAdd': '', 'Rep': '', 'Email': '', 'ZoneClass': '', 'Mun': '', 'Province': '', 'LandArea': '', 'Descript': '', 'ProjSize': '', 'NoEmployee': '', 'ProjCost': '', 'AreaType': '', 'Area': '', 'Latitude': '', 'Longitude': '', 'Status': '', });
lyr_Isabela_5.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - visible with data', 'ID_2': 'hidden field', 'NAME_2': 'inline label - visible with data', 'ID_3': 'hidden field', 'NAME_3': 'inline label - visible with data', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'PROVINCE': 'hidden field', 'REGION': 'hidden field', });
lyr_ZamboangadelSur_6.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - visible with data', 'ID_2': 'hidden field', 'NAME_2': 'inline label - visible with data', 'ID_3': 'hidden field', 'NAME_3': 'inline label - visible with data', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'PROVINCE': 'hidden field', 'REGION': 'hidden field', });
lyr_ZamboangaSibugay_7.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - visible with data', 'ID_2': 'hidden field', 'NAME_2': 'inline label - visible with data', 'ID_3': 'hidden field', 'NAME_3': 'inline label - visible with data', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'PROVINCE': 'hidden field', 'REGION': 'hidden field', });
lyr_ZamboangadelNorte_8.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - visible with data', 'ID_2': 'hidden field', 'NAME_2': 'inline label - visible with data', 'ID_3': 'hidden field', 'NAME_3': 'inline label - visible with data', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'PROVINCE': 'hidden field', 'REGION': 'hidden field', });
lyr_EMBIXLaboratory_9.set('fieldLabels', {'Name': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_EMBIXOffices_10.set('fieldLabels', {'Name': 'inline label - visible with data', 'Longitude': 'no label', 'Latitude': 'inline label - visible with data', });
lyr_SolidWasteGeneration2022_11.set('fieldLabels', {'MUNCITY': 'inline label - visible with data', 'PROVINCE': 'inline label - visible with data', 'REGION': 'inline label - visible with data', 'SWG2022': 'inline label - visible with data', });
lyr_SanitaryLandfill_12.set('fieldLabels', {'Name': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Category': 'inline label - visible with data', 'LifeExp(yr': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_MRFLGUInitiated_13.set('fieldLabels', {'City/Muni': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'OprStatus': 'inline label - visible with data', });
lyr_MRFEMBFunded_14.set('fieldLabels', {'City/Muni': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'OprStatus': 'inline label - visible with data', 'FundStatus': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', });
lyr_DisposalFacility_15.set('fieldLabels', {'City/Muni': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'SCRP': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_WQMAStretch_16.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_WaterbodyRiverLakeEsteroBayMarine_17.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_WaterQualityManagementArea_18.set('fieldLabels', {'WQMAName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Policy': 'inline label - visible with data', 'Area(hec)': 'inline label - visible with data', });
lyr_RegularMonitoringStretch_19.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_RecreationalWatersStretch_20.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_PriorityRiverStretch_21.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_PriorityRecreationalStretch_22.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_ModelWaterbodyStetch_23.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_MercuryMonitoringStretch_24.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_ClassifiedWaterbodiesStretch_25.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_AdoptanEsteroStretch_26.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_WQMAClassification_27.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_RegularMonitoringClassification_28.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_RecreationalWatersClassification_29.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_PriorityRiverClassification_30.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_PriorityRecreationalWatersClassification_31.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_ModelWaterbodyClassification_32.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_MercuryMonitoringClassification_33.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_ClassifiedWaterbodiesClassification_34.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_AdoptanEsteroClassification_35.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Length(m)': 'inline label - visible with data', });
lyr_WQMASamplingStations_36.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_RegularMonitoringSamplingStations_37.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', });
lyr_RecreationalWatersSamplingStations_38.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_PriorityRiverSamplingStations_39.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', });
lyr_ModelWaterbodySamplingStations_40.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_PriorityRecreationalWatersSamplingStations_41.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', });
lyr_MercuryMonitoringSamplingStations_42.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_ClassifiedWaterbodySamplingStations_43.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_AdoptanEsteroSamplingStations_44.set('fieldLabels', {'WtrbdyName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'WtrbdyType': 'inline label - visible with data', 'Station': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_Airshed_45.set('fieldLabels', {'Region': 'inline label - visible with data', 'Airshed': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Policy': 'inline label - visible with data', 'Category': 'inline label - visible with data', });
lyr_PrivateEmissionTestingCenter_46.set('fieldLabels', {'Name': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'City/Muni': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Opacimeter': 'inline label - visible with data', 'GasAnlysr': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_AirQualityMonitoringStation_47.set('fieldLabels', {'StnName': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'AreaType': 'inline label - visible with data', 'StnStype': 'inline label - visible with data', 'StnAddress': 'inline label - visible with data', 'OprStatus': 'inline label - visible with data', 'CalStatus': 'inline label - visible with data', 'TSP': 'inline label - visible with data', 'PM10': 'inline label - visible with data', 'PM2.5': 'inline label - visible with data', 'SO2': 'inline label - visible with data', 'NO2': 'inline label - visible with data', 'O3': 'inline label - visible with data', 'CO': 'inline label - visible with data', 'HG': 'inline label - visible with data', 'MET': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_ECC2022Pointnoduplicates_48.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2021Pointnoduplicates_49.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2020Pointnoduplicates_50.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2019Pointnoduplicates_51.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2018Pointnoduplicates_52.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2017Pointnoduplicates_53.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2016Pointnoduplicates_54.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2015Pointnoduplicates_55.set('fieldLabels', {'ECCNo': 'inline label - visible with data', 'ProjGUID': 'inline label - visible with data', 'Region': 'hidden field', 'ProjType': 'inline label - visible with data', 'ProjSubTyp': 'inline label - visible with data', 'ProjSpecTy': 'inline label - visible with data', 'ProjSpecSu': 'hidden field', 'ProjName': 'inline label - visible with data', 'MailAdd': 'inline label - visible with data', 'Rep': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'ZoneClass': 'inline label - visible with data', 'Mun': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'LandArea': 'inline label - visible with data', 'Descript': 'hidden field', 'ProjSize': 'inline label - visible with data', 'NoEmployee': 'inline label - visible with data', 'ProjCost': 'inline label - visible with data', 'AreaType': 'hidden field', 'Area': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_ECC2015Pointnoduplicates_55.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});