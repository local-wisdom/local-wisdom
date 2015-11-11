import React from 'react';
import L from 'leaflet';

class Map extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    componentDidMount(){
        this.mapCanvas = document.getElementById('map');

        this.map = L.map('map', {zoomControl:false}).setView([52.0907370,  5.1214200], 14);

        L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
                    subdomains: ['otile1','otile2','otile3','otile4']
                }).addTo( this.map );

        L.Icon.Default.imagePath = '../../../images';
    }

    componentDidUpdate(){
        this.posts = this.props.authors.reduce((prev, author) => {
            let posts = author.posts.map(post => {
                post.author = author;
                return post;
            });
            prev = prev.concat(posts);
            return prev;
        }, []);
        console.log(this.posts);
        this.setMarkers();
    }

    getMarkerHTML(post){
        return `<div class="avatar" style="background-image:url(${ post.author.avatar })"></div><span class="marker-pointer"></span>`
    }

    setMarkers(){
        let marker, avatarIcon, popupContent;
        this.posts.forEach(post => {

            avatarIcon = L.divIcon({
              className: 'avatar-icon',
              iconSize: [60, 60],
              html: this.getMarkerHTML(post)
            });

            marker = L.marker([post.lat,  post.lon], {icon: avatarIcon }).addTo(this.map);

            popupContent = this.getPopupContent(post);

            marker.bindPopup(popupContent);
            marker.on('click', (e) => {
                e.target._icon.classList.add('open')
                console.log( e, e.originalEvent.pageX, e.originalEvent.pageY );
            });
        });
    }

    alerter(){
        alert('pizza');
    }

    getPopupContent(post){
        return `<div class="map-post"><h1>${post.title}</h1>${ post.content }</div>`;
    }

    onMarkerClicked(e){
        alert('Not implemented yet');
        console.log(e);
    }

    render() {
        return (
            <section style={{height: "100%"}}>
            <div id='map' className='map' />
            </section>
        );
    }
}

export default Map;
