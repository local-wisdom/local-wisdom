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

    componentDidUpdate(){
        console.log(this.posts);
        this.markers = this.posts.map(post => {
            return new google.maps.Marker({
                position: new google.maps.LatLng(post.lat,  post.lon),
                title: post.title
            });
        });

        this.setMarkers();
    }

    setMarkers(){
        this.markers.forEach(marker => {
            marker.setMap(this.map);
            marker.addListener('click', this.onMarkerClicked);
        });
    }

    onMarkerClicked(e){
        alert('Not implemented yet');
        console.log(e);
    }

    render() {
        this.posts = this.props.authors.reduce((prev, author) => {
            let posts = author.posts.map(post => {
                post.author = author;
                return post;
            });
            prev = prev.concat(posts)
            return prev;
        }, []);
        return (
            <section style={{height: "100%"}}>
            <div id='map' className='googleMap' />
            </section>
        );
    }
}

export default Map;
