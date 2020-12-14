
import React, { Component } from 'react';
import pizza from '../img/pizza.png';

const divStyle = {
  marginTop:'20px',
  width: '100%',
  height:'400px'
};

let map,firstMarker,secondMarker;

let directionsDisplay ;
let directionsService ;


class OrderMap extends Component {
  
    
    componentDidMount(){
        this.renderMap()
    }
    renderMap=()=>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBmB5k507NzQDwBKAgH-IFlCg3hKR9rq4E&callback=initMap")

        window.initMap=this.initMap
    }

    initMap=()=>{
      directionsDisplay = new window.google.maps.DirectionsRenderer();
      directionsService = new window.google.maps.DirectionsService();

         map = new window.google.maps.Map(document.getElementById('map'),
      {
        center:{lat:54.51,lng:36.25},
    zoom:13.4}
      )

      
       firstMarker = new window.google.maps.Marker({
        position: { lat: 54.513, lng: 36.269 },
        map: map,
        icon:pizza,

      });

      
      let InfoWindow= new window.google.maps.InfoWindow({
        content:'Самая вкусная пицца находится здесь!'
      })
 firstMarker.addListener('click',()=>{
        InfoWindow.open(map,firstMarker);
      })
        
     
      

      window.google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);

        calculateAndDisplayRoute();

     });
     directionsDisplay.setMap(map);
    }
    render() {
        return (
            <div>  
                <h2>Выберите пункт доставки вкуснейшей пиццы</h2>
              
                <div style={divStyle} id="map"></div>
            </div>
        );
    }
}

function loadScript(url){
    var index =window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src=url
    script.async=true
    script.defer=true
    index.parentNode.insertBefore(script,index)
}
function calculateAndDisplayRoute(){

  var request ={
    origin: firstMarker,
    destination: secondMarker,
    travelMode:'DRIVING'
  }
  
  directionsService.route(request,function(result,status){
    if(status=="OK"){
      directionsDisplay.setDirections(result);
    }
  });
}

function placeMarker(location) {
  secondMarker = new window.google.maps.Marker({
    draggable:true,
    position: location, 
    map: map,
    animation: window.google.maps.Animation.DROP,
})

secondMarker.addListener('click',toggleBounce); 
}
function toggleBounce(){
 
  if(secondMarker.getAnimation()!==null){ 
   
  secondMarker.setAnimation(null);
   
  }else{
   
  secondMarker.setAnimation(window.google.maps.Animation.BOUNCE);
   
  }
   
  }

export default OrderMap;