    var marker;
    function initMap() {
    // Styles a map in night mode.
    var map;
    var myLatLng = {lat: 49.553600, lng: 25.595775};

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 18,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    });
    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Дизайн-студія Just Art</h1>'+
            '<div id="bodyContent">'+
            '<p>1a, вулиця Чорновола' +
            '<br>'+
            'Тернопіль '+
            '<br>'+
            'Тернопільська область,  '+
            '<br>'+
            'Україна '+
            '<br>'+
            '46002'+
            '<br>'+
            '<p><a href="https://www.google.com/maps/place/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D1%82%D1%83%D0%B4%D1%96%D1%8F+Just+Art/@49.5533699,25.5955445,18.25z/data=!4m5!3m4!1s0x0:0xe6b9ff92d4262e32!8m2!3d49.553567!4d25.5957768?hl=uk" target="_blank">'+
            'Переглянути на Картах Google</a> '+
            '</div>'+
            '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Дизайн-студія Just Art'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
   
    // marker = new google.maps.Marker({
    //     map: map,
    //     draggable: true,
        
    //     animation: google.maps.Animation.DROP,
    //     position: {lat: 49.553600, lng: 25.595775}
    //     });
    //     marker.addListener('click', toggleBounce);
    // }

    // function toggleBounce() {
    //     if (marker.getAnimation() !== null) {
    //         marker.setAnimation(null);
    //     } else {
    //         marker.setAnimation(google.maps.Animation.BOUNCE);
    //     }
}