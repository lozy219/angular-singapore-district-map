var districtMapDirective=function(t){return{restrict:"AE",replace:!0,scope:!1,template:'<div><leaflet id="district" style="height: 500px" on-map-initialized="initMap(map)"></leaflet></div>',controller:["$scope",function(t){t.initMap=function(t){var i="";console.log(L),L.tileLayer("https://api.mapbox.com/styles/v1/golearn/citi92bxj002b2jtk2imqya82/tiles/256/{z}/{x}/{y}?access_token="+i,{attribution:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t)}}],link:function(t){}}};angular.module("sgDistrictMap",["angular-leaflet"]).directive("sgDistrictMap",districtMapDirective),districtMapDirective.$inject=["$timeout"];