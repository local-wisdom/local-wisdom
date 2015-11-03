import React from 'react';

class Map extends React.Component {

  constructor(props){
      super(props);
      this.props = props;

      this.mapStyles = [
          {
			stylers: [
				{ hue: "#02AFEF" },
				{ saturation: 0 }
			]
		},{
			featureType: "road",
			elementType: "geometry",
			stylers: [
				{ lightness: 0 },
				{ visibility: "simplified" }
			]
		},{
			featureType: "road",
			elementType: "labels",
			stylers: [
				{ visibility: "off" }
			]
		}
      ];
  }

  componentDidMount(){
      this.mapCanvas = document.getElementById('map');
      this.mapOptions = {
          center: new google.maps.LatLng(52.0907370,  5.1214200),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: this.mapStyles,
          disableDefaultUI: true
      }
      this.map = new google.maps.Map(this.mapCanvas, this.mapOptions);
  }

  render() {
      console.log(this.props.authors);
      return (
          <section style={{height: "100%"}}>
                <div id='map' className='googleMap' />
          </section>
    );
  }
}

export default Map;
