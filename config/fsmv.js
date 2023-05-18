var freeBus = {
    "type": "FeatureCollection",
    "features": [
  /*      {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.00341892242432, 39.75383843460583],
                    [-105.0008225440979, 39.751891803969535]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line 1 that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
	*/
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.0008225440979, 39.751891803969535],
                    [-104.99820470809937, 39.74979664004068]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line 2 that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-104.99820470809937, 39.74979664004068],
                    [-104.98689651489258, 39.741052354709055]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line 3 that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};


var producteurs = {"type": "FeatureCollection","features":[
{"type": "Feature", "id": "01","geometry": {"type": "Point","coordinates":[2.186669,48.875615]},"properties": {"name":"Jean-FranÃ§ois La.","density":8868,"popupContent": "Toiture de Jean-FranÃ§ois La."}},
{"type": "Feature", "id": "02","geometry": {"type": "Point","coordinates":[2.212284,48.866602]},"properties": {"name":"Susan Ku.","density":7345,"popupContent": "Toiture de Susan Ku."}},
{"type": "Feature", "id": "03","geometry": {"type": "Point","coordinates":[2.20812,48.867035]},"properties": {"name":"Thomas To.","density":7061,"popupContent": "Toiture de Thomas To."}},
{"type": "Feature", "id": "04","geometry": {"type": "Point","coordinates":[2.18587,48.87396]},"properties": {"name":"Jean-Luc Qu.","density":6881,"popupContent": "Toiture de Jean-Luc Qu."}},
{"type": "Feature", "id": "05","geometry": {"type": "Point","coordinates":[2.189441,48.878925]},"properties": {"name":"Vincent Po.","density":6845,"popupContent": "Toiture de Vincent Po."}},
{"type": "Feature", "id": "06","geometry": {"type": "Point","coordinates":[2.164867,48.883122]},"properties": {"name":"Marie-Odile Tr.","density":6665,"popupContent": "Toiture de Marie-Odile Tr.."}},
{"type": "Feature", "id": "07","geometry": {"type": "Point","coordinates":[2.174381,48.881678]},"properties": {"name":"Pierre Ca.","density":6586,"popupContent": "Toiture de Pierre Ca."}},
{"type": "Feature", "id": "08","geometry": {"type": "Point","coordinates":[2.264862,48.9269]},"properties": {"name":"Michel Ja.","density":6500,"popupContent": "Toiture de Michel Ja."}},
{"type": "Feature", "id": "09","geometry": {"type": "Point","coordinates":[2.205948,48.868107]},"properties": {"name":"Catherine Ma.","density":6327,"popupContent": "Toiture de Catherine Ma."}},
{"type": "Feature", "id": "10","geometry": {"type": "Point","coordinates":[2.23278,48.879103]},"properties": {"name":"Olivier Gr.","density":5918,"popupContent": "Toiture de Olivier Gr."}},
{"type": "Feature", "id": "11","geometry": {"type": "Point","coordinates":[2.227301,48.878302]},"properties": {"name":"Philippe La.","density":5563,"popupContent": "Toiture de Philippe La."}},
{"type": "Feature", "id": "12","geometry": {"type": "Point","coordinates":[2.19241,48.861475]},"properties": {"name":"Patrice Pe.","density":5461,"popupContent": "Toiture de Patrice Pe."}},
{"type": "Feature", "id": "13","geometry": {"type": "Point","coordinates":[2.191183,48.872381]},"properties": {"name":"Christophe Ma.","density":5355,"popupContent": "Toiture de Christophe Ma."}},
{"type": "Feature", "id": "14","geometry": {"type": "Point","coordinates":[2.208811,48.882357]},"properties": {"name":"Bertil de.","density":5173,"popupContent": "Toiture de Bertil de."}},
{"type": "Feature", "id": "15","geometry": {"type": "Point","coordinates":[2.210467,48.868857]},"properties": {"name":"Luc Le.","density":5055,"popupContent": "Toiture de Luc Le."}},
{"type": "Feature", "id": "16","geometry": {"type": "Point","coordinates":[2.206254,48.870846]},"properties": {"name":"Marc So.","density":4800,"popupContent": "Toiture de Marc So."}},
{"type": "Feature", "id": "17","geometry": {"type": "Point","coordinates":[2.207422,48.86827]},"properties": {"name":"Dominique Di.","density":4510,"popupContent": "Toiture de Dominique Di."}},
{"type": "Feature", "id": "18","geometry": {"type": "Point","coordinates":[2.185092,48.859093]},"properties": {"name":"Gilles Bo.","density":3296,"popupContent": "Toiture de Gilles Bo."}},
{"type": "Feature", "id": "19","geometry": {"type": "Point","coordinates":[2.192235,48.861522]},"properties": {"name":"StÃ©phane So.","density":3279,"popupContent": "StÃ©phane So."}},
{"type": "Feature", "id": "20","geometry": {"type": "Point","coordinates":[2.189086,48.870368]},"properties": {"name":"Blandine Co.","density":3092,"popupContent": "Toiture de Blandine Co."}},
{"type": "Feature", "id": "21","geometry": {"type": "Point","coordinates":[2.187046,48.861513]},"properties": {"name":"Jean-Pierre Ve.","density":1829,"popupContent": "Toiture de Jean-Pierre Ve."}}

]};

var consommateurs = {"type": "FeatureCollection","features":[
{"type": "Feature", "id": "101","geometry": {"type": "Point","coordinates":[2.185186,48.867209]},"properties": {"name":"FranÃ§ois Bo.","density":0,"popupContent": "Toiture de Jean-FranÃ§ois La."}},
{"type": "Feature", "id": "102","geometry": {"type": "Point","coordinates":[2.184647,48.880209]},"properties": {"name":"Christian Bo.","density":0,"popupContent": "Toiture de Susan Ku."}},
{"type": "Feature", "id": "103","geometry": {"type": "Point","coordinates":[2.158803,48.888526]},"properties": {"name":"Francois Di.","density":0,"popupContent": "Toiture de Thomas To."}},
{"type": "Feature", "id": "104","geometry": {"type": "Point","coordinates":[2.223801,48.867859]},"properties": {"name":"Guillaume Du.","density":0,"popupContent": "Toiture de Jean-Luc Qu."}},
{"type": "Feature", "id": "105","geometry": {"type": "Point","coordinates":[2.255629,48.922407]},"properties": {"name":"Allyre & Capucine Gu.","density":0,"popupContent": "Toiture de Vincent Po."}},
{"type": "Feature", "id": "107","geometry": {"type": "Point","coordinates":[2.232223,48.87857]},"properties": {"name":"Nelly Ja.","density":0,"popupContent": "Toiture de Michel Ja."}},
{"type": "Feature", "id": "108","geometry": {"type": "Point","coordinates":[2.22507,48.868952]},"properties": {"name":"CÃ©dric Ju.","density":0,"popupContent": "Toiture de Michel Ja."}},
{"type": "Feature", "id": "109","geometry": {"type": "Point","coordinates":[2.18213,48.871968]},"properties": {"name":"GÃ©rard Ku. / Thermie","density":0,"popupContent": "Toiture de Catherine Ma."}},
{"type": "Feature", "id": "110","geometry": {"type": "Point","coordinates":[2.249411,48.92517]},"properties": {"name":"Bernard La.","density":0,"popupContent": "Toiture de Olivier Gr."}},
{"type": "Feature", "id": "111","geometry": {"type": "Point","coordinates":[2.164791,48.889051]},"properties": {"name":"Hubert Le.","density":0,"popupContent": "Toiture de Philippe La."}},
{"type": "Feature", "id": "112","geometry": {"type": "Point","coordinates":[2.255629,48.922407]},"properties": {"name":"Marc Le.","density":0,"popupContent": "Toiture de Patrice Pe."}},
{"type": "Feature", "id": "113","geometry": {"type": "Point","coordinates":[2.196327,48.880677]},"properties": {"name":"Nicolas Le.","density":0,"popupContent": "Toiture de Christophe Ma."}},
{"type": "Feature", "id": "114","geometry": {"type": "Point","coordinates":[2.21643,48.898785]},"properties": {"name":"Alexis Ma.","density":0,"popupContent": "Toiture de Bertil de."}},
{"type": "Feature", "id": "116","geometry": {"type": "Point","coordinates":[2.240964,48.912531]},"properties": {"name":"Christine To.","density":0,"popupContent": "Toiture de Marc So."}},
{"type": "Feature", "id": "117","geometry": {"type": "Point","coordinates":[2.204005,48.841921]},"properties": {"name":"Philippe & Annie To.","density":0,"popupContent": "Toiture de Dominique Di."}},
{"type": "Feature", "id": "119","geometry": {"type": "Point","coordinates":[2.176357,48.866996]},"properties": {"name":"Jean Vo.","density": "?","popupContent": "StÃ©phane So."}}


]};