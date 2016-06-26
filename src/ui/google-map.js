import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {

  constructor(centerOfMap, data) {
    super();
    this.centerOfMap = centerOfMap;
    this.data = data;
  }

  createElement() {
    super.createElement();
    
    setTimeout(() => {
      let map = new google.maps.Map(document.getElementById('map'), {
        center: this.centerOfMap,
        zoom: 13
      });
      
      for (let vehicle of this.data) {
        let [lat, long] = vehicle.latLong.split(' ');
        console.log(`(lat, lng): ${lat} ${long}`);
        let myLatLng = new google.maps.LatLng(lat, long);
        
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map
        });
        
        marker.setMap(map);
      }
    }, 0);
  }
  
  getElementString() {
    return `
      <div style="width: 800px; height: 400px;" id="map">
      </div>
    `;
  }

}