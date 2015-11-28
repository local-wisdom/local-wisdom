import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import _ from 'lodash';

class Map extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            posts: null
        }
    }

    componentDidMount(){
        this.mapCanvas = document.getElementById('map');

        this.map = L.map('map', {zoomControl:false}).setView([51.1171140,  56.1171140], 8);

        L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
                    subdomains: ['otile1','otile2','otile3','otile4']
                }).addTo( this.map );

        L.Icon.Default.imagePath = '../../../images';
    }

    componentDidUpdate(){
        if(!_.isEqual(this.props.posts, this.state.posts)){
            this.setState({posts: this.props.posts})
            this.setMarkers();
        }
    }

    getMarkerHTML(post){
        return `<div class="avatar" style="background-image:url(${ post.avatar })"></div><span class="marker-pointer"></span>`
    }

    setMarkers(){
        let marker, avatarIcon, popupContent, post;
        this.props.posts.forEach(post => {
            console.log(post);
            avatarIcon = L.divIcon({
                className: 'avatar-icon',
                iconSize: [60, 60],
                html: this.getMarkerHTML(post)
            });

            marker = L.marker([post.lat,  post.lng], {icon: avatarIcon }).addTo(this.map);

            popupContent = this.getPopupContent(post);

            marker.bindPopup(popupContent);
            marker.on('click', (e) => {
                e.target._icon.classList.add('open')
                console.log( e, e.originalEvent.pageX, e.originalEvent.pageY );
                document.querySelector('.more_button')
                        .addEventListener('click', (evt) => {
                            this.onOpenMore(evt.target.dataset.id);
                        });
            });
        });
    }

    getPopupContent(post){
        return `<div class="map-post"><h1>${post.title}</h1>${ post.body.substring(0,250) }<div class="more_button" data-id="${ post.title }">More..</div></div>`;
    }

    onOpenMore(post){
        this.props.onOpenPost(post);
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