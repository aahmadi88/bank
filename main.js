var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik');

var info = L.control();

var goecod =  L.Control.geocoder({
    defaultMarkGeocode: false
  })
    .on('markgeocode', function(e) {
      var latlng = e.geocode.center;
      var marker = L.marker(latlng).addTo(map);
      map.fitBounds(e.geocode.bbox);
      map.setZoom(14);
    })


   


info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4> (Tehran:East/Region:4)  بانک </h4>' +  (props ?
        '<b>' + props.ProbBuyPow + '</b><br />' + props.ProbBuyPow + '  / mi<sup>2</sup>'
        : '    ( ابتدا لایه ها  از ایکون مربعی شکل بالا انتخاب شود  )');
};




var geojson;

function getColor(d) {
    return d > 0.99 ? '#800026' :
           d > 0.80  ? '#BD0026' :
           d > 0.70  ? '#E31A1C' :
           d > 0.60  ? '#FC4E2A' :
           d > 0.45   ? '#FD8D3C' :
           d > 0.35   ? '#FEB24C' :
           d > 0.0   ? '#FED976' :
                      '#FFEDA0';
}


function style(feature) {
    return {
        fillColor: getColor(feature.properties.ProbBuyPow),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}
//As an additional touch, let’s define a click listener that zooms to the state:
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// var legend = L.control({position: 'bottomright'});

// legend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//         grades = [0.0, 0.35, 0.45, 0.60, 0.70, 0.80, 0.99],
//         labels = [];

//     // loop through our density intervals and generate a label with a colored square for each interval
//     for (var i = 1; i < grades.length; i++) {
//         div.innerHTML +=
//             '<i style="background:' + getColor(grades[i] ) + '"></i> ' +
//             grades[i] + (grades[i] ? '&ndash;' + grades[i] + '<br>' : '+');

//             // '<i style="background:' + getColor(grades[i] ) + '"></i> ' +
//             // grades[i] + (grades[i] ?  '<br>' : '');
//     }

//     return div;
// };


// geojson = L.geoJSON(soft12, {
//     style: style,
//     onEachFeature: onEachFeature,
// }
// );



function getColor2(d) {
    return d == 1 ? '#CD5C5C':
    d == 2  ? '#7D3C98':
    d == 3  ? '#5499C7':
    d == 4  ? '#117864':
    d == 5  ? '#9C640C':
    d == 6 ? '#6E2C00': '#6E2C00';
 }

var segment = L.geoJSON(segment, {
    style: function(feature) {return {
        weight : 1,
        opacity : 1,
        color : 'grey',
        dashArray:'',
        fillOpacity:0.4,
        fillColor :getColor2(feature.properties.id)
    };
    },
    onEachFeature: function (features, layer) {
        layer.bindPopup("ُGeodemographic/Segment : " + features.properties.id + "<br>" );

      },
}
);
// var myIcon = L.icon({
//     iconUrl : 'resources/data/icon.png',
//     iconSize :[35,35]
// })




function makePopupcontent(pnt){
    return `
        <div>
            <h4> ${pnt.properties.bank} </h4>
        </div>
    `;
 }
 
function showPopUp(feature,layer){
    layer.bindPopup(makePopupcontent(feature),{closeButton:false, offset: L.point(0,-8)});

}

var chainIcon = L.icon({
    iconUrl: 'bank64.png',
    iconSize:     [25, 30], // size of the icon
    //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



// var chainMap= L.geoJSON(chain5,{
//     onEachFeature:showPopUp,
    
//     pointToLayer: function (feature, latlng) {
//         return L.marker(latlng, {icon:chainIcon});
//     }
//     }); 

var ansar= L.geoJSON(ansar,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 


var ayandeh= L.geoJSON(ayandeh,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 

var Enovin= L.geoJSON(Enovin,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });
var iranzamin= L.geoJSON(iranzamin,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 
    
var Keshavarzi= L.geoJSON(Keshavarzi,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 

var maskan= L.geoJSON(maskan,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 

var mehr= L.geoJSON(mehr,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 



var mellat= L.geoJSON(mellat,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 


var melli= L.geoJSON(melli,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 

var other= L.geoJSON(other,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 





var refah= L.geoJSON(refah,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 

var pasargad= L.geoJSON(pasargad,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 

var saderat= L.geoJSON(saderat,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    }); 
var shahr= L.geoJSON(shahr,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });

var saman= L.geoJSON(saman,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });

var sepah= L.geoJSON(sepah,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });

var sarmayeh= L.geoJSON(sarmayeh,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });

var sina= L.geoJSON(sina,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });


var tejarat= L.geoJSON(tejarat,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });


var taavon= L.geoJSON(taavon,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });

var tourist= L.geoJSON(tourist,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });


var parsian= L.geoJSON(parsian,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });

var B1000_melli = L.geoJSON(B1000_melli,{
    onEachFeature:showPopUp,
    
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:chainIcon});
    }
    });


var THR2= L.geoJSON(THR2);


// var B400= L.geoJSON(B400,{   
//     fillOpacity: 0.0
//  });

// var C_B500= L.geoJSON(C_B500);  
// var ProChain= L.geoJSON(ProChain);  
// var DM_B500= L.geoJSON(DM2_B500);


// var prim_roud= L.geoJSON(roud_pri);
// var sec_roud= L.geoJSON(roud_secn);
// var tr_roud= L.geoJSON(roud_tr);


var geojsonMarkerOptions = {
    radius: 6,
    fillColor: "#0000FF",
    //color: "#0000FF",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.2
};
var other2 = L.geoJSON(other2,{

    //onEachFeature:showPopUp,
    pointToLayer : function (feature,latlng){
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
    });  



var overlayerMap ={
    "بانک آینده":ayandeh,
    "بانک اقتصاد نوین":Enovin,
    "بانک ایران زمین":iranzamin,
    "سپه(انصار)":ansar,
    "بانک پاسارگاد":pasargad,
    "بانک پارسیان":parsian,
    "بانک تجارت":tejarat,
    "بانک تعاون":taavon,
    "بانک رفاه":refah,
    "بانک سامان":saman,
    "بانک سپه":sepah,
    "بانک سرمایه":sarmayeh,
    "بانک سینا":sina,
    "بانک شهر":shahr,
    "بانک صادرات":saderat,
    "بانک گردشگری ":tourist,
    " بانک مسکن":maskan,
    "  بانک ملت":mellat,
    " بانک ملی":melli,
    " شعاع 1000 متری بانک ملی ":B1000_melli,
    " تراکم کسب و کارهای دیگر در ناحیه ":other2,
    "نواحی ژئودموگرافیک":segment,
  

};


var baseMap = {
    //OSM : osmMap,
    تهران:THR2,

};




var map = L.map('map', 
{
    center: [ 35.722138, 51.388394],
    zoom: 11.5,
    layers: [osmMap,THR2]
}
);

  
var layerMap =  L.control.layers(baseMap,overlayerMap).addTo(map);
info.addTo(map);
// legend.addTo(map);
goecod.addTo(map);





