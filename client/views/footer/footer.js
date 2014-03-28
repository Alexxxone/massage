Template.footer.rendered = function(){
    var options = {
        map: {
            address: $(this).data( 'map-address' ),
            options: {
                center:[47.843835,35.130761],
                zoom: 15,
                styles: [ {
                    stylers: [
                        { hue: '#AD967C' },
                        { saturation: -30 }
                    ]
                } ],
                scrollwheel: false,
                mapTypeControl: false,
                streetViewControl: false
            }
        },
        marker: {
            values:[ {latLng:[ '47.843835', '35.130761' ], data: 'I am Here',options: {icon: '/img/marker.png'}} ]
        }
    };
    $( '.google-maps' ).gmap3(options);
}