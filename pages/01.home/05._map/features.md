---
title: Map
menu: Map
class: standard
content:
    items: '@self.modular'
hide_git_sync_repo_link: true
process:
    markdown: true
    twig: true
twig_first: true
---

# Les Fermes Solaires

<script type="text/javascript" src="/user/config/fsmv.js"></script>

<style>
.info { padding: 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif; background: white; background: rgba(255,255,255,0.8); box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 5px; } .info h4 { margin: 0 0 5px; color: #777; }
.legend { text-align: left; line-height: 18px; color: #555; } .legend i { width: 18px; height: 18px; float: left; margin-right: 8px; opacity: 0.7; }</style>

[map-leaflet lat=48.885 lng=2.2131927 zoom=12 mapname=transd variant=transport-dark ]

// control that shows state info on hover
	var info = L.control();
  
	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>Les fermes potentielles</h4>' +  (props ?
			'<b>' + props.name + '</b><br />' + props.density + ' kWh / an' : 'Survoler les points de production');
	};

	info.addTo(map);

// get color depending on population density value
	function getColor(d) {
		return d > 10000 ? '#800026' :
			d > 9000  ? '#BD0026' :
			d > 6000  ? '#E31A1C' :
			d > 4000  ? '#FC4E2A' :
			d > 3000   ? '#FD8D3C' :
			d > 2000   ? '#FEB24C' :
			d > 1000   ? '#FED976' : '#FFEDA0';
	}

	function highlightFeature(e) {
		var layer = e.target;

	

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

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

	/* global campus, bicycleRental, freeBus, coorsField */
	var bicycleRentalLayer = L.geoJSON(producteurs, {

		style: function (feature) {
			return feature.properties && feature.properties.style;
		},

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 8,
				fillColor: getColor(feature.properties.density),
				color: '#000',
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
			});
		}
	}).addTo(map);

	/* global campus, bicycleRental, freeBus, coorsField */
	var Consommateurs = L.geoJSON(consommateurs, {

		style: function (feature) {
			return feature.properties && feature.properties.style;
		},

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 6,
				fillColor: "green",
				color: '#000',
				weight: 1,
				opacity: 1,
				fillOpacity: 0.6
			});
		}
	}).addTo(map);

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend');
		var grades = [0, 1000, 2000, 3000, 4000, 6000, 9000, 10000];
		var labels = [];
		var from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);

[/map-leaflet]